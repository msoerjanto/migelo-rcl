import React from "react";
import styled from "styled-components";
export interface ButtonProps {
  label: string;
}

const ButtonWrapper = styled.h1`
/* Adapt the colors based on primary prop */
  background: "palevioletred";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props: ButtonProps) => {
  return <ButtonWrapper>{props.label}</ButtonWrapper>;
};

export default Button;