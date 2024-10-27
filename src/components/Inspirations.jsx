import styles from './styles/Inspirations.module.css'
import Slider from './Slider'
function Inspirations() {
  return (
    <div className={styles.inspirations}>
      <div className={styles.explanations}>
        <h2>50+ Beautiful rooms inspirations</h2>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you.</p>
        <button>Explore more</button>
      </div>
      <Slider />
    </div>
  )
}

export default Inspirations