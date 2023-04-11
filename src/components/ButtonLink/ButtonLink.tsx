import Link from "next/link";
import React, { FC } from "react";
import { IButtonListProps } from "core/interfaces/props/index";
import style from "./style.module.scss";

const ButtonLink: FC<IButtonListProps> = ({ path, text }) => {
  return (
    <div className={style.container}>
      <Link href={path} className={style.btn} target={"_blank"}>
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;
