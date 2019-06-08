import React from "react";

const userOutput = props => {
  return (
    <div>
      <p onChange={props.changed} value={props.name}>
        User Name: {props.user}
      </p>
      <p>Change your user name if you'd like:</p>
    </div>
  );
};

export default userOutput;
