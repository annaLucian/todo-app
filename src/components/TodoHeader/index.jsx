import './TodoHeader.css'
import { LuClipboardList } from 'react-icons/lu'

const TodoHeader = ({ count, todoItems, children, isLoading }) => {
    return (

        <div className="todo-counter">
            <h1>
                My Task List<LuClipboardList />
            </h1>
            <h2 className={`${isLoading === true && 'text-opacity'}`}>Has completado <span>{count}</span> de <span>{todoItems.length} </span>Tasks </h2>
            {children}
        </div>

    )
}
export { TodoHeader }