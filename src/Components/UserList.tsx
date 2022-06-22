import { FC, memo } from "react";
import { connect } from "react-redux";
import User from "../models/user";
import { userSelector } from "../selectors/user";
import { State } from "../store";
import UserTile from "./UserTile";

type UserListProps = { users: User[] };

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <UserTile key={u.id} user={u} />
      ))}
    </div>
  );
};

UserList.defaultProps = {};
const mapStateToProps = (state: State) => ({ users: userSelector(state) });

export default connect(mapStateToProps)(memo(UserList));
