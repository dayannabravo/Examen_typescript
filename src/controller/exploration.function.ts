type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';

function navegar(direccion: Direccion): void {
  console.log(`Recorriendo ${direccion}...`);
}

export { navegar };
