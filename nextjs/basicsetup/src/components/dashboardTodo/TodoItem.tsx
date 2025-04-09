import type React from "react"
import { useState, useRef, useEffect } from "react"
import type { Todo } from "@/types/todo.types"

interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, newText: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (editText.trim() !== "") {
      editTodo(todo.id, editText.trim())
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave()
    } else if (e.key === "Escape") {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <li className="flex items-center justify-between py-3 px-4 ">
      <div className="flex items-center flex-grow mr-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="ml-3 px-2 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <span className={`ml-3 ${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.text}</span>
        )}
      </div>
      <div className="flex space-x-2">
        {!isEditing && (
          <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

