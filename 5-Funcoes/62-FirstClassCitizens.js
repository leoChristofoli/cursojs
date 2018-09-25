// Funcção em JS é First-Class Object (Citizen)
// Higher-order function

//forma literal
function fun1(){  }

//armazenar em variável
const fun2 = function(){  }

// Armazenar em array
const array = [function (a=0) {return a }, fun2, fun1]
array.forEach(element => {
    console.log(element())
});

// Em objs
const obj = {
    falar: function(){ return "Oi" }
}
console.log(obj.falar())

// Pode retornar uma função
function soma(a, b){
    return function(c){
        return (a+b+c)
    }
}
console.log(soma(2, 4)(5))