import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Questions } from "../../interfaces";
import { baseColors } from "../../styles/Index.styled";

type IPROPS = {
  isSuccess: boolean | null;
  result: string;
  currValToNumber: number;
};

const IsSuccess: FC<IPROPS> = ({ isSuccess, result, currValToNumber }) => {
  const { t } = useTranslation("questions");
  const data: Questions[] = t("questionsArray", { returnObjects: true });

  const success: { color: string; top: string; left: number } = {
    color: baseColors.Green,
    top: "-8rem",
    left: 0,
  };

  return (
    <>
      {isSuccess !== null && (
        <div
          className={`text-center w-100 position-absolute`}
          style={isSuccess ? success : { ...success, color: baseColors.Red }}
        >
          {isSuccess ? (
            <h1>{t("successResult")}</h1>
          ) : (
            <div>
              <h1>
                {t("errorResult")}
                <span className="ms-3 text-info">
                  {data[currValToNumber].result}
                </span>
              </h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IsSuccess;
