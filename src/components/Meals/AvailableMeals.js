import React from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tomatoes",
    description: "Lorem ipsum dolor sit amet",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Cucumber",
    description: "Lorem ipsum dolor sit amet",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Broccoli",
    description: "Lorem ipsum dolor sit amet",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Cauliflower",
    description: "Lorem ipsum dolor sit amet",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
