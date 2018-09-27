// notação literal
const obj1 = {}

// Object
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, sku){
    this.nome = nome
    this.preco = preco
    this.getSku = () => {return sku}
}

// Factory Function
function criarFuncionario(nome, salario){
    return{
        nome,
        salario,
        getDiaria(){
            return (salario / 30)
        }
    }
}

console.log(criarFuncionario("João", 5500).getDiaria())

// Object.create
const filha = Object.create(null)

// JSON parse
const fromJson = JSON.parse('{"info": "description"}')
console.log(fromJson)