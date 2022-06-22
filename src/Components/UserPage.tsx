import { FC, memo } from "react";
import UserAddForm from "./UserAddForm";
import UserList from "./UserList";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = () => {
  return (
    <>
      <UserAddForm />
      <UserList />
    </>
  );
};

UserPage.defaultProps = {};

export default memo(UserPage);
