import './style.css'

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = []
const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement
const myForm = document.getElementById("myForm") as HTMLFormElement
const submitButton = myForm.querySelector('button') as HTMLButtonElement

submitButton.innerText = "Add"

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault() // by adding this, onSubmit it won't refresh the page
  submitButton.innerText = "Add"

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000)
  }

  todos.push(todo)
  todoInput.value = ""
  renderTodo(todos)
}

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div")
  todo.className = "todo"

  // checkbox
  const checkBox: HTMLInputElement = document.createElement("input")
  checkBox.setAttribute("type", "checkbox")
  checkBox.className = "isCompleted"
  checkBox.checked = isCompleted
  checkBox.onchange = () => {
    const targetTodo = todos.find((item) => item.id === id);
    if (targetTodo) {
      targetTodo.isCompleted = checkBox.checked
      paragraph.className = checkBox.checked ? "textCut" : ""
      editBtn.disabled = checkBox.checked
      if (checkBox.checked) {
        editBtn.classList.add("disabled")
      } else {
        editBtn.classList.remove("disabled")
      }
    }
  }

  // title
  const paragraph: HTMLParagraphElement = document.createElement("p")
  paragraph.innerText = title
  paragraph.className = isCompleted ? "textCut" : ""

  // delete button
  const btn: HTMLButtonElement = document.createElement("button")
  btn.innerText = 'x'
  btn.className = "deleteBtn"
  btn.onclick = () => {
    deleteTodo(id)
  }

  // edit button
  const editBtn: HTMLButtonElement = document.createElement("button")
  editBtn.innerText = 'Edit'
  editBtn.className = "editBtn"
  if (isCompleted) {
    editBtn.disabled = true
    editBtn.classList.add("disabled")
  } else {
    editBtn.onclick = () => {
      editTodo(id)
    }
  }

  // appending all to todoItem
  todo.append(checkBox, paragraph, editBtn, btn)
  todoContainer.append(todo)
}

const deleteTodo = (id: string) => {
  const idx = todos.findIndex(item => item.id === id)
  todos.splice(idx, 1)
  renderTodo(todos)
}

const editTodo = (id: string) => {
  const idx = todos.findIndex(item => item.id === id)
  todoInput.value = todos[idx].title
  submitButton.innerText = "Update"
  todos.splice(idx, 1)
  renderTodo(todos)
}

const renderTodo = (todos: Todo[]) => {
  todoContainer.innerText = ""
  todos.forEach(item => {
    generateTodoItem(item.title, item.isCompleted, item.id)
  })
}