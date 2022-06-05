import { HTMLAttributes, FC, memo } from "react";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<H1Props> = ({ children }) => {
  return (
    <>
      <div className="px-4 mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </div>
    </>
  );
};

H1.defaultProps = {};

export default memo(H1);
