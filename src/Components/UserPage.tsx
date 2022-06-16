import { FC, memo } from "react";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = (props) => {
  return <>this is user Page</>;
};

UserPage.defaultProps = {};

export default memo(UserPage);
