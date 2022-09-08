
const express = require('express')
const app = express()
const port = 8080

console.log('This is after the read call');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));



app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.get('/home/news', (req, res) => {
  res.sendFile(__dirname + '/views/news.html');
})

app.get('/home/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
})

app.get('/home/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})


//////// Initalisation des pages de rainbow six ////////

app.set('views', '/views');
app.set('view engine', 'ejs')

const fs = require('fs');

let data = fs.readFileSync('data.json');
let characterR6 = JSON.parse(data);

//Menu R6
app.get('/home/R6', (req, res) => {
  res.render(__dirname + '/views/RainbowSix/R6', {characterR6: characterR6});
})

//// Operators Pages ////
// Ash //
app.get('/home/R6/Operators/Ash', (req, res) => {
  res.render(__dirname + '/views/RainbowSix/Operators/Ash', {operator: characterR6[0]});
})

// Thermite //
app.get('/home/R6/Operators/Thermite', (req, res) => {
  res.render(__dirname + '/views/RainbowSix/Operators/Thermite', {operator: characterR6[1]});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/home`)
})