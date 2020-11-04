import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PokemonListItem } from '../../../../interfaces/pokemon';
import { PokedexService } from '../../../../services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemons = [];
  loading = true;

  private subscriptions = new Subscription();

  constructor(private service: PokedexService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getPokemons(limit?: number): void {
    this.subscriptions.add(
      this.service
        .getPokemons(limit)
        .pipe(
          map((response) => response.results.map(pokemon => ({
            ...pokemon,
            id: pokemon.url.split('/').reverse()[1]
          }))),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((pokemons: PokemonListItem[]) => {
          this.pokemons = pokemons;
        })
    );
  }
}

