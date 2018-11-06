import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Room from "./components/Room/Room";
import Lobby from "./components/Lobby/Lobby";
import Profile from "./components/Profile/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/room" component={Room} />
          <Route path="/lobby" component={Lobby} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
