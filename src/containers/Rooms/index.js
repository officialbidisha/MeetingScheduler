import React from "react";
import "./Rooms.css";
const Rooms = (props) => {
    const {no_of_rooms} = props;
    return (
        <div>
            {no_of_rooms}
        </div>
    )
}
export default Rooms;