import React from "react";
import "./style/style.scss";
import plus from "../../../assets/icons/plus.svg";
type Props = {
  updateName: (ProjectName: string) => void;
};

const CustomInput = ({ src: updateName }: { src: Props }) => {
  return (
    <>
      <input className="customInput" onChange={(e) => updateName.updateName(e.target.value)} />
    </>
  );
};

export default CustomInput;
