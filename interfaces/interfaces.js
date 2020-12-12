"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 54,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Cezar', idade: 32, especialidade: 'Inglês'}) // Passando objeto de 
// forma literal
// Por ser objeto, dentro 
// de () há {}
pessoa.saudar('Skywalker');
// Utilizando classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
// //Testando...
// interface CalculoMediaAluno {
//     nomeAluno: string
//     primeiraNota: number
//     segundaNota: number
//     terceiraNota?: number      
// }
// class Media implements CalculoMediaAluno {
//     nomeAluno: string = ''
//     primeiraNota: number = 0
//     segundaNota: number = 0
//     terceiraNota: number = -1
//     CalcMedia(): number {
//         if (this.terceiraNota >= 0) {
//             return ((this.primeiraNota + this.segundaNota + this.terceiraNota) / 3)
//         } else {
//         return ((this.primeiraNota + this.segundaNota) / 2)
//         }
//     }
// }
// const aluno = new Media
// aluno.nomeAluno = 'Cid'
// aluno.primeiraNota = 9
// aluno.segundaNota = 7
// console.log(`O aluno ${aluno.nomeAluno} teve média 
// ${aluno.CalcMedia()}`)
// const aluno1 = new Media
// aluno1.nomeAluno = 'Jeff'
// aluno1.primeiraNota = 8
// aluno1.segundaNota = 6
// aluno1.terceiraNota = 7
// console.log(`O aluno ${aluno1.nomeAluno} teve média 
// ${aluno1.CalcMedia()}`)
// # sourceMappingURL=interfaces.js.map