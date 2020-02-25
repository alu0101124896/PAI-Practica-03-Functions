//  
//  File: mersenne.js
//  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
//  Date: Winter 2020
//  Course: Computer Science - Interactive Aplication Programing
//

//
function fibonacci(position) {
  if (position === 0) {
    return 0;
  } else if (position === 1) {
    return 1;
  } else {
    let first = 0, second = 1, fib = 0;
    for (let i = 0; i < position - 1; i++) {
      fib = first + second;
      first = second;
      second = fib;
    }
    return fib;
  }
}

//Funcion que imprime en pantalla la suma de los n primeros terminos de la sucecion de fibonacci de indice impar
function oddFibSum(numOfTerms) {
  let totalVal = 0;
  for (let i = 1; i < 2 * numOfTerms; i += 2) {
    totalVal += fibonacci(i);
  }
  console.log('oddFibSum(' + numOfTerms + ') = ' + totalVal);
  if (totalVal === fibonacci(2 * numOfTerms)) {
    console.log('oddFibSum(' + numOfTerms + ') = F(' + 2 * numOfTerms + ')')
  } else {
    console.log('Error: algo ha salido mal.')
  }
}

//Funcion principal
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    const numOfTerms = Number(process.argv[2]);
    oddFibSum(numOfTerms);
  }
}

main();
