import { Evento, TipoDeEvento } from "../model/evento";


function manejoEvento(evento: Evento): void {
  switch (evento.tipo) {
    case TipoDeEvento.Asteroide:
      console.log(`Asteroide impactó la nave!  Dañado`);
      break;
    case TipoDeEvento.Aliens:
      console.log(`¡Invasión alien!`);
      break;
    case TipoDeEvento.AgujeroNegro:
      console.log(`¡Agujero negro próximo detectado!  Duración.`);
      break;
    default:
      console.log(`Evento de origen desconocido.`);
  }
}

export { manejoEvento };
