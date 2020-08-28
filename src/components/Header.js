import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>
        <Link to="/FoodBlog" className="title-link">
          Vaughan &amp; Amber
        </Link>
      </h1>
      <p className="title-text">A blog for food exploration in New Zealand.</p>
      <hr />
    </div>
  );
}

export default Header;
