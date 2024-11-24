import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodosProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState<string>("");

    const handleEdit = (id: number, text: string) => {
        setEditingId(id);
        setEditingText(text);
    };

    const saveEdit = (id: number) => {
        if (editingText.trim()) {
            editTodo(id, editingText);
            setEditingId(null);
        }
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Your Todos</h2>
            <div className="space-y-2">
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between bg-white dark:bg-gray-700 p-3 shadow-md rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                disabled={editingId !== null}
                                className={`w-5 h-5 text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 ${editingId !== null ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            />
                            {editingId === todo.id ? (
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                    className="px-2 py-1 border w-[80%] rounded-lg dark:bg-gray-600 dark:border-gray-500"
                                />
                            ) : (
                                <span
                                    className={`text-gray-800 dark:text-gray-200 ${todo.completed ? "line-through" : ""
                                        }`}
                                >
                                    {todo.text}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {editingId === todo.id ? (
                                <>
                                    <button
                                        onClick={() => saveEdit(todo.id)}
                                        className="px-1 py-1 rounded-lg text-xl"
                                    >
                                        ✅
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleEdit(todo.id, todo.text)}
                                        disabled={todo.completed} // Disable edit button if todo is completed
                                        className={`px-1 py-1 text-sm rounded-lg shadow ${todo.completed ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        disabled={editingId !== null} // Disable delete button if editing
                                        className={`px-1 py-1 text-sm rounded-lg shadow ${editingId !== null ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        ❌
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todos;
