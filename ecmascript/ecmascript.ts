//Let e Const
//Estão em uso desde a versão "es6". Antes, utilizava-se VAR e esta poderia ser
//declarada abaixo do console.log, por exemplo. Quando ocorria, acontecia um fenomeno chamado "hoisting"
//que significa içar. Era como se a declaração fosse considerada acima da linha da utilização da VAR.
let seraQuePode: string = '?'
console.log(seraQuePode)

const cpf: string = 'CPF: 123.456.789-00'
//cpf = '432.876.909-00' - Uma CONST não pode receber outro valor, já uma LET poderia normalmente.
console.log(cpf)

for(let i = 0; i < 10; i++) {
    if(i % 2 != 0) {
        console.log(i)
    }
    
}

//Arrow Function
//Um dos pontos principais da ARROW FUNCTION é a sintaxe reduzida
const adicao = function(num1: number, num2: number): number {
    return num1 + num2
}
console.log(adicao(3, 5))

function adicao1(num1: number, num2: number): number {
    return num1 + num2
}
console.log(adicao(3, 5))
// os dois modos de criar uma função são similares

//arrow
const adicao2 = (num1: number, num2: number) => num1 + num2
console.log(adicao2(3, 5))
//Neste caso, o uso de {} geraria um erro.

//This

//function normalComThis () {
//    console.log(this)
//}

//const normalComThisEspecial = normalComThis.bind({nome: 'Ana'}) 
//normalComThisEspecial()
//Depois que chama BIND (ligar) que this passa a ter um valor.

//Qual é o valor do this então?? R: Sempre terá o valor definido no contexto
//em que foi criado...diferente do caso anterior.

//console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()

//const arrowComThisEspecial = arrowComThis
//    .bind({nome: "Ana"})
//    arrowComThisEspecial()
//Conclusão: Dentro de uma ARROW FUNCTION, o THIS nunca tem seu valor alterado.

//Parametro padrao
//É utilizado para casos onde o usuário não declarou os parametros e é possível criar uma expressão
//"inicio: number = 3, fim: number = inicio - 4", ou seja, contador iria até -1. 

function contagemRegressiva(inicio: number = 3, fim: number = inicio -4): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}
contagemRegressiva(10, 0)

function regressivaPar(inicio: number, fim: number): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio = inicio - 2        
        console.log(inicio)        
    }
    console.log('Fim')
}
regressivaPar(10, 0)

//Spread e Rest

//Spread significa expandir e rest significa recolher.
const numbers: number[] = [1, 30, 66, 932, 457]
console.log(Math.min(...numbers))

const turmaA: string[] = ['Isa', 'Armando', 'João']
const turmaB: string[] = ['Ana', 'Julia', 'Marta']
const turmaC: string[] = [...turmaA, 'Ana', 'Julia', 'Marta']
console.log(turmaA, turmaB, turmaC)

//OBS: O operador ARGS faz com que o array receba um  número ilimitado de parâmetros
//OBS: É possível passar parametros pre definidos antes da utilizacao do operador "...args"
//ex: retornaArray(a: string, ...args: number[]) 
function retornaArray(...args: number[]): number[] {
    return args
}
let propArray: number[] = retornaArray(2, 4, 6, 1998, 4398)
console.log(propArray)
console.log(retornaArray(...numbers))

//Spread e Rest - Tuplas

const tuplas: [number, string, boolean] = [2, 'abs', false]

function tuplaParamet(a: number, b: string, c: boolean): void { //Neste caso: Parametros já definidos
    console.log(`1) ${a}, ${b}, ${c}`)                          //parametro por parametro
}
tuplaParamet(...tuplas)

function tuplaParamet2(...params: [number, string, boolean]): void {//Sintaxe usando SPREAD
    console.log(Array.isArray(params)) //Teste pra saber se array é mesmo um array
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}
tuplaParamet2(...tuplas)

console.log(`${propArray[1]}`)

// Destructuring(array) - Pegar dados de dentro de uma estrutura e expo-los de uma forma 
// mais simples sem precisar atribui-los á uma constante ou uma variável.

const veiculo: string[] = ['corola 2.0', 'prata']

const [modelo, color] = veiculo
console.log(modelo)
console.log(color)

// Destructuring(objetos)
// OBS: O uso das {chaves} denota um objeto literal

const item: {
    nome: string,
    preco: number,
    caracteristicas: {
        tipo: string
    }
} = {
    nome: 'Pen Drive 32GB',
    preco: 100,
    caracteristicas: {
        tipo: 'Importado'
    }
}

// Chamada normal de dados de um objeto:
const nomeItem = item.nome
const precoItem = item.preco
console.log(item.nome)
console.log(item.preco)

// Chamada através do destructuring de dados de um objeto:

const {nome: n, preco: p, caracteristicas: {tipo}} = item 
console.log(n)
console.log(p)
console.log(tipo)

//DESAFIO

// Exercicio 1
let dobro = function(valor: number) {
    return valor * 2
}
console.log(dobro(10))
 
// Exercicio 2
function dizerOlaA (nome: string = 'pessoa'): void {
    console.log(`Olá ${nome}`)
}
dizerOlaA()
dizerOlaA("Anna")
 
// Exercicio 3
let nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))
 
// Exercicio 4
let array = [55, 20]
array = [...nums, ...array] //Ou: array.push(...nums)
console.log(array)
 
// Exercicio 5
let notas = [8.5, 6.3, 9.4]
console.log(...notas)
 
// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
console.log(cientista.primeiroNome, cientista.experiencia)


