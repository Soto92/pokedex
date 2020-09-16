import { NextApiRequest, NextApiResponse } from 'next'

const API_URL = 'https://pokeapi.co/api/v2/'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: {  qtd }
    } = _req;

    const limit = qtd || 10

    const result = await fetch(`${API_URL}/pokemon?limit=${limit}`)
    const json = await result.json()

    res.status(200).json(json.results)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
