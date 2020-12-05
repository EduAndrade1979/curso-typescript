class Moto {
    constructor (public nome: string, public velocidade: number = 0) {

    }
    buzinar(): void {
        console.log('Toooooooooooot!')
    }
    acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta       
    }  
}

let moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 




class objeto2D {
    constructor (public base: number = 0, public altura: number = 0) {

    }
    area(): number {
        return this.base * this.altura
    }
}

class retangulo extends objeto2D {
    constructor (base: number, altura: number) {
        super(base, altura)
    }        
}    

const Retangulo =  new retangulo (5, 7)
console.log(Retangulo.area())    

 
 
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
    private _primeiroNome!: string
    
    public get primeiroNome(): string {
        return this._primeiroNome
    }
    public set primeiroNome(value: string) {
        value = value.toUpperCase()
        if (value.length >= 3) {
        this._primeiroNome = value
        } else {
            this._primeiroNome = ''
        }
        
    }
}

let estagiario = new Estagio
estagiario.primeiroNome = 'suzana'
console.log(estagiario)
estagiario.primeiroNome = 'alessandra'
console.log(estagiario)





function multiplicationTable(x: number) {
    let index: number
    for (index = 0; index <= 10; index++) {
        let answer = (x * index)        
        console.log(`${x} x ${index} = ${answer}`)
    }
}

multiplicationTable(7)

function teste() {
    let i: number 
    let j: number = 10 

    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            if (i != j) {
            console.log(i, j)
            }
        }
    }
}

teste() 