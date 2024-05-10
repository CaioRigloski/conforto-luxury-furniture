import styles from "./Catalog.module.css"
import PageTitle from "../(common)/PageTitle";

import lightingImage from "../../../public/images/catalog/lighting.png"
import chairsImage from "../../../public/images/catalog/chair.png"
import cabinetsImage from "../../../public/images/catalog/cabinet.png"
import bedsImage from "../../../public/images/catalog/bed.png"
import tablesImage from "../../../public/images/catalog/table.png"
import Frame from "./(common)/Frame";



export default function Catalog() {

  const options = [
    {
      text: "lighting",
      image: lightingImage
    },
    {
      text: "chairs",
      image: chairsImage
    },
    {
      text: "cabinets",
      image: cabinetsImage
    },
    {
      text: "beds",
      image: bedsImage
    },
    {
      text: "tables",
      image: tablesImage
    }
  ]

  return (
    <section className={styles.catalogSection} id="catalog">
      <PageTitle title="catalog"/>
      <div className={styles.catalogBox}>
        {
          options.map((option, index) => {
            return <Frame key={index} title={option.text} imageSrc={option.image} styleName={option.text}/>
          })
        }
      </div>
    </section>
  )
}