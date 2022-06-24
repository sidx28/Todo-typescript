import { Reducer } from "redux";
import { USER_ADD } from "../action/user";
import User from "../models/user";
import { cacheData, getCachedData } from "../utils";

export type UserState = { [id: number]: User };
export const initialUserState = getCachedData("users") || {};

export const userReducer: Reducer<UserState> = (
  userState = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADD: {
      const user = action.payload;
      const newUsers = { ...userState, [user.id]: user };
      cacheData("users", newUsers);
      cacheData("userCount", user.id);
      return newUsers;
    }
    default: {
      return userState;
    }
  }
};
