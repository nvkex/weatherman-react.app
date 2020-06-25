const request = require('request');
const apiKey = "5df5979e1c8a488abbcb3addd81decc8";
// const city = "Lucknow"

const getForecast = (city,callback) => {

    const url = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=" + apiKey;

    request({ url: url }, (error, response) => {
        const data = JSON.parse(response.body);
        if (error) {
            // Connection eroor
            callback(error,undefined);
        }
        else if (data.count === 0) {
            // Location not found
            callback("Location not found", undefined)
        }
        else{
            // No error
            callback(false, data.data[0]);
        }
    });
}
module.exports = {getForecast};

// Callback sample code:
// getForecast("Lucknow", (error, data) => {
//     console.log("Error: " + error);
//     console.log("Data: " + data);
// })
