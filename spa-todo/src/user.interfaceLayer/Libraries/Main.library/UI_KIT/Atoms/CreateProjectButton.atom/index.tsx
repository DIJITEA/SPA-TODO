import React from "react";
import "./style/style.scss";
import plus from "../../../assets/icons/plus.svg";
type Props = {
  clickFun: () => void;
  openState: boolean;
};

const CPButton = ({ src: clickFun }: { src: Props }) => {
  return (
    <>
      {clickFun.openState ? (
        <button className="cPButton" onClick={() => clickFun.clickFun()}>
          <p className="cPButton__p">&#43;</p>
        </button>
      ) : (
        <button className="cPButton cPButton--close" onClick={() => clickFun.clickFun()}>
          <p className="cPButton__p cPButton__p--close">&#x26CC;</p>
        </button>
      )}
    </>
  );
};

export default CPButton;
