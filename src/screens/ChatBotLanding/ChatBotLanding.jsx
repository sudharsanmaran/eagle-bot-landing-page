import React from "react";
import "./style.css";
import { EagleBotButton } from "../../components/CustomButton";
import { GoldenPurpleAnime } from "../../components/layouts/Container";
import { Logo } from "../../components/layouts/logo/Logo";
import DeviceScreenImage from "../../assets/png/device-screen.png";

const ChatBotLanding = () => {
  return (
    <>
      <div className="content-with-anime">
        <div>
          <Logo />
          <div className="banner">
            <div className="page1-cont">
              <h1>Meet</h1>
              <h2>Eagle Bot,</h2>
              <p>Your Ultimate Automation Browser.</p>
              <EagleBotButton
                buttonName={"JOIN WAITLIST"}
                style={{ fontSize: "1.6vw", margin: "5% 0 0 3%" }}
              />
            </div>
          </div>
          {/* <div>
            <GoldenPurpleAnime></GoldenPurpleAnime>
          </div> */}

          {/* <div className="meet">Meet</div>
          <div
            className="cont-1"
            style={{ fontSize: "4.5vw", fontWeight: "600" }}
          >
            Eagle Bot,
          </div>
          <div
            className="cont-1"
            style={{ fontSize: "3vw", paddingTop: "5%", fontWeight: "600" }}
          >
            Your Ultimate Automation Browser.
          </div>
          <EagleBotButton
            buttonName={"JOIN WAITLIST"}
            style={{ fontSize: "1.6vw", margin: "5% 0 0 3%" }}
  />*/}
        </div>
        {/* <div className="golden-anime-group">
          <GoldenPurpleAnime />
        </div> */}
      </div>
      {/* <div className="device-screen-img">
           <img src={DeviceScreenImage} alt="eagle bot device image." style={{width: '100%', height: '100%'}}></img>
         </div> */}

      <div>
        <h1 style={{ color: "#FFF" }}></h1>
      </div>
    </>
  );
};

export default ChatBotLanding;
