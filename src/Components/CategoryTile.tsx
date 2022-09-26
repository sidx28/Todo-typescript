import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Category from "../models/category";
import { todoListSelectorByCategory } from "../selectors/todos";

type CategoryTileProps = { category: Category };

const CategoryTile: FC<CategoryTileProps> = ({ category }) => {
  const { id, name } = category;
  const onClick = () => {
    todoListSelectorByCategory;
  };
  return (
    <>
      <Link to={`/${id}/todos`}>
        <li className="list-none" onClick={onClick}>
          <div className="flex flex-row items-center p-1">
            <p className="ml-3 font-semibold">{name}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

CategoryTile.defaultProps = {};

export default memo(CategoryTile);
