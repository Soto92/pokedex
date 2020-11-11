import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { PokemonList, PokemonListItem } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 10): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${environment.apiUrl}/pokemon?limit=${limit}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pokemon/${id}`);
  }
}
