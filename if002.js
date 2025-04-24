//Pode votar ou não

let readline = require('readline-sync')

idade = readline.question("Qual é a idade do cidadão? ")

if(idade >= 16){
    console.log("O cidadão pode votar!")
}
else{
    console.log("O cidadão NÃO pode votar!")
}