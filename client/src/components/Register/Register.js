import React from "react";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return <div>Register</div>;
  }
}

export default Register;
