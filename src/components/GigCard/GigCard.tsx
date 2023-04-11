import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import { useAppDispatch } from "app/hooks";
import { setCurrentGig } from "features/app/appSlice";
import { IGigsItem } from "data";
import style from "./style.module.scss";

export interface IGigCardProps {
  gigCard: IGigsItem;
}
const GigCard: FC<IGigCardProps> = ({ gigCard }) => {
  const { price, username, star, img, pp, desc } = gigCard;
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setCurrentGig(gigCard));
  };

  return (
    <Card
      sx={{
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      onClick={clickHandler}
    >
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <div className={style.cardContent}>
        <div className={style.person}>
          <Image
            src={pp}
            alt={"avatar"}
            width={40}
            height={40}
            className={style.personAvatar}
          ></Image>
          <h5 className={style.personName}>{username}</h5>
        </div>
        <h5 className={style.cardDesc}>{desc}</h5>
        <div className={style.rate}>
          <Image
            src={"/img/star.png"}
            width={30}
            height={30}
            alt={"star-icon"}
            className={style.rateImg}
          ></Image>
          <span>{star}</span>
        </div>
        <hr className={style.cardLine} />
        <div className={style.cardFooter}>
          <Image
            src={"/img/heart.png"}
            width={30}
            height={30}
            alt={"star-icon"}
            className={style.heartIcon}
          ></Image>
          <div className={style.priceblock}>
            <span className={style.priceText}>starting at</span>
            <div className={style.price}>
              <span className={style.priceNumber}>&#36;{price}</span>
              <span className={style.cent}>99</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GigCard;
