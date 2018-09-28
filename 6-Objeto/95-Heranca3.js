const pai = { nome: "Pedro", corCabelo: "preto" }
const filho1 = Object.create(pai)

filho1.nome = "Ana"

console.log(filho1)

const filho2 = Object.create(pai, {
        nome: {value: "Bia", writable: false, enumerable: true}
    })

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Herança: ${key}`)
}