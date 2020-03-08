/**  
 *  File: without3inAP.js
 *  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
 *  Date: Winter 2020
 *  College: University of La Laguna
 *  Course: Computer Science - Interactive Aplication Programing
 *  Description: This program calculates the first n trios that conform an arithmetic progresion
 */

// Funcion que comprueba si los valores proporcionados componen una progresion aritmetica de longitud 3
function isAritmProg3(x, y, z) {
  d = y - x;
  e = z - y;
  return d === e;
}

// Funcion que imprime por pantalla el numero indicado de valores que no compongan una progrecion aritmetica
function nonAritmProg(numOfTerms) {
  let candidate = 2;
  let sequence = [0, 1];
  while (sequence.length <= numOfTerms) {
    let isAritmProg3Flag = false;
    for (let i = 0; i < sequence.length; i++) {
      for (let j = i + 1; j < sequence.length; j++) {
        if (isAritmProg3(sequence[i], sequence[j], candidate)) {
          isAritmProg3Flag = true;
          break;
        }
      }
      if (isAritmProg3Flag === true) {
        break;
      }
    }
    if (isAritmProg3Flag === false) {
      sequence.push(candidate);
    }
    candidate++;
  }
  let succession = 'Sucesion: ';
  for (let i = 0; i < sequence.length; i++) {
    succession += sequence[i] + ' ';
  }
  console.log(succession);
}

// Funcion principal
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    const numOfTerms = Number(process.argv[2]);
    nonAritmProg(numOfTerms);
  }
}

main();
