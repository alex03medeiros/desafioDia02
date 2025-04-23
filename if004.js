//Maior de dois números
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite o primeiro número: ", function(resposta1) {
  rl.question("Digite o segundo número: ", function(resposta2) {
    const num1 = parseFloat(resposta1)
    const num2 = parseFloat(resposta2)

    if (num1 > num2) {
      console.log("O primeiro número é maior.");
    } else if (num2 > num1) {
      console.log("O segundo número é maior.");
    } else {
      console.log("Os dois números são iguais.");
    }

    rl.close()
  })
})
