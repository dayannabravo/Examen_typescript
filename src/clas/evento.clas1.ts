
enum EventoType {
    ImpactoAsteroide,
    EncuentroAlien,
    ErupciónSolar,
    Unknown,
  }
  
  class Evento {
    constructor(public type: EventoType, public gravedad: number) {}
  
    trigger(): void {
      console.log(`Evento: ${EventoType[this.type]}, Gravedad: ${this.gravedad}`);
  
    }
  }
  
  export { Evento, EventoType };
  