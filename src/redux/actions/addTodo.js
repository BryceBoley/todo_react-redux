export const addTodo = (todo, id) => {
  return {
    type: "ADDTODO",
    payload: todo, id
  };
};