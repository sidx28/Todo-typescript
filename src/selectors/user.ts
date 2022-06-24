import { values } from "lodash";
import { State } from "../store";

export const usersListSelector = (state: State) => values(state.user);
