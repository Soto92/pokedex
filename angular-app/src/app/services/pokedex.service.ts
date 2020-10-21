import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 10): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pokemon?limit=${limit}`);
  }
}
