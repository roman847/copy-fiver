import React, { FC, useContext } from "react";
import Link from "next/link";
import { INavigationProps } from "core/interfaces/props";
import { Context } from "Context/context";
import style from "./style.module.scss";

const HeaderNav: FC<INavigationProps> = ({ list }) => {
  const { isActive } = useContext(Context);
  return (
    <div className={style.container}>
      <ul className={style.navList}>
        {list.map((item, index) => {
          return (
            <li
              className={isActive ? style.listItemActive : style.listItem}
              key={item.text + index}
            >
              <Link href={"./business"}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNav;
