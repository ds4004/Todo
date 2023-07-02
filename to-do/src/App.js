import './App.css';

import Header from './MyComponets/Header';
import { Todos } from './MyComponets/Todos'
import { Footer } from './MyComponets/Footer'
import { AddTodo } from './MyComponets/AddTodo';
import { About } from './MyComponets/About';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initToDo;
  if (localStorage.getItem("todos") === null) {
    initToDo = [];
  }
  else {
    initToDo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Delete called for todo", todo);

    // This way will not work for react
    // let index = tools.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((temp) => {
      return temp !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("add", title, desc);
    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1
    }
    else {
      sno = 1
    }
    const myToDo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // console.log(myToDo);
    setTodos([...todos, myToDo]);
  }

  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to market",
  //     desc: "to get flour"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to market",
  //     desc: "to get rice"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to market",
  //     desc: "to get veges"
  //   }
  // ]);

  const [todos, setTodos] = useState(initToDo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    // Here thing need to be wrapped or else error will be there (if nothing wrap in empty)
    <>
      <BrowserRouter>
        <Header title="ToDo List" searchBar={true} />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;