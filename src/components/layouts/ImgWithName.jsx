import React from "react";
import Styles from "./style.module.css"

export const LogoWithName = ({style={}}) => {

  return (
    <div className={Styles.logoWithName} style={style}></div>
  );
};