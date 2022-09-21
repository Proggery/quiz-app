import {Container, Row} from "react-bootstrap";
import styled from "styled-components";
import {baseColors} from "../../styles/Index.styled";

export const QuestionContainerStyled = styled(Container)`
  width: 800px;
  position: relative;
`;

export const QuestionTextStyled = styled(Row)`
  border-radius: 10px 10px 0 0;
  background: ${baseColors.LightCyan};
  height: 200px;
  margin-top: 4rem;
`;

export const QuestionButtonsStyled = styled(Row)`
  border-radius: 0 0 10px 10px;
  background: ${baseColors.DarkGreen};
`;
