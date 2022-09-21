import { FC } from "react";
import { baseColors } from "../../../styles/Index.styled";

type IPROPS = {
  arrLength: number;
  currLength: number;
  questionsArr: {};
};

const QuestionsCount: FC<IPROPS> = ({
  arrLength,
  currLength,
  questionsArr,
}) => {
  return (
    <>
      {questionsArr !== undefined && (
        <div className={`d-flex mx-auto`}>
          <h4 className="my-auto" style={{ color: baseColors.LightBlue }}>
            {currLength + 1} / {arrLength}
          </h4>
        </div>
      )}
    </>
  );
};
export default QuestionsCount;
