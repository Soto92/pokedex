import {Pokemon} from '../interfaces/pokemon'
import Link from 'next/link';

export interface HomeProps {
  pokemons: Pokemon[];
}

const Home = (props: HomeProps) => {
  const {pokemons} = props;
  return (
    <div title="Pokédex">
      <h1>Choose your Pokémon</h1>
      
      <ul>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <li key={index}>
            <Link href={`/pokemon/${pokemon.id}`}>
              {pokemon.name}
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const apiUrl = 'http://localhost:3000/api/pokedex'

  try {
    const response = await fetch(apiUrl)
    if (response.status === 200) {
      const pokemons = await response.json()

      return { pokemons }
    }
  } catch (error) {
    const { response } = error

    const resultError = response ? response.statusText : error.message

    return resultError
  }
}

export default Home
