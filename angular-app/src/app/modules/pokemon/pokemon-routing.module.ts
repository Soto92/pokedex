import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './container/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PokemonComponent,
      },
      {
        path: ':id',
        component: PokemonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
