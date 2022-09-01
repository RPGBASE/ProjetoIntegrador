const http = require('http');
const express = require('express');
const path = require('path');
const session = require('express-session');
const loginRouter = require('./routes/login.router');
const cadastroRouter = require('./routes/cadastro.router');
const gerenciarRouter = require('./routes/gerenciar.router');
const criacaoMesaRouter = require('./routes/criacaomesa.router');
const mesaJogadorRouter = require('./routes/mesajogador.router');
const mesaMestreRouter = require('./routes/mesamestre.router');
const ingressarMesaRouter = require('./routes/ingressarmesa.router');
const vampiroCriacaoRouter = require('./routes/vampirocriacao.router');
const vampiroRouter = require('./routes/vampiro.router');



const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", function( req,res) {
    res.render("../views/index");
} ),

app.get("/", function( req,res) {
    res.render("../views/cadastro");
} ),

app.get("/", function( req,res) {
    res.render("../views/gerenciar");
} ),

app.get("/", function( req,res) {
    res.render("../views/criacaomesa");
} ),
app.get("/", function( req,res) {
    res.render("../views/dadosmesa(jogador)");
} ),
app.get("/", function( req,res) {
    res.render("../views/dadosmesa(mestre)");
} ),
app.get("/", function( req,res) {
    res.render("../views/ingressarmesa");
} ),
app.get("/", function( req,res) {
    res.render("../views/vampirocriacao");
} ),
app.get("/", function( req,res) {
    res.render("../views/vampiro");
} )




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', loginRouter);
app.use('/', cadastroRouter);
app.use('/', gerenciarRouter);
app.use('/',criacaoMesaRouter);
app.use('/',mesaJogadorRouter);
app.use('/', mesaMestreRouter);
app.use('/', ingressarMesaRouter);
app.use('/', vampiroCriacaoRouter);
app.use('/', vampiroRouter);


app.listen(3333, () => {
    console.log('Que comece a aventura!! 🧙‍♂️⚔🪓🎲🤺');
});

module.exports = app;