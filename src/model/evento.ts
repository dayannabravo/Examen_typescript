enum TipoDeEvento {
    Asteroide,
    Aliens,
    AgujeroNegro,
    Otro,
  }
  
  class Evento {
    constructor(public tipo: TipoDeEvento, public peligro: number) {}
  
    trigger(): void {
      console.log(`Evento: ${TipoDeEvento[this.tipo]}, Nivel de peligro: ${this.peligro}`);
      // Simulate event effects here
    }
  }
  
  export { Evento, TipoDeEvento };
  