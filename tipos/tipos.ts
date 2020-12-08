//string
let cliente: string = 'Nome do cliente: Jonas'
cliente = 'Marcos Mendonça'
console.log(cliente)

//numbers
let idade: number = 73
console.log(idade)

// boolean
let indefinido: boolean = true
console.log(indefinido)

//tipos explicitos
let minhaidade: any
minhaidade = 41
console.log(typeof minhaidade)

//array
 export let comidasPref: any = ['arroz','feijao','ovo','carne']
console.log(comidasPref)
console.log(comidasPref[2])

comidasPref = ['tomate','farofa']
console.log(comidasPref)

comidasPref = [100, 200, 300]
console.log(comidasPref)

//tuplas
let endereço: [string, number, string, number] = ['Av. Paulista', 1100,' ap:' ,47]
console.log(endereço)

//enums
enum cor {
    amarelo,
    azul = 100,
    cinza,
    roxo
}
console.log(cor)
console.log(cor.cinza)

//any
let carro: any
carro = 'Mercedes'
console.log(carro)
carro = { Marca: 'BMW', ano: 2020 }
console.log(carro)

//funções
function retornaCliente(): string {
    return cliente 
}
console.log(retornaCliente())

function digaOi(): void {
    console.log('Oi!!')
}
// console.log está requisitado dentro da função, por isso na próxima linha nao foi necessário.
digaOi()

function multiplicar(numA: number, numB: number, numC: number): number {
    return (numA * numB) / numC
}
console.log(multiplicar(4,4,2))

//tipo função
//Uma variável recebe uma função como tipo
let calculo: (qualquerNomeX: number, qualqerNomeY: number, qualquerNomeQ: number) => number
calculo = multiplicar
console.log(calculo(3,4,5))

//Objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Maria',
    idade: 28,    
}   
console.log(usuario)

// Desafio //

let funcionario: {
    supervisores: string[],
    baterPonto: (hora: number) => string,
} = {
    supervisores: ['Sergio','Luciana'],
    baterPonto(horario: number): string {
        if (horario <= 8)
        return ('Ponto Normal')
        else (horario > 8)
        return ('Fora do Horário')
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
//Dica da aula:
// Os ':' indica que esta sendo atribuido um tipo para variavel 'funcionario'
// caso fosse '=' seria uma atribuicao direta de objeto para a variavel 'funcionario'
// Os ':' indica que sera feita a tipagem e o '=' que receberá um objeto literal. 

//alias
//Cria um tipo e salva toda a tipagem desejada para ser usada posteriormente

type funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
} 
//Como o tipo ficou resumido em "FUNCIONARIO", basta seguir com as atribuições do objeto a partir de "= {"
let funcionario2: funcionario = {
    supervisores: ['Joelma','Clayton'],
    baterPonto(horario: number): string {
        if (horario <= 14)
        return ('Ponto Normal')
        else (horario > 14)
        return ('Fora do Horário')
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(11))
console.log(funcionario2.baterPonto(17))

//Union Types
// funciona como o tipo "ANY", porém com delimitação de tipos aceitos, 
//já que "ANY" recebe qualquer tipo de valor.
let nota: number | string
nota = 8
console.log(`Minha nota é ${nota}`) 
nota = "nove"
console.log(`Minha nota é ${nota}`) 

//Checagem tipos em Runtime
//TS faz a checagem automaticamente, código pode vir a ser usado para testar um tipo no JS.
let valor = 20
 
if (typeof valor === 'number') {
    console.log('É um tipo: number') 
} else {
    console.log(typeof valor)
}

//Tipo "NEVER"
function falha(msg: string): never {
    throw new Error(msg);
    
} 

const produto = {
    nome: "Óleo",
    preco: 4.50,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco < 0) {
            falha('Preço invalido')
        } else {
            console.log(produto.nome)
            console.log(produto.preco)
        }
    }
}
produto.validarProduto()

//Tipo Null - valores adicionais
//é mais util quando combinado com outra tipagem. Exemplo: tipo: number | null - (union type)

type contato = {
    nome: string,
    telCel: string,
    telRes: string | null
}

let contato1: contato = {
    nome: 'Anderson',
    telCel: '945321897',
    telRes: null
}
console.log(contato1.nome)    
console.log(contato1.telCel)    
console.log(contato1.telRes)

//Desafio: Transformar codigo JS em TS

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria, 
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
