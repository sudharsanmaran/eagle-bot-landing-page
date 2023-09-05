import Style from "./customButton.module.css";

export const GoldenButton = ({ type, buttonName, style, onClick }) => {
  return (
    <button
      className={`${Style.goldenButton} ${Style.btn_anime}`}
      style={style}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};
