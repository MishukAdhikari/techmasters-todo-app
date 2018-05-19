const express = require("express");
const app = express();
const todos = [];

app.get("/", homepageHandler);

app.get("/api/v1/todos", getTodos);
app.get("/api/v1/todos/:todoID", getSingleTodo);
app.post("/api/v1/todos", addTodo);




function addTodo(req,res){
  const todo = {
    "id": Date.now() % 100,
    "title": "Hello",
    "description": "you have to say hello",
  }
  todos.push(todo);
  const obj = {
    error: false,
    message: "A todo created",
    data: todo
  };
  res.json(obj);
}

function getSingleTodo(req,res){
  req.params.todoID
  for(let i = 0 ; i< todos.length; i++){
    if(todos[i].id == req.params.todoID){
      const obj = {
        error: false,
        message: "A found",
        data: todos[i]
      };
      res.json(obj);
    }
  }


  const obj = {
    error: false,
    message: "No todo found with ID "+req.params.todoID
  };
  res.json(obj);
}

function getTodos(req,res){
  const obj = {
    error: false,
    message: "",
    data: todos
  };
  res.json(obj);
}

function homepageHandler(req,res){
  res.send("HELLOW WORLD");
}


app.listen(8080);
