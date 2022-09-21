import { baseColors, device } from "./../../styles/Index.styled";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const QuestionContainerStyled = styled(Container)`
  position: relative;
`;

export const QuestionTextStyled = styled(Row)`
  border-radius: 10px 10px 0 0;
  background: ${baseColors.LightCyan};
  height: 200px;
  margin-top: 4rem;

  h2 {
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    color: ${baseColors.DarkGreen};

    @media ${device.sm} {
      font-size: 1.2rem;
    }
  }
  @media ${device.lg} {
    margin-top: 5rem;
  }
  @media ${device.sm} {
    height: 100px;
    /* min-height: 100vh; */
  }
`;

export const QuestionButtonsStyled = styled(Row)`
  border-radius: 0 0 10px 10px;
  background: ${baseColors.DarkGreen};

  .content {
    display: flex;
    flex-direction: column;

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      width: 80%;

      button {
        height: 50px;
      }

      @media ${device.md} {
        grid-template-columns: repeat(2, 1fr);
      }
      @media ${device.sm} {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    /* @media ${device.md} {
    } */
  }
`;
