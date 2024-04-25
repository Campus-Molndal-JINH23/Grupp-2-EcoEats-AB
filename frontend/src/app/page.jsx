import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
        <div className=" text-black grid h-screen">
          <div className="justify-items-center">
            <p className="text-center mt-40 font-bold text-xl">Texten</p>
            </div>
        </div>
      </div>
    </div>
  );
}
