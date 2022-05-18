import { Counter } from "./features/counter/Counter";
import "./App.css";
import { TodoList } from "./features/todos/TodoList";
import { AddTodo } from "./features/todos/AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
        <AddTodo />
      </header>
    </div>
  );
}

export default App;
