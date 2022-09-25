import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";

export const usersSelector = (s: State) => s.user;

export const usersListSelector = (s: State) => values(s.user.usersList);

export const activeUserSelector = (state: State) => state.user.activeUser;
