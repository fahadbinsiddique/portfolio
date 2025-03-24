"use client";

import { Poppins, Poppins } from "next/font/google";
import Image from "next/image";
import next from "/public/next.svg";
import Land from "@/components/Land";
// import Homes from "@/components/Homes"

const poppins = Poppins({
  subsets: ["latin"],
  // weight: ['200','600','700','900']
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Land />

      {/* <h1 className={`${poppins.className} text-3xl text-center font-semibold py-10`}>
        Home
      </h1>
    <HomeHero/> */}

      {/* <div className="mx-auto container">
        <Image src={next} />
      </div> */}

      {/* <div className="mx-auto container">
        <Image src={'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600' } width={600} height={600}/>
      </div> */}
    </>
  );
}
