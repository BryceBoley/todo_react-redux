
const initialState = [

    { todo: "Create a todo",  id:0 },
    { todo: "Add new functionality",  id:1},
    { todo: "Change a property",  id:2},
    { todo: "Take a break",  id:3}
];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [...state, {todo: action.payload.todo, id: action.payload.id }];
    }
    case "DELETETODO": {
      // var a = [...state.slice(0, action.id)];
      // var b = state.slice(action.id);
      // var newArray = [a.concat(b)];
      // console.log(a);
      // console.log(b);
      // console.log(newArray);
      // return [newArray];
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)]

    }              
    default:
        return state;
  }

};
export default userReducer;