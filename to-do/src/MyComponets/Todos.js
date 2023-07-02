import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
  let mystyle = {
    minHeight: "38vh"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="my-3 text-primary-emphasis py-2">Todos List</h3>
      {props.todos.length === 0 ? "Let's add some new tasks to To-Do List" :
        props.todos.map((todo) => {
          // in case of multiple things to return wrap in <>
          return <> <hr /> <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} /> </>
        })}
    </div>
  )
}