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
    photoUrl: "http://themesground.com/qmarto/V1/products-images/p3.jpg",
  },
  {
    id: "m2",
    name: "Corn",
    description: "Lorem ipsum dolor sit amet",
    price: 16.5,
    photoUrl: "http://themesground.com/qmarto/V1/products-images/p2.jpg",
  },
  {
    id: "m3",
    name: "Banana",
    description: "Lorem ipsum dolor sit amet",
    price: 12.99,
    photoUrl: "http://themesground.com/qmarto/V1/products-images/p6.jpg",
  },
  {
    id: "m4",
    name: "Cucumber",
    description: "Lorem ipsum dolor sit amet",
    price: 18.99,
    photoUrl: "http://themesground.com/qmarto/V1/products-images/p4.jpg",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      photoUrl={meal.photoUrl}
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
