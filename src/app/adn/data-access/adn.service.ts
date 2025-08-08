import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdnStats } from '../../shared/interfaces/adn-stats';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import e from 'cors';
import { Adn } from '../../shared/interfaces/adn';

@Injectable({
  providedIn: 'root',
})
export class AdnService extends BaseHttpService {
  getAdnStats(): Observable<AdnStats> {
    return this._http.get<AdnStats>(`${this._apiUrl}/api/stats`);
  }

  getLast10Adns(): Observable<Adn[]> {
    return this._http.get<Adn[]>(`${this._apiUrl}/api/list`);
  }
}
