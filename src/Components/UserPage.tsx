import { FC, memo } from "react";
import { AddUserForm } from "./AddForm";
import Header from "./Header";
import UserList from "./UserList";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = () => {
  return (
    <>
      <Header />
      <div className="p-5 ">
        <UserList />
        <AddUserForm />
      </div>
    </>
  );
};

UserPage.defaultProps = {};

export default memo(UserPage);
