import React, { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";

const Explore: FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.exploreTitle}>Explore the marketplace</h2>
      <div className={style.exploreList}>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/graphics-design.d32a2f8.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Graphics &amp; Design</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/online-marketing.74e221b.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Digital Marketing</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/writing-translation.32ebe2e.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Writing &amp; Translation</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/video-animation.f0d9d71.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Video &amp; Animation</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/music-audio.320af20.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Music &amp; Audio</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/programming.9362366.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Programming &amp; Tech</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/business.bbdf319.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Business</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/lifestyle.745b575.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Lifestyle</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/data.718910f.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Data</p>
        </div>
        <div className={style.exploreListItem}>
          <Image
            className={style.itemImage}
            src={"/img/explore/photography.01cf943.svg"}
            width="50"
            height="50"
            alt="explore-icon"
          ></Image>
          <p>Photography</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
