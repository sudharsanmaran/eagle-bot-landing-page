import "./style.css";
import { Logo } from "../Logo/Logo";
import CustomButton from "../Buttons/CustomButton";
import vector_right from "../../assets/png/bg_vector.png";
import DeviceScreenImage from "../../assets/png/device-screen.png";
import DeviceImage from "../../assets/png/device.png";
import BrowerImage from "../../assets/png/Browser.png";

export function Home() {
  const onJoinWaitlist = () => {
    console.log("Join Waitlist");
  };

  const onSucbscribe = () => {
    console.log("Join Waitlist");
  };

  return (
    <>
      <div className="banner_section">
        <div className="logo">
          <Logo />
        </div>
        <div className="banner_Content">
          <div className="content">
            <h1>Meet</h1>
            <h2>Eagle Bot,</h2>
            <p>
              Your Ultimate <br />
              Automation Browser.
            </p>
            <CustomButton
              buttonName={"JOIN WAITLIST"}
              onClick={onJoinWaitlist}
            />
          </div>
        </div>
        <div className="banner_img">
          <img src={vector_right} className="vector" />
          <img
            src={DeviceScreenImage}
            className="device"
            alt="eagle bot device image."
          />
        </div>
      </div>

      <div className="about_section">
        <h1>About</h1>
        <h2>Eagle Bot</h2>
        <p>
          Elevate your browsing and automation experience to new heights with
          Eagle-Bot, a cutting-edge chat-bot meticulously crafted to streamline
          your digital life. Powered by advanced Natural Language Processing,
          Computer Vision, and AI powered Robotic Process Automation (RPA)
          Engines, Eagle-Bot effortlessly transforms your commands into actions,
          all within a custom browser designed for seamless integration.
        </p>
        {/* <img src={BrowerImage}></img> */}
      </div>

      <div className="download_section">
        <h1>Just around the corner!</h1>
        <div className="download_content">
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="features_section">
        <div className="features_content"></div>
        <h2>A Browser, Chat Bot, Canvas & Automation Software</h2>
        <p>
          Eagle-Bot epitomizes the pinnacle of innovation in the dynamic realm
          of artificial intelligence. In synergy with industry leaders and
          through strategic alliances for content creation, it pushes the
          technological frontier, curating a bespoke and compelling experience
          for its users.
        </p>
      </div>

      <div className="subscribe_section">
        <h2>Experience a new way to perform Automations.</h2>
        <CustomButton buttonName={"SUBSCRIBE"} onClick={onSucbscribe} />
        {/* <img src={DeviceImage}></img> */}
      </div>

      <div className="footer">
        <div className="logo">
          <Logo />
        </div>
        <div className="footer_content">
          <h3>Be always up to date</h3>
          <input type="email" placeholder="Enter your email" />
          <p className="support">Contact us at support@eagle-bot.com</p>
          <div className="social_link"></div>
        </div>
      </div>
    </>
  );
}
