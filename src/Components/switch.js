import React, { useState } from "react";
import './switch.css'

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch-container" onClick={handleToggle}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <div className="switch-label on">°C</div>
        <div className="switch-label off">°F</div>
      </div>
    </div>
  );
};

export default Switch;
