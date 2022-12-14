import React, { useEffect, useState } from "react";
import MeetingRoom from "./MeetingRoom";
import buildingData from "../buildings.json";
import { useLocation, useNavigate } from "react-router-dom";

const FreeRooms = (props) => {
  const { state } = useLocation();
  let { date, startTime, endTime, selectedBuildingName } = state;
  const [meetings, setMeetings] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const saveData = () => {
    if (selectedRoom) {
      alert(
        "Meeting added on " +
          date +
          " from " +
          startTime +
          " to " +
          endTime +
          " on " +
          selectedRoom.building +
          " with purose " +
          selectedRoom.name +
          " at " +
          selectedRoom.place
      );

      if (window.confirm) {
        navigate("/meetings");
      }
    }
  };

  useEffect(() => {
    let meetingArr = [];
    const buildingDatas = buildingData.data.Buildings;
    debugger;
    console.log("bd"+ buildingDatas+" "+selectedBuildingName);
    buildingDatas.forEach((x) => {
      if (x.name === selectedBuildingName) {
        meetingArr.push(x);
      }
    });
    setMeetings(meetingArr);
  }, [selectedBuildingName]);

  const setMeeting = (place, building, name) => {
    setSelectedRoom({ place, building, name });
  };

  return (
    <div className="free-rooms">
      <header>Please select one of the free rooms</header>
      {meetings.map((meeting) => {
        return meeting.meetingRooms.map((meet) => {
          for (let i = 0; i < meet.meetings.length; i++) {
            return (
              <MeetingRoom
                key={i}
                onClickHandler={setMeeting}
                place={meet.name}
                building={selectedBuildingName}
                name={meet.meetings[i].title}
              ></MeetingRoom>
            );
          }
        });
      })}
      <button onClick={saveData}>Save</button>
    </div>
  );
};
export default FreeRooms;
