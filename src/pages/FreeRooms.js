import React, { useEffect, useState } from "react";
import MeetingRoom from "./MeetingRoom";
import buildingData from "../buildings.json";
const FreeRooms = (props) => {
  let { buildingName } = props;
  const [meetings, setMeetings] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const saveData = () => {
    console.log(selectedRoom);
  };

  useEffect(() => {
    let meetingArr = [];
    buildingData.data.Buildings.forEach((x) => {
      if (x.name === buildingName) {
        meetingArr.push(x);
      }
    });
    setMeetings(meetingArr);
  }, [buildingName]);

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
                building={buildingName}
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
