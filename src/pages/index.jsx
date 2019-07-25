import React from "react";
import FetchBreweries from "../components/FetchBreweries";
import Header from "../components/headerComponent/header";

/**
 * This component allows the main page of the application to be rendered
 * when Router is used
 */
const MainPage = () => {
  return (
    <div>
      <Header />
      <FetchBreweries />
    </div>
  );
};

export default MainPage;
