import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const StartDatePicker = (props) => {
  return (
    <div style={
      {display: "flex", flexDirection: "column", padding: "20px"}}>
    <div style={
      {fontSize: "12px", fontWeight: "bold", color: "#444444"}}>
    From:
    </div>
    <DatePicker selected={new Date(props.startDate)} onChange={props.onStartDateSelect} />
    </div>
  );
};

export const EndDatePicker = (props) => {
  return (
    <div style={
      {display: "flex", flexDirection: "column", padding: "20px"}}>
    <div style={
      {fontSize: "12px", fontWeight: "bold", color: "#444444"}}>
    To:
    </div>
    <DatePicker selected={new Date(props.endDate)} onChange={props.onEndDateSelect} />
    </div>
  );
};