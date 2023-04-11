import React, { FC } from "react";
import { IButtonCustom } from "core/interfaces/props/index";
import { ButtonCustomColor } from "core/enums/index";
import style from "./style.module.scss";

const ButtonCustom: FC<IButtonCustom> = ({ text, onClickHandler, color }) => {
  return (
    <div>
      <button
        className={
          !color || color === ButtonCustomColor.green
            ? style.searchBtn
            : style.searchBtnGray
        }
        onClick={() => {
          onClickHandler;
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonCustom;
