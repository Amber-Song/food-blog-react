import React from "react";

import Restaurant from "./Restaurant";

function MainContent(props) {
  let restaurantComponentsText = props.Data.map(restaurant => {
    return (
      <Restaurant
        key={restaurant.restaurantName}
        info={restaurant}
        id={restaurant.restaurantName}
      />
    );
  });

  return (
    <div id={props.City}>
      <div>{restaurantComponentsText}</div>
      <button onClick={() => window.scroll(0, 0)}>Scroll to top</button>
    </div>
  );
}

export default MainContent;
