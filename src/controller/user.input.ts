import { Planeta } from "../model/planeta";

function entradaUsuario(planetas: Planeta[]): Planeta {
    const readlineSync = require('readline-sync');
    console.log("Lista de planetas:");
    planetas.forEach((planeta, index) => {
      console.log(`${index + 1}. ${planeta.nombre}`);
    });

    const seleccion = readlineSync.questionInt('Escoja el número del planeta al que deseas viajar: ');
    if (seleccion < 1 || seleccion > planetas.length) {
      console.log('Error: Número de planeta no válido.');
      process.exit(1); 
    }
    return planetas[seleccion - 1];
  }
  
  export { entradaUsuario };
  