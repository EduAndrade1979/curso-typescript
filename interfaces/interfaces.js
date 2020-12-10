"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 54
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Cezar', idade: 32, especialidade: 'Inglês' }); // Passando objeto de 
// forma literal
// Por ser objeto, dentro 
// de () há {}
//# sourceMappingURL=interfaces.js.map