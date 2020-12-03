"use strict";
//Classe é chamada tbem de "sintaxe sugar" por se tratar de um detalhe de sintaxe...É uma forma 
//diferente de escrever uma função mais voltada á objeto. 
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(17, 1, 1979);
aniversario.dia = 9;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // POSSO OMITIR OS PARENTESES
casamento.ano = 2021;
console.log(casamento.ano);
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const casam = new DataEsperta(23, 5, 2003);
console.log(casam);
//Desafio
class cadastroProduto {
    constructor(nome = 'Vazio', preco = 0, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa ${this.PrecoComDesconto(this.preco, this.desconto)} (${this.desconto * 100}% OFF)`;
    }
    PrecoComDesconto(preco, desconto) {
        let precoFinal = (preco - (preco * desconto));
        return precoFinal;
    }
}
const cadastro = new cadastroProduto('Alcool Gel', 6.30);
console.log(cadastro.resumo());
const cadastro1 = new cadastroProduto('Cafeteira', 175.00, 0.20);
console.log(cadastro1.resumo());
//Classe e método - "METODO" é como é chamada uma "FUNCAO" dentro de uma classe
//Modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'KA', 185);
console.log(carro1.acelerar());
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(50).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//Herança "EXTENDS"
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F-40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor;
    }
}
const Pessoa1 = new Pessoa;
Pessoa1.idade = 15;
console.log(Pessoa1.idade);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
//Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((tot, atu) => tot + atu);
    }
}
class multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((tot, atu) => tot * atu);
    }
}
let c1 = new soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Construtor privado & singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('TU-114', 'PT-ABC');
//turboHelice.modelo = ("TU-115") - ERR
//turboHelice.prefixo = ('PT-ASD') - ERR
// Uma vez instanciado não pode mais ser alterado, por causa do "READONLY"
console.log(turboHelice);
//# sourceMappingURL=classes.js.map