import React from "react";

import Dish from "./Dish";

function Restaurant(restaurant) {
  const dishComponents = restaurant.info.dishes.map(dish => {
    return <Dish key={dish.Name} info={dish} />;
  });

  return (
    <div>
      <h2>{restaurant.info.restaurantName}</h2>
      <div>{dishComponents}</div>
    </div>
  );
}

export default Restaurant;
