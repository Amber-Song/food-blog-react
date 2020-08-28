import React from "react";

function NavBarRestaurant(data) {
  let restaurantNavItems = data.map(restaurant => {
    return <div>{restaurant.restaurantName}</div>;
  });

  return <div>{restaurantNavItems}</div>;
}

export default NavBarRestaurant;
