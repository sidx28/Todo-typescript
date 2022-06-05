import { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = {
  theme?: "secondary" | "highlight";
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, children, icon, ...rest }) => {
  let themeClass =
    "text-white bg-gray-500 border-transparent hover:bg-gray-600 rounded-md";
  if (theme === "secondary") {
    themeClass = "border-gray-300 bg-gray-100 rounded-md";
  }
  if (theme === "highlight") {
    themeClass =
      "rounded-full text-white bg-gray-500 border-transparent hover:bg-gray-600";
  }
  return (
    <>
      <button
        {...rest}
        className={
          "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " +
          themeClass
        }
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
