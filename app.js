const express = require('express')

const app = express();
//chamada do root '/'
app.get('/', (req, res)=>{
  res.send('<h1>Lista de tarefas</h1>')
})

app.get('/json', (req, res)=>{
  res.json([{title: 'Terefa X', done: true}, {title: 'Terefa X', done: true}])
})

app.listen(3000, ()=>{
  console.log('Server Started')
})