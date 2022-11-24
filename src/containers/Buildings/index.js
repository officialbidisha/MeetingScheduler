import React from "react";
import "./Buildings.css";
const Buildings = (props) => {
    const {no_of_buildings} = props;
    return (
        <div>
            {no_of_buildings}
        </div>
    )
}
export default Buildings;