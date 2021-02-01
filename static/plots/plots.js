

d3.json('data/samples.json').then(function(data_json) {
    console.log(data_json);

// Grab values from the data json object to build the plots
var otuIds = data_json.samples[0].otu_ids;
console.log(otuIds);

var otuLabels = data_json.samples[0].otu_labels;
console.log(otuLabels);


var topTen = otuIds.slice(0,10)
var topTenLabels = otuLabels.slice(0,10);
console.log(topTen, topTenLabels);

var trace = {
    x: topTen,
    y: topTenLabels,
// text: data_json.samples[0].otu_labels,
    type: "bar",
    orientation: "h"
};

var plotData = [trace];    


var layout = {
    title: "Belly button fungus Top Ten",
    yaxis:{tickmode: "linear",
    },
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100 
   
    }
};})

Plotly.newPlot("plot", plotData, layout);