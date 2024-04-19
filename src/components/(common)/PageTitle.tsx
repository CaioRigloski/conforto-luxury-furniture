import styles from "./PageTitle.module.css"

export default function PageTitle( props: { title: string }) {
  return (
    <div className={styles.container}>
      <h1>{props.title.toUpperCase()}</h1>
    </div>
  )
}