import express from 'express'
import animals from './data.js'

const app = express()





app.get('/', (req, res) => {
    res.json({story: `The story goes that a race was organised by the Jade Emperor - one of the most important gods in traditional Chinese religion - who invited all the animals in the world to take part. Twelve species turned up at the start line: a pig, dog, rooster, monkey, sheep, horse, snake, dragon, rabbit, tiger, ox and rat. As a reward for turning up, the Emperor named a year in the zodiac after each one, while the race would determine the order each animal would be placed.`})
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