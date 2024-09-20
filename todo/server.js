const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;

app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const TODOS_FILE = path.join(DATA_DIR, "todos.json");

// Ensure data directory and files exist
async function initializeDataFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(USERS_FILE);
  } catch {
    await fs.writeFile(USERS_FILE, "[]");
  }

  try {
    await fs.access(TODOS_FILE);
  } catch {
    await fs.writeFile(TODOS_FILE, "[]");
  }
}

initializeDataFiles();

async function readJSONFile(filePath) {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

async function writeJSONFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const users = await readJSONFile(USERS_FILE);
    if (users.find((u) => u.username === username)) {
      return res.status(400).json({ message: "Username already exists" });
    }
    users.push({ username, password: hashedPassword });
    await writeJSONFile(USERS_FILE, users);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const users = await readJSONFile(USERS_FILE);
    const user = users.find((u) => u.username === username);

    if (user && (await bcrypt.compare(password, user.password))) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/todos", async (req, res) => {
  const { text, username } = req.body;

  try {
    const todos = await readJSONFile(TODOS_FILE);
    const newTodo = { id: Date.now().toString(), text, done: false, username };
    todos.push(newTodo);
    await writeJSONFile(TODOS_FILE, todos);
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/todos", async (req, res) => {
  const { username } = req.query;

  try {
    const todos = await readJSONFile(TODOS_FILE);
    const userTodos = todos.filter((todo) => todo.username === username);
    res.json(userTodos);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;

  try {
    const todos = await readJSONFile(TODOS_FILE);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].done = done;
      await writeJSONFile(TODOS_FILE, todos);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todos = await readJSONFile(TODOS_FILE);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    await writeJSONFile(TODOS_FILE, filteredTodos);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Add this route at the end of your file, after all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`TODO app listening at http://localhost:${port}`);
});
