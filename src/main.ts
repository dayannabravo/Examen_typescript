import  Nave_Espacial  from "./vistas/nave.espacial";
import { Planeta, TipoDeRecurso } from "./model/planeta";
import { Evento, TipoDeEvento } from "./model/evento";
import { navegar } from "./controller/exploration.function";
import { ColeccionRecursos } from "./controller/collection.resources.function";
import { manejoEvento } from "./controller/management.eventos";
import { entradaUsuario } from "./controller/user.input";
import { simulacionTiempo } from "./controller/simulacion";

const mySpaceship: Nave_Espacial = {
  salud: 100,
  capacidadDeCarga: 300,
  velocidad: 20,
};


const tierra = new Planeta("Tierra", TipoDeRecurso.Agua, 1);
const marte = new Planeta("Marte", TipoDeRecurso.Oxigeno, 3);
const luna = new Planeta("Luna", TipoDeRecurso.Minerales, 5);


tierra.explore();
marte.explore();
luna.explore();


const asteroide = new Evento(TipoDeEvento.Asteroide, 9);
const aliens = new Evento(TipoDeEvento.Aliens, 10);
const agujeroNegro = new Evento(TipoDeEvento.AgujeroNegro, 2);

manejoEvento(asteroide);
manejoEvento(aliens);
manejoEvento(agujeroNegro);

navegar('Norte');
navegar('Este');
navegar('Sur');
navegar('Oeste');

simulacionTiempo(5);

const planetaSeleccionado = entradaUsuario([tierra, marte, luna]);
console.log(`Se dirige hacia ${planetaSeleccionado.nombre}`);

const recursoColeccionado = new ColeccionRecursos<string>();

const recursosDisponibles = [
  { recurso: 'Agua', maxVeces: 4 },
  { recurso: 'Oxigeno', maxVeces: 6 },
  { recurso: 'Minerales', maxVeces: 2 }
];

for (const recursoInfo of recursosDisponibles) {
  const cantidadRecoleccion = Math.floor(Math.random() * (recursoInfo.maxVeces + 4)); 
  for (let i = 0; i < cantidadRecoleccion; i++) {
    recursoColeccionado.add(recursoInfo.recurso);
  }
}
console.log("Recursos adquiridos:", recursoColeccionado.getAll());


