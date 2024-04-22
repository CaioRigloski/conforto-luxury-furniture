import Image from "next/image"
import styles from "./ProductCard.module.css"
import chair from "../../../public/images/chair1.jpg"
import { MouseEventHandler } from "react"
import Button from "../(common)/Button"

export default function ProductCard(props: {onClick: MouseEventHandler, closeOnClick?: MouseEventHandler, isSelected: boolean, isClosed: boolean, isHidden: boolean, isOdd: boolean}) {
  return (
    <div className={`${styles.card} ${props.isSelected ? styles.selected : ''} ${props.isSelected && props.isOdd ? styles.isOdd : ''} ${props.isClosed ? styles.closed : ''} ${props.isHidden ? styles.hidden : ''}`} onClick={props.onClick}>
      <div className={styles.imageWrap} >
        <Image src={chair} alt="chair" fill/>
      </div>
      <div className={styles.productInfoBox}> 
        <h2>Chair 1</h2>
        <p>Designed for both form and function, this chair offers more than just aesthetics. Its ergonomic design provides optimal support for your body, ensuring hours of effortless lounging and unwinding</p>
        <Button styleNames={["product"]} text="buy"/>
        <p className={styles.closeBtn} onClick={props.closeOnClick}>X</p>
      </div>
    </div>
  )
}