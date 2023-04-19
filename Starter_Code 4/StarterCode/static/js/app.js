d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(incomingData) {
    
    //Populate the dropdown
    d3.select("#selDataset")
        .selectAll("option")
        .data(incomingData.names)
        .enter()
        .append("option")
        .text(d=>d)
        .attr("value",d=>d);

    optionChanged(d3.select("#selDataset").property("value"));
});

// This function is used in optionChanged which feeds it the top 10 OTUs and the labels.
// From there a bar chart is created.
function CreateHBar(x,y,text) {
    data = [{
        type: 'bar',
        x: x,
        y: y,
        text: text,
        orientation: 'h'
    }];


    Plotly.newPlot('bar', data);
}

// This function is used in optionChanged which feeds it all 10 OTUs and the labels.
// From there a bubble chart is created.
function CreateBubble(x,y,text) {
    data = [{
        x: x,
        y: y,
        text: text,
        mode: 'markers',
        marker: {
          size: y,
          color: x.map(value=>value)
        }
    }];
   
    Plotly.newPlot('bubble', data);
}


// This function is used in optionChanged which feeds it the metadata.
// The existing unordered list is cleared and a new one takes the place.
function Meta(data) {
    div = d3.select("#sample-metadata");
    div.html("")
    list = div.append("ul");
    Object.entries(data).forEach(([key, value]) => {
        list.append("li").text(key + ": " + value);
     });
}

// This 'master function' loads in the json data and executes each function so all charts are populated.
function optionChanged(value) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(incomingData) {

    metadata = incomingData.metadata.filter(data => data.id ==value);
    console.log(metadata);

    sample = incomingData.samples.filter(data => data.id ==value);
    console.log(sample);

        CreateHBar(sample[0].sample_values.slice(0,10).reverse(),sample[0].otu_ids.slice(0,10).reverse().map(a=>"OTU "+ a),sample[0].otu_labels.slice(0,10).reverse());
        CreateBubble(sample[0].otu_ids,sample[0].sample_values,sample[0].otu_labels);
        Meta(metadata[0])


    });


}