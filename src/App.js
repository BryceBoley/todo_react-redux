import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { useState } from "react";
import "./App.css"



function App() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("")
  const renderedTodoList = todos.length > 0 ? todos.map((todo) =>
    <li key={todo.id} todo={todo.todo}>
      {todo.todo}
    </li>
  ) : <></>

  const handleChange = e => setInputTodo(e.target.value);  

  const handleKeyDown = e => {
    if (e.which === 13 && inputTodo !== "") {
      dispatch(addTodo({ todo: inputTodo, id: todos.length }))
      setInputTodo("")
    }
  }

  const handleOnClick = e => {
    if (inputTodo !== "") {
      dispatch(addTodo({ todo: inputTodo, id: todos.length }))
      setInputTodo("")
    } 
  }
  
  return (
    <div className="App">
      <ul>{renderedTodoList}</ul>

      <input 
        type="text" 
        id="id" 
        name="todo"  
        autoFocus={true} 
        value={inputTodo}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnClick}>add todo</button>
      <hr></hr>

    </div>
  );
}

export default App;