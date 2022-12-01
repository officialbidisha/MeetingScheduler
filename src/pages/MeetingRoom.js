import React from "react";
import "./MeetingRoom.css";
const MeetingRoom = ({ place, building, name, onClickHandler }) => {
  const handleClick = () => {
    onClickHandler(place, building, name);
  };

  return (
    <div className="meeting-rooms" onClick={handleClick}>
      <p>{place}</p>
      <p>{building}</p>
      <p>{name}</p>
    </div>
  );
};
export default MeetingRoom;
