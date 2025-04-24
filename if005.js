//Verificar se tem direito à meia entrada
let readline = require("readline-sync")

idade = readline.question("Digite sua idade: ")

if (idade < 18 || idade > 60) {
  console.log("Você tem direito à meia entrada.");
} else {
  console.log("Você paga entrada inteira.");
}
