import React, { FC } from "react";
import Image from "next/image";
import { Player, BigPlayButton } from "video-react";
import style from "./style.module.scss";

const Features: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.featuresLeft}>
          <h2 className={style.featuresTitle}>
            A whole world of freelance talent at your fingertips
          </h2>
          <ul className={style.featuresList}>
            <li className={style.featuresListItem}>
              <div className={style.titleBlock}>
                <Image src="/img/check.png" alt="icon" width="25" height="20" />
                <p className={style.itemTitle}>The best for every budget</p>
              </div>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </li>
            <li className={style.featuresListItem}>
              <div className={style.titleBlock}>
                <Image src="/img/check.png" alt="icon" width="25" height="20" />
                <p className={style.itemTitle}>Quality work done quickly</p>
              </div>
              ind the right freelancer to begin working on your project within
              minutes.
            </li>
            <li className={style.featuresListItem}>
              <div className={style.titleBlock}>
                <Image src="/img/check.png" alt="icon" width="25" height="20" />
                <p className={style.itemTitle}>
                  Protected payments, every time
                </p>
              </div>
              Always know what you shall pay upfront. Your payment isn not
              released until you approve the work.
            </li>
            <li className={style.featuresListItem}>
              <div className={style.titleBlock}>
                <Image src="/img/check.png" alt="icon" width="25" height="20" />
                <p className={style.itemTitle}>24/7 support</p>
              </div>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </li>
          </ul>
        </div>
        <div className={style.featuresRight}>
          <Player poster="/img/selling-proposition-still-1400-x1.png">
            <source src="/video/video-features.mp4" />
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </div>
  );
};

export default Features;
