interface Humano {
    nome: string
    idade?: number          // "?" na sintaxe indica que o atributo deixa de ser obrigatório
    [prop: string]: any     // "[]" não indica ARRAY, mas que a propriedade tem um nome
                            // dinâmico.
    saudar(sobrenome: string): void                                  
}


function saudarComOla(pessoa: Humano) {
    console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 54,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }    
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome: 'Cezar', idade: 32, especialidade: 'Inglês'}) // Passando objeto de 
                                                                    // forma literal
                                                                    // Por ser objeto, dentro 
                                                                    // de () há {}

pessoa.saudar('Skywalker')

// Utilizando classes...

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }

}

const meuCliente = new Cliente()
meuCliente.nome = "Han"
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


