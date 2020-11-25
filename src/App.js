import React, { useState } from "react";
import Button from "./button";
import styled, { ThemeProvider } from "styled-components";
import { dark, light } from "./theme"; // 환경 구분

function App() {
  // const theme = {
  //   colors: {
  //     bgColor: "black",
  //   },
  // };
  const [mode, setMode] = useState("light"); // 기본 테마
  const theme = mode === "light" ? light : dark; // 환경에 맞게 값 변경

  const handleThemeButton = () => setMode(mode === "light" ? "dark" : "light"); // 값에 따라 변경

  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        {/* <button>모드 전환</button> */}
        <Button
          title={theme === "light" ? "밝은 화면" : "어두운 화면"}
          click={handleThemeButton}
        />
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
