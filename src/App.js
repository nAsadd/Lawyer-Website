import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Lawyers from "./Components/Lawyers/Lawyers";
import AwesomeFeatures from "./Components/Awesome-Features/AwesomeFeatures";
import Welcome from "./Components/Welcome/Welcome";
import PracticeAreas from "./Components/Practice-Areas/PracticeAreas";
import PlansPrices from "./Components/Plans-Prices/PlansPrices";

const App = () => {
  return (
    <>
      <div className="container">
        <Main />
        <Lawyers />
        <AwesomeFeatures />
        <Welcome />
        <PracticeAreas />
        <PlansPrices />
      </div>
    </>
  );
};

export default App;
