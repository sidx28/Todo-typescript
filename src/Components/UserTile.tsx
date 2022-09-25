import { FC, memo } from "react";
import { Link } from "react-router-dom";
import User from "../models/user";
import { todoListSelectorByUser } from "../selectors/todos";

type UserTileProps = { user: User };

const UserTile: FC<UserTileProps> = ({ user }) => {
  const { id, name } = user;
  const onClick = () => {
    todoListSelectorByUser;
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

UserTile.defaultProps = {};

export default memo(UserTile);
