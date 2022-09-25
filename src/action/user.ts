import { getCachedData } from "../utils";

export const USER_ADD = "add user";
export const ADD_ACTIVE_USER = "add active user";
let count = getCachedData("userCount") || 0;

export const userAdd = (name: string) => ({
  type: USER_ADD,
  payload: { id: ++count, name },
});

export const addActiveUser = (userId: number) => ({
  type: ADD_ACTIVE_USER,
  payload: userId,
});
