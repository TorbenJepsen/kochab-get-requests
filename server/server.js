// npm init -y (this will automatically agree to the defaults in a package.json file)

const express = require('express');
const app = express();
const PORT = 5000;

const array = require('./array-module.js');

app.use(express.static('server/public'));

app.get('/quote', (req,res) => {
    const randomNumber = Math.floor(Math.random()*array.length);
    res.send(array[randomNumber]);
});

app.get('/all-quotes', (req, res) => {
    res.send(array);
});

app.get('/', (req, res) => {
    res.send('Happy Wednesday');
    console.log('yep it worked!');
});
// can only send one response. one request = one response

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

console.log(array);
