import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>User Name: {props.user}</p>
      <p>Change your user name if you'd like:</p>
    </div>
  );
};

export default userOutput;
