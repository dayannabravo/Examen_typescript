// src/utils/event.handler.ts

import { Evento } from "../clas/evento.clas1";

function handleEvent(event: Event): void {
  console.log(`Handling event: ${event.type}`);
  // Implementar lógica para manejar el evento aquí
}

export { handleEvent };
