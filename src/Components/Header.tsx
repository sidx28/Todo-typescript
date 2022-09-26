import { FC, memo } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../BasicComponents/Button";

type HeaderProps = {
  showBackButton: boolean;
  handleBackButtonClick?: () => void;
};

const Header: FC<HeaderProps> = ({ showBackButton, handleBackButtonClick }) => {
  return (
    <>
      <div className="bg-white border-b border-gray-200 flex items-center h-16 ml-4">
        {showBackButton && (
          <Button
            onClick={handleBackButtonClick}
            icon={<AiOutlineArrowLeft className="" />}
            theme={"custom"}
          />
        )}
        <span className="px-6 text-xl font-medium text-gray-800">Todo App</span>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
