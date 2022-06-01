import { combineReducers } from "redux";
import todoReducer from "./todoReducer";


const allReducers = combineReducers({
  todoReducer: todoReducer
});

export default allReducers;