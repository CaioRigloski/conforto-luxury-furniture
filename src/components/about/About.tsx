import Image from "next/image"
import PageTitle from "../(common)/PageTitle"
import styles from "./About.module.css"
import chairBackground from "../../../public/images/about/chair-background.jpg"
import lusterBackground from "../../../public/images/about/luster-background.jpg"

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <PageTitle title="about us"/>
      <div className={styles.column}>
        <p>
        Welcome to Conforto, where sophistication meets comfort in the realm of modern luxury furniture. Nestled in the heart of San Diego, we are your premier destination for indulging in the finer elements of contemporary living
        </p>
        <div className={styles.chairImageWrap}>
          <Image src={chairBackground} alt="Chair Background" fill/>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.lusterImageWrap}>
          <Image src={lusterBackground} alt="Luster Background" fill/>
        </div>
        <p>
        We believe that every piece of furniture should not only exude elegance but also embody functionality. Our curated collection boasts a harmonious fusion of sleek designs, premium materials, and innovative craftsmanship, meticulously crafted to elevate your living spaces to new heights of opulence.
        </p>
      </div>
    </section>
  )
}