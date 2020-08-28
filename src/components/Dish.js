import React from "react";

function Dish(dish) {
  return (
    <div className="dish-container">
      <img
        src={require("../../public/" + dish.info.pic)}
        alt={dish.info.Name}
      />

      <div className="dish-info">
        <h3> {dish.info.Name} </h3>
        <div className="bold">{dish.info.V}</div>

        <table>
          <tbody>
            <tr>
              <td>Contain:</td>
              <td>{dish.info.Contain}</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>{dish.info.Region}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>{dish.info.Price}</td>
            </tr>
            <tr>
              <td>Last try:</td>
              <td>{dish.info.LastTimeWent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dish;
