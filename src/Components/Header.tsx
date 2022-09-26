import { FC, memo } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="bg-white border-b border-gray-200 flex items-center h-16">
        <span className="px-6 text-xl font-medium text-gray-800">Todo App</span>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
