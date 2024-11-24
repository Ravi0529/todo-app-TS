import React, { useState } from "react"

interface InputProps {
    addTodo: (todoText: string) => void;
}

const Input: React.FC<InputProps> = ({ addTodo }) => {
    const [todoText, setTodoText] = useState<string>("");

    const handleAddTodo = () => {
        if (todoText.trim()) {
            addTodo(todoText);
            setTodoText("");
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-blue-100 dark:bg-blue-900 shadow-md rounded-lg">
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add a new todo..."
                className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <button
                onClick={handleAddTodo}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
                Add
            </button>
        </div>
    )
}

export default Input;
