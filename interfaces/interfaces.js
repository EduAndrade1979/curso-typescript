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
class Media {
    constructor() {
        this.nomeAluno = '';
        this.primeiraNota = 0;
        this.segundaNota = 0;
        this.terceiraNota = -1;
    }
    CalcMedia() {
        if (this.terceiraNota >= 0) {
            return ((this.primeiraNota + this.segundaNota + this.terceiraNota) / 3);
        }
        else {
            return ((this.primeiraNota + this.segundaNota) / 2);
        }
    }
}
const aluno = new Media;
aluno.nomeAluno = 'Cid';
aluno.primeiraNota = 9;
aluno.segundaNota = 7;
console.log(`O aluno ${aluno.nomeAluno} teve média 
${aluno.CalcMedia()}`);
const aluno1 = new Media;
aluno1.nomeAluno = 'Jeff';
aluno1.primeiraNota = 8;
aluno1.segundaNota = 6;
aluno1.terceiraNota = 7;
console.log(`O aluno ${aluno1.nomeAluno} teve média 
${aluno1.CalcMedia()}`);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
console.log((Math.pow(3, 10))); // Sintaxe alternativa...
Object.prototype.log = function () {
    console.log(this.toString());
};
const q = 2;
const w = 3;
const e = 4;
console.log(q);
console.log(w);
console.log(e);
q.log();
w.log();
e.log();
const Cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
Cli.log();
//# sourceMappingURL=interfaces.js.map