import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../shared/ui/table/table.component';
import { AdnService } from '../../data-access/adn.service';
import { Adn } from '../../../shared/interfaces/adn';

@Component({
  selector: 'app-adn-list',
  imports: [TableComponent],
  templateUrl: './adn-list.component.html',
  styleUrl: './adn-list.component.css',
})
export default class AdnListComponent {
  private _adnService = inject(AdnService);
  adns: Adn[] = [];
  constructor() {
    this.loadAdns();
  }

  private loadAdns() {
    this._adnService.getLast10Adns().subscribe((adns) => {
      this.adns = adns;
    });
  }
}
