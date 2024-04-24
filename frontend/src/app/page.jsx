import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="">
        <Image src="/hero-blur.png" alt="hero" width={1500} height={1500} />
      </div>
      Homepage
    </div>
  );
}
