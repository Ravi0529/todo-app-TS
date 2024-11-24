import { useState, useEffect } from "react"
import { Input, Todos } from "./components"
import { useTheme } from "./context/ThemeContext"

interface Todo {
  id: number
  text: string
  completed: boolean
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    )
  }

  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center p-4">
      <div className="flex justify-between w-full max-w-xl">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <button
          onClick={toggleTheme}
          className="text-2xl"
        >
          {theme === "light" ? (<>🌚</>) : (<>🌝</>)}
        </button>
      </div>
      <div className="w-full max-w-xl space-y-4 mt-4">
        <Input addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  )
}

export default App
