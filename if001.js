//Positivo ou Negativo

let readline = require('readline-sync')
numero = readline.question("Digite um numero: ")

if(numero == 0){
  console.log("O número é zero!")
}
else if(numero > 0){
  console.log("O número "+numero+" é positivo!")
}
else{
  console.log("O número "+numero+" é negativo!")
}