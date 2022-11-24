import React from "react";
import "./Meetings.css";
const Meetings = (props) => {
  const { total_meetings, current_meetings_at_the_moment } = props;
  return (
    <div>
      {total_meetings}
      {current_meetings_at_the_moment}
    </div>
  );
};
export default Meetings;
