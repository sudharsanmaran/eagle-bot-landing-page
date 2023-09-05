import "./logo.css";
import EagleBotLogoSvg from "../../assets/svg/eagle-bot-logo.svg";

export const EagleBotLogo = () => {
  return (
    <div className="logo-container">
      <img src={EagleBotLogoSvg} alt="Eagle bot logo"></img>

      <h3>Eagle&nbsp;Bot</h3>
    </div>
  );
};
