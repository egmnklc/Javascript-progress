import React, { useState }  from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos]= useState([])
  return (
    <>
    <TodoList />
    <input type="text"></input>
    <button>Add Todo</button>
    <button>Clear Todos</button>
    <div>0 left todo</div>
    </>    
  )
}

export default App;
