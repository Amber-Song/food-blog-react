import React from "react";
import { useParams } from "react-router-dom";

import MainContent from "./MainContent";
import MainContentIndex from "./MainContentIndex";

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

function MainContentCityManagement() {
  let param = useParams();

  switch (param.cityName) {
    case "Auckland":
      return <MainContent Data={AucklandData} />;
    case "Dargaville":
      return <MainContent Data={DargavilleData} />;
    case "Dunedin":
      return <MainContent Data={DunedinData} />;
    case "Hamilton":
      return <MainContent Data={HamiltonData} />;
    case "Invercargill":
      return <MainContent Data={InvercargillData} />;
    case "Kerikeri":
      return <MainContent Data={KerikeriData} />;
    case "Paihia":
      return <MainContent Data={PaihiaData} />;
    case "Wanaka":
      return <MainContent Data={WanakaData} />;
    case "Whangarei":
      return <MainContent Data={WhangareiData} />;
    default:
      return <MainContentIndex />;
  }
}

export default MainContentCityManagement;
