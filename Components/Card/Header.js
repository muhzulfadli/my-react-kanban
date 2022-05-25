import React from 'react'
import styles from '../../styles/card/Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Not Started</div>
      <div className={styles.expDate}>Expire on 24th jun</div>
    </div>
  )
}

export default Header