import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${style.button} ${props.className}`}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children || props.text}
    </button>
  );
};

export default Button;
