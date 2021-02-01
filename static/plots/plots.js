

d3.json('data/samples.json').then(function(data_json) {
console.log(data_json);


// Grab values from the data json object to build the plots
var otuIds = data_json.samples[0].otu_ids;
console.log(otuIds);

var otuLabels = data_json.samples[1].sample_values.slice(0,10);
console.log(otuLabels);

var hover = data_json.samples[1].otu_labels;
console.log(hover);


var topTen = otuIds.slice(0,10).reverse()
var topTen2 = topTen.map(label => "OTU " + label);

var topTenLabels = otuLabels.reverse();


var hoverLabels = hover.slice(0,10);

console.log(topTen, hoverLabels, topTenLabels);


var trace = {
    x: topTenLabels,
    y: topTen2 ,
    text: hoverLabels,
    type: "bar",
    orientation: "h",
    xaxis: {title: 'Count'},
    
};
var barData = [trace];    


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


Plotly.newPlot("plot", barData , layout);
});

// Bubble chart

d3.json('data/samples.json').then(function(data_json) {
    console.log(data_json);
    xData = data_json.samples[0].otu_ids;
    yData = data_json.samples[1].sample_values;

var traceBubble = {
    x: xData,
    y: yData,
    mode: 'markers',
    marker: {
      size: yData,
      color: xData
    }
  };
  
  var data = [traceBubble];
  
  var layoutBubble = {
    xaxis:{title: "OTU ID"},
    showlegend: false,
    height: 600,
    width: 1000
  };
  
  Plotly.newPlot('bubble', traceBubble, layoutBubble);
})