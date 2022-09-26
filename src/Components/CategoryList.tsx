import { FC, memo } from "react";
import { connect } from "react-redux";
import Category from "../models/category";
import { categoriesListSelector } from "../selectors/category";
import { State } from "../store";
import CategoryTile from "./CategoryTile";

type CategoryListProps = { categories: Category[] };

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((u) => (
        <CategoryTile key={u.id} category={u}></CategoryTile>
      ))}
    </div>
  );
};

CategoryList.defaultProps = {};
const mapStateToProps = (state: State) => ({
  categories: categoriesListSelector(state),
});

export default connect(mapStateToProps)(memo(CategoryList));
