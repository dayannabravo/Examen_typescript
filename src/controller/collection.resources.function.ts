class ColeccionRecursos<T> {
    private resources: T[] = [];
  
    add(resources: T): void {
      this.resources.push(resources);
      console.log(`Recurso obtenido: ${resources}`);
    }
  
    getAll(): T[] {
      return this.resources;
    }
  }
  
  export { ColeccionRecursos };
  