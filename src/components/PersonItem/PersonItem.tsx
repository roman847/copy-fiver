import React, { FC } from "react";
import { Player, BigPlayButton } from "video-react";
import style from "./style.module.scss";

interface IPersonItemProps {
  video: string;
  poster?: string;
  name: string;
  profession: string;
  quote: string;
}

const PersonItem: FC<IPersonItemProps> = ({
  video,
  poster,
  name,
  profession,
  quote,
}) => {
  return (
    <div className={style.container}>
      <div className={style.playerWrapper}>
        <Player poster={poster}>
          <source src={video} />
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className={style.content}>
        <h5 className={style.contentTitle}>
          {name}, <span>{profession}</span>
        </h5>
        <blockquote className={style.contentQuote}>
          <q>{quote}</q>
        </blockquote>
      </div>
    </div>
  );
};

export default PersonItem;
