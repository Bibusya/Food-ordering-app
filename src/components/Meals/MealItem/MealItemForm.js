import React from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
