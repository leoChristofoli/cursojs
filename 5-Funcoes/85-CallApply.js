function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const Produto = {
    nomde: "Notebook",
    preco: 4578,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(Produto.getPreco())

const Carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(Carro))
console.log(getPreco.apply(Carro))

console.log(getPreco.call(Carro, 0.17, "US$"))
console.log(getPreco.apply(Carro, [0.60, "US$"]))