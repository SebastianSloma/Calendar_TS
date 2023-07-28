import React from "react";
import { Calendar } from "./Calendar";

// eslint-disable-next-line no-empty-pattern
export const DatePicker: React.FC<{}> = ({}) =>{
return(
    <div className="date-picker-container">
        <div className="background-container"></div>
        <Calendar/>
    </div>
)
}
