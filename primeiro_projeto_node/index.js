var nome = 'Lucas Novaes dias';
var valor = 150.0;
var status = false;
var pessoas = [];

pessoas.push("Guilherme");
pessoas.push("Bruna");
pessoas.push("Gabriel");

const aluno = 
{
    nome:"Guilherme",
    RA: "123456",
    email:"guilherme.pires@unisep.edu.br"
}

aluno.telefone = "46999329498";

console.log(`Nome: `,nome)
console.log(`Salário: `,valor)
console.log(`situação: `, status)
console.log("Pessoas: ", pessoas);
console.log("Total de pessoas:", pessoas.length);
console.log("Aluno: ", aluno);


for (let index = 0; index < pessoas.length; index++) {
    console.log(pessoas[index])
    
}

pessoas.forEach(i=>
    {
        console.log(i)
    })