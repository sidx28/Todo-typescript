import { FC, memo } from "react";
import { Link } from "react-router-dom";
import User from "../models/user";

type UserTileProps = { user: User };

const UserTile: FC<UserTileProps> = ({ user }) => {
  const { name } = user;
  return (
    <>
      <Link to={`/${name}/todos`}>
        <li className="list-none">
          <div className="flex flex-row items-center p-1">
            <p className={"ml-3 font-semibold"}>{name}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

UserTile.defaultProps = {};

export default memo(UserTile);
