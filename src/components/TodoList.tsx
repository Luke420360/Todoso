import { useTodos } from "../contexts/TodoContext"

const TodoList = () => {
  const {todos} = useTodos();
  
  return (
    <div>
      <h2>List of Todos</h2>
      <ul>
        {todos?.map(todo => { 
            return (
            <li key={todo.id}>
              {todo.title}
            </li>
        )})}
      </ul>
    </div>
  )
}

export default TodoList
