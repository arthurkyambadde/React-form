import React from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  width: 400px;
  height: 600px;
  color: #111;
  border: 1px solid gray;
`;

class FormComponent extends React.Component {
  render() {
    return <FormStyles> React FormComponent</FormStyles>;
  }
}

export default FormComponent;
