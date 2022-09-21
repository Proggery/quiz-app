import { FC } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Questions } from "../../../interfaces";
import { QuestionTextStyled } from "../Questions.styled";

type IPROPS = {
  currValToNumber: number;
};

const QuestionText: FC<IPROPS> = (props) => {
  const { t } = useTranslation("questions");
  const data: Questions[] = t("questionsArray", { returnObjects: true });

  const { currValToNumber } = props;

  const endGame = t("endGame");

  return (
    <QuestionTextStyled>
      <Col className="d-flex">
        <h2 className="m-auto">
          {data[currValToNumber]?.question !== undefined
            ? data[currValToNumber]?.question
            : endGame}
        </h2>
      </Col>
    </QuestionTextStyled>
  );
};

export default QuestionText;
