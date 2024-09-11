//js

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskBox");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//saving the tasks to backend
fetch("/save-tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(tasks),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .then((err) => console.error(err));

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName != "") {
    const task = {
      name: taskName,
      completed: false,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  taskContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className =
      "flex items-center justify-between gap-4 border border-slate-800 py-2 px-8";
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox";
    taskCheck.checked = task.completed;
    taskCheck.addEventListener("click", () => {
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });
    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = task.name;
    taskNameSpan.contentEditable = false;
    if (task.completed) {
      taskNameSpan.style.textDecoration = "line-through";
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", () => {
      taskNameSpan.contentEditable = true;
      taskNameSpan.focus();
    });
    taskNameSpan.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        task.name = taskNameSpan.textContent;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
      }
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList = "bg-red-600 px-4 py-2 rounded-lg";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });
    taskItem.appendChild(taskCheck);
    taskItem.appendChild(taskNameSpan);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskContainer.appendChild(taskItem);
  });
}

displayTasks();
