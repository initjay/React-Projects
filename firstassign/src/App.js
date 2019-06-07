import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userNames: [
      { user: "jumpjam" },
      { user: "noobmaster69" },
      { user: "theslayer77" }
    ],
    security: "Some type of statement"
  };

  render() {
    return (
      <div>
        <UserInput />
        <UserOutput user={this.state.userNames[0].user} />
        <UserOutput user={this.state.userNames[1].user} />
        <UserOutput user={this.state.userNames[2].user} />
      </div>
    );
  }
}

export default App;
