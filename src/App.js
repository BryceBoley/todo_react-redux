import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { deleteTodo } from "./redux/actions/deleteTodo";
import { toggleTodo } from "./redux/actions/toggleTodo";
import { useState } from "react";
import "./App.css"

function App() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("")

  const [toggle, setToggle] = useState(todos.completed)

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
  }

  function saveTheTodo() {
    if (inputTodo !== "") {
      dispatch(addTodo({ todo: inputTodo, id: todos.length }))
      setInputTodo("")
    }
  }

  const handleOnClickDelete = e => {
    const id = e.target.parentElement.id;
    dispatch(deleteTodo(id))
  }

  const handleOnClickToggle = e => {
    const id = e.target.attributes.id.value;
    console.log(e.target.attributes.id.value);
    dispatch(toggleTodo(id))
  }

  const RenderedTodoList = todos.length > 0 ? todos.map((todo) =>

    <li
      key={todo.id}
      todo={todo.todo}
      id={todo.id}
      onClick={handleOnClickToggle}
      style={{
        textDecoration:
          todo.completed ?
            'line-through' :
            'none'
      }}>

      {todo.todo}
      <button
        className="remove" 
        onClick={handleOnClickDelete} >remove
      </button>
    </li>

  ) : <></>

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul className="todoList">
        {todos && RenderedTodoList}
      </ul>
      <br />
      <hr></hr>
      <br />
      <input
        type="text"
        autoFocus={true}
        value={inputTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnClick}>add todo</button>
      <br />
      <br />
      <hr></hr>
    </div>
  );
}

export default App;