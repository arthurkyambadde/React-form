import React from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: 400px;
  height: 600px;
  color: #111;
  border: 2px solid gray;
  box-shadow: -1px -1px 5px #666;
  background-color: #f2f2f2;
`;

const SignUpHeading = styled.p`
  margin: 0;
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
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
  border-bottom: 2px solid #999;
  padding: 12px 20px;
  margin: 8px 0 0 0;
  box-sizing: border-box;
`;

class FormComponent extends React.Component {
  render() {
    return (
      <FormStyles>
        {" "}
        <SignUpHeading>Sign Up</SignUpHeading>
        <FormTextArea>
          <Input type="text" placeholder="user name"></Input>
          <Input type="email" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <Input type="password" placeholder="confirm password"></Input>
        </FormTextArea>
      </FormStyles>
    );
  }
}

export default FormComponent;
