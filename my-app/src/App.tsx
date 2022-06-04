import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { TodoList } from "./features/todos/TodoList";
import { AddTodo } from "./features/todos/AddTodo";

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
