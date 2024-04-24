import Image from "next/image"
import styles from "./ProductCard.module.css"
import chair from "../../../public/images/chair1.jpg"
import { MouseEventHandler, Suspense } from "react"
import Button from "../(common)/Button"
import LoadingProductCard from "./LoadingProductCard"

export default function ProductCard(props: { name: string, description: string, imageUrl: string, isSelected: boolean, isClosed: boolean, isHidden: boolean, isOdd: boolean, onClick: MouseEventHandler, closeOnClick?: MouseEventHandler }) {
  return (
    <Suspense fallback={<LoadingProductCard/>}>
      <div className={`${styles.card} ${props.isSelected ? styles.selected : ''} ${props.isSelected && props.isOdd ? styles.isOdd : ''} ${props.isClosed ? styles.closed : ''} ${props.isHidden ? styles.hidden : ''}`} onClick={props.onClick}>
        <div className={styles.imageWrap} >
          <Image src={"https://conforto.s3.sa-east-1.amazonaws.com/products/" + props.imageUrl} alt={props.name + " chair model"} fill/>
        </div>
        <div className={styles.productInfoBox}> 
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <Button styleNames={["product"]} text="buy"/>
          <p className={styles.closeBtn} onClick={props.closeOnClick}>X</p>
        </div>
      </div>
    </Suspense>
  )
}