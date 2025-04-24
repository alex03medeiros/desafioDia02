//Maior de dois números
let readline = require("readline-sync")

n1 = readline.question("Digite o primeiro numero: ")
n2 = readline.question("Digite o segundo numero: ")

if(n1 == n2){
  console.log("Os numeros são iguais!")
}
else if(n1 > n2){
  console.log("O primeiro numero é maior!")
}
else{
  console.log("O segundo numero é maior!")
}