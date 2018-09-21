const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('home');
})
app.get('/daruma', (req,res) => {
    res.render('daruma');
})
app.get('/dna', (req,res) => {
    res.render('dna');
})
app.get('/chameleon', (req,res) => {
    res.render('chameleon');
})
app.get('/eo', (req,res) => {
    res.render('eo');
})
app.get('/honoukai', (req,res) => {
    res.render('honoukai');
})
app.get('/mochi', (req,res) => {
    res.render('mochi');
})
app.get('/tnt', (req,res) => {
    res.render('tnt');
})
app.get('/vocality', (req,res) => {
    res.render('vocality');
})
app.get('/about', (req,res) => {
    res.render('about');
})
app.get('*', (req,res) => {
    res.send('Not Found');
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
})
