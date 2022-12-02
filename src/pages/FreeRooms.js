import React, { useEffect, useState } from "react";
import MeetingRoom from "./MeetingRoom";
import buildingData from "../buildings.json";
import { useLocation } from "react-router-dom";

const FreeRooms = (props) => {
  const {state} = useLocation();
  let {date, startTime, endTime, selectedBuildingName} = state;
  const [meetings, setMeetings] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const saveData = () => {
    console.log(selectedRoom);
    console.log(date, startTime, endTime);

  };

  useEffect(() => {
    let meetingArr = [];
    const buildingDatas = buildingData.data.Buildings;
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
