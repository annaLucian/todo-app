import { useEffect, useState } from 'react'
import { TodoList } from './components/TodoList/index'
import { TodoHeader } from './components/TodoHeader'
import { TodoSearch } from './components/TodoSearch'
import { TodoButton } from './components/TodoButton'
import { TodoModal } from './components/TodoModal'
import { Loading } from './components/loading'
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

  const [isLoading, setIsLoading] = useState(false)

  const [searchInput, setSearchInput] = useState("")

  const [modalOpen, setModalOpen] = useState(false)

  const [textareaValue, setTextareaValue] = useState('');

  const [errorModal, setErrorModal] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)

  }, [])
  const filteredArrayValueInput = todoItems.filter((todo) => todo.title.toLowerCase().includes(searchInput.toLowerCase()))

  const completedTodosLength = todoItems.filter((todo) => todo.completed).length

  // crear function que tome ese id
  // filtrar array de acuerdo a ese id
  // lpintar los todos con la modificacion
  function onToggleCompleted(todo) {
    const newTodos = todoItems.map(t => {
      return t.id === todo.id ? { ...todo, completed: !todo.completed } : t
    })
    setTodoItems(newTodos)
  }

  function deleteTodo(todo) {
    const filteredTodo = todoItems.filter(el => {
      return el.id !== todo.id
    })
    setTodoItems(filteredTodo)
  }

  function onToggleModal() {
    // if (modalOpen === true) {
    //   setModalOpen(false)
    // } else {
    //   setModalOpen(true)
    // }
    setModalOpen(!modalOpen)
  }
  function handleOnChangeTextArea(event) {
    setTextareaValue(event.target.value)
  }

  function addNewTodos(event) {
    event.preventDefault()
    // si textarea es vacio retornar y cerrael modal
    if (textareaValue.trim() === "") {
      setErrorModal(true);
      return
    }
    const todoItemsCopy = [...todoItems]
    const todoId = todoItemsCopy.length + 1
    const newTodo = { title: textareaValue, id: todoId, completed: false }
    todoItemsCopy.push(newTodo)
    setTodoItems(todoItemsCopy)
    setTextareaValue("")
    setModalOpen(false)

  }

  return (
    <>

      <div className='App'>

        <TodoHeader count={completedTodosLength} todoItems={todoItems} isLoading={isLoading} >
          {!isLoading && <TodoSearch setSearchInput={setSearchInput} />}
        </TodoHeader>
        {isLoading === true && <Loading />}
        {isLoading === false && <>
          <TodoList
            filteredArrayValueInput={filteredArrayValueInput}
            valueInput={searchInput}
            onToggleCompleted={onToggleCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoButton onToggleModal={onToggleModal} />
          <TodoModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleOnChangeTextArea={handleOnChangeTextArea}
            addNewTodos={addNewTodos}
            textareaValue={textareaValue}
            errorModal={errorModal}
            setErrorModal={setErrorModal}
          />
        </>}

      </div>

    </>
  )
}

export default App
