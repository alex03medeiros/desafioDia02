const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (input) => {
  const numero = parseInt(input);

  if (numero > 0) {
    console.log("O número é positivo.")
  } else if (numero < 0) {
    console.log("O número é negativo.")
  } else {
    console.log("O número é zero.")
  }

  rl.close()
});
