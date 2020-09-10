import * as React from 'react'

import { User, Pokemon } from '../interfaces'

type ListDetailProps = {
  item: Pokemon
}

const ListDetail = ({ item: pokemon }: ListDetailProps) => (
  <div>
    <h1>Detail for {pokemon.name}</h1>
    <p>URL: {pokemon.url}</p>
  </div>
)

export default ListDetail
