import Button from "@/components/(common)/Button";
import styles from "./Frame.module.css"
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

export default function Frame(props: { title: string, imageSrc: StaticImageData, styleName: string }) {
  const { push } = useRouter()

  return (
    <div className={`${styles.container} ${styles[props.styleName]}`} onClick={() => push(`http://${process.env.VERCEL_URL}/products/${props.title}`)}>
      <div>
        <div className={styles.imageWrap}>
          <Image src={props.imageSrc} alt={props.title} fill/>
        </div>
        <Button text={props.title} styleNames={["catalog", props.styleName]}/>
      </div>
    </div>   
  )
}