const forecast = require('./forcast');
const request = require('request');

function geocoding(country, cb) {
    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;
    request(geoURL, { json: true }, (err, res) => {
        const longtiude = res.body.features[0].center[0];
        const latitude = res.body.features[0].center[1];
        if (err) {
            cb("Error Ocurred", undefined); //low level Error Handling
        } else if (res.body.features.length == 0) {
            cb('Cannot find the location requested', undefined);
        } else if (res.body.message) {
            cb(res.body.message, undefined);
        } else {
            cb(undefined, { longtiude: longtiude, latitude: latitude });
        }

        forecast(longtiude, latitude, function (err, data) {
            console.log('Err => ', err);
            console.log('data => ', data);
        });
    });

};

module.exports = geocoding;