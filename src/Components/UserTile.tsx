import { FC, memo } from "react";
import User from "../models/user";

type UserTileProps = { user: User };

const UserTile: FC<UserTileProps> = ({ user }) => {
  const { name } = user;
  return (
    <>
      <li className="list-none">
        <div className="flex flex-row items-center p-1">
          <p className={"ml-3 font-semibold"}>{name}</p>
        </div>
      </li>
    </>
  );
};

UserTile.defaultProps = {};

export default memo(UserTile);
