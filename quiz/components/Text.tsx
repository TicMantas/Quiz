import React from "react";

type TextProps = {
    children: React.ReactNode;
    additionalClass?: string;
}

const Text = ({ children, additionalClass }: TextProps) => {
  return (
    <p className={`text-2xl leading-7 font-semibold ${additionalClass}`}>{children}</p>
  );
};

export default Text;
