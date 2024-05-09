import Image from "next/image"
import styles from "./MobileTouch.module.css"
import touchSvg from "../../../public/svg/scroll-down-touch.svg"

export default function MobileTouch() {
  return (
    <div className={styles.touchTip}>
      <Image src={touchSvg} alt="Touch Scroll Down Tip" width={100} height={100}/>
    </div>
  )
}