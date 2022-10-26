import React from "react"
import TodoItem from "./TodoItem"
//references the TodoItem so it can use the information imported from it
//responsible for generating TodoItem into a list by mapping over the Todo array in the state object
const TodoList = (props) => {
    return (
      <ul>
          {props.todos.map(todo =>(
            <TodoItem key = {todo.id} 
              todo = {todo} 
              handleChangeProps = {props.handleChangeProps} 
              deleteTodoProps = {props.deleteTodoProps}
              setUpdate={props.setUpdate}
            />
          ))}
        </ul>
    )

}

export default TodoList