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

// Media query
const size = {
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
};
export const device = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
};

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${baseColors.DarkCyan};
  display: flex;
  box-sizing: border-box;
  
  @media ${device.sm} {
    height: 100%;
    min-height: 100vh;
    padding-bottom: 5rem;
  }
`;
