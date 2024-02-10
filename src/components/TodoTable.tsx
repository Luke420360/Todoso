import { useCallback } from "react";
import { useTodos } from "../contexts/TodoContext"
import "./tableStyle.css"

const TodoTable = () => {
  const {todos, setTodos} = useTodos();

  const handleCheckClick = (todoId: string) => {
    const newTodoList = [...todos];
    const foundTodo = todos.findIndex(todo => todo.id === todoId);
    
    if (foundTodo !== -1) {
      newTodoList[foundTodo].checked = !newTodoList[foundTodo].checked;
      console.log('Objekt gefunden und geändert:', newTodoList[foundTodo]);
      setTodos(newTodoList);
    } else {
      console.log('Objekt nicht gefunden.');
    }
  }

  const handleActionClick = (todoId: string) => {
    const foundTodo = todos.findIndex(todo => todo.id === todoId);
    
    if (foundTodo !== -1) {
      const newTodoList = [...todos].filter(item => item !== todos[foundTodo]);
      console.log('Objekt gefunden und gelöscht');
      setTodos(newTodoList);
    } else {
      console.log('Objekt nicht gefunden.');
    }
  }

  const TableCols = useCallback(() => {
    return (
      <thead>
        <th>Title</th>
        <th>Description</th>
        <th>Due</th>
        <th>Done</th>
        <th>Action</th>
      </thead>
    )
  }, [])

  const TableRows = useCallback(() => {
    return (
      <tbody>
        {todos.map((todo) => (
          <tr>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.due}</td>
            <td id='tdChecked' onClick={() => handleCheckClick(todo.id)}>{todo.checked ? "Done" : "Open"}</td>
            <td id='tdAction' onClick={() => handleActionClick(todo.id)}>Delete</td>
          </tr>
        ))}
      </tbody>
    )
  }, [todos])

  return (
    <>
      <h2>Table of Todos</h2>
      <table className="table">
        <TableCols />
        <TableRows />
      </table>
    </>
  )
}

export default TodoTable
