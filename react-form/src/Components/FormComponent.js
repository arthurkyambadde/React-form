import React from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  width: 400px;
  height: 600px;
  color: #111;
  border: 2px solid gray;
  box-shadow: -1px -1px 5px #666;
  background-color: #11111;
`;

class FormComponent extends React.Component {
  render() {
    return <FormStyles> React FormComponent</FormStyles>;
  }
}

export default FormComponent;
