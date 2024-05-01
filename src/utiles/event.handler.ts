// src/utils/event.handler.ts

import { Evento } from "../clas/evento.clas1";

function handleEvent(event: Event): void {
  console.log(`Manejo evento: ${event.type}`);

}

export { handleEvent };
