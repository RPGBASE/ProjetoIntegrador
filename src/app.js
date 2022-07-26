const http = require('http');
const express = require('express');
const path = require('path');
const session = require('express-session');
const loginRouter = require('./routes/login.router');
const cadastroController = require('./controllers/cadastroController');
const cadastroRouter = require('./routes/cadastro.router');
const loginController = require('./controllers/loginController')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", function( req,res) {
    res.render("../views/index");
} )

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', loginRouter);
app.use('/', cadastroRouter);

app.listen(3333, () => {
    console.log('Que comece a aventura!! 🧙‍♂️⚔🪓🎲🤺');
});

module.exports = app;