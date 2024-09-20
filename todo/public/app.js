let currentUser = null;

async function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    alert("Signup successful! Please sign in.");
  } else {
    const errorData = await response.json();
    alert(errorData.message || "Signup failed. Please try again.");
  }
}

async function signin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    currentUser = username;
    document.getElementById("auth-section").classList.add("hidden");
    document.getElementById("todo-section").classList.remove("hidden");
    loadTodos();
  } else {
    alert("Sign in failed. Please check your credentials.");
  }
}

async function addTodo() {
  const todoText = document.getElementById("todo-input").value;

  const response = await fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: todoText, username: currentUser }),
  });

  if (response.ok) {
    document.getElementById("todo-input").value = "";
    loadTodos();
  } else {
    alert("Failed to add TODO. Please try again.");
  }
}

async function loadTodos() {
  const response = await fetch(`/todos?username=${currentUser}`);
  const todos = await response.json();

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "flex items-center space-x-2";
    li.innerHTML = `
            <input type="checkbox" ${
              todo.done ? "checked" : ""
            } onchange="updateTodo('${todo.id}', this.checked)">
            <span class="${todo.done ? "line-through" : ""}">${todo.text}</span>
            <button onclick="deleteTodo('${
              todo.id
            }')" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

async function updateTodo(id, done) {
  const response = await fetch(`/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done }),
  });

  if (response.ok) {
    loadTodos();
  } else {
    alert("Failed to update TODO. Please try again.");
  }
}

async function deleteTodo(id) {
  const response = await fetch(`/todos/${id}`, { method: "DELETE" });

  if (response.ok) {
    loadTodos();
  } else {
    alert("Failed to delete TODO. Please try again.");
  }
}
