"use strict";
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
let moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
class retangulo extends objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
}
const Retangulo = new retangulo(5, 7);
console.log(Retangulo.area());
// Exercício 3 - Getters & Setters
//var estagiario = {
//    _primeiroNome: ''
//}
//Object.defineProperty(estagiario, 'primeiroNome', {
//    get: function () {
//        return this._primeiroNome
//    },
//    set: function (valor) {
//        if (valor.length >= 3) {
//            this._primeiroNome = valor
//        } else {
//            this._primeiroNome = ''
//        }
//    },
//    enumerable: true,
//    configurable: true
//})
//console.log(estagiario.primeiroNome)
//estagiario.primeiroNome = 'Le'
//console.log(estagiario.primeiroNome)
//estagiario.primeiroNome = 'Leonardo'
//console.log(estagiario.primeiroNome)
class Estagio {
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(value) {
        value = value.toUpperCase();
        if (value.length >= 3) {
            this._primeiroNome = value;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
let estagiario = new Estagio;
estagiario.primeiroNome = 'suzana';
console.log(estagiario);
estagiario.primeiroNome = 'alessandra';
console.log(estagiario);
function multiplicationTable(x) {
    let index;
    for (index = 0; index <= 10; index++) {
        let answer = (x * index);
        console.log(`${x} x ${index} = ${answer}`);
    }
}
multiplicationTable(7);
function teste() {
    let i;
    let j = 10;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            if (i != j) {
                console.log(i, j);
            }
        }
    }
}
teste();
//# sourceMappingURL=desafio.js.map