import React from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default userInput;
