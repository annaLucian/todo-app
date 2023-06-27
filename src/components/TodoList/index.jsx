
const TodoList = ({ filteredArrayValueInput }) => {
    return (
        <ul>
            {filteredArrayValueInput.map((todo) => (
                <li key={todo.id}> {todo.id}{todo.title} - {todo.completed ? "true" : "false"}</li>
            ))}
        </ul>
    )
}
export { TodoList }
