const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://teste:teste@cluster0.izygvwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let dbo;
let usuariosCollection;
let carrosCollection;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    dbo = client.db("teste");
    usuariosCollection = dbo.collection("usuarios");
    carrosCollection = dbo.collection("carros");
    console.log("Conectado ao MongoDB");

    http.createServer(app).listen(80, () => {
      console.log("Servidor rodando na porta 80");
    });
  })
  .catch(err => console.error(err));

// Rota raiz redireciona para /projetos
app.get('/', (req, res) => {
  res.redirect('/projetos');
});

// Página simples de projetos
app.get('/projetos', (req, res) => {
  res.render('projetos');
});

// ----- USUÁRIOS -----
// Página cadastro usuário
app.get('/usuarios/cadastrar', (req, res) => {
  res.render('cadastro_usuario');
});

// Recebe cadastro usuário
app.post('/usuarios/cadastrar', async (req, res) => {
  const { nome, login, senha } = req.body;
  if (!nome || !login || !senha) return res.render('resposta', { mensagem: "Preencha todos os campos." });

  const userExist = await usuariosCollection.findOne({ login });
  if (userExist) return res.render('resposta', { mensagem: "Login já existe." });

  await usuariosCollection.insertOne({ nome, login, senha });
  res.render('resposta', { mensagem: "Usuário cadastrado com sucesso!" });
});

// Página login usuário
app.get('/usuarios/login', (req, res) => {
  res.render('login_usuario');
});

// Recebe login usuário
app.post('/usuarios/login', async (req, res) => {
  const { login, senha } = req.body;
  const user = await usuariosCollection.findOne({ login, senha });
  if (!user) return res.render('resposta', { mensagem: "Usuário ou senha inválidos." });
  res.render('resposta', { mensagem: `Bem-vindo, ${user.nome}!` });
});

// ----- CARROS -----
// Listar carros disponíveis
app.get('/carros', async (req, res) => {
  const carros = await carrosCollection.find().toArray();
  res.render('lista_carros', { carros });
});

// Página gerência carros (listar com ações)
app.get('/carros/gerencia', async (req, res) => {
  const carros = await carrosCollection.find().toArray();
  res.render('gerencia_carros', { carros });
});

// Página cadastro novo carro
app.get('/carros/cadastrar', (req, res) => {
  res.render('cadastro_carro');
});

// Recebe cadastro carro
app.post('/carros/cadastrar', async (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  if (!marca || !modelo || !ano || !qtde_disponivel) 
    return res.render('resposta', { mensagem: "Preencha todos os campos." });

  await carrosCollection.insertOne({
    marca,
    modelo,
    ano: parseInt(ano),
    qtde_disponivel: parseInt(qtde_disponivel)
  });
  res.redirect('/carros/gerencia');
});

// Remover carro
app.post('/carros/remover/:id', async (req, res) => {
  const id = req.params.id;
  await carrosCollection.deleteOne({ _id: new mongodb.ObjectId(id) });
  res.redirect('/carros/gerencia');
});

// Página para atualizar carro
app.get('/carros/atualizar/:id', async (req, res) => {
  const id = req.params.id;
  const carro = await carrosCollection.findOne({ _id: new mongodb.ObjectId(id) });
  if (!carro) return res.render('resposta', { mensagem: "Carro não encontrado." });
  res.render('atualizar_carro', { carro });
});

// Recebe atualização
app.post('/carros/atualizar/:id', async (req, res) => {
  const id = req.params.id;
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  await carrosCollection.updateOne(
    { _id: new mongodb.ObjectId(id) },
    { $set: {
      marca,
      modelo,
      ano: parseInt(ano),
      qtde_disponivel: parseInt(qtde_disponivel)
    }}
  );
  res.redirect('/carros/gerencia');
});

// Vender carro (decrementa qtde_disponivel)
app.post('/carros/vender/:id', async (req, res) => {
  const id = req.params.id;
  const carro = await carrosCollection.findOne({ _id: new mongodb.ObjectId(id) });
  if (!carro) return res.render('resposta', { mensagem: "Carro não encontrado." });

  if (carro.qtde_disponivel <= 0) {
    return res.render('resposta', { mensagem: "Carro esgotado!" });
  }

  await carrosCollection.updateOne(
    { _id: new mongodb.ObjectId(id) },
    { $inc: { qtde_disponivel: -1 } }
  );
  res.redirect('/carros/gerencia');
});
