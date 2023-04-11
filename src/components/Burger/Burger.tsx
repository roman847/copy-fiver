import React, { FC, useContext } from "react";
import { Context } from "Context/context";
import style from "./style.module.scss";

const Burger: FC = () => {
  const { isActive } = useContext(Context);

  return (
    <div className={style.burger}>
      <div
        className={isActive ? style.burgerLineActive : style.burgerLine}
      ></div>
      <div
        className={isActive ? style.burgerLineActive : style.burgerLine}
      ></div>
      <div
        className={isActive ? style.burgerLineActive : style.burgerLine}
      ></div>
    </div>
  );
};

export default Burger;
