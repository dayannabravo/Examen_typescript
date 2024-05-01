

class ResourceCollection<T> {
    private resources: T[] = [];
  
    add(resource: T): void {
      this.resources.push(resource);
      console.log(`Recurso adicional: ${resource}`);
    }
  
    getAll(): T[] {
      return this.resources;
    }
  }
  
  export { ResourceCollection };
  