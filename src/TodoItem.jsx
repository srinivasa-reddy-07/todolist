/* eslint-disable react/prop-types */

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo, todo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => editTodo(todo.id, prompt("Edit title:", todo.title))} className="btn btn-success">
        Edit
      </button>
      <button onClick={() => deleteTodo(id)} className="btn btn-success">
        Delete
      </button>
    </li>
  )
}