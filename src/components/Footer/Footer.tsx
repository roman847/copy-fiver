import React from "react";
import Link from "next/link";
import { useWindowSize } from "app/hooks";
import { IFooterColumnLink } from "core/interfaces/props/index";
import CustomSelect from "components/CustomSelect/CustomSelect";
import FooterColumn from "components/Footer/FooterColumn/FooterColumn";
import {
  Categories,
  About,
  Support,
  Community,
  MoreFromFiver,
} from "components/Footer/data";
import FooterButtom from "components/Footer/FooterBottom/FooterButtom";
import style from "./style.module.scss";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <div className={style.container}>
      <div className={style.footerTop}>
        {(width as number) > 620 && (
          <div className={style.containerColumns}>
            <FooterColumn
              title={"Categories"}
              links={Categories}
              linkPath={"/"}
            />
            <FooterColumn title={"Categories"} links={About} linkPath={"/"} />
            <FooterColumn title={"Categories"} links={Support} linkPath={"/"} />
            <FooterColumn
              title={"Categories"}
              links={Community}
              linkPath={"/"}
            />
            <FooterColumn
              title={"Categories"}
              links={MoreFromFiver}
              linkPath={"/"}
            />
          </div>
        )}
        {(width as number) <= 620 && (
          <ul className={style.selectList}>
            <CustomSelect title={"categories"}>
              {Categories.map((item: IFooterColumnLink, index: number) => {
                return (
                  <li key={item.titleLink + index} className={style.listItem}>
                    <Link href={"/"} className={style.listLink}>
                      {item.titleLink}
                    </Link>
                  </li>
                );
              })}
            </CustomSelect>
            <CustomSelect title={"about"}>
              {About.map((item: IFooterColumnLink, index: number) => {
                return (
                  <li key={item.titleLink + index} className={style.listItem}>
                    <Link href={"/"} className={style.listLink}>
                      {item.titleLink}
                    </Link>
                  </li>
                );
              })}
            </CustomSelect>
            <CustomSelect title={"support"}>
              {Support.map((item: IFooterColumnLink, index: number) => {
                return (
                  <li key={item.titleLink + index} className={style.listItem}>
                    <Link href={"/"} className={style.listLink}>
                      {item.titleLink}
                    </Link>
                  </li>
                );
              })}
            </CustomSelect>
            <CustomSelect title={"community"}>
              {Community.map((item: IFooterColumnLink, index: number) => {
                return (
                  <li key={item.titleLink + index} className={style.listItem}>
                    <Link href={"/"} className={style.listLink}>
                      {item.titleLink}
                    </Link>
                  </li>
                );
              })}
            </CustomSelect>
            <CustomSelect title={"more from fiver"}>
              {MoreFromFiver.map((item: IFooterColumnLink, index: number) => {
                return (
                  <li key={item.titleLink + index} className={style.listItem}>
                    <Link href={"/"} className={style.listLink}>
                      {item.titleLink}
                    </Link>
                  </li>
                );
              })}
            </CustomSelect>
          </ul>
        )}
      </div>
      <div className={style.footerBottom}>
        <hr />
        <FooterButtom />
      </div>
    </div>
  );
};

export default Footer;
