import React from "react";
import "./style/style.scss";
import plus from "../../../assets/icons/plus.svg";
type Props = {
  clickFun: () => void;
};

const SubButton = ({ src: clickFun }: { src: Props }) => {
  return (
    <>
      <button className="subButton" onClick={() => clickFun.clickFun()}>
        SUBMIT
      </button>
    </>
  );
};

export default SubButton;
