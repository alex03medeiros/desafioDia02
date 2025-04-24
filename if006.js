//Multiplo de 3 e 5
let readline = require("readline-sync")

mult1 = readline.question("Digite o primeiro multiplo:  ")
mult2 = readline.question("Digite o segundo multiplo:  ")
numero = readline.question("Qual numero voce quer saber se multiplo de " + mult1 + " e " + mult2 + " ? ")


if (numero % mult1 === 0 && numero % mult2 === 0) {
console.log("É múltiplo de "+mult1+" e "+mult2);
} else if (numero % mult1 === 0 && numero % mult2 !== 0) {
console.log("É múltiplo de "+mult1+", mas não de "+mult2)
} else if (numero % mult1 !== 0 && numero % mult2 === 0) {
console.log("É múltiplo de "+mult2+", mas não de "+mult1)
}else {
console.log("Não é múltiplo de "+mult1+" e "+mult2);
}
  

