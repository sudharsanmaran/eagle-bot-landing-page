import React from "react";
import "./style.css";
import { EagleBotButton } from "../../components/CustomButton";
import { BlackContainer, GoldenAnime, PurpleAnime } from "../../components/layouts/Container";
import { LogoWithName } from "../../components/layouts/ImgWithName";

const ChatBotLanding = () => {
  return (
   <BlackContainer>

      <LogoWithName style={{position: 'absolute', top: 38, left: 100}}/>

      <div className="test">
        <GoldenAnime />
      </div>
        {/* <PurpleAnime /> */}

   </BlackContainer>
  );
};

export default ChatBotLanding;

