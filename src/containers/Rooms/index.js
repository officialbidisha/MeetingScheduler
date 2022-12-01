import React from "react";
import "./Rooms.css";
const Rooms = (props) => {
  const { no_of_rooms } = props;
  const free_rooms = 1;
  return (
    <div className="rooms-container">
      <p className="header"> Rooms</p>
      <div className="room">Total - {no_of_rooms}</div>
      <div className="free-rooms"> Free now - {free_rooms}</div>
    </div>
  );
};
export default Rooms;