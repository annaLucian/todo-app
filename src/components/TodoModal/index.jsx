import { LuSkull } from "react-icons/lu";
import './TodoModal.css'

const TodoModal = ({
    modalOpen,
    setModalOpen,
    addNewTodos,
    handleOnChangeTextArea,
    errorModal,
    textareaValue,
    setErrorModal
}) => {
    return (
        <div id="modal" className={`modal ${modalOpen ? 'is-visible' : ''} `}>
            <div className='modal-background'>
                <form>
                    <div className='modal-description'>
                        <label > Add a task</label>
                        <textarea placeholder=' write a task' className='tarea' value={textareaValue} onChange={(event) => handleOnChangeTextArea(event)}></textarea>
                        {/* TODO: mejorar esta logica */}

                        <p className={` ${errorModal && textareaValue.trim().length === 0 ? 'error-modal-visible' : "error-modal"}`}> <LuSkull />  Please..! add a task.</p>

                    </div>
                    <div className='from-btn-container'>
                        <button type="button" className='todo-form-btn todo-form-btn--cancel' onClick={() => {
                            setErrorModal(false)
                            setModalOpen(false)
                        }}>Close</button>
                        <button type="submit" className='todo-form-btn todo-form-btn--add' onClick={(event) => addNewTodos(event)}>Add</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export { TodoModal }