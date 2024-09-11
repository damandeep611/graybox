import express from "express";
const app = express();

app.get("/todos", (req, res) => {
  // return todods
  const todos = [];
  res.json(todos);
});

app.post("/todos", (req, res) => {
  // create a new todo
  const newTodo = { name: req.body.name };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  //update a todo
  const id = req.params.id;
  const updatedTodo = { name: req.body.name };
  todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
  res.json(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  // delete a todo
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ message: "todo deleted" });
});

app.listen(8080, () => {
  console.log(`Server Started on port 8080`);
});
