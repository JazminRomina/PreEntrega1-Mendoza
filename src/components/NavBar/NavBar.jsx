import React from 'react'
import {CartWidget} from "../CartWidget/CartWidget"
import image from "../../assets/logo.png"
import styles from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={styles.bgNav}>
      <div className={styles.navBar}>
      <img className={styles.logo} src={image} alt="Logo de BondSweets" />
      <p>Desserts</p>
      <p>Tea</p>
      <p>Sweets</p>
      <p>Promotions</p>
      <CartWidget amount="0"/>
      </div>
    </div>
  )
}
