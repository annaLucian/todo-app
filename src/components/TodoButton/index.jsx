import './TodoButton.css'

const TodoButton = ({ onToggleModal }) => {
    return (
        <>
            <button className='todo-btn' onClick={onToggleModal}>Add Task</button>
        </>

    )
}

export { TodoButton }