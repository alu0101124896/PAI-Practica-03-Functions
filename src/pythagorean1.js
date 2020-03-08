/**  
 *  File: pythagorean1.js
 *  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
 *  Date: Winter 2020
 *  College: University of La Laguna
 *  Course: Computer Science - Interactive Aplication Programing
 *  Description: This program checks if the passed throug command line conform a pythagorean trio
 */

// Funcion que devuelve true si los parametros pasados conforman un trio pitagorico
function arePythagorean(a, b, c) {
  return (a * a) + (b * b) == (c * c);
}

// Funcion principal
function main() {
  if (process.argv.length !== 5 || isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos exactamente tres numeros enteros.');
  } else {
    const firstNumber = Number(process.argv[2]);
    const secondNumber = Number(process.argv[3]);
    const thirdNumber = Number(process.argv[4]);
    if (arePythagorean(firstNumber, secondNumber, thirdNumber)) {
      console.log("Los numeros " + firstNumber + ", " + secondNumber + " y " + thirdNumber + " son un trio pitagorico");
    } else {
      console.log("Los numeros " + firstNumber + ", " + secondNumber + " y " + thirdNumber + " no son un trio pitagorico");
    }
  }
}

main();
