import SignUp from "./Components/SignUp";
import styled from "styled-components";
import React from "react";
import LogIn from "./Components/LogIn";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4c91ad;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
    };
  }

  changeToSignUp = () => {
    this.setState({
      isUser: false,
    });
  };

  changeToLogin = () => {
    this.setState(
      {
        isUser: true,
      }
      // () => {
      //   console.log(this.isUser);
      // }
    );
  };

  render() {
    let userFormDisplayed;

    if (this.state.isUser) {
      userFormDisplayed = <LogIn switchFunction={this.changeToSignUp} />;
    } else {
      userFormDisplayed = <SignUp switchFunction={this.changeToLogin} />;
    }

    return <AppContainer className="App">{userFormDisplayed}</AppContainer>;
  }
}

export default App;
