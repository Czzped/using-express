const express = require('express')
const jsonRouter = require('./routes/json')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Welcome To My Site!! Check Our JSON on '/json'!!!</h1>")
})

app.use('/json', jsonRouter)

app.listen(3000, () => {
    console.log('The route was inicialized!')
})