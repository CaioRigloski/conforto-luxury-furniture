import styles from "./PageTitle.module.css"

export default function PageTitle( props: { title: string, isHidden?: boolean, styleName?: string }) {
  return (
    <div className={`${styles.container} ${props.styleName ?styles[props.styleName] : ''} ${props.isHidden ? styles.hidden : ''}`}>
      <h1>{props.title.toUpperCase()}</h1>
    </div>
  )
}