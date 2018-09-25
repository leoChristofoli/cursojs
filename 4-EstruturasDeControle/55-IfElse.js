Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log("Aprovado")
    } else if (nota.entre(6, 8.99)){
        console.log("Aprovado com resalvas")
    }
}

imprimirResultado(8)