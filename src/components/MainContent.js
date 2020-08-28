import React from "react";

import Restaurant from "./Restaurant";

function MainContent(props) {
  let restaurantComponentsText = props.Data.map(restaurant => {
    return <Restaurant key={restaurant.restaurantName} info={restaurant} />;
  });

  return <div>{restaurantComponentsText}</div>;
}

export default MainContent;
