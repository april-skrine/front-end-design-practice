import "./App.css";
import HeaderCountdown from "./Components/HeaderCountdown";
import Contest from "./Components/Contest";
import React from "react";

function App() {
  const threeDaysInMS = 3 * 24 * 60 * 60 * 1000;
  const nowInMS = new Date().getTime();

  const dateTimeAfterThreeDays = nowInMS + threeDaysInMS;

  return (
    <div style={{ width: "100%", height: "100vh" }} id="main-background">
      <div id="main-flex">
        <div>
          <HeaderCountdown targetDate={dateTimeAfterThreeDays} />
        </div>
        <div style={{margin: '5%'}}>
          <Contest />
        </div>
      </div>
    </div>
  );
}

export default App;
