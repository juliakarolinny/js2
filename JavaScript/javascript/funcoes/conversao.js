
  function celsiusParaFahrenheit(celsius) { 
    let F = celsius * 1.8 + 32; 
    return F;
}
let covertido = celsiusParaFahrenheit(24)
console.log(`${covertido.toFixed(3)}`)
//.toFixed(3), deixar 3 casas decimais

