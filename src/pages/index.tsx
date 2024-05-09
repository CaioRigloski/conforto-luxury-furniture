import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Antic_Didone } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/home/Header";
import homeBackground from "../../public/images/home/home-background.jpg"
import MidText from "@/components/home/MidText";
import SideBanner from "@/components/home/SideBanner";
import Catalog from "@/components/catalog/Catalog";
import About from "@/components/about/About";
import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import Router from "next/router";
import MobileTouch from "@/components/home/MobileTouch";

const montserrat = Montserrat({ subsets: ["latin"] });
const antic = Antic_Didone({ weight: "400", subsets: ["latin"] });


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    // if statement prevents the <MobileTouch/> from appearing again
    if(scrollPosition === 0) {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
      const windowScroll = document.documentElement.scrollTop;
  
      const scrolled = (windowScroll / height) * 100;
  
      setScrollPosition(scrolled);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Head>
        <title>Conforto</title>
        <meta name="description" content="Modern Luxury Furniture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={homeBackground} className={styles.backgroundImage} alt="Background"/>
      <Header/>
      <main className={`${montserrat.className} ${antic.className}`} id="home">
        <section className={styles.homeSection} id="home">
          <MidText/>
          <SideBanner/>
          {scrollPosition === 0 && <MobileTouch/>}
        </section>
        <Catalog/>
        <About/>
      </main>
    </>
  );
}
