import { values } from "lodash";
import { State } from "../store";

export const userSelector = (state: State) => values(state.user);
