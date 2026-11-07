// Função Simples
// diz ao js que estamos trabalhando com uma funcao
// usar padraoCAMEL-CASE
// Sempre coloque um nome de funcao que faça sentido
//o console.log é uma funcao nativa do js. tudo qeu é uma funcao agtn poe dentro de parenteses

// function nomeDaFuncao (){
// console.log("Bom Dia")
// console.log("Boa tarde")
// console.log("Boa noite")
// console.log("-----------")
// }

// nomeDaFuncao()
// nomeDaFuncao()
// nomeDaFuncao()
// nomeDaFuncao()


// // ESTRUTURA
// function boasVindas (){
// }

//COM EXIBICAO
// function boasVindas () {
//     console.log("Seja bem-vindo ao cuso de JavaScript")
    
// }

// boasVindas()


// function mostrarCurso() {
//     console.log("Curso: Desenvolvimento Web com JavaScript")
// }
// mostrarCurso()


// function dizerOla(){
//     console.log("Olá!!")
// }
// dizerOla()

// function fazerSuco(){
//     console.log("Suco de laranja")
// }
// fazerSuco()

//executa algo especifico

//---------------FUNCAO COM PARAMETROS--------------------

// function fazerSuco (sabor) {
//     console.log(`Fazendo suco de ${sabor}`)
// }
// fazerSuco("Laranja")
// fazerSuco("Uva")

//----------EXEMPLO REAL-----------

// function somar(n1, n2) {

// let result = n1 + n2
// console.log(`${n1} + ${n2} = ${result}`)
// }
// somar(3,5)
// somar(2,4)
// somar(7,9)

// function saudarPessoa( nome){
// console.log(`Olá,${nome}! Seja bem-vindo(a)`)
// }
// saudarPessoa("julia")


// forma facil mas criativa
// const fator = 2

// function dobro (numero){

//    dobro= numero* fator

//    console.log(` O dobro é: ${numero} x ${fator} = ${dobro}`)
// }
// dobro(3)


//forma facil
// function dobro (numero){

//    dobro= numero*2

//    console.log(` ${numero} x 2 = ${dobro}`)
// }
// dobro(3)


//forma facil mais facil
// function dobro (numero){

//    numero*2

//    console.log(` ${numero} x 2 = ${dobro}`)
// }
// dobro(3)
// FUNCAO COM RETORNO
// a anterior ela nao armazena o valor

// function nomeDaFuncao(){
//     return result
// }

// function dobrar(n){
//     n * 2
// }
// let result = dobrar(3)
// console.log(result)//nao retorna nada da Undfineld


// function dobrar(n){
//    return n * 2// agora ele vai armazenar e retornar o valor
// }




//---------- ARROW FUNCTIONS ----------


// const saudacao = () => {
// console.log("Olá")
// }
// saudacao()

// const dobra = (n) =>  n*2
// let result = dobra(4)
// console.log(result)



// A unica diferença é a estrutura que é mais simples que o com result, esse resulta automatico

// const multiplicar = (n1, n2) => n1 * n2
// console.log(`${multiplicar(5, 4)}`)

// const multiplicar = (n1,n2) => n1*n2
// let mult = multiplicar(8,2)
// console.log(mult)
