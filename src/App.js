import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { useState } from "react";



function App() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const renderedTodoList = todos.length > 0 ? todos.map((todo) =>
    <li key={todo.id} todo={todo.todo} >{todo.todo}
    <button>x</button></li>
  ) : <></>
  const [inputTodo, setInputTodo] = useState("")
  return (
    <div className="App">
      <ul>{renderedTodoList}</ul>

      <input type="text" id="id" name="todo" value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}></input>
      <button onClick={() => dispatch(addTodo({ todo: inputTodo, id: todos.length }))}>add todo</button>
      <hr></hr>

    </div>
  );
}

export default App;