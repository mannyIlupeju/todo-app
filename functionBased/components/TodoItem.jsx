import React, {useState, useEffect}from  "react"
//CSS module
import styles from "./TodoItem.module.css"
import { FaTrash } from 'react-icons/fa'

//uses the todo list to reference the title of the objects. 
const TodoItem = (props) => {

  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    // console.log( event.key);
    if ( event.key === "Enter") {
       setEditing (false)
    }
  }

  const completedStyle = {
    fontStyle:"italic",
    color:"#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {id, completed, title} = props.todo
  //this will work when we are deleting a TodoItem,
  
  //setting the view mode and edit mode capability for when user double clicks each item
  let viewMode = {}
  let editMode = {}
  
  
  if(editing) {
    viewMode.display = "none"
  
  } else {
    editMode.display = "none"
  }
     
  useEffect(()=> {
    return () => {
      console.log("cleaning up")
    }
  }, [])


    


    return (
      <li className={ styles.item }>
        <div onDoubleClick ={ handleEditing } style={ viewMode }>

          <input type="checkbox" 
            className={ styles.checkbox }
            checked= { completed } 
            onChange= {()=> props.handleChangeProps(id)}
          />

          <button onClick={ () => props.deleteTodoProps( id ) }>
            <FaTrash />
          </button>

          <span style={ completed ? completedStyle : null }>{ title }</span>

        </div>
      
        <input type="text" 
            style={ editMode } 
            className={ styles.textInput } 
            value={ title } 
            onChange={e=> {
              props.setUpdate( e.target.value, id )
              }
            }
            onKeyDown = {handleUpdatedDone}
         />
      </li>
    )
  
}

export default TodoItem