// features/todos/AddTodo.tsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSelector } from "../login/loginSlices";
// Import the action from slice:
import { addTodo } from "./todoSlices";

// The rest of the code stays the same:
export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { username, password } = useSelector(loginSelector);

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setTitle("");

    dispatch(
      addTodo({
        id: Date.now().toString(),
        completed: false,
        title,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoName"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Todo</button>
      <br />
      <br />
      <label>Username: {username}</label>
      <br />
      <label>Username: {password}</label>
    </form>
  );
};
