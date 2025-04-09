import type React from "react"
import TodoItem from "./TodoItem"
import type { Todo } from "@/types/todo.types"

interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, newText: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </ul>
  )
}

export default TodoList

