import Image from "next/image";
import React, { FC } from "react";
import { ISearchFieldProps } from "core/interfaces/props/index";
import ButtonCustom from "components/ButtonCustom/ButtonCustom";
import style from "./style.module.scss";

const SearchField: FC<ISearchFieldProps> = ({ handler, fieldValue }) => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <Image
          src="/img/search.png"
          width={20}
          height={20}
          className={style.searchImg}
          alt="search-img"
        ></Image>
      </div>
      <input
        className={style.textField}
        type="text"
        placeholder="Search"
        value={fieldValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handler(e.target.value as string);
        }}
      />
      <div className={style.wrapperSearchBtn}>
        <ButtonCustom text={"Search"} />
      </div>
    </div>
  );
};

export default SearchField;
