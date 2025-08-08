import { Component, inject } from '@angular/core';
import { AdnService } from '../../data-access/adn.service';

@Component({
  selector: 'app-adn-stats',
  imports: [],
  templateUrl: './adn-stats.component.html',
  styleUrl: './adn-stats.component.css',
})
/**
 * Componente que muestra las estadísticas de ADN
 *
 * Obtiene los datos desde el servicio `AdnService`
 *
 * Al inicializar el componente, se realiza automáticamente la carga de las estadísticas
 *
 * @property {number} count_mutations - Número de secuencias de ADN con mutaciones
 * @property {number} count_no_mutations - Número de secuencias de ADN sin mutaciones
 * @property {number} ratio - Proporción de mutaciones
 */
export default class AdnStatsComponent {
  private _adnService = inject(AdnService);

  count_mutations: number = 0;
  count_no_mutations: number = 0;
  ratio: number = 0;

  loadAdnStats() {
    this._adnService.getAdnStats().subscribe({
      next: (stats) => {
        this.count_mutations = stats.count_mutations;
        this.count_no_mutations = stats.count_no_mutations;
        this.ratio = stats.ratio;
      },
      error: (error) => {
        console.error(
          'Error: No se pudieron cargar las estadísticas de ADN',
          error
        );
      },
    });
  }

  constructor() {
    this.loadAdnStats();
  }
}
