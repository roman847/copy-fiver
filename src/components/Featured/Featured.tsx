import React, { useState } from "react";
import Image from "next/image";
import SearchField from "components/SearchField/SearchField";
import PopularList from "components/Featured/components/PopularList";
import style from "./style.module.scss";

const Feature = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.featureLeft}>
          <h1 className={style.title}>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <SearchField handler={searchHandler} fieldValue={searchValue} />
          <PopularList
            popularList={[
              { path: "#", text: "Website Design" },
              { path: "#", text: "WordPress" },
              { path: "#", text: "Logo Design" },
              { path: "#", text: "Al Services" },
            ]}
          />
        </div>
        <div className={style.featureRight}>
          <Image
            src={"/img/man.png"}
            width={"300"}
            height={"300"}
            className={style.featureImage}
            alt="feature-photo"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Feature;
