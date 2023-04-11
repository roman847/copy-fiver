import React, { FC, useContext } from "react";
import clsx from "clsx";
import { Context } from "Context/context";
import { IBlockAuthProps } from "core/interfaces/props/index";
import style from "./style.module.scss";

const BlockAuthBtn: FC<IBlockAuthProps> = ({ onClickJoin, onclickSign }) => {
  const { isActive } = useContext(Context);

  return (
    <div className={style.container}>
      <button
        className={isActive ? style.authBtnActive : style.authBtn}
        onClick={onclickSign}
      >
        Sign in
      </button>
      <button
        className={clsx(
          isActive ? style.authBtnActive : style.authBtn,
          style.joinBtn
        )}
        onClick={onClickJoin}
      >
        Join
      </button>
    </div>
  );
};

export default BlockAuthBtn;
