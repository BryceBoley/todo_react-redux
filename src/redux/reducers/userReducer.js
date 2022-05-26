const inititalState = [
    { name: "Bryce",  id:0 },
    { name: "Bonnie",  id:1},
    { name: "Brandon",  id:2},
    { name: "Bernice",  id:3}
];
const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADDUSER": {
      return [...state, {name: action.payload.name, id: action.payload.id }];
    }
    case "REMOVEUSER": {
      return { ...state, age: action.payload };
    }
    case "LISTUSER": {   
      return state;
    }
    default:
        return state;
  }

};
export default userReducer;