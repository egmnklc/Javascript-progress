import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
/*
  ! import uuidv4 from "uuid/v4" importing it like so may cause package not exported
  ! error, to fix it, use the import method import { v4 as uuidv4 } from 'uuid'
  */  
 //* Function that generates a random id
/* 
  * useRef hook allows us to reference elements inside of our html, in our case the input.
  * useEffect allows us to store data in localStorage.
*/

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
const [todos, setTodos] = useState([])
const todoNameRef = useRef()

useEffect(() => 
/* 
  * In this effect, we'll load our todos. We'll cal it once so we pass in an empty array,
  * Sice the empty array won't change, useEffect will be called only once.
*/
{
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => 
{ //* We save our todos in local storage here.
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos]) //* Anytime, if anything in this array changes, we'll call this function.
function handleAddTodo(e)
{
  const name = todoNameRef.current.value
  if (name === '') { return }
  // console.log(name)
  setTodos(prevTodos => {
    return [...prevTodos, {id: uuidv4(), name: name, complete:false}]
  })
  todoNameRef.current.value = null      
}

function toggleTodo(id)
{
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleClearTodo(id)
{
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <>
    <TodoList todos={ todos } toggleTodo={toggleTodo}/>
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodo}>Clear Todos</button>
    <div> {todos.filter(todo => !todo.complete).length} left todo</div>
    </>    
  )
}

export default App;
