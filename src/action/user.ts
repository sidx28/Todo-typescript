export const USER_ADD = "user add";
let count = 0;
export const userAdd = (name: string) => ({
  id: ++count,
  name,
});
