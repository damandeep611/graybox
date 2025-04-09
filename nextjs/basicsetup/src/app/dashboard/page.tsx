"use client"

import TodoForm from "@/components/dashboardTodo/TodoForm"
import TodoList from "@/components/dashboardTodo/TodoList"
import { Todo } from "@/types/todo.types"
import React, { useState } from "react"


export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  return (
    <main className="min-h-screen  py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Modern Todo App</h1>
        <div className="max-w-md mx-auto  rounded-lg shadow-md overflow-hidden">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
      </div>
    </main>
  )
}

