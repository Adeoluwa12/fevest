const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Middlewares

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/order', (req, res) => {
    res.render('order')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/about', (req, res) => {
    res.render('about')
});




const port = 1000
app.listen(1000, () => {
     console.log(`You are listening to port ${port}`)
});

