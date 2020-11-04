export interface PokemonListItem {
  name: string;
  url: string;
  id: string;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Partial<PokemonListItem>[];
}

export interface Pokemon {

}