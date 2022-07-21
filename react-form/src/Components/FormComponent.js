import React from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 400px;
  height: 600px;
  color: #111;
  border: 2px solid gray;
  box-shadow: -1px -1px 5px #666;
  background-color: #11111;
`;

const SignUpHeading = styled.p`
  margin: 0;
  display: block;
  font-size: 32px;
  font-weight: bold;
`;

class FormComponent extends React.Component {
  render() {
    return (
      <FormStyles>
        {" "}
        <SignUpHeading>Sign Up</SignUpHeading>
      </FormStyles>
    );
  }
}

export default FormComponent;
