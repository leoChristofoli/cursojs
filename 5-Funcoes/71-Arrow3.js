let compara = function(param){
    console.log(this === param)
}

compara(global)
compara(this)

const obj = {}
compara = compara.bind(obj)
compara(global)
compara(obj)

let compara1 = param => console.log(this === param)

compara1(global)
compara1(module.exports)
compara1(this)

comparaThisArrow = compara1.bind(obj)
comparaThisArrow(obj)