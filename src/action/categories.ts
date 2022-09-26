import { getCachedData } from "../utils";

export const CATEGORY_ADD = "add category";
export const ADD_ACTIVE_CATEGORY = "add active category";
let count = getCachedData("categoryCount") || 0;

export const categoryAdd = (name: string) => ({
  type: CATEGORY_ADD,
  payload: { id: ++count, name },
});

export const addActiveCategory = (categoryId: number) => ({
  type: ADD_ACTIVE_CATEGORY,
  payload: categoryId,
});
