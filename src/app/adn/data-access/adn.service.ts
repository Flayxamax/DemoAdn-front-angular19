import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdnStats } from '../../shared/interfaces/adn-stats';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import e from 'cors';
import { Adn } from '../../shared/interfaces/adn';

@Injectable({
  providedIn: 'root',
})
/**
 * Servicio para interactuar con la API relacionada con ADN
 *
 * @method getAdnStats Obtiene las estadísticas de los ADN verificados
 * @returns Observable<AdnStats> - Observable con los datos
 *
 * @method getLast10Adns Obtiene los últimos 10 registros de ADN
 * @returns Observable<Adn[]> - Observable con los últimos 10 ADN
 */
export class AdnService extends BaseHttpService {
  getAdnStats(): Observable<AdnStats> {
    return this._http.get<AdnStats>(`${this._apiUrl}/api/stats`);
  }

  getLast10Adns(): Observable<Adn[]> {
    return this._http.get<Adn[]>(`${this._apiUrl}/api/list`);
  }
}
