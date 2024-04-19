import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CONFORTO</h1>
      <menu className={styles.menu}>
        <a href="#home"><li>HOME</li></a>
        <a href="#about"><li>ABOUT</li></a>
        <a href="#catalog"><li>CATALOG</li></a>
      </menu>
    </div>
  )
}