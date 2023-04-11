import React, { FC } from "react";
import Link from "next/link";

import {
  IFooterColumnLink,
  IFooterColumnProps,
} from "core/interfaces/props/index";
import style from "./style.module.scss";

const FooterColumn: FC<IFooterColumnProps> = ({ links, title, linkPath }) => {
  return (
    <div className={style.container}>
      <h5 className={style.columnTitle}>{title}</h5>
      <ul className={style.columnList}>
        {links.map((item: IFooterColumnLink, index: number) => {
          return (
            <div key={item.titleLink + index}>
              <li className={style.listItem}>
                <Link className={style.itemLink} href={linkPath}>
                  {item.titleLink}
                </Link>
              </li>
              {item.desc && (
                <Link href={"/"} className={style.underLink}>
                  {item.desc}
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterColumn;
