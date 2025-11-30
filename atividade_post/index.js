const express = require("express");
const app = express();

var usuarios = []

app.use(express.urlencoded({ extended: true }));
//USEI ESSE DIABO PARA NÃO DAR PROBLEMA

app.get("/", function (req, res)
{
  res.send(
 `
  <H1>CADASTRO</H1>
  <form action="/cadastro" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>

    <label for="usuario">Usuário:</label>
    <input type="text" id="usuario" name="usuario"><br><br>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha"><br><br>

    <input type="submit" value="Cadastrar">
  </form>

  <H1>LOGIN</H1>
  <form action="/logar" method="POST">
      <label for="usuario">Usuário:</label>
      <input type="text" id="usuario_login" name="usuario"><br><br>

      <label for="senha">Senha:</label>
      <input type="password" id="senha_login" name="senha"><br><br>

      <input type="submit" value="Logar">
    </form>
  `)
})


app.post("/cadastro", function(req, res)
{
    const pessoa = 
    {
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha
    }

    usuarios.push(pessoa);
    console.log(usuarios)

    res.send({"msg": "Usuário cadastrado com sucesso!" })
})

app.post("/logar", function(req, res)
{
    let logado = false;
    console.log(usuarios, usuarios.length)
    for (let i = 0; i < usuarios.length; i++) 
    {
        console.log(req.body.usuario, " ", req.body.senha)
        if (usuarios[i].usuario === req.body.usuario && usuarios[i].senha === req.body.senha) {
            logado = true
            break;
        }
    }

    if(logado)
    {
        res.send({"msg": "Login realizado com sucesso!"})
    }
    else
    {
        res.send({"msg": "Usuário ou senha inválidos!"})
    }
})

app.listen(8081, function () {
  console.log("Servidor rodando!");
});