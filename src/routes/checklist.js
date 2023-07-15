const express = require('express')

const router = express.Router()

const Checklist = require('../models/checklist')
const checklist = require('../models/checklist')


router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({})
    res.status(200).render('checklists/index', {checklists: checklists})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas'})
  }
  })

router.get('/new', async (req, res)=>{
  try {
    let checklist = new Checklist()
    res.status(200).render('checklists/new', {checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {errors: 'Erro ao carregar formulário'})
  }
})


router.post('/', async (req, res)=>{
  let {name} = req.body.checklist
  console.log(name)
  
  try {
    let checklists = await Checklist.create({name})
    res.redirect('/checklists')
  } catch (error) {
    res.status(422).render('checklists', {checklists: {...checklist, error}})
  }

})

router.get('/:id', async (req, res)=>{
  try {
    let checklist = await Checklist.findById(req.params.id);
    console.log(checklist);
    res.status(200).render('checklists/show', {checklists: checklist});
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res)=>{
  let { name } = req.body
  
  try {
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name})
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
    
  }
})




module.exports = router