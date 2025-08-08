/**
 * Interfaz para ADN
 *
 * @property {string} id - Identificador
 * @property {string[]} adn - Arreglo de secuencia de ADN
 * @property {boolean} has_mutation - Booleano que representa una mutación
 * @property {Date} verified_at - Fecha en la que la secuencia fue verificada
 */
export interface Adn {
  id: string;
  adn: string[];
  has_mutation: boolean;
  verified_at: Date;
}
