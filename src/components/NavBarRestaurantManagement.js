import React from "react";
import { useParams } from "react-router-dom";

import NavBarRestaurant from "./NavBarRestaurant";

// Loading Data
import AucklandData from "../DB/AucklandData";
import DargavilleData from "../DB/DargavilleData";
import DunedinData from "../DB/DunedinData";
import HamiltonData from "../DB/HamiltonData";
import InvercargillData from "../DB/InvercargillData";
import KerikeriData from "../DB/KerikeriData";
import PaihiaData from "../DB/PaihiaData";
import WanakaData from "../DB/WanakaData";
import WhangareiData from "../DB/WhangareiData";

function NavBarRestaurantManagement() {
  let param = useParams();

  switch (param.cityName) {
    case "Auckland":
      return <NavBarRestaurant Data={AucklandData} City="Auckland" />;
    case "Dargaville":
      return <NavBarRestaurant Data={DargavilleData} City="Dargaville" />;
    case "Dunedin":
      return <NavBarRestaurant Data={DunedinData} City="Dunedin" />;
    case "Hamilton":
      return <NavBarRestaurant Data={HamiltonData} City="Hamilton" />;
    case "Invercargill":
      return <NavBarRestaurant Data={InvercargillData} City="Invercargill" />;
    case "Kerikeri":
      return <NavBarRestaurant Data={KerikeriData} City="Kerikeri" />;
    case "Paihia":
      return <NavBarRestaurant Data={PaihiaData} City="Paihia" />;
    case "Wanaka":
      return <NavBarRestaurant Data={WanakaData} City="Wanaka" />;
    case "Whangarei":
      return <NavBarRestaurant Data={WhangareiData} City="Whangarei" />;
    default:
      return;
  }
}

export default NavBarRestaurantManagement;
