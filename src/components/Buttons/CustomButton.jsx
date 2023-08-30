const CustomButton = (props) => {
  const { buttonName, onClick } = props
  return <button onClick={() => onClick()}>{buttonName}</button>;
};

export default CustomButton;
