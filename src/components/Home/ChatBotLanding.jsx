import { Logo } from "../Logo/Logo";
import "./style.css";
import vector_right from "../../assets/png/bg_vector.png";
import DeviceScreenImage from "../../assets/png/device-screen.png";
export function Home() {
  return (
    <>
      <div className="banner_section">
        <div className="logo">
          <Logo />
        </div>
        <div className="banner_Content">
          <div className="content">
            <h1>Meat</h1>
            <h2>Eagle Bot,</h2>
            <p>
              Your Ultimate <br />
              Automation Browser.
            </p>
            <button>JOIN WAITLIST</button>
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
    </>
  );
}
