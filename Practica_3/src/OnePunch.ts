/**Recibe un número variable de cadenas.
 * Elimina las cadenas vacías.
 * Si después de filtrar quedan cero elementos, devuelve 'Broken!'.
 * 
 * @param things - Aceptar cualquier cantidad de cadenas
 * @returns 
 */

export const onePunch = (...things: string[]): string =>  ((arr) => arr.length ? arr.map(s => s.replace(/[ae]/gi, '')).sort().join(' ')  : 'Broken!' )(things.filter(s => s));
  