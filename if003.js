//Par ou ímpar

let readline = require("readline-sync")

 numero = readline.question("Digite um numero: ")

 if (numero >= 0){
    if ((numero % 2 == 0) && (numero != 0)) {
      console.log("O número é par.")
    }else if(numero == 0){
       console.log("Numero nulo")
    }else{
        console.log("O numero é ímpar")
}}else{
  console.log("Numero negativo")
}