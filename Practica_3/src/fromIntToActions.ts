// fromIntToActions.ts
export function fromIntToActions(num: number): string | undefined {
    if (num < 1 || num > 31) return undefined;
  
    // Mapeo de acciones para cada bit
    const actionsMap: { [bit: number]: string } = {
      1: 'parpadear',
      2: 'parpadear dos veces',
      4: 'mover la nariz',
      8: 'levantar las cejas',
      16: 'saltar'
    };
  
    const result: string[] = [];
    const bits = [1, 2, 4, 8, 16];
  
    for (let i = 0; i < bits.length; i++) {
      const bit = bits[i];
      if (num & bit) {
        result.push(actionsMap[bit]);
      }
    }
  
    return result.join(', ');
  }
  