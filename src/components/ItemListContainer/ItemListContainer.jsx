import React from 'react'
import styles from "./ItemListContainer.module.css"

export const ItemListContainer = (props) => {
  return (
    <h1 className={styles.title}>{props.greeting}</h1>
  )
}
