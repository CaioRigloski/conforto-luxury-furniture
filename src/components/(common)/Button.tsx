import Router from "next/router"
import styles from "./Button.module.css"

export default function Button(props: { text: string, styleNames: Array<string>, href?: string}) {

  function redirect() {
    if(props.href)
    Router.push(props.href)
  }

  return (
    <button className={`${styles.button} ${props.styleNames.map(className => styles[className.toLowerCase()]).join(" ")}`} onClick={redirect}>{props.text.toUpperCase()}</button>
  )
}