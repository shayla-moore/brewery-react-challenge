import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages";
import GoogleMapPage from "./components/googleMapPageComponent/googleMapPage";
import "./Assets/css/default.min.css";
import "./Assets/css/card.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/map" component={GoogleMapPage} />
      </Router>
    </div>
  );
}

export default App;
