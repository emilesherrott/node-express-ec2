import express from 'express'
import animals from './data.js'

const app = express()





app.get('/', (req, res) => {
    res.json("Hello World")
})

app.get('/:year', (req, res) => {
    const year = parseInt(req.params.year)
    let animalId = undefined
    if (year <= 2000){
        animalId = ((year - 1900) % 12) 
    } else {
        animalId = (((year - 2000) % 12) + 5)
    }
    animalId = ((year - 1900) % 12) 
    animalId < 0 || animalId > 12 ? res.json("Invalid year") : res.json(animals[animalId])
})

export default app