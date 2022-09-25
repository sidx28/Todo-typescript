import { Reducer } from "redux";
import { ADD_ACTIVE_USER, USER_ADD } from "../action/user";
import User from "../models/user";
import { cacheData, getCachedData } from "../utils";

export type UserState = {
  usersList: { [id: number]: User };
  activeUser: User;
};
export const initialState = getCachedData("users") || {};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case USER_ADD: {
      const user = action.payload;
      const newData = {
        ...state,
        usersList: { ...state.usersList, [user.id]: user },
      };
      cacheData("users", newData);
      cacheData("userCount", user.id);
      return newData;
    }
    case ADD_ACTIVE_USER: {
      const userId: number = action.payload;
      const user = state.usersList[userId];
      const newData = { ...state, activeUser: user };
      cacheData("users", newData);
      return newData;
    }

    default: {
      return state;
    }
  }
};
