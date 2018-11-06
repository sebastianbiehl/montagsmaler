import React from "react";

class Login extends React.Component {
  state = {
    signInEmail: "",
    signInPassword: ""
  };

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  render() {
    return <div>Login</div>;
  }
}

export default Login;
