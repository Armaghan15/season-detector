import React from "react";
import "./SeasonDisplay.css";

// const seasonConfig = {
//   summer: {
//     text: "It's hot, get some ice!",
//     iconName: "sun",
//   },

//   winter: {
//     text: "Winter is here, heat needed!",
//     iconName: "snowflake",
//   },
// };

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =
    season === "Summer"
      ? "It's hot out here!"
      : "Get me some coffe, it's cold!";

  const iconName = season === "Summer" ? "sun" : "snowflake";

  return (
    <div className={`season-disply ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
