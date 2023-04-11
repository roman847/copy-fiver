import React, { FC } from "react";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { IPopularListProps } from "core/interfaces/props/index";
import style from "./style.module.scss";

const PopularList: FC<IPopularListProps> = ({ popularList }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Popular:</h3>
      {popularList.map(({ path, text }, index) => {
        return (
          <div key={text + index}>
            <ButtonLink path={path} text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default PopularList;
