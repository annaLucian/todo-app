import { useState } from 'react'
import { TodoList } from './components/TodoList/index'
import { TodoHeader } from './components/TodoHeader'
import { TodoSearch } from './components/TodoSearch'
import './App.css'

const todoItemsMock = [
  { title: "Cortar cebolla", id: 1, completed: true },
  { title: "Tocar piano", id: 2, completed: false },
  { title: "Comprar manzanas", id: 3, completed: true },
  { title: "Pasear al perro", id: 4, completed: false },
  { title: "Comprar pepino", id: 5, completed: true },
  { title: "Dar comida el perro", id: 6, completed: false },
]
function App() {
  const [todoItems, setTodoItems] = useState(todoItemsMock)

  const [searchInput, setSearchInput] = useState("")


  const filteredArrayValueInput = todoItems.filter((todo) => todo.title.toLowerCase().includes(searchInput.toLowerCase()))

  const completedTodosLength = todoItems.filter((todo) => todo.completed).length

  // crear function que tome ese id
  // filtrar array de acuerdo a ese id
  // lpintar los todos con la modificacion
  function onToggleCompleted(todo) {
    setTodoItems((todoItems) => {
      return todoItems.map(t => {
        return t.id === todo.id ? { ...todo, completed: !todo.completed } : t
      })
    })
  }

  function deleteTodo(todo) {
    const filteredTodo = todoItems.filter(el => {
      return el.id !== todo.id
    })
    setTodoItems(filteredTodo)
  }

  return (
    <div className='App'>
      <TodoHeader count={completedTodosLength} todoItems={todoItems} >
        <TodoSearch setSearchInput={setSearchInput} />
      </TodoHeader>
      <TodoList
        filteredArrayValueInput={filteredArrayValueInput}
        valueInput={searchInput}
        onToggleCompleted={onToggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
