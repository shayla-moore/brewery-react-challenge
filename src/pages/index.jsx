import React from "react";
import FetchBreweries from "../components/FetchBreweries";
import Header from "../components/headerComponent/header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <FetchBreweries />
    </div>
  );
};

export default MainPage;
