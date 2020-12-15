"use strict";
// Utilizando gererics => Neste caso a tipagem acontece posteriormente,
//utilizando o tipo ANY, perde-se a verificação.   
function echo(value) {
    return value;
}
console.log(echo('Steven'));
console.log(echo(77));
console.log(echo({ nome: 'Steven', pontuacao: 77 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.8, 6.5];
avaliacoes.push(7.7);
avaliacoes.push(4.1);
//avaliacoes.push("3.3")
console.log(avaliacoes);
//# sourceMappingURL=genericos.js.map