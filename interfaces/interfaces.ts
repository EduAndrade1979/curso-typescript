interface Humano {
    nome: string
    idade?: number          // "?" na sintaxe indica que o atributo deixa de ser obrigatório
    [prop: string]: any     // "[]" não indica ARRAY, mas que a propriedade tem um nome
                            // dinâmico.
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 54
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: 'Cezar', idade: 32, especialidade: 'Inglês'}) // Passando objeto de 
                                                                  // forma literal
                                                                  // Por ser objeto, dentro 
                                                                  // de () há {}


