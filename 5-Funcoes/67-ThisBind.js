const Pessoa = {
    saudacao: "Olá",
    falar(){
        console.log(this.saudacao)
    }
}

Pessoa.falar()

const falar = Pessoa.falar

falar() // O this não se refere mais ao obj

const falarPessoa = Pessoa.falar.bind(Pessoa)

falarPessoa()