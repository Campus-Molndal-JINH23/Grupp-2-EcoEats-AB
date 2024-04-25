import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
        <div className="absolute rounded-lg bg-white h-1/2 w-1/2 left-6 top-12 "> Lorem Ipsum </div>
      </div>
      Homepage
    </div>
  );
}
