import { Component, inject } from '@angular/core';
import { AdnService } from '../../data-access/adn.service';

@Component({
  selector: 'app-adn-stats',
  imports: [],
  templateUrl: './adn-stats.component.html',
  styleUrl: './adn-stats.component.css',
})
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
        console.error('Error fetching ADN stats:', error);
      },
    });
  }

  constructor() {
    this.loadAdnStats();
  }
}
