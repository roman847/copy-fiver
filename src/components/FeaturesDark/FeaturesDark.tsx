import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import ButtonCustom from "components/ButtonCustom/ButtonCustom";
import style from "./style.module.scss";

const FeaturesDark: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.featuresDarkLeft}>
          <div className={style.featuresDarkLogo}>
            <strong className={clsx(style.logoText, style.logoFiver)}>
              fiverr
            </strong>
            <span className={clsx(style.logoText, style.logoBusiness)}>
              business
            </span>
            <span className={clsx(style.logoText, style.logoNew)}>NEW</span>
          </div>

          <h2 className={style.featuresDarkTitle}>
            A business solution designed for <span>teams</span>
          </h2>
          <p className={style.featuresDarkDesc}>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <ul className={style.featuresDarkList}>
            <li className={style.featuresDarkListItem}>
              <Image
                className={style.listItemImg}
                src="/img/check.png"
                alt="icon"
                width="25"
                height="20"
              />
              <p className={style.itemTitle}>
                Connect to freelancers with proven business experience
              </p>
            </li>
            <li className={style.featuresDarkListItem}>
              <Image
                className={style.listItemImg}
                src="/img/check.png"
                alt="icon"
                width="25"
                height="20"
              />
              <p className={style.itemTitle}>
                Get matched with the perfect talent by a customer success
                manager
              </p>
            </li>
            <li className={style.featuresDarkListItem}>
              <Image
                className={style.listItemImg}
                src="/img/check.png"
                alt="icon"
                width="25"
                height="20"
              />
              <p className={style.itemTitle}>
                Manage teamwork and boost productivity with one powerful
                workspace
              </p>
            </li>
          </ul>
          <div className={style.wrapperBtn}>
            <Link className={style.btnLink} href={"#"}>
              <ButtonCustom text={"Explore Fiverr Business"} />
            </Link>
          </div>
        </div>
        <div className={style.featuresDarkRight}>
          <Image
            className={style.featuresDarkRightImg}
            src="/img/business-desktop-870-x2.png"
            width="600"
            height="500"
            alt="businnes-img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDark;
