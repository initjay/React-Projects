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
  // arrow function used since 'this' keyword is used
  userNameChangedHandler1 = event => {
    this.setState({
      userNames: [
        { user: event.target.value },
        { user: "noobmaster69" },
        { user: "theslayer77" }
      ]
    });
  };
  userNameChangedHandler2 = event => {
    this.setState({
      userNames: [
        { user: "jumpjam" },
        { user: event.target.value },
        { user: "theslayer77" }
      ]
    });
  };
  userNameChangedHandler3 = event => {
    this.setState({
      userNames: [
        { user: "jumpjam" },
        { user: "noobmaster69" },
        { user: event.target.value }
      ]
    });
  };
  // 'this' keyword would refer to eventlistener??? not class object?
  render() {
    // issue was: must pass Handler method to UserInput NOT Output. Output will update automatically when listening to state changes
    return (
      <div>
        <UserOutput user={this.state.userNames[0].user} />
        <UserInput
          changed={this.userNameChangedHandler1}
          currentName={this.state.userNames[0].user}
        />
        <UserOutput user={this.state.userNames[1].user} />
        <UserInput
          changed={this.userNameChangedHandler2}
          currentName={this.state.userNames[1].user}
        />
        <UserOutput user={this.state.userNames[2].user} />
        <UserInput
          changed={this.userNameChangedHandler3}
          currentName={this.state.userNames[2].user}
        />
      </div>
    );
  }
}

export default App;
