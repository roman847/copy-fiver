import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "app/hooks";
import { IServiceItemProps } from "core/interfaces/props/index";
import { setGigsCategory } from "features/app/appSlice";
import style from "./style.module.scss";

const ServiceItem: FC<IServiceItemProps> = ({ img, title, desc, id }) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(
      setGigsCategory({
        img: img,
        title: title,
        desc: desc,
        id: id,
      })
    );
  };
  return (
    <div className={style.container}>
      <Link href={`/gigs/${id}`} onClick={clickHandler}>
        <h4 className={style.desc}>{desc}</h4>
        <h3 className={style.title}>{title}</h3>
        <Image
          src={img}
          width="100"
          height="100"
          alt="service-img"
          className={style.itemImage}
        ></Image>
      </Link>
    </div>
  );
};

export default ServiceItem;
