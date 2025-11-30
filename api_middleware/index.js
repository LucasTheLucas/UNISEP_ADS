import express, { request } from "express"

const app = express();

app.use = (express.json())

app.post("/cadastro", [validaModelo, validaCor, validaAno], (req, res) => 
    {
        const {modelo, cor, ano} = req.body

        return res.send({modelo, cor, ano})
    })

function validaModelo(req, res, next)
{
    const {modelo} = request.body;

    if(!modelo)
        {
            return res.send({ msg: "O campo modelo é obrigatório!"})
        }
        return next()
}

function validaCor(req, res, next)
{
    const {cor} = request.body;

    if(!cor)
        {
            return res.send({ msg: "O campo cor é obrigatório!"})
        }
        return next()
}

function validaAno(req, res, next)
{
    const {ano} = request.body;

    if(!ano)
        {
            return res.send({ msg: "O campo ano é obrigatório!"})
        }
        return next()
}

app.listen(8080, () => 
    {
        console.log("O servidor está rodando na porta 8080")
    })