import FormComponent from "./Components/FormComponent";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div`
  width: 100vw;
  height: 199vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer className="App">
        <FormComponent />
      </AppContainer>
    );
  }
}

export default App;
