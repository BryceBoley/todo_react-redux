export const deleteTodo = id => {
  return {
    type: "DELETETODO",
    id: id
  };
};