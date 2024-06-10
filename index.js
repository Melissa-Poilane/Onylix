import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(cors())

const API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3'
const headers = { Authorization: 'Bearer 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' }

app.post('/api/chat', async (req, res) => {
  const { message } = req.body
  const input = `Tu es un psychanalyste spécialisé dans l'interprétation des rêves. Donne une analyse complète et précise de ce rêve, ne complète pas le rêve. Concentre-toi uniquement sur l'analyse. Assure-toi que ton analyse soit rédigée sans aucune faute de français, en utilisant un langage courant et accessible. :  ${message}`;
const payload = {
  inputs: input,
  parameters: { max_new_tokens: 5000, return_full_text: true }
}

try {
    const response = await axios.post(API_URL, payload, { headers })
    let result = response.data[0].generated_text
  
    // Supprimer l'input du résultat
    result = result.replace(input, '').trim();
  
    res.json({ response: result })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Ca marche pas !' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/chat`)
})