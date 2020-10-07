import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators'
import { FooService } from './foo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  pokemon = new BehaviorSubject(null)
  pokemons$: Observable<any> = this.pokemon.asObservable()

  loading = true;

  private subscriptions = new Subscription()

  constructor(private service: FooService) {
  }

  ngOnInit() {
    this.getPokemons()
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getPokemons() {
    this.subscriptions.add(
      this.service.getPokemons().pipe(finalize(() => { this.loading = false; })).subscribe(value => {
        this.pokemon.next(value);
      })
    )
  }
}
