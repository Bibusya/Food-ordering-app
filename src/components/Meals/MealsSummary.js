import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        FRESH FOOD <br />
        SIMPLY DELICIOUS
      </h2>
      <p>We supply highly quality organic products</p>
    </section>
  );
};

export default MealsSummary;
