import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { v4 as uuidv4} from 'uuid'
import Header from "./Header";
import TodoList from "./TodoList"
import InputTodo from "./InputTodo"
import Navbar from "../components/Navbar"




const TodoContainer = () => {
  const[todos, setTodos] = useState(getInitialTodos());


  //Storing TodoItems
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  //Getting TodoItems
  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  //To change the state of the input text field 
  const handleChange = (id) => {
    setTodos(prevState => {
       prevState.todos.map(todo=>{
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;

    })
      })
  }

  //delete functionality
  const delTodo = (id) => {
    setTodos([
      ...todos.filter(todo => {return todo.id !== id;})
      ])
  }

  //add item functionality
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }


  //to update the title field when we double click
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }


///////////////////////////////////////////////////



  return (
      <div className="container">
        <div className="inner">
        {/* <Navbar /> */}
        <Header/>
        <InputTodo addTodoProps = {addTodoItem}/>
        <TodoList todos={todos} 
          handleChangeProps = {handleChange}
          deleteTodoProps = {delTodo} 
          setUpdate = {setUpdate}
          />
        </div>
      </div>
    )
  }

export default TodoContainer