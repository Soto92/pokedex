import { NextApiRequest, NextApiResponse } from 'next'

export const API_URL = 'https://pokeapi.co/api/v2/'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { pokemonId }
    } = _req;
    
    const result = await fetch(`${API_URL}/pokemon/${pokemonId}`)
    const pokemon = await result.json()

    res.status(200).json(pokemon)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
