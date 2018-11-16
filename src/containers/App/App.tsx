import React from 'react'

import '../../assets/shared/scss/normalize.scss'
import styles from './App.scss'

export const App = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.clearfix}></div>
      <h1 className={styles.default}>Hello sWorld</h1>
    </div>
  )
}
