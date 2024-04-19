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

const montserrat = Montserrat({ subsets: ["latin"] });
const antic = Antic_Didone({ weight: "400", subsets: ["latin"] });


export default function Home() {
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
        </section>
        <Catalog/>
      </main>
    </>
  );
}
