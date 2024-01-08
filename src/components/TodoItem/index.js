// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onRemove = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <li className="list-container">
        <div className="con1">
          <p className="h1">{title}</p>
          <button onClick={onRemove} type="button" className="button">
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
