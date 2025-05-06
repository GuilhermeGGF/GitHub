var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://teste:teste@cluster0.izygvwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("teste");
var users = dbo.collection("users");

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

    var data = { db_nome: nome, db_login: user, db_senha: senha, db_nasc: nasc };

    users.insertOne(data, function (err) {
        console.log(err)
        if (err) {
            resposta.render('resposta', {resposta: "Erro ao cadastrar usuário!"})
        }else {
            resposta.render('resposta', {resposta: "Usuário cadastrado com sucesso!"})
        };
      });
    });

app.post("/logar", function(requisicao, resposta) {
    let nome = requisicao.body.user;
    let senha = requisicao.body.senha;

    var data = {db_login: nome, db_senha: senha };

    users.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resposta.render('resposta', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resposta.render('resposta', {resposta: "Erro ao logar usuário!"})
      }else {
        resposta.render('resposta', {resposta: "Usuário logado com sucesso!"})        
      };
    });
  });
  
  app.get("/listar", function(requisicao, resposta) {
    users.find().toArray(function(err, usuarios) {
      if (err) {
        resposta.status(500).json({ erro: "Erro ao buscar usuários!" });
      } else {
        //resposta.json(usuarios);
        let nome = usuarios.nome;
        let nasc = usuarios.nasc;
        let user = usuarios.user;
        let senha = usuarios.senha;
        resposta.render('listar', {listar: nome, nasc, user, senha})
      }
    });
  });

  app.post("/atualizar_senha", function(req, resposta) {
    var data = { db_login: req.body.user, db_senha: req.body.senha };
    var newData = { $set: {db_senha: req.body.novasenha} };

    users.updateOne(data, newData, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resposta.render('resposta', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resposta.render('resposta', {resposta: "Erro ao atualizar usuário!"})
      }else {
        resposta.render('resposta', {resposta: "Usuário atualizado com sucesso!"})        
      };
    });
  });


     
  app.post("/remover_usuario", function(req, resposta) {
    var data = { db_login: req.body.user, db_senha: req.body.senha };
   
    users.deleteOne(data, function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resposta.render('resposta', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resposta.render('resposta', {resposta: "Erro ao remover usuário!"})
      }else {
        resposta.render('resposta', {resposta: "Usuário removido com sucesso!"})        
      };
    });
  });




  app.get("/for_ejs", function(requisicao, resposta) {
      let valor = requisicao.query.valor;
      resposta.render("exemplo_for", {valor});
  })