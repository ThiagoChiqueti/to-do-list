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

router.get('/:id/edit', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).render('checklists/edit', {checklist: checklist})
  } catch (error) {
    res.status(442).render('pages/error', {error: 'Erro ao atualizar terefa'})
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
  let { name } = req.body.checklist
  let checklist = await Checklist.findById(req.params.id)
  
  try {
    let checklist = await Checklist.update({name})
    res.redirect('/checklists')
  } catch (error) {
    let errors = error.errors
    res.status(442).render('checklists/edit', {checklist: {...checklist, errors}})
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.redirect('/checklists')
  } catch (error) {
    res.status(442).render('pages/error', {error: 'Erro ao deletar terefa'})
    
  }
})




module.exports = router