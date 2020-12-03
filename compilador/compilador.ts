let numeros: number = 444
numeros = 654
console.log(numeros)

// Aula 35 - Foi inserida uma propriedade no compilador (tsconfig.json) "NoEmitOnError: TRUE"
//que inibe que codigos com erro sejam compilados.

//Aula 36 - Tratamento do "TARGET: ES5" => diz respeito á versao do JS para realizar
//a compilação...Poderia ser "TARGET: ES6" por exemplo.

//Aula 37 - Propriedade "SourceMap" foi habilitada. Sua função é 
//possibilitar a visualização do codigo fonte, bastante útil quando o código já passou por
//um tratamento de 'minimização' onde fica impossível compreender que o código está executando.

//Aula 38 - Propriedade "NoImplicityAny" foi habilitada. Inibe que o tipo "any" seja atribuído 
//de maneira implícita sem gerar um erro, o que obriga que o tipo esteja explícito.

//Aula 39 - Propriedade "StrictNullChecks" foi habilitada. Apresenta erro quando 
//o compilador entende que poderia haver um retorno "Null" indesejado.
//"NoUnusedLocals e NoUnusedParameters" foram habilitados. Apresentam erro quando variaveis locais
// ou parametros de funções foram declaradas mas não foram utilizadas.

//Aula 40 - Propriedade "OutDir: ./" NÃO foi habilitada. Se habilitada, basta indicar 
//após "./", o nome da pasta que receberá os arquivos compilados em JS, neste caso, será
//necessário fazer o referenciamento no arquivo "index.html"

//Aula 41 - Propriedade "OutFile" NÃO foi habilitado. Se habilitado possibilita 
//exportar todo o código através de um único arquivo. OBS: "Module" deve ser alterado para SYSTEM.