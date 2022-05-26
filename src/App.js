import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/actions/addUser";
import { useState } from "react";



function App() {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const renderedUserList = users.length > 0 ? users.map((user) =>
    <li key={user.id} name={user.name} >{user.name}
    <button>x</button></li>
  ) : <></>
  const [inputUserName, setInputUsername] = useState("")
  return (
    <div className="App">
      <ul>{renderedUserList}</ul>

      <input type="text" id="id" name="name" value={inputUserName}
        onChange={(e) => setInputUsername(e.target.value)}></input>
      <button onClick={() => dispatch(addUser({ name: inputUserName, id: users.length }))}>add user</button>
      <hr></hr>

    </div>
  );
}

export default App;