import React, { useEffect, useRef, useState } from "react";
import { findGreaterTime } from "../utils";
import Dropdown from "../components/Dropdown";
import "./AddMeeting.css";
import buildingData from "../buildings.json";
const AddMeeting = () => {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [errors, setErrors] = useState([]);
  const startTimeRef = useRef(null);
  const [buildings, setBuildings] = useState([]);

  /**
   * Select state
   */
  const [optionState, setOptionState] = useState(null);

  useEffect(() => {
    const buildingDatas = buildingData.data.Buildings;
    let buildingNames = [];
    buildingDatas.forEach((buildingDatum) => {
      buildingNames.push(buildingDatum.name);
    });
    setBuildings(buildingNames);
  }, [buildingData]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    if (
      findGreaterTime(startTimeRef.current.value, e.target.value) ===
      startTimeRef
    ) {
      setErrors((prev) => [...prev, { end_time: true }]);
    }
    setEndTime(e.target.value);
  };

  return (
    <>
      <h3>Add a Meeting</h3>
      <form>
        <div className="input-container">
          <label>
            Date:{" "}
            <input
              type="date"
              name="date"
              data-date=""
              data-date-format="DD/MM/YYYY"
              onChange={handleDateChange}
            />{" "}
          </label>
        </div>
        <div className="input-container">
          <label>
            Start Time:
            <input
              type="time"
              id="startTime"
              name="statTime"
              onChange={handleStartTimeChange}
              value={startTime}
              ref={startTimeRef}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            End Time:
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>Select Buildings</label>
          <select value={optionState}>
            {buildings.map((building) => {
              return (
                <option value={building} selected={optionState == building}>
                  {building}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <button className="next-btn">Next</button>
    </>
  );
};

export default AddMeeting;
