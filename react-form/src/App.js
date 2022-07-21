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
  render() {
    return (
      <AppContainer className="App">
        <SignUp />
        <LogIn />
      </AppContainer>
    );
  }
}

export default App;
