import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarCity() {
  const [showCityList, setShowCityList] = useState(false);

  const displayCityList = () => {
    setShowCityList(!showCityList);
  };

  return (
    <div>
      {showCityList ? (
        <div className="bar-content" onClick={displayCityList}>
          <div>City: </div>
          <hr />
          <Link to="/FoodBlog/Auckland"> Auckland </Link> <br />
          <Link to="/FoodBlog/Dargaville"> Dargaville </Link> <br />
          <Link to="/FoodBlog/Dunedin"> Dunedin </Link> <br />
          <Link to="/FoodBlog/Hamilton"> Hamilton </Link> <br />
          <Link to="/FoodBlog/Invercargill"> Invercargill </Link> <br />
          <Link to="/FoodBlog/Kerikeri"> Kerikeri </Link> <br />
          <Link to="/FoodBlog/Paihia"> Paihia </Link> <br />
          <Link to="/FoodBlog/Wanaka"> Wanaka </Link> <br />
          <Link to="/FoodBlog/Whangarei"> Whangarei </Link> <br />
        </div>
      ) : (
        <div className="bar-title" onClick={displayCityList}>
          City
        </div>
      )}
    </div>
  );
}

export default NavBarCity;
