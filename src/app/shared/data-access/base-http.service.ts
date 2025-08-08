import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
/**
 * Servicio base para realizar solicitudes HTTP, que proporciona acceso al cliente HTTP de Angular y la URL base de la API definida en las variables de entorno
 *
 * @property _http Instancia de HttpClient para realizar solicitudes HTTP
 * @property _apiUrl URL base de la API
 */
export class BaseHttpService {
  _http = inject(HttpClient);
  _apiUrl = environment.API_URL;
}
