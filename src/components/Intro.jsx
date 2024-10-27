import styles from './styles/Intro.module.css'

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_box}>
        <h5>New Arrival</h5>
        <h1>Discover Our New Collection</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus cum quam veniam autem voluptatum!</p>
        <button>BUY NOW</button>
      </div>
    </div>
  )
}

export default Intro