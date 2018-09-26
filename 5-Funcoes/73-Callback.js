const fabricantes = ["Audi", "BMW", "Mercedes", "Jaguar"]

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))
fabricantes.forEach((a, b, c) => console.log(a, b, c))