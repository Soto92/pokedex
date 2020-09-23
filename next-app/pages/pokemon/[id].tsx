import { NextPageContext } from "next";

const PokemonDetails = ({ pokemon }: any) => {
  return (
    <div>
     {
      pokemon && (
        <>      
          <span> Pokemon { pokemon?.name } </span>
          <h4>Stats:</h4>
          <ul>
            {pokemon && pokemon?.stats?.map( stat => 
              <li key={stat.stat.id}>{stat.stat.name}: {stat.base_stat}</li>
            )}
          </ul>
        </>
      )
    }
    </div>
  )
}

PokemonDetails.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const response = await fetch(`http://localhost:3000/api/pokedex/${query.id}`)
    const pokemon = await response.json();
    return { pokemon }
  } catch(error) {
    const { response } = error

    const resultError = response ? response.statusText : error.message

    return resultError
  }
}


export default PokemonDetails