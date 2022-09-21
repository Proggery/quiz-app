import {FC} from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {baseColors} from "../../styles/Index.styled";

const Points: FC = () => {
  const { t } = useTranslation("questions");
  const data: { success: string; error: string } = t("endResults", {
    returnObjects: true,
  });

  const succCount = localStorage.getItem("successCount");
  const errCount = localStorage.getItem("errorCount");

  const succToNumber = Number(succCount);
  const errToNumber = Number(errCount);

  return (
    <Row className="w-75">
      <Col>
        <h4 className="m-0" style={{ color: baseColors.LightBlue }}>
          {data.success}
          <span className="ms-2 display-6" style={{ color: baseColors.Green }}>
            {succToNumber}
          </span>
        </h4>
      </Col>
      <Col>
        <h4 className="m-0" style={{ color: baseColors.LightBlue }}>
          {data.error}
          <span className="ms-2 display-6" style={{ color: baseColors.Red }}>
            {errToNumber}
          </span>{" "}
        </h4>
      </Col>
    </Row>
  );
};

export default Points;
