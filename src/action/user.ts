export const USER_ADD = "add user";
let count = 0;
export const userAdd = (name: string) => ({
  type: USER_ADD,
  payload: { id: ++count, name },
});
