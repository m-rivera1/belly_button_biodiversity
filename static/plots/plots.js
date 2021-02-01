

d3.json('data/samples.json').then(function(data_json) {
console.log(data_json);


// Grab values from the data json object to build the plots
var otuIds = data_json.samples[0].otu_ids;
console.log(otuIds);

var otuLabels = data_json.samples[1].sample_values;
console.log(otuLabels);

var hover = data_json.samples[0].otu_labels;
console.log(hover);


var topTen = otuIds.slice(0,10)
var topTenLabels = otuLabels.slice(0,10);
var hoverLabels = hover.slice(0,10);
console.log(topTen, topTenLabels, hoverLabels);

var trace = {
    x: topTen,
    y: topTenLabels,
    text: hoverLabels,
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
        b: 100, 
   
    }

 
};


Plotly.newPlot("plot", plotData , layout);
});