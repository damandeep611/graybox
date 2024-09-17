import express, { json } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { error } from "console";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); //for enabling json parsing

const TODOS_FILE = path.join(__dirname, "todos.json");

async function readTodos() {
  try {
    const data = await fs.readFile(TODOS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(TODOS_FILE, "[]");
      return [];
    }
    throw error;
  }
}

//helper function write Todos
async function writeTodos(todos) {
  await fs.writeFile(TODOS_FILE, JSON.stringify(todos, null, 2));
}

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await readTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "failed to read todods" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const todos = await readTodos();
    const newTodo = {
      id: Date.now().toString(),
      text: req.body.text,
      completed: false,
    };
    todos.push(newTodo);
    await writeTodos(todos);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todos" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  try {
    const todos = await readTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);
    if (todoIndex === -1) {
      return res.status(404).json({ error: "todo not found" });
    }
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    await writeTodos(todos);
    res.json(todos[todoIndex]);
  } catch (error) {
    res.status(500).json({ error: "failed to update todos" });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    let todos = await readTodos();
    todos = todos.filter((todo) => todo.id !== req.params.id);
    await writeTodos(todos);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "failed to delet todo" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
