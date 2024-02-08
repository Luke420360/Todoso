import { useState } from 'react'
import Todo from '../types/Todo'
import { useTodos } from '../contexts/TodoContext'

const AddTodoForm = () => {
  const {todos, setTodos} = useTodos();
  const [newTodo, setNewTodo] = useState<Todo>(defaultTodo)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.id;
    const newValue = e.target.value;
    switch(property) {
        case 'title': { 
            setNewTodo({ ...newTodo, title: newValue})
            break;
        };
        case 'description': {
            setNewTodo({ ...newTodo, description: newValue})
            break;
        };
        case 'due': setNewTodo({ ...newTodo, due: newValue});
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoList = [...todos];
    newTodo.id = new Date().getMilliseconds().toString();
    newTodoList.push(newTodo);
    setTodos(newTodoList);
    setNewTodo(defaultTodo);
  }

  return (
    <>
      <h2>Add new</h2>
      <form 
        onSubmit={(e) => handleSubmit(e)}
      >
        <input 
          id='title' 
          type='text' 
          placeholder='Title'
          value={newTodo.title}
          onChange={(e) => handleOnChange(e)}
          />
        <input 
          id='description' 
          type='text' 
          placeholder='Description' 
          value={newTodo.description}
          onChange={(e) => handleOnChange(e)} 
          />
        <input 
          id='due' 
          type='text' 
          placeholder='Due' 
          value={newTodo.due}
          onChange={(e) => handleOnChange(e)} 
          />
          <div className='alignEnd'>
            <button type='submit' id='btnAdd'>Add</button>
          </div>
      </form>
    </>

  )
}

export default AddTodoForm

const defaultTodo: Todo = {
    id: '',
    title: '',
    description: '',
    due: '',
    checked: false
}