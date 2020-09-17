import {useRouter} from 'next/router'
import {API_URL} from '../api/pokedex'
import { useEffect, useState} from 'react'

const PokemonDetails = (props: any) => {
  const {query} = useRouter()
  const [pokemon, setPokemon] = useState<{ name: string, stats: any[] }>();

  useEffect(() => {
    const fetchDetails = async() => {
      try {
        console.log(query.id)
        const response = await fetch(`http://localhost:3000/api/pokedex/${query.id}`)
        const details = await response.json();
        setPokemon(details)
      } catch(error) {
        
      }
    }
    
    fetchDetails();
  },[])

  return (
    <div>
     {
      pokemon && (
        <>      
          <span> Pokemon { pokemon?.name } </span>
          <h4>Stats:</h4>
          <ul>
            {pokemon && pokemon?.stats?.map(stat => <li>{stat.stat.name}: {stat.base_stat}</li>)}
          </ul>
        </>
      )
    }
    </div>
  )
}


export default PokemonDetails