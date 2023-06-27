import './TodoSearch.css'
const TodoSearch = ({ setSearchInput }) => {
    //1. filtrar de acuerdo al input
    //1.1 Usando filter
    // { title: "Cortar cebolla", id: 1, completed: true }
    // todo.title coincida con el input
    const handleOnChange = (event) => {
        setSearchInput(event.target.value)
    }

    return (
        <input type="text" placeholder="Buscando..." onChange={(event) => handleOnChange(event)} className='todo-search' />
    )

}
export { TodoSearch }