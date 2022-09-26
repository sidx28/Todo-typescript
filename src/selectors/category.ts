import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";

export const categoriesSelector = (s: State) => s.category;

export const categoriesListSelector = (s: State) =>
  values(s.category.categoriesList);

export const activeCategorySelector = (state: State) =>
  state.category.activeCategory;
