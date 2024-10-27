import React from 'react'
import styles from './styles/Categories.module.css'
import dining_img from '../assets/images/dining2.jpg'
import living_img from '../assets/images/living2.jpg'
import bedroom_img from '../assets/images/bed3.jpg'

function Categories() {
  return (
    <div className={styles.categories}>
      <h3>Browse The Range</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className={styles.categories_box}>
        <div><img src={dining_img} alt="#" /><span>Dining</span></div>
        <div><img src={living_img} alt="#" /><span>Living</span></div>
        <div><img src={bedroom_img} alt="#" /><span>Bedroom</span></div>
      </div>
    </div>
  )
}

export default Categories