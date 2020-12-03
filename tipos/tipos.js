"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comidasPref = void 0;
//string
let cliente = 'Nome do cliente: Jonas';
cliente = 'Marcos Mendonça';
console.log(cliente);
//numbers
let idade = 73;
console.log(idade);
// boolean
let indefinido = true;
console.log(indefinido);
//tipos explicitos
let minhaidade;
minhaidade = 41;
console.log(typeof minhaidade);
//array
exports.comidasPref = ['arroz', 'feijao', 'ovo', 'carne'];
console.log(exports.comidasPref);
console.log(exports.comidasPref[2]);
exports.comidasPref = ['tomate', 'farofa'];
console.log(exports.comidasPref);
exports.comidasPref = [100, 200, 300];
console.log(exports.comidasPref);
//tuplas
let endereço = ['Av. Paulista', 1100, ' ap:', 47];
console.log(endereço);
//enums
var cor;
(function (cor) {
    cor[cor["amarelo"] = 0] = "amarelo";
    cor[cor["azul"] = 100] = "azul";
    cor[cor["cinza"] = 101] = "cinza";
    cor[cor["roxo"] = 102] = "roxo";
})(cor || (cor = {}));
console.log(cor);
console.log(cor.cinza);
//any
let carro;
carro = 'Mercedes';
console.log(carro);
carro = { Marca: 'BMW', ano: 2020 };
console.log(carro);
//funções
function retornaCliente() {
    return cliente;
}
console.log(retornaCliente());
function digaOi() {
    console.log('Oi!!');
}
// console.log está requisitado dentro da função, por isso na próxima linha nao foi necessário.
digaOi();
function multiplicar(numA, numB, numC) {
    return (numA * numB) / numC;
}
console.log(multiplicar(4, 4, 2));
//tipo função
//Uma variável recebe uma função como tipo
let calculo;
calculo = multiplicar;
console.log(calculo(3, 4, 5));
//Objetos
let usuario = {
    nome: 'Maria',
    idade: 28,
};
console.log(usuario);
// Desafio //
let funcionario = {
    supervisores: ['Sergio', 'Luciana'],
    baterPonto(horario) {
        if (horario <= 8)
            return ('Ponto Normal');
        else
            (horario > 8);
        return ('Fora do Horário');
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//Como o tipo ficou resumido em "FUNCIONARIO", basta seguir com as atribuições do objeto a partir de "= {"
let funcionario2 = {
    supervisores: ['Joelma', 'Clayton'],
    baterPonto(horario) {
        if (horario <= 14)
            return ('Ponto Normal');
        else
            (horario > 14);
        return ('Fora do Horário');
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(11));
console.log(funcionario2.baterPonto(17));
//Union Types
// funciona como o tipo "ANY", porém com delimitação de tipos aceitos, 
//já que "ANY" recebe qualquer tipo de valor.
let nota;
nota = 8;
console.log(`Minha nota é ${nota}`);
nota = "nove";
console.log(`Minha nota é ${nota}`);
//Checagem tipos em Runtime
//TS faz a checagem automaticamente, código pode vir a ser usado para testar um tipo no JS.
let valor = 20;
if (typeof valor === 'number') {
    console.log('É um tipo: number');
}
else {
    console.log(typeof valor);
}
//Tipo "NEVER"
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Óleo",
    preco: 4.50,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço invalido');
        }
        else {
            console.log(produto.nome);
            console.log(produto.preco);
        }
    }
};
produto.validarProduto();
let contato1 = {
    nome: 'Anderson',
    telCel: '945321897',
    telRes: null
};
console.log(contato1.nome);
console.log(contato1.telCel);
console.log(contato1.telRes);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map