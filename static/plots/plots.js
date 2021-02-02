
// bar graph
//pull in data from json file
d3.json('data/samples.json').then(function(data_json) {
    console.log(data_json);
    
    
    // Grab values from the data json object to build the plots
    var otuIds = data_json.samples[0].otu_ids;
    console.log(otuIds);
    // slice to get the top ten values
    var otuLabels = data_json.samples[1].sample_values.slice(0,10);
    console.log(otuLabels);
    
    var hover = data_json.samples[1].otu_labels;
    console.log(hover);
    
    // slice and reverse some of data
    var topTen = otuIds.slice(0,10).reverse()
    var topTen2 = topTen.map(label => "OTU " + label);
    
    var topTenLabels = otuLabels.reverse();
    
    
    var hoverLabels = hover.slice(0,10);
    
    console.log(topTen, hoverLabels, topTenLabels);
    
    // create variable for bar chart data
    var trace = {
        x: topTenLabels,
        y: topTen2 ,
        text: hoverLabels,
        type: "bar",
        orientation: "h",
        xaxis: {title: 'Count'},
        
    };
    // create data variable 
    var barData = [trace];    
    
    // set the layout of the bar chart
    var layout = {
        title: "Top Ten Operational Taxonomic Units (OTU's)",
        yaxis:{tickmode: "linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100, 
       
        }
    
     
    };
    
    // create the bar chart
    Plotly.newPlot("plot", barData , layout);
    })        



// bubble chart
//pull in data from json file
d3.json('data/samples.json').then(function(jsonData) {

    //local data values
    xData = jsonData.samples[0].otu_ids;
    yData = jsonData.samples[1].sample_values;
    xLabels = jsonData.samples[1].otu_labels;

    // set variable for plot values
    var traceBubble= {
        x: xData,
        y: yData,
        text: xLabels,
        mode: "markers",
        marker: {
            size: yData,
            color: xData
        },
    };

    // set the layout
    var layoutBubble = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
    };

    // create a data variable 
    var data1 = [traceBubble];

    // create the bubble plot
    Plotly.newPlot("bubble", data1, layoutBubble); 

});

// Drop down selection for ID

var userSelection = d3.select("#selDataset");

// pull in data from json file
d3.json('data/samples.json').then(function(jsonData) {
    // varible for data
    var names = jsonData.names;
    console.log(names)
//Loop to populate the selection options available
    names.forEach((id) => {
        userSelection
            .append("option")
            .text(id)
            .property("value", id);
    })

}); 
// Create demographicInfo panel
// pull in data from json file
d3.json('data/samples.json').then(function(jsonData) {

    // varible for data
    var metadata = jsonData.metadata;
    console.log(metadata)

    //select the id/class/div to place the data
    var demographicInfo = d3.select("sample-metadata");

    var selectionResults = metadata.filter(data => data.id);
    console.log(selectionResults)

    // get selectionResults data for the user selected ID and add to the panel
    Object.defineProperties(selectionResults).forEach(([key, value]) => {
        var row = demographicInfo.append("p");
        row.text(value);
    })
});