/**  
 *  File: without2.js
 *  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
 *  Date: Winter 2020
 *  College: University of La Laguna
 *  Course: Computer Science - Interactive Aplication Programing
 *  Description: This program checks if the values passed throug command line are on the secuence
 */

//Funcion que comprueba si un numero que se le pasa por parametros pertenece a la secuencia
function isOnSecuence(candidate) {
  while (candidate !== 0) {
    if (candidate % 3 === 2) {
      return false;
    } else if (candidate % 3 === 1) {
      candidate--;
      candidate /= 3;
    } else {
      candidate /= 3;
    }
  }
  return true;
}

//Funcion principal
function main() {
  if (process.argv.length !== 4 || isNaN(process.argv[2]) || isNaN(process.argv[3]) || Number(process.argv[2]) >= Number(process.argv[3])) {
    console.log('Error: Ejecute este programa aportando como argumentos en la linea de comandos dos numeros enteros, siendo el primero menor que el segundo.');
  } else {
    const lowerNum = Number(process.argv[2]);
    const higherNum = Number(process.argv[3]);
    let secuence = 'G(n) = ';
    for (let i = lowerNum; i <= higherNum; i++) {
      if (isOnSecuence(i)) {
        secuence += i + ' ';
      }
    }
    console.log(secuence);
  }
}

main();
