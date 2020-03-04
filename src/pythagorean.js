/**  
 *  File: pythagorean.js
 *  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
 *  Date: Winter 2020
 *  Course: Computer Science - Interactive Aplication Programing
 */

// Cargado de la libreria perf_hooks
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

// Funcion que devuelve true si los parametros pasados conforman un trio pitagorico.
function arePythagorean(a, b, c) {
  return (a * a) + (b * b) == (c * c);
}

// Funcion principal.
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos exactamente un numero entero.');
  } else {
    let startTime = performance.now();
    const maxValue = Number(process.argv[2]);
    let candidate = false;
    let arePythagoreans = '';
    for (let i = 1; i < maxValue; i++) {
      for (let j = 1; j < maxValue; j++) {
        for (let k = 1; k < maxValue; k++) {
          if (arePythagorean(i, j, k)) {
            arePythagoreans += '(' + i + ', ' + j + ', ' + k + '), ';
          }
        }
      }
    }
    console.log(arePythagoreans);
    let endTime = performance.now();
    console.log("La ejecucion del programa ha tardado " + Math.round((endTime - startTime)) / 1000 + " segundos.");
  }
}

main();

