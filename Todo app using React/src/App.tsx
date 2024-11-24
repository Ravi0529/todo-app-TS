import { Input, Todos } from "./components"
import { useTheme } from "./context/ThemeContext"

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center p-4">
      <div className="flex justify-between w-full max-w-xl">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <div className="w-full max-w-xl space-y-4 mt-4">
        <Input />
        <Todos />
      </div>
    </div>
  )
}

export default App
