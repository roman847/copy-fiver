import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

const SubMenu = () => {
  return (
    <div className={style.containerSubMenu}>
      <hr className={style.subMenuLine} />
      <div className={style.wrapperSubMenu}>
        <ul className={style.subMenuList}>
          <li className={style.listItem}>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Graphics &amp; Design
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Writing &amp; Translation
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Video &amp; Animation
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Music &amp; Audio
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Programming &amp; Tech
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Graphics &amp; Design
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Business
            </Link>
          </li>
          <li>
            <Link className={style.itemLink} href="/categoties/graphics-design">
              Lifestyle
            </Link>
          </li>
        </ul>
      </div>
      <hr className={style.subMenuLine} />
    </div>
  );
};

export default SubMenu;
