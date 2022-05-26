export const addUser = (name, id) => {
  return {
    type: "ADDUSER",
    payload: name, id
  };
};