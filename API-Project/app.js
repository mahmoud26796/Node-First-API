const geocoding = require('./data1/geo');
geocoding('egypt', function (err, data) {
    console.log('Err => ', err);
    console.log('data => ', data);
});
