import { createContext, useContext, useState } from "react";
import Todo from "../types/Todo";
import someTodos from "../data/someTodos";

type TodoContextProviderProps = {
  children: React.ReactNode;
}

type TodoContext = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContext | null>(null);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [todos, setTodos] = useState(someTodos)
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
        {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodoContext);
  
  if (!context) {
    throw new Error('Todo Context should be used!')
  }

  return context
}
