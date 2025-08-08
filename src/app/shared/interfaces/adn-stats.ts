/**
 * Interfaz para las estadísticas de ADN
 *
 * @property count_mutations Número de secuencias de ADN con mutaciones
 * @property count_no_mutations Número de secuencias de ADN sin mutaciones
 * @property ratio Proporción entre secuencias con mutaciones y sin mutaciones
 */
export interface AdnStats {
  count_mutations: number;
  count_no_mutations: number;
  ratio: number;
}
