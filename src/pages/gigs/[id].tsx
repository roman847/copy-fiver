import React from "react";
import Link from "next/link";
import clsx from "clsx";
import GigCard from "components/GigCard/GigCard";
import Header from "components/Header/Header";
import { gigs as gigsList } from "data";
import Footer from "components/Footer/Footer";
import style from "./style.module.scss";

const Gigs = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <h3 className={style.title}>Al Artists</h3>
        <p className={style.desc}>
          Explore the boundaries art and technology with Fiver`s Al artists
        </p>
        <div className={style.filter}>
          <div className={style.texFieldsBlock}>
            <span className={style.filterDesc}>Budget</span>
            <input type="text" placeholder="min" className={style.textField} />
            <input
              type="text"
              placeholder="max"
              className={clsx(style.textField, style.maxField)}
            />
          </div>
          <div className={style.sortBlock}>
            <span className={style.filterDesc}>Sort by</span>
            <select name="" id="" className={style.sortSelect}></select>
          </div>
        </div>

        <div className={style.containerCards}>
          {gigsList.map((item, index) => {
            return (
              <Link href={`/gig/${item.id}`} key={item.id + index}>
                <GigCard gigCard={item} />
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gigs;
