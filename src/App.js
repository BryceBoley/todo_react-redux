import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { removeTodo } from "./redux/actions/removeTodo";
import { useState } from "react";
import "./App.css"

function App() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("")
  
  


  
  const [checked, setChecked] = useState(todos.checked)
  const handleChange = e => {
    setInputTodo(e.target.value) 
    
  }

  const handleKeyDown = e => {
    if (e.which === 13) {
      saveTheTodo()
    }
  }

  const handleOnClick = e => {
    saveTheTodo()
    document.getElementById("addTodo").focus();
  }

  function saveTheTodo () {
    if (inputTodo !== "") {
      dispatch(addTodo({ todo: inputTodo, id: todos.length, checked: false }))
      setInputTodo("")
    } 
  }
  const RenderedTodoList = todos.length > 0 ? todos.map((todo) =>
    <RenderedTodoList key={todo.id} todo={todo.todo} >
      {todo.todo} <button ></button></RenderedTodoList>
      
      )
   : <></>

  return (
    <div className="App">
      <ul>
        {RenderedTodoList}
        </ul>
      <input 
        type="text" 
        id="addTodo" 
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