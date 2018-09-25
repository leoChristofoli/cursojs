const notas = [2,6,8,4,8.8,9]

for (let i in notas) {
    console.log(notas[i])
}

const Pessoa = {
    nome: "Ana",
    idade: 32
}

for (let attr in Pessoa){
    console.log(`${attr} = ${Pessoa[attr]}`)
}