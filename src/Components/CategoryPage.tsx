import { FC, memo } from "react";
import { AddCategoryForm } from "./AddForm";
import Header from "./Header";
import CategoryList from "./CategoryList";

type CategoryPageProps = {};

const CategoryPage: FC<CategoryPageProps> = () => {
  return (
    <>
      <Header />
      <div className="p-5 ">
        <CategoryList />
        <AddCategoryForm />
      </div>
    </>
  );
};

CategoryPage.defaultProps = {};

export default memo(CategoryPage);
