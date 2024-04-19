import Button from "@/components/(common)/Button";
import styles from "./Frame.module.css"
import Image, { StaticImageData } from "next/image";

export default function Frame(props: { title: string, imageSrc: StaticImageData, styleName: string }) {
  return (
    <div className={`${styles.container} ${styles[props.styleName]}`}>
      <div>
        <div className={styles.imageWrap}>
          <Image src={props.imageSrc} alt={props.title} fill/>
        </div>
        <Button text={props.title} styleNames={["catalog", props.styleName]}/>
      </div>
    </div>
  )
}