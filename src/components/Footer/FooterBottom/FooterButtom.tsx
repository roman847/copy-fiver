import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

const FooterButtom = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.footerLogo}>
          <b>fiverr</b>
          <span>&#174;</span>
        </div>
        <div className={style.leftText}>
          <span>&#169;</span>
          <p>Fiverr International Ltd. 2023</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.socialBlock}>
          <Link href={"https://twitter.com/"} className={style.socialBlockLink}>
            <Image
              src={"/img/social-icons/twitter.png"}
              width={50}
              height={50}
              className={style.socialBlockIcon}
              alt={"icon"}
            ></Image>
          </Link>
          <Link
            href={"https://www.facebook.com/"}
            className={style.socialBlockLink}
          >
            <Image
              src={"/img/social-icons/facebook.png"}
              width={50}
              height={50}
              className={style.socialBlockIcon}
              alt={"icon"}
            ></Image>
          </Link>
          <Link
            href={"https://www.linkedin.com/feed/"}
            className={style.socialBlockLink}
          >
            <Image
              src={"/img/social-icons/linkedin.png"}
              width={50}
              height={50}
              className={style.socialBlockIcon}
              alt={"icon"}
            ></Image>
          </Link>
          <Link
            href={"https://www.pinterest.com/"}
            className={style.socialBlockLink}
          >
            <Image
              src={"/img/social-icons/pinterest.png"}
              width={50}
              height={50}
              className={style.socialBlockIcon}
              alt={"icon"}
            ></Image>
          </Link>
          <Link
            href={"https://www.instagram.com/"}
            className={style.socialBlockLink}
          >
            <Image
              src={"/img/social-icons/instagram.png"}
              width={50}
              height={50}
              className={style.socialBlockIcon}
              alt={"icon"}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterButtom;
