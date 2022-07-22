import SignUp from "./Components/SignUp";
import styled from "styled-components";
import React, { Suspense } from "react";
const LogIn = React.lazy(() => import("./Components/LogIn"));
// import LogIn from "./Components/LogIn";

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
      userFormDisplayed = (
        <Suspense>
          <LogIn switchFunction={this.changeToSignUp} />;
        </Suspense>
      );
    } else {
      userFormDisplayed = <SignUp switchFunction={this.changeToLogin} />;
    }

    return <AppContainer className="App">{userFormDisplayed}</AppContainer>;
  }
}

export default App;
