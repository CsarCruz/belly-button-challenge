//Calling info:

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(incomingData) {
    
    d3.select("#selDataset")
        .selectAll("option")
        .data(incomingData.names)
        .enter()
        .append("option")
        .text(d=>d)
        .attr("value",d=>d);

    ChangedValue(d3.select("#selDataset").property("value"));
});

// Barchart creation
function BarChart(x,y) {
    data = [{
        type: 'bar',
        x: x,
        y: y,
        orientation: 'h'
    }];

    Plotly.newPlot('bar', data);
}

// Buuble chart creation
function BubbleChart(x,y) {
    data = [{
        x: x,
        y: y,
        mode: 'markers',
        marker: {
          size: y,
          color: x.map(value=>value)
        }
    }];
   
    Plotly.newPlot('bubble', data);
}


// Clearing list and calling new one
function Meta(data) {
    div = d3.select("#sample-metadata");
    div.html("")
    list = div.append("ul");
    Object.entries(data).forEach(([key, value]) => {
        list.append("li").text(key + ": " + value);
     });
}

// Loads data and show all charts
function ChangedValue(value) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(incomingData) {

    metadata = incomingData.metadata.filter(data => data.id ==value);
    console.log(metadata);

    sample = incomingData.samples.filter(data => data.id ==value);
    console.log(sample);

        BarChart(sample[0].sample_values.slice(0,10).reverse(),sample[0].otu_ids.slice(0,10).reverse().map(a=>"OTU "+ a),sample[0].otu_labels.slice(0,10).reverse());
        BubbleChart(sample[0].otu_ids,sample[0].sample_values,sample[0].otu_labels);
        Meta(metadata[0])


    });


}