import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css"
import PageTitle from "../(common)/PageTitle";
import scrollDown from "../../../public/svg/scroll-down.svg"
import Image from "next/image";

export default function Products(props: { category: string }) {
  const [ selectedProductId, setSelectedProductId ] = useState<number>(-1)
  const [ closedProductId, setClosedProductId ] = useState<number>(-1)
  const [ displayScrollDown, setDisplayScrollDown ] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    /* To remove mouse scroll down svg */
    ref.current?.addEventListener('scroll', (e) => {
      setDisplayScrollDown(false)
    })

    ref.current?.removeEventListener('scroll', () => {})
  }, [])


  const products = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    }
  ]

  function checkIfProductIsSelected() {
    if(selectedProductId >= 0) {
      return styles.productIsSelected
    } else {
      return ''
    }
  }

  function checkIfProductWasClosed() {
    if(closedProductId >= 0) {
      return styles.productIsClosed
    } else {
      return ''
    }
  }

  function closeProductWithDelay(id: number) {
    setClosedProductId(id)
    setTimeout(() => {
      setClosedProductId(-1)
      setSelectedProductId(-1)
    }, 1000);
  }

  return (
    <section className={`${styles.productsSection} ${checkIfProductIsSelected()} ${checkIfProductWasClosed()}`}>
      <PageTitle title={props.category}  styleName="product" isHidden={selectedProductId >= 0}/>
      <div className={styles.background}/>
      <div className={styles.productsContainer}>
        <div ref={ref} className={`${styles.productBox} ${selectedProductId >= 0 ? styles.expandProductBox : ''}`}>
          {
            products.map(product => {
              return <ProductCard key={product.id} isSelected={product.id === selectedProductId} isClosed={product.id === closedProductId} isHidden={selectedProductId != -1 && selectedProductId !== product.id} isOdd={product.id %2 > 0} onClick={() => {setSelectedProductId(product.id), setDisplayScrollDown(false)}} closeOnClick={() => closeProductWithDelay(product.id)}/>
            })
          }
        </div>
        { displayScrollDown && <Image src={scrollDown} alt="Scroll Down Icon"/> }
      </div>
    </section>
  )
}