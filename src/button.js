import React from "react";
import styled from "styled-components";

function Button({ title, click }) {
  return (
    <S.Button onClick={click}>
      <div>{title}</div>
    </S.Button>
  );
}

export default Button;

const S = {};

S.Button = styled.button`
  margin: 5rem;
  //   width: 20rem;
  //   height: 20rem;
  //   border: none;
  background-color: yellow;
  color: ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  cursor: pointer;

  div {
    font-size: 100px;
    font-weight: bold;
  }
`;
