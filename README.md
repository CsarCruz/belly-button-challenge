# belly-button-challenge
MODULE 14 CHALLENGE

César Cruz Reyes

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

-Use sample_values as the values for the bar chart.

-Use otu_ids as the labels for the bar chart.

-Use otu_labels as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/120423303/233469723-f5fc8101-0baf-442d-8547-564b4a65609e.png)


3. Create a bubble chart that displays each sample.

-Use otu_ids for the x values.

-Use sample_values for the y values.

-Use sample_values for the marker size.

-Use otu_ids for the marker colors.

-Use otu_labels for the text values.

![image](https://user-images.githubusercontent.com/120423303/233469902-fad6b6f0-5f75-4fcc-b886-e14f8137f825.png)


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/120423303/233469997-8c00317a-61a7-470b-9515-cffa0604cd1f.png)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://user-images.githubusercontent.com/120423303/233470147-f287163a-492e-473c-a9cf-d55a75e40cb3.png)


7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
