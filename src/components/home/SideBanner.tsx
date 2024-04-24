import Image from "next/image"
import styles from "./SideBanner.module.css"
import cabinetSvg from "../../../public/svg/cabinet.svg"
import chairSvg from "../../../public/svg/chair.svg"
import lampSvg from "../../../public/svg/lamp.svg"
import tableSvg from "../../../public/svg/table.svg"
import Button from "../(common)/Button"


export default function SideBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <div>
          <p>Cabinets</p>
          <div className={styles.icon}>
            <Image src={cabinetSvg} alt="Cabinet" fill/>
          </div>
        </div>
        <div>
          <p>Chair</p>
          <div className={styles.icon}>
            <Image src={chairSvg} alt="Chair" fill/>
          </div>
        </div>
        <div>
          <p>lighting</p>
          <div className={styles.icon}>
            <Image src={lampSvg} alt="lighting" fill/>
          </div>
        </div>
        <div>
          <p>Tables</p>
          <div className={styles.icon}>
            <Image src={tableSvg} alt="Table" fill/>
          </div>
        </div>
        <p>and more!</p>
      </div>
      <Button text="see catalog" styleNames={["home"]} href="#catalog"/>
    </div>
  )
}