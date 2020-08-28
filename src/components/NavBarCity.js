import React from "react";
import { Link } from "react-router-dom";

class NavBarCity extends React.Component {
  constructor() {
    super();
    this.state = {
      showCityList: false
    };
    this.displayCityList = this.displayCityList.bind(this);
  }

  displayCityList() {
    this.setState(preState => {
      return { showCityList: !preState.showCityList };
    });
  }

  render() {
    return (
      <div>
        {this.state.showCityList ? (
          <div className="bar-content" onClick={this.displayCityList}>
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
          <div className="bar-title" onClick={this.displayCityList}>
            City
          </div>
        )}
      </div>
    );
  }
}

export default NavBarCity;
