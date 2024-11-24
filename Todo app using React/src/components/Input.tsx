const Input = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-blue-100 dark:bg-blue-900 shadow-md rounded-lg">
            <input
                type="text"
                placeholder="Add a new todo..."
                className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                Add
            </button>
        </div>
    )
}

export default Input
