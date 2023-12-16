const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "creatorName": "Pedro",
        "age": 100000
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`<h1>O id da pagina é ${id}</h1>`)
})
module.exports = router