import React from "react";
import "./Button.css";
const Button = ({
  title,
  isLink,
  color,
  bgColor,
  clickHandler,
  ...otherProps
}) => {
  const onClickHandler = () => {
    clickHandler();
  };

  return (
    <button
      onClick={onClickHandler}
      style={{ backgroundColor: bgColor, color }}
      {...otherProps}
    >
      {title}
    </button>
  );
};
export default Button;
