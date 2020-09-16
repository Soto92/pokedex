const Home = ({items}: any) => {

  return (
    <div title="Pokédex">
      <h1>Choose your Pokémon</h1>
      
      <ul>
        {items.map((item: any) => <li>{item.name}</li>)}
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const apiUrl = 'http://localhost:3000/api/pokedex'

  try {
    const response = await fetch(apiUrl)

    if (response.status === 200) {
      const items = await response.json()
      return { items }
    }
  } catch (error) {
    const { response } = error

    const resultError = response ? response.statusText : error.message

    return resultError
  }
}

export default Home
