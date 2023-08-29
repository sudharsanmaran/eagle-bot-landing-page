import React from "react";
import EagleBotLogo from "../../../assets/png/eagle-bot-logo-apng-1.png";
import "./logo.css";
export const Logo = () => {
  return (
    <div className="logoWithName">
      <img
        src={EagleBotLogo}
        alt="Eagle Bot Logo"
        style={{ width: "100%", height: "auto" }}
      ></img>
    </div>
  );
};
