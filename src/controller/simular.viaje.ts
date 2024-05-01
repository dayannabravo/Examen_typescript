import { entradaUsuario } from "./user.input";
import { Evento, TipoDeEvento } from "../model/evento";

function simularViaje(tiempo: number, distancia: number, eventos: Evento[]): void {
  console.log(`Calulando viaje por ${tiempo} unidades de tiempo y ${distancia} unidades de distancia...`);

  eventos.forEach(evento => {
    switch (evento.tipo) {
      case TipoDeEvento.Asteroide:
        console.log(`Asteroide impactó la nave! Dañado: ${evento.peligroso}`);
        break;
      case TipoDeEvento.Aliens:
        console.log(`¡Invasión alien! Nivel de peligro: ${evento.peligroso}`);
        break;
      case TipoDeEvento.AgujeroNegro:
        console.log(`¡Agujero negro próximo detectado! Nivel de peligro: ${evento.peligroso}`);
        break;
      default:
        console.log(`Evento de origen desconocido`);
    }
  });
}

export { simularViaje };
