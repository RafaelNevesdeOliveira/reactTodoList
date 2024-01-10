import styles from './Header.module.css'
import toDoLogo from '../assets/image/Logo.svg'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt='Todo Logo' />
    </header>
  )
}