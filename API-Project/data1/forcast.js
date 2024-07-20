const request = require('request');
function forecast(longtiude, latitude, cb) {
    const url = `http://api.weatherapi.com/v1/current.json?key=139873203dc54c6b91741124242007&q=Egypt&aqi=no${longtiude},${latitude}`;
    request(url, { json: true }, (err, res) => {
        const locationName = res.body.location.name;
        const condition = res.body.current.condition.text;
        if (err) {
            cb("Error Ocurred", undefined); //low level Error Handling
        } else if (res.body.error, undefined) {
            cb(res.body.error.message);
        } else {
            cb(undefined, { locationName: locationName, condition: condition });
        }


    });
};


module.exports = forecast;