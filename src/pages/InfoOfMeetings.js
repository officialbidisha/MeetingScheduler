import React, { Fragment, useEffect, useState } from "react";
import Buildings from "../containers/Buildings";
import buildingData from "../buildings.json";
import roomData from "../meetingRooms.json";
import Rooms from "../containers/Rooms";
import Meetings from "../containers/Meetings";
import { getCurrentDate, getCurrentTime, findGreaterTime } from "../utils";

const InfoOfMeetings = () => {
  const [totalBuildings, setTotalBuildings] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);
  const [meetings, setMeetings] = useState(0);
  const [currentMeetings, setCurrentMeetings] = useState(null);
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    let meetingList = [];
    let buildingNames = [];
    setTotalBuildings(buildingData.data.Buildings.length);
    setTotalRooms(roomData.data.MeetingRooms.length);
    const buildingDatas = buildingData.data.Buildings;
    buildingDatas.forEach((buildingDatum) => {
      if (buildingDatum.meetingRooms && buildingDatum.meetingRooms.length)
        meetingList.push(buildingDatum.meetingRooms);
      buildingNames.push(buildingDatum.name);
    });
    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime(true, true, false);
    debugger;
    let overLappingIntervals = getMeetings(
      currentDate,
      currentTime,
      meetingList
    );
    console.log("overlapping intervals", overLappingIntervals);
    setBuildings(buildingNames);
    setMeetings(overLappingIntervals.totalNumberOfMeetingsToday);
    setCurrentMeetings(overLappingIntervals.currentMeetings);
  }, [roomData, buildingData]);

  const getMeetings = (currentDate, currentTime, meetings) => {
    debugger;
    let totalNumberOfMeetingsToday = 0;
    let currentMeetings = 0;
    /**
     * Find the overlapping time slots
     */
    meetings.forEach((meeting) => {
      meeting.forEach((individualMeeting) => {
        let meetingArr = individualMeeting.meetings;
        meetingArr.forEach((m) => {
          if (m.date === currentDate) {
            totalNumberOfMeetingsToday++;
            if (
              findGreaterTime(m.startTime, currentTime) === currentTime &&
              findGreaterTime(m.endTime, currentTime) === m.endTime
            ) {
              currentMeetings++;
            }
          }
        });
      });
    });

    return { totalNumberOfMeetingsToday, currentMeetings };
  };

  return (
    <Fragment>
      <Buildings no_of_buildings={totalBuildings}></Buildings>
      <Rooms no_of_rooms={totalRooms}></Rooms>
      <Meetings
        total_meetings={meetings}
        current_meetings_at_the_moment={currentMeetings}
      ></Meetings>
      <button>Add a Meeting</button>
    </Fragment>
  );
};
export default InfoOfMeetings;
