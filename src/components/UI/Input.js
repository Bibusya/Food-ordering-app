import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputStyle = props.className + " " + classes.input;
  return (
    <div className={inputStyle}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
