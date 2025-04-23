//Verificar se tem direito à meia entrada
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite sua idade: ", function(resposta) {
  const idade = parseInt(resposta)

  if (idade < 18 || idade > 60) {
    console.log("Você tem direito à meia entrada.");
  } else {
    console.log("Você paga entrada inteira.");
  }

  rl.close()
})
