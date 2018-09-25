const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Muito bom")
            break
        case 8: case 7:
            console.log("bom")
            break
        default:
            console.log("inválido")
    }
}

imprimirResultado(9)