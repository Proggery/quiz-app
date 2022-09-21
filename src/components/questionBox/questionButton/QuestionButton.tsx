import arrayShuffle from "array-shuffle";
import { FC } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Questions } from "../../../interfaces";
import { baseColors } from "../../../styles/Index.styled";
import Points from "../../points/Points";
import { QuestionButtonsStyled } from "../Questions.styled";
import QuestionsCount from "../questionsCount/QuestionsCount";

type IPROPS = {
  questions: Questions[];
  handlebutton: (item: string) => void;
  resetbutton: () => void;
  questionsArr: {};
};

const QuestionButton: FC<IPROPS> = (props) => {
  const { t } = useTranslation("questions");
  const data: Questions[] = t("questionsArray", { returnObjects: true });

  const { handlebutton, resetbutton, questions, questionsArr } = props;

  const currQuestion = localStorage.getItem("currVal");
  const currValToNumber = Number(currQuestion);

  const resultsArr: readonly unknown[] = data[currValToNumber]?.resultsArr;

  let shuffleArr;
  if (resultsArr) {
    shuffleArr = arrayShuffle(resultsArr);
  }

  return (
    <QuestionButtonsStyled>
      <Stack className="content py-3" direction="horizontal" gap={3}>
        <div className="buttons mt-3 mt-md-1">
          {shuffleArr !== undefined &&
            shuffleArr.map((item: any, index: number) => (
              <Button
                style={{
                  backgroundColor: baseColors.LightBlue,
                  color: baseColors.DarkGreen,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                }}
                key={index}
                onClick={() => handlebutton(item)}
              >
                {item}
              </Button>
            ))}
        </div>
        {questionsArr === undefined && <Points />}
        <QuestionsCount
          questionsArr={questionsArr}
          arrLength={questions.length}
          currLength={currValToNumber}
        />
        <Button
          className={questionsArr === undefined ? `ms-auto` : ""}
          variant="warning"
          onClick={resetbutton}
        >
          <h4 className="my-auto">{t("newGame")}</h4>
        </Button>
      </Stack>
    </QuestionButtonsStyled>
  );
};

export default QuestionButton;
