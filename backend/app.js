const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");

//MiddleWare
app.use(bodyParser.json())
app.use(cors());

const todos = [
  {
    id: 1,
    desc: "Write Python Code",
    completed: false
  },
  {
    id: 2,
    desc: "Write JavaScript Code",
    completed: true
  }
];

app.get('/', (req, res) => {
  res.send('<p>Hello New ToDo List World!</p>')
})

app.get('/todos', (req, res) => {
  res.json(todos)
});

app.get('/todos/:id', (req, res) => {
  let todo = todos.filter((todo) => todo.id == req.params.id)
  res.json(todo)
});

app.post('/todos', (req, res) => {
  let body = req.body;
  todos.push({id: uuid.v4(), ...body});
  res.json(todos);
});

app.put('/todos/:id', (req, res) => {
  let todo = todos.find((todo) => todo.id == req.params.id)
  if(todo){
    todo.desc = req.body.desc;
    todo.completed = req.body.completed
    res.json(todos);
  }else {
    res.send("Todo with given ID doens't exit");
  }
});

app.delete('/todos/:id', (req, res) => {
  let index = todos.findIndex(todo => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json([])
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
