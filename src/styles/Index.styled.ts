import styled from "styled-components";

// Base colors
export const baseColors = {
  DarkGreen: "#000f08",
  Green: "#18CE00",
  DarkCyan: "#1c3738",
  LightCyan: "#8baaad",
  RosyBrown: "#4d4847",
  LightBlue: "#f4fff8",
  Red: "#FF001E",
};



export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${baseColors.DarkCyan};
  display: flex;
  box-sizing: border-box;
`;
