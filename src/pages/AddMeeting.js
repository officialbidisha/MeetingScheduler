import React, { useEffect, useRef, useState } from "react";
import { findGreaterTime } from "../utils";
import Dropdown from "../components/Dropdown";
import "./AddMeeting.css";
import buildingData from "../buildings.json";
import { useNavigate } from "react-router-dom";
const AddMeeting = () => {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [errors, setErrors] = useState([]);
  const startTimeRef = useRef(null);
  const [buildings, setBuildings] = useState([]);

  const navigate = useNavigate();

  const redirectToMeetingRoom = (
    date,
    startTime,
    endTime,
    selectedBuildingName
  ) => {
    let obj = {
      date,
      startTime,
      endTime,
      selectedBuildingName,
    };
    navigate("/freerooms", {
      state: { date, startTime, endTime, selectedBuildingName },
    });
  };


  const getSelectedValue = (event) => {
    setSelectedBuildingName(event.target.value);
  };
  /**
   * Select state
   */
  const [selectedBuildingName, setSelectedBuildingName] = useState(null);

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
      startTimeRef.current.value
    ) {
      setErrors((prev) => [...prev, { end_time: true }]);
    }
    setErrors(null)
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
          {errors.length > 0 && errors[0].end_time ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {" "}
              Start time is greater than end time
            </p>
          ) : null}
        </div>
        <div className="input-container">
          <label>Select Buildings</label>
          <select value={selectedBuildingName} onChange={getSelectedValue}>
            {buildings.map((building) => {
              return (
                <option
                  value={building}
                  selected={selectedBuildingName == building}
                >
                  {building}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <button
        className="next-btn"
        onClick={() =>
          redirectToMeetingRoom(date, startTime, endTime, selectedBuildingName)
        }
        disabled={errors.length > 0}
      >
        Next
      </button>
    </>
  );
};

export default AddMeeting;
