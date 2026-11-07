// Operadores Aritméticos

let a = 2
let b = 9
console.log("----------Operadores Aritmeticos----------------")

console.log(a + b) // SOMA +
console.log(a - b) //SUBTRAÇÂO -
console.log(a * b) //MULTIPLICAÇÂO *
console.log(a / b) // DIVISAO /
console.log (a % b) // Módulo %
console.log (a ** b) //POTENCIA **

// Operadores De Comparação

let c = 7
let d = 8
console.log("---------Operadores De Comparação---------------")

console.log(c == d) // Igual == (valor)
console.log(c === d) //Igual === (valor e tipo)
console.log(c != d) // Diferente !=
console.log(c !== d)// Diferente !== 
console.log(c > d) // Maior >
console.log(c >= d) // Maior igual >= 
console.log(c < d) // Menor <
console.log(c <= d) // Menor igual <=

//Operadores Logicos

console.log("------------------Operadores Logicos------------")

//AND &&
let chocolate = true
let pipoca = false
console.log(chocolate  == true && pipoca == true)

// OR ||
let elseve = true
let siage = false
console.log(elseve == true || siage == true)

//NOT (inverte o valor)

let logado = true
  console.log(!logado) 
  console.log(logado == false)

  // Operadores De Atribução 
  console.log("---------------------Operadores De Atribuição--------------")


  let pontos = 10
  pontos +=  5 //forma resumida
  
  pontos = pontos - 5
  pontos -= 5 //forma resumida

  pontos = pontos + 5
  pontos +=  5 //forma resumida

  pontos = pontos * 5 
  pontos *= 5 //forma resumida
  
  pontos = pontos / 5
  pontos/= 5 //forma resumida
  
  pontos = pontos | 5
  pontos |= 5 //forma resumida

  console.log(pontos)
