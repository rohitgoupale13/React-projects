import "./toggleswitch.css";
import { useState } from "react";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handletoggleswitch = () => {
    setIsOn(!isOn);
  };
  const bgColor = { backgroundColor: isOn ? "#4caf50" : "" };
  const isOnvariable = isOn ? "on" : "off";
  return (
    <div className="toggle-switch" onClick={handletoggleswitch} style={bgColor}>
      <div className={`switch ${isOnvariable}`}>
        <span className="switch-state">{isOnvariable}</span>
      </div>
    </div>
  );
};
