//Classe é chamada tbem de "sintaxe sugar" por se tratar de um detalhe de sintaxe...É uma forma 
//diferente de escrever uma função mais voltada á objeto. 

class Data {
    //Publico é  o padrão (MODIFICADORES DE ACESSO)
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) { //PARAMETRO PADRAO
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
} 

const aniversario = new Data(17, 1, 1979)
aniversario.dia = 9
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // POSSO OMITIR OS PARENTESES
casamento.ano = 2021
console.log(casamento.ano) 
console.log(casamento) 

class DataEsperta { // A utilizacao de 'PUBLIC' no constructor diminui bastante a sintaxe.
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}
const casam = new DataEsperta(23,5,2003)
console.log(casam)


//Desafio

class cadastroProduto {
    constructor(public nome: string = 'Vazio', public preco: number = 0, public desconto: number = 0) {

    }
    public resumo(): string {
        return `${this.nome} custa ${this.PrecoComDesconto(this.preco, this.desconto)} (${this.desconto * 100}% OFF)`
        
    }
    public PrecoComDesconto(preco: number, desconto: number): number {
        let precoFinal: number = (preco - (preco * desconto))
        return precoFinal
    }   

 
}
const cadastro = new cadastroProduto('Alcool Gel', 6.30)
console.log(cadastro.resumo())

const cadastro1 = new cadastroProduto('Cafeteira', 175.00, 0.20) 
console.log(cadastro1.resumo())


//Classe e método - "METODO" é como é chamada uma "FUNCAO" dentro de uma classe

//Modificadores de acesso

class Carro {
    private velocidadeAtual: number = 0

    constructor (public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {

        }
        protected alterarVelocidade(delta: number): number {
            const novaVelocidade = this.velocidadeAtual + delta
            const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

            if (velocidadeValida) {
                this.velocidadeAtual = novaVelocidade
            } else {
                this.velocidadeAtual > 0 ? this.velocidadeMaxima : 0                
            }
            return this.velocidadeAtual
        }
        public acelerar(): number {
            return this.alterarVelocidade(5)
        
        }
        public frear(): number {
            return this.alterarVelocidade(-5)
        }
}

const carro1 = new Carro('Ford', 'KA', 185)
console.log(carro1.acelerar())

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(50).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

//Herança "EXTENDS"

class Ferrari extends Carro {
    constructor (modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima )
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    
    }
    public frear(): number {
        return this.alterarVelocidade(-15)
    }

}

const f40 = new Ferrari ('F-40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//getters & setters

class Pessoa {
    private _idade: number = 0 

    get idade(): number {
    return this._idade
    }
    set idade(valor: number) {
        if (valor >= 0 && valor <= 120)
        this._idade = valor
    }    
}
const Pessoa1 = new Pessoa
Pessoa1.idade = 15
console.log(Pessoa1.idade)

//Atributos e métodos estáticos

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

//Classe abstrata

abstract class Calculo {
    protected resultado: number = 0 
    
    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
    
}

class soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((tot, atu) => tot + atu)  
    }
}
class multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((tot, atu) => tot * atu)  
    }
}

let c1 = new soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

// Construtor privado & singleton

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}
console.log(Unico.getInstance().agora())

//Somente leitura

class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string ) {
        this.modelo = modelo
    }
}
const turboHelice =  new Aviao('TU-114', 'PT-ABC') 
//turboHelice.modelo = ("TU-115") - ERR
//turboHelice.prefixo = ('PT-ASD') - ERR
// Uma vez instanciado não pode mais ser alterado, por causa do "READONLY"
console.log(turboHelice)

console.log('isso é um test de git.')