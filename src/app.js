const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user.routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/home", function( req,res) {
    res.render("../views/index");
} )


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/index', userRoutes);

app.listen(3333, () => {
    console.log('Minha aplicação esta voando ✈️');
});

module.exports = app;