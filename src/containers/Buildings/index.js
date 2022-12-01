import React from "react";
import "./Buildings.css";
const Buildings = (props) => {
  const { no_of_buildings } = props;
  return (
    <div className="building-container">
      <p className="header">Buildings</p>
      <div className="buildings">
        <p>Total - {no_of_buildings}</p>
      </div>
    </div>
  );
};
export default Buildings;
