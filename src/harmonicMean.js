/**  
 *  File: harmonicMean.js
 *  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
 *  Date: Winter 2020
 *  College: University of La Laguna
 *  Course: Computer Science - Interactive Aplication Programing
 *  Description: This program calculates the harmonic mean of the values passed throug command line
 */

// Funcion que calcula la media aritmetica
function harmonicMean(...processArgs) {
  let totalSum = 0;
  for (let arrayPosition in processArgs) {
    totalSum += Number(processArgs[arrayPosition]);
  }
  return processArgs.length / totalSum;
}

// Funcion principal
function main() {
  if (process.argv.length === 2) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos al menos un numero natural.');
  } else {
    let processArgs = process.argv.slice(2);
    let outputString = 'La media aritmetica de '
    for (let arrayPosition in processArgs) {
       outputString += processArgs[arrayPosition] + ', ';
    }
    outputString += 'es: ' + harmonicMean(...processArgs);
    console.log(outputString);
  }
}

main();

