import React, { Fragment, useEffect, useState } from "react";
import Buildings from "../containers/Buildings";
import buildingData from "../buildings.json";
import roomData from "../meetingRooms.json";
import Rooms from "../containers/Rooms";
import { getCurrentDate, getCurrentTime } from "../utils";

const InfoOfMeetings = () => {
  const [totalBuildings, setTotalBuildings] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);
  const [meetings, setMeetings] = useState(0);
  useEffect(() => {
    debugger;
    let meetingList = [];
    setTotalBuildings(buildingData.data.Buildings.length);
    setTotalRooms(roomData.data.MeetingRooms.length);
    const buildingDatas = (buildingData.data.Buildings);
    buildingDatas.forEach((buildingDatum)=>{
      if(buildingDatum.meetingRooms && buildingDatum.meetingRooms.length)
        meetingList.push(buildingDatum.meetingRooms);
    })
    setMeetings(meetingList);
    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime(true, true, false);
    let overLappingIntervals = getOverlappingIntervals(
      currentDate,
      currentTime,
      meetingList
    );
  }, [roomData, buildingData]);

  const getOverlappingIntervals = (currentDate, currentTime, meetings) => {
    debugger;
    console.log(currentDate);
    console.log(currentTime);
    console.log(meetings);
  };

  return (
    <Fragment>
      <Buildings no_of_buildings={totalBuildings}></Buildings>
      <Rooms no_of_rooms={totalRooms}></Rooms>
      {/* <Meetings total_meetings={meetings} current_meetings_at_the_moment={current_meetings_at_the_moment}></Meetings> */}
    </Fragment>
  );
};
export default InfoOfMeetings;
