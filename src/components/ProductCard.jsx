import styles from './styles/ProductCard.module.css'

function ProductCard({data: {src, productName, descriptiion, price, previous_price}}) {

  return (
    <li className={styles.card}>
      <img className={styles.product_img} src={src} alt="#" />
      <div className={styles.details}>
      <h3 className={styles.productName}>{productName}</h3>
      <p className={styles.descriptiion}>{descriptiion}</p>
      <span className={styles.price}>{price}</span><span className={styles.previous_price}>{previous_price}</span>
      </div>
    </li>
  )
}

export default ProductCard