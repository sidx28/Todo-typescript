import { FC, InputHTMLAttributes, memo } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...props }) => {
  let themeClass =
    "w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500 ";
  if (props.type === "text") {
    themeClass = "rounded-md border bg-gray-200 ";
  }
  return (
    <>
      <input {...props} className={themeClass + className} />
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
