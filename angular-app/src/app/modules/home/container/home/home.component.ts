import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PokedexService } from '../../../../services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemon = new BehaviorSubject([]);
  pokemons$: Observable<any[]> = this.pokemon.asObservable();

  loading = true;

  private subscriptions = new Subscription();

  constructor(private service: PokedexService) {}

  ngOnInit() {
    this.getPokemons();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getPokemons(limit?: number) {
    this.subscriptions.add(
      this.service
        .getPokemons(limit)
        .pipe(
          map((pokemon) => pokemon.results),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((pokemons: any[]) => {
          this.pokemon.next(pokemons);
        })
    );
  }
}
