import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokedexService } from '../../../../services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  pokemon: any;
  cancel = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private service: PokedexService) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.service.getById(id).pipe(takeUntil(this.cancel)).subscribe({
      next: response => {
        this.pokemon = response;
      },
      error: () => {
        console.log('request failed');
      }
    });
  }

  ngOnDestroy(): void {
    this.cancel.next();
    this.cancel.complete();
  }
}