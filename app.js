const express = require('express')
const app = express();
const ejsMate = require("ejs-mate")

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("home")
})
app.get('/whyUs', (req, res) => {
    res.render("whyUs")
})
app.get('/aboutUs', (req, res) => {
    res.render("aboutUs")
})
app.get('/product', (req, res) => {
    res.render("product")
})
app.get('/contact', (req, res) => {
    res.render("contact")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});