import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

const TrustedBy = () => {
  return (
    <div className={style.container}>
      <h3 className={style.trustedTitle}>Trusted by:</h3>
      <Image
        className={style.trustedIcon}
        src="/img/facebook2x.188a797.png"
        width={80}
        height={100}
        alt="meta"
      />
      <Image
        className={style.trustedIcon}
        src="/img/google2x.06d74c8.png"
        width={80}
        height={100}
        alt="google"
      />
      <Image
        className={style.trustedIcon}
        src="/img/netflix2x.887e47e.png"
        width={80}
        height={100}
        alt="netflix"
      />
      <Image
        className={style.trustedIcon}
        src="/img/pandg2x.6dc32e4.png"
        width={80}
        height={100}
        alt="pg"
      />
      <Image
        className={style.trustedIcon}
        src="/img/paypal2x.22728be.png"
        width={80}
        height={100}
        alt="paypal"
      />
    </div>
  );
};

export default TrustedBy;
