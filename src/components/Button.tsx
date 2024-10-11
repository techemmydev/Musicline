import React, { FC, MouseEventHandler } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({
  type = "button",
  className = "",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`px-7 py-4 rounded-lg font-medium  text-[16px]  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
