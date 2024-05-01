enum ResourceType {
    Agua,
    Oxigeno,
    Minerales,
    Unknown,
  }
  
  class Planeta {
    constructor(public name: string, public resourceType: ResourceType, public dangerLevel: number) {}
  
    explore(): void {
      console.log(`Explorador ${this.name}...`);
      // Simulate exploration logic here
    }
  }
  
  export { Planeta, ResourceType };
  