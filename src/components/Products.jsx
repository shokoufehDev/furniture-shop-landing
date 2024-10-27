import { useState } from 'react';
import styles from './styles/Products.module.css'
import ProductCard from './ProductCard'
import products from '../constants/products'

function Products() {
  const [showAll, setShowAll] = useState(false);
  const showMoreHandler = () => {
    setShowAll((showAll) => !showAll);
  }
  return (
    <div className={styles.products_section}>
      <h2>Our Products</h2>
      <ul className={styles.products_box}>
        {showAll ? products.map((product) => (<ProductCard key={product.id} data={product} />)) : products.slice(0, 8).map((product) => (<ProductCard key={product.id} data={product} />))}

      </ul>
      <button onClick={showMoreHandler}>{showAll ? "show less" : "show more"}</button>
    </div>
  )
}
export default Products