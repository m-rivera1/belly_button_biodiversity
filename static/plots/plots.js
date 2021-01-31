d3.json('data/samples.json').then(function(data_json) {
    console.log(data_json);

    // Grab values from the data json object to build the plots
    var otuIds = data_json.samples[0].otu_ids;
   // console.log(otuIds);

    var otuLabels = data_json.samples[0].otu_labels;

    var topTen = otuIds.slice(0,10);
    var topTenLabels = otuLabels.slice(0,10);
    console.log(topTen, topTenLabels);

    var trace = {
        x: topTen,
        y: topTenLabels,
        text: data_json.samples[0].otu_labels,
        type: "bar",
        orientation: "h"
    };
    
    var plotData = [trace];

    var layout = {
        title: "Belly button fungus Top Ten",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      

    
    // var stock = data.dataset.dataset_code;
    // var startDate = data.dataset.start_date;
    // var endDate = data.dataset.end_date;
    // var dates = unpack(data.dataset.data, 0);
    // var closingPrices = unpack(data.dataset.data, 4);

};
});
Plotly.newPlot("plot", plotData, layout);