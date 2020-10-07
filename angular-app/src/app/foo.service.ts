import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FooService {
  
  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(environment.apiUrl)
  }
}
