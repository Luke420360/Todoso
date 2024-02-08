import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoTable from './components/TodoTable'
import { TodoContextProvider } from './contexts/TodoContext'


function App() {
  return (
    <>
      <h1>Todoso</h1>
        <TodoContextProvider>
          <div id='main'>
            <div className='card' id='todoTable'>
              <TodoTable />
            </div>
            <div className='card' id='addTodoForm'>
              <AddTodoForm key={"Form-Add-Todo"} />
            </div>
          </div>
        </TodoContextProvider>
    </>
  )
}

export default App
