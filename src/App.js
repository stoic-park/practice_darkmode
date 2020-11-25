import React from "react";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      bgColor: "black",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        <button>모드 전환</button>
      </S.Main>
    </ThemeProvider>
  );
}

export default App;

const S = {};
S.Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.colors.bgColor}; //props.theme를 통해 값을 받는다
`;
