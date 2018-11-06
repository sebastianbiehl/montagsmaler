import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login";

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
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/orders" component={Login} />
        </Switch>
      </div>
    );

    // const { response } = this.state;
    // return (
    //   <div style={{ textAlign: "center" }}>
    //     {response ? (
    //       <p>The temperature in Florence is: {response} °F</p>
    //     ) : (
    //       <p>Loading...</p>
    //     )}
    //   </div>
    // );
  }
}

export default App;
