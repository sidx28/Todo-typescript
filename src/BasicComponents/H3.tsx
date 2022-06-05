import { FC, HTMLAttributes, memo } from "react";

type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<H3Props> = ({ children }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold">{children}</h3>
    </>
  );
};

H3.defaultProps = {};

export default memo(H3);
