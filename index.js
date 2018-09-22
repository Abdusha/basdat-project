const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://abdusha:amank2105@ds040017.mlab.com:40017/basdat-product', { useNewUrlParser: true }, (err,client) => {
    if(err){
        console.log('gagal')
    } else{
        console.log('berhasil')
    }
})



const nbbt = mongoose.model('nbb_today', { judul: String, isi: String });
nbbt.find({}, function (err, docs) {
    // docs.forEach
    // console.log(docs)
  });

// nbbt.create({ judul: 'Portingan Kedua', isi: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'  }, (err, result) => {
//     if (err) {
//       console.log('====================================');
//       console.log(err);
//       console.log('====================================');
//     }

//     console.log(result);
    
//   }
//   )

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    nbbt.find({}, (err, docs)=>{
        res.render('home', {
            nbbt: docs
        }),
        console.log(docs)
    })
});

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

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))