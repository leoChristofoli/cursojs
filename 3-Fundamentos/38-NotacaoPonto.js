console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola';
obj1['nome'] = 'Bola_changed'; // Pouco usado

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('exec: ' + this.nome)
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()