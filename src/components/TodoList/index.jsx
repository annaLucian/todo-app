import { LuGhost, LuCheckSquare, LuTrash2 } from "react-icons/lu"
import './TodoList.css'

const TodoList = ({ filteredArrayValueInput, valueInput, onToggleCompleted, deleteTodo }) => {
    // si no hay todos por input filtrado
    if (filteredArrayValueInput.length === 0) {
        return <div className="search-container-result">
            <p className="search-result">No se encontro resultados para {valueInput} </p>
            <span><LuGhost /></span>
        </div>
    }
    // Si hay todos filtrados
    return (
        <section className="todo-list-container">
            <ul>
                {filteredArrayValueInput.map((todo) => (

                    <li className="todo-item" key={todo.id}>

                        <span className={`todo-item-icon ${todo.completed && 'icon-check'}`} onClick={() => onToggleCompleted(todo)}>
                            <LuCheckSquare />
                        </span>
                        <p className={`todo-item-p ${todo.completed && 'todo-item--complete'} `} >
                            {todo.title}
                        </p>
                        <span className="todo-item-icon icon-delete" onClick={() => deleteTodo(todo)}>
                            <LuTrash2 />
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )





}
export { TodoList }
