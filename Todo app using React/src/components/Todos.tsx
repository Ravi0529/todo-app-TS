const Todos = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Your Todos</h2>
            <div className="space-y-2">
                {["Sample Todo 1", "Sample Todo 2", "Sample Todo 3"].map((todo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white dark:bg-gray-700 p-3 shadow-md rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-800 dark:text-gray-200">{todo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-lg shadow hover:bg-yellow-600 transition">
                                Edit
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todos
