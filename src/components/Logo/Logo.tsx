import Link from "next/link";
import { FC, useContext } from "react";
import { Context } from "Context/context";

import style from "./style.module.scss";

const Logo: FC = () => {
  const { isActive } = useContext(Context);

  return (
    <Link href="/">
      <div className={style.logoContainer}>
        <h3 className={isActive ? style.logoTitleActive : style.logoTitle}>
          CFiverr
        </h3>
        <span className={style.logoDot}>.</span>
      </div>
    </Link>
  );
};

export default Logo;
