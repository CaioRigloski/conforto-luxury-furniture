
import { ReactNode, useEffect, useRef, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import ProductCard from "@/components/products/ProductCard";
import styles from "./Products.module.css"
import PageTitle from "@/components/(common)/PageTitle";
import scrollDown from "../../../public/svg/scroll-down.svg"
import Image from "next/image";
import ProductsPageProps from "@/interfaces/ProductPageProps.interface";

export const getServerSideProps = (async (context) => {
  const category = context.query.category as string

  const props: ProductsPageProps = {
    category: category,
  }
  
  const response = await fetch(`http://localhost:3000/api/products/get-products?` + new URLSearchParams({
    category: category
  }))
  
  if(response.status === 200) {
    props.products = await response.json()
  } else {
    props.error = await response.json()
  }

  return { props }
}) satisfies GetServerSideProps<ProductsPageProps>

export default function Products({category, products, error}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [ selectedProductIndex, setSelectedProductIndex ] = useState<number>(-1)
  const [ closedProductIndex, setClosedProductIndex ] = useState<number>(-1)
  const [ displayScrollDown, setDisplayScrollDown ] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    /* To remove mouse scroll down svg */
    ref.current?.addEventListener('scroll', (e) => {
      setDisplayScrollDown(false)
    })

    ref.current?.removeEventListener('scroll', () => {})
  }, [])

  function checkIfProductIsSelected() {
    if(selectedProductIndex >= 0) {
      return styles.productIsSelected
    } else {
      return ''
    }
  }

  function checkIfProductWasClosed() {
    if(closedProductIndex >= 0) {
      return styles.productIsClosed
    } else {
      return ''
    }
  }

  function closeProductWithDelay(id: number) {
    setClosedProductIndex(id)
    setTimeout(() => {
      setClosedProductIndex(-1)
      setSelectedProductIndex(-1)
    }, 1000);
  }

  return (
    <section className={`${styles.productsSection} ${checkIfProductIsSelected()} ${checkIfProductWasClosed()}`}>
      <PageTitle title={category}  styleName="product" isHidden={selectedProductIndex >= 0}/>
      <div className={styles.background}/>
      {
        products?.length === 0 && <div className={styles.error}>No {category} products available.</div>
      }
      {
        error ?
        <div className={styles.error}>{error.response}.<br/>Please contact the administrator.</div>
        :
        <div className={styles.productsContainer}>
          <div ref={ref} className={`${styles.productBox} ${selectedProductIndex >= 0 ? styles.expandProductBox : ''}`}>
            {
              products?.map((product, index) => {
                const productId = Number(product.id)
                return <ProductCard key={productId} name={product.name} description={product.description} imageUrl={product.image_url} isSelected={index === selectedProductIndex} isClosed={index === closedProductIndex} isHidden={selectedProductIndex != -1 && index!== selectedProductIndex} isOdd={index %2 > 0} onClick={() => {setSelectedProductIndex(index), setDisplayScrollDown(false)}} closeOnClick={() => closeProductWithDelay(index)}/>
              })
            }
          </div>
          { displayScrollDown && products && products.length > 4  && <Image src={scrollDown} alt="Scroll Down Icon" className={styles.scrollIcon}/> }
        </div>
      }
    </section>
  )
  
}