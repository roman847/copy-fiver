import React from "react";
import Image from "next/image";
import { useAppSelector } from "app/hooks";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { starArr } from "services/index";
import style from "./style.module.scss";

const Gig = () => {
  const { currentGig } = useAppSelector((state) => state.app);
  const { img, desc, username, pp, star, price } = currentGig;

  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <div className={style.mainContent}>
          <div className={style.mainContentLeft}>
            <h3 className={style.contentDesc}>{desc}</h3>
            <div className={style.personData}>
              <div className={style.personAvatarContainer}>
                <div className={style.avatarContainer}>
                  <Image
                    src={pp}
                    width={50}
                    height={50}
                    alt={"avatar"}
                    className={style.personAvatar}
                  />
                </div>

                <h5 className={style.userName}>{username}</h5>
                <div className={style.starBlock}>
                  {starArr(star).map((item, index) => {
                    return (
                      <Image
                        key={"star" + index}
                        src={"/img/star.png"}
                        width={20}
                        height={20}
                        alt={"star"}
                        className={style.star}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <Image
              src={img}
              width={300}
              height={400}
              alt={"poster"}
              className={style.contentPoster}
            />
          </div>
          <div className={style.mainContentRight}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gig;
