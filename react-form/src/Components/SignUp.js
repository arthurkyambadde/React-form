import React from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  width: 400px;
  color: #111;
  border: 2px solid gray;
  box-shadow: -3px -2px 10px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
`;

const SignUpHeading = styled.p`
  margin: 0;
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
  color: #111;
`;

const FormTextArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #999;
  padding: 12px 20px;
  margin: 8px 0 0 0;
  color: #111;
  letter-spacing: 1.5px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 4px;
  &::placeholder {
    color: #9999;
    font-size: 16px;
    font-weight: 100px;
  }
  &:focus,
  &:active {
    border: none;
    color: #555;
    font-size: 16px;
    letter-spacing: 1.5px;
    font-weight: 400;
  }
`;

const Submit = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(0, 188, 212);
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 2px #fff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 16px;
  animation: 0.1s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const LogInTag = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Login = styled.p`
  color: rgb(0, 188, 212);
  text-decoration: underline;
  padding: 4px;
  margin: 0;
  cursor: pointer;
  animation: 1s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      signUp: true,
    };

    this.signUpInputRef = React.createRef();
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

  componentDidMount() {
    this.signUpInputRef.current.focus();
  }

  render() {
    return (
      <FormStyles>
        <SignUpHeading>Sign Up</SignUpHeading>
        <FormTextArea>
          <Input
            value={this.state.username}
            type="text"
            placeholder="user name"
            onChange={this.handleUsernameChange}
            ref={this.signUpInputRef}
          ></Input>
          <Input
            value={this.state.email}
            type="email"
            placeholder="email"
            onChange={this.handleEmailChange}
          ></Input>
          <Input
            value={this.state.password}
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          ></Input>
          <Input
            value={this.state.confirmPassword}
            type="password"
            placeholder="confirm password"
            onChange={this.handleConfirmPasswordChange}
          ></Input>
        </FormTextArea>
        <Submit>SUBMIT</Submit>
        <LogInContainer>
          <LogInTag>Aleady have an account ?</LogInTag>
          <Login onClick={this.props.switchFunction}>Log in here</Login>
        </LogInContainer>
      </FormStyles>
    );
  }
}

export default SignUp;
