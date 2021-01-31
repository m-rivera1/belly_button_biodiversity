d3.json('data/samples.json').then(function(data_json) {
    console.log(data_json);

    // Grab values from the data json object to build the plots
    var otuIds = data_json.samples[0].otu_ids;
    console.log(otuIds);

    var topTen = otuIds.slice(0,10);
    console.log(topTen);

    
    
    
    // var stock = data.dataset.dataset_code;
    // var startDate = data.dataset.start_date;
    // var endDate = data.dataset.end_date;
    // var dates = unpack(data.dataset.data, 0);
    // var closingPrices = unpack(data.dataset.data, 4);

})



