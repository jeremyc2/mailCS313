const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/price', function (req, res){
    var weight = req.query.weight;
    var type = req.query.type;
    var price = calculatePrice(weight, type);
    if (type == 1){
      type = "First-Class Package Service—Retail";
    }
    else if (type == 2) {
      type = "Large Envelopes (Flats)";
    }
    else if (type == 3) {
      type = "Letters (Metered)";
    }
    else if (type == 4) {
      type = "Letters (Stamped)";
    }
    var price = {price: price, weight:weight, type: type};
    res.render('pages/results', price);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

    function calculatePrice(weight, type){
      var price = 0.00;
      console.log("weight: " + weight + " ");
      console.log("type: " + type + " ");
      switch(parseInt(type)) {
  case 4:
      if (weight < 1){
        price = 0.50;
      }
      else if (weight < 2) {
        price = 0.71;
      }
      else if (weight < 3) {
        price = 0.92;
      }
      else{
        price = 1.13;
      }
      break;
  case 3:
      if (weight < 1){
        price = 0.47;
      }
      else if (weight < 2) {
        price = 0.68;
      }
      else if (weight < 3) {
        price = 0.89;
      }
      else{
        price = 1.10;
      }
      break;
  case 2:
      if (weight < 1){
        price = 1.00;
      }
      else if (weight < 2) {
        price = 1.21;
      }
      else if (weight < 3) {
        price = 1.42;
      }
      else if (weight < 4){
        price = 1.63;
      }
      else if (weight < 5) {
        price = 1.84;
      }
      else if (weight < 6) {
        price = 2.05;
      }
      else if (weight < 7){
        price = 2.26;
      }
      else if (weight < 8) {
        price = 2.47;
      }
      else if (weight < 9) {
        price = 2.68;
      }
      else if (weight < 10){
        price = 2.89;
      }
      else if (weight < 11){
        price = 3.10;
      }
      else if (weight < 12){
        price = 3.31;
      }
      else{
        price = 3.52;
      }
      break;
  default:
      if (weight < 1){
        price = 3.50;
      }
      else if (weight < 2) {
        price = 3.50;
      }
      else if (weight < 3) {
        price = 3.50;
      }
      else if (weight < 4){
        price = 3.50;
      }
      else if (weight < 5) {
        price = 3.75;
      }
      else if (weight < 6) {
        price = 3.75;
      }
      else if (weight < 7){
        price = 3.75;
      }
      else if (weight < 8) {
        price = 3.75;
      }
      else if (weight < 9) {
        price = 4.10;
      }
      else if (weight < 10){
        price = 4.45;
      }
      else if (weight < 11){
        price = 4.80;
      }
      else if (weight < 12){
        price = 5.15;
      }
      else{
        price = 5.50;
      }
    }
    return price;
    }
