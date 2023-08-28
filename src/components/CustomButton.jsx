import React from "react";
import "./button.css";

export const EagleBotButton = ({style={}, buttonName=''}) => {
  return (
      <button className="custom-btn shade-me" style={style}>{buttonName}</button>
  );
};