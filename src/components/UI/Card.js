import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const CardWrapperStyle = classes.card + " " + props.className;
  return <div className={CardWrapperStyle}>{props.children}</div>;
};

export default Card;
