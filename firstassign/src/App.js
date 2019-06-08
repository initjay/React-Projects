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
    otherText: "Some type of statement"
  };

  userNameChangedHandler = event => {
    this.setState({
      userNames: [
        { user: event.target.value },
        { user: "noobmaster69" },
        { user: "theslayer77" }
      ]
    });
  };

  render() {
    return (
      <div>
        <UserOutput
          user={this.state.userNames[0].user}
          changed={this.userNameChangedHandler}
        />
        <UserInput />
        <UserOutput user={this.state.userNames[1].user} />
        <UserInput />
        <UserOutput user={this.state.userNames[2].user} />
        <UserInput />
      </div>
    );
  }
}

export default App;
