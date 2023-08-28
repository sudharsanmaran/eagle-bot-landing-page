import React from "react";
import "./style.css";
import { EagleBotButton } from "../../components/CustomButton";
import { BlackContainer, GoldenPurpleAnime } from "../../components/layouts/Container";
import { LogoWithName } from "../../components/layouts/ImgWithName";
import DeviceScreenImage from '../../assets/png/device-screen.png';

const ChatBotLanding = () => {
  return (
   <BlackContainer>

      <LogoWithName style={{position: 'absolute', top: '3%', left: '6%'}}/>

      <div className="content-with-anime">

        <div className="page1-cont">
          <div className="meet">Meet</div>
          <div className="cont-1" style={{fontSize: '4.5vw', fontWeight: '600'}}>Eagle Bot,</div>
          <div className="cont-1" style={{fontSize: '3vw', paddingTop: '4%', fontWeight: '600'}}>Your Ultimate Automation Browser.</div>
          <EagleBotButton buttonName={'JOIN WAITLIST'} style={{ fontSize: '2vw', margin: '5% 0 0 3%'}} />
        </div>

        <div className="golden-anime-group">
          <GoldenPurpleAnime />
        </div>

      </div>

      <div className="device-screen">
        <div className="device-screen-img">
          <img src={DeviceScreenImage} alt="eagle bot device image."></img>
        </div>
        <div className="device-keyboard"></div>
      </div>
      
   </BlackContainer>
  );
};

export default ChatBotLanding;

