import {ChangeEvent, FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Questions} from "../../interfaces";
import {baseColors} from "../../styles/Index.styled";
import IsSuccess from "../isSuccess/IsSuccess";
import QuestionButton from "./questionButton/QuestionButton";
import {QuestionContainerStyled} from "./Questions.styled";
import QuestionText from "./questionText/QuestionText";

const QuestionBox: FC = () => {
  const { i18n } = useTranslation("questions");
  const lang = String(localStorage.getItem("i18nextLng"));
  const { t } = useTranslation("questions");
  const data: Questions[] = t("questionsArray", { returnObjects: true });

  const currQuestion = localStorage.getItem("currVal");
  const succCount = localStorage.getItem("successCount");
  const errCount = localStorage.getItem("errorCount");

  const succToNumber = Number(succCount);
  const errToNumber = Number(errCount);
  const currValToNumber = Number(currQuestion);

  const [questions, setQuestions] = useState<Questions[]>([]);
  const [questionsArr, setQuestionsArr] = useState<{}>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [nextQuestion, setNextQuestion] = useState<boolean>(false);
  const [resultsArr, setResultsArr] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    setQuestions(data);
  }, []);

  useEffect(() => {
    if (nextQuestion === true) {
      setCurrentQuestion(currValToNumber);
    }
  }, [nextQuestion, currValToNumber]);

  useEffect(() => {
    setQuestionsArr(questions[currValToNumber]);
    const resArr = questions[currValToNumber]?.resultsArr;
    const res = questions[currValToNumber]?.result;
    setResultsArr(resArr);
    setResult(res);
  }, [questions, currValToNumber]);

  const handlebutton = (item: string) => {
    if (data[currValToNumber].result === item) {
      setIsSuccess(true);
      const countToString = String(succToNumber + 1);
      localStorage.setItem("successCount", countToString);
    } else {
      setIsSuccess(false);
      const countToString = String(errToNumber + 1);
      localStorage.setItem("errorCount", countToString);
    }

    setTimeout(() => {
      setNextQuestion(true);
      const currValToString = String(currValToNumber + 1);
      localStorage.setItem("currVal", currValToString);
      setIsSuccess(null);
    }, 3000);
    setNextQuestion(false);
  };

  const resetbutton = () => {
    localStorage.removeItem("currVal");
    localStorage.removeItem("successCount");
    localStorage.removeItem("errorCount");
    setQuestionsArr({});
  };

  const QuestionButtonProps = {
    questions,
    handlebutton,
    resetbutton,
    questionsArr,
  };

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <QuestionContainerStyled>
      <div className="d-flex">
        <h5 style={{color: baseColors.LightBlue}}>Language: </h5>
        <select
          className="ms-2"
          onChange={(e) => handleLangChange(e)}
          value={lang}
        >
          <option value="hu">Magyar</option>
          <option value="de">Deutsch</option>
        </select>
        <IsSuccess
          result={result}
          isSuccess={isSuccess}
          currValToNumber={currValToNumber}
        />
      </div>
      <QuestionText currValToNumber={currValToNumber} />
      <QuestionButton {...QuestionButtonProps} />
    </QuestionContainerStyled>
  );
};

export default QuestionBox;
