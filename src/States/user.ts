import { Reducer } from "redux";
import { USER_ADD } from "../action/user";
import User from "../models/user";

export type UserState = { [id: number]: User };
export const initialUserState = {};

export const userReducer: Reducer<UserState> = (
  userState = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADD: {
      const user: User = action.payload;
      return { ...userState, [user.id]: user };
    }
    default: {
      return userState;
    }
  }
};
