import { NextApiRequest, NextApiResponse } from 'next'
import {Pokemon} from '../../../interfaces/pokemon';

export const API_URL = 'https://pokeapi.co/api/v2/'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: {  qtd }
    } = _req;

    const limit = qtd || 10

    const result = await fetch(`${API_URL}/pokemon?limit=${limit}`)
    const json = await result.json()

    const pokemons = json.results.map((pokemon: Pokemon) => {
      const id = pokemon.url.split('/').reverse()[1]

      return { ...pokemon, id }
    })

    res.status(200).json(pokemons)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
