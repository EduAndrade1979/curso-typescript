// Utilizando gererics => Neste caso a tipagem acontece posteriormente,
                        //utilizando o tipo ANY, perde-se a verificação.   

function echo<type>(value: type): type {
    return value
}

console.log(echo('Steven'))
console.log(echo<number>(77))
console.log(echo<object>({nome: 'Steven', pontuacao: 77}))

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.8, 6.5]

avaliacoes.push(7.7)
avaliacoes.push(4.1)
//avaliacoes.push("3.3")

console.log(avaliacoes)
