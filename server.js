const express = require('express');
const array = require('./array-module.js');
const app = express();
const PORT = 5000;

app.get('/', function(req, res) {
    res.send(array);
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`);
});

console.log(array);
