var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');;

var server = http.createServer(app);

server.listen(80);

console.log('Servidor rodando na porta 80');


// Métodos + Actions

app.get("/inicio", function(requisicao, resposta) {
    resposta.redirect("Aula_1/index.html")
});

app.post("/inicio", function(requisicao, resposta) {
    resposta.redirect("Aula_1/index.html")
});

app.post("/cadastrar", function(requisicao, resposta) {
    let user = requisicao.body.user;
    let nome = requisicao.body.nome;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nasc;
    resposta.render("resposta", {user, nome, senha, nasc})
});


app.get("/for_ejs", function(requisicao, resposta) {
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for", {valor});
})