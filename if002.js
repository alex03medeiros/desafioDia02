//Pode votar ou não
const readline = require("readline")

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})

r1.question("Digite sua idade: ", function(resposta){
    let idade = parseInt(resposta)

if (idade >= 16){
    console.log("Você pode votar!")
}
else{
    console.log("Você ainda não pode votar!")
}
r1.close()
})