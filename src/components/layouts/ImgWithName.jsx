import React from "react";
import Styles from "./style.module.css"
import EagleBotLogo from '../../assets/png/eagle-bot-logo-apng-1.png';

export const LogoWithName = ({style={}}) => {

  return (
    <div className={Styles.logoWithName} style={style}>
      <img src={EagleBotLogo} alt="Eagle Bot Logo" style={{width: '100%', height: 'auto'}}></img>
    </div>
  );
};