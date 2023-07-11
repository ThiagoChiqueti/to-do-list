const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('Passamos por aqui')
  res.send({"title": 'working'})
  })

router.post('/', (req, res)=>{
  console.log(req.body)
  res.status(200).send(req.body)
})

router.get('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send(`ID: ${req.params.id}`)
})

router.put('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send(`PUT ID: ${req.params.id}`)
})




module.exports = router