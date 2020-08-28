import React from "react";

function NavBarRestaurant(param) {
  const restaurantNavItems = param.Data.map(restaurant => {
    return (
      <div key={restaurant.restaurantName}>{restaurant.restaurantName}</div>
    );
  });

  return <div>{restaurantNavItems}</div>;
}

export default NavBarRestaurant;
