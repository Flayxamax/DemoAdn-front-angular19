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
/**
 * Componente que gestiona la lista de los ultimos 10 ADN
 *
 * Este componente utiliza el servicio `AdnService` para obtener los últimos 10 registros de ADN
 * y los almacena en la propiedad `adns`
 *
 * Al inicializar el componente, se realiza automáticamente la carga de de los ADN
 *
 * @property {Adn[]} adns - Lista de ADN
 */
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
