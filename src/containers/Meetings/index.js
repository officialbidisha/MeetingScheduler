import React, { Fragment } from "react";
import "./Meetings.css";
const Meetings = (props) => {
  const { total_meetings, current_meetings_at_the_moment } = props;
  return (
    <Fragment>
      <div className="meeting-container">
        <p className="header">Meetings</p>
        <p>Total Meetings - {total_meetings} </p>
        <p>Current Meetings - {current_meetings_at_the_moment} </p>
      </div>
    </Fragment>
  );
};
export default Meetings;
