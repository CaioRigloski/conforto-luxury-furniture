import styles from "./MidText.module.css"
import curvedLineSvg1 from "../../../public/svg/curved-line1.svg"
import curvedLineSvg2 from "../../../public/svg/curved-line2.svg"
import Image from "next/image"


export default function MidText() {
  return (
    <div className={styles.container}>
      <h4>Modern Design</h4>
      <h1>LUXURY</h1>
      <div>
        <div className={styles.imageWrap}>
          <Image src={curvedLineSvg1} alt="Chair Symbol" fill/>
        </div>
        <div className={styles.imageWrap}>
          <Image src={curvedLineSvg2} alt="Chair Symbol" fill/>
        </div>
      </div>
    </div>
  )
}