import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "app/hooks";
import { ButtonCustomColor } from "core/enums/index";
import ButtonCustom from "components/ButtonCustom/ButtonCustom";
import style from "./style.module.scss";

const LogoMaker = () => {
  const screenWidth = useWindowSize();

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.contentWrapper}>
          <div className={style.logoLM}>
            <strong className={clsx(style.logoText, style.logoFiver)}>
              fiverr
            </strong>
            <span className={clsx(style.logoText, style.logoBusiness)}>
              logo
            </span>
            <span className={clsx(style.logoText, style.logoBusiness)}>
              maker
            </span>
          </div>

          <h2 className={style.title}>
            Make an incredible logo <br /> <span>in minutes</span>
          </h2>
          <p className={style.text}>
            Pre-designed by top talent. Just add your touch.
          </p>
          <div className={style.buttonWrapper}>
            <Link href={"#"} className={style.btnLink}>
              <ButtonCustom
                text={"Try Fiverr Logo Maker"}
                color={ButtonCustomColor.gray}
              />
            </Link>
          </div>
        </div>
        {(screenWidth.width as number) <= 950 && (
          <div className={style.wrapperBanner}>
            <Image
              src={
                (screenWidth.width as number) > 550
                  ? "/img/logo-maker-banner-tablet-852-2x.png"
                  : "/img/logo-maker-banner-mobile-552-2x.png"
              }
              className={style.banner}
              width="700"
              height={"700"}
              alt="logo-maker-banner"
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoMaker;
