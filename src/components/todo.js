import React from "react";
import "./todo.css"
import { useState, useRef, useEffect } from "react";

import { MdDelete } from 'react-icons/md'
function Todo() {
  const [todo, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const addTodo = () => {
    if(todo.trim()===""){
      alert("please enter something")
    }else{
    setTodos([{ list: todo, id: Date.now(), status: false }, ...todos])

    setInput('')
    }
  }

  const inputRef = useRef('null')
  useEffect(() => {
    inputRef.current.focus()
  })

  const onDelete = (id) => {
    setTodos(todos.filter((to) => to.id !== id))
  }

  const onComplete = (id) => {
    const complete= todos.map((list)=>{if(list.id === id)
    {
      return ({...list, status: !list.status})
    }
    return list
  })
setTodos(complete)
  }

  return (
    <div className="container">
      <h2> To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} ref={inputRef} placeholder='Enter your todo' onChange={(evt) => setInput(evt.target.value)} ></input>
        <button onClick={addTodo}>Add</button>
      </form>
      <div>
        <ul>
          <br />
          {
            todos.map((todos) => (
              <li className="list-items">
                <div id={todos.status ? "list-item":""} onClick={()=>onComplete(todos.id)}><input type="radio"/>
                <span >{todos.list}</span>
                </div>
                <span>
                  <MdDelete className="list-item-icons" id='delete' title="Delete" onClick={() => onDelete(todos.id)} />

                </span>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}
export default Todo