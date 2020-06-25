const request = require('request');
const apiKey = "w72iF1NQkfCYTd6Fp4GnXkc5mpYI61WA";
const city = "Lucknow";
const citySearchURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + city;
var cityKey = 0;

// Get City Key
request({ url: citySearchURL }, (error, response) => {
    // console.log(JSON.parse(response.body));
    cityKey = JSON.parse(response.body)[0].Key;
    console.log(cityKey);
    const currentWeatherURL = "http://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + apiKey;

    // Get weather info from city key
    request({ url: currentWeatherURL }, (error, response) => {
        // console.log(JSON.parse(response.body));
        console.log(JSON.parse(response.body)[0].Temperature);
    });
});

