import { useMediaQuery } from "@material-ui/core";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Questions } from "../../interfaces";
import { baseColors, device } from "../../styles/Index.styled";

type IPROPS = {
  isSuccess: boolean | null;
  result: string;
  currValToNumber: number;
};

const IsSuccess: FC<IPROPS> = ({ isSuccess, result, currValToNumber }) => {
  const { t } = useTranslation("questions");
  const data: Questions[] = t("questionsArray", { returnObjects: true });

  const mediaLG = useMediaQuery(device.lg);
  const mediaMD = useMediaQuery(device.md);
  const mediaSM = useMediaQuery(device.sm);

  const success: { color: string; top: string } = {
    color: baseColors.Green,
    top: mediaSM ? "3.2rem" : mediaMD ? "2.4rem" : mediaLG ? "1rem" : "-1rem",
  };

  const successH1: { fontSize: number } = {
    fontSize: mediaSM ? 20 : mediaMD ? 25 : 40,
  };

  return (
    <>
      {isSuccess !== null && (
        <div
          className={`mt-2 mt-sm-4 mt-lg-0 text-md-center text-lg-end w-100 position-absolute pe-3`}
          style={isSuccess ? success : { ...success, color: baseColors.Red }}
        >
          {isSuccess ? (
            <h1 style={successH1}>{t("successResult")}</h1>
          ) : (
            <div>
              <h1 style={successH1}>
                {t("errorResult")}
                <span className="ms-1 ms-md-3 text-info">
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
