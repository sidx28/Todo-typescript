import { Reducer } from "redux";
import { ADD_ACTIVE_CATEGORY, CATEGORY_ADD } from "../action/categories";
import Category from "../models/category";
import { cacheData, getCachedData } from "../utils";

export type CategoryState = {
  categoriesList: { [id: number]: Category };
  activeCategory: Category;
};
export const initialState = getCachedData("categories") || {};

export const categoryReducer: Reducer<CategoryState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CATEGORY_ADD: {
      const category = action.payload;
      const newData = {
        ...state,
        categoriesList: { ...state.categoriesList, [category.id]: category },
      };
      cacheData("categories", newData);
      cacheData("categoryCount", category.id);
      return newData;
    }
    case ADD_ACTIVE_CATEGORY: {
      const categoryId: number = action.payload;
      const category = state.categoriesList[categoryId];
      const newData = { ...state, activeCategory: category };
      cacheData("categories", newData);
      return newData;
    }

    default: {
      return state;
    }
  }
};
