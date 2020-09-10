import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'

const Pokedex = ({ items }: any) => {
  return (
  <Layout title="Pokédex">
    <h1>Choose your Pokémon</h1>
    
    <p>You are currently on: /pokedex</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)}

Pokedex.getInitialProps = async () => {
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

export default Pokedex
