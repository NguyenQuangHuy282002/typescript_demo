// features/todos/TodoList.tsx

import React from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../app/store";

// Import selector and action from slice:
import { selectTodos, Todo, TodosState, toggleTodo } from "./todoSlices";

// We use RootState we defined earlier
// to make `useSelector` understand
// the store structure via type assertion
// with the `TypedUseSelectorHook` generic:
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  // Now, use the selector inside right away,
  // no need to destructure the result:
  const todos = useTypedSelector(selectTodos);

  // The rest of the code stays the same:
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
