// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// Poort instellen
const port = 5000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// CSS kunnen toevoegen
app.use(express.static('public'));

// databestand inladen
const portfolio = require('./data/portfolio.json');

app.get("/", function(request, response) {
  response.render("portfolio", {
    items: portfolio.info
  });
});

app.get("/portfolio/:itemid", function(request, response) {
  response.render("portfolio-detail", {
    item: portfolio.info[request.params.itemid]
  });
});

app.get("/about", function(request, response) {
  response.render("about");
});

app.get("/contact", function(request, response) {
  response.render("contact");
});


// HEROKU POORT instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
