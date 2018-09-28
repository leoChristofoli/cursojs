function MeuObj(){}
console.log(MeuObj.prototype)

const obj1 = new MeuObj()
const obj2 = new MeuObj()

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj1.__proto__)

MeuObj.prototype.nome = "At"
MeuObj.prototype.falar = function() {
    console.log(`Oi. Meu nome é ${this.nome}`)
}

obj1.falar()