import styles from './styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_intro}>
        <h2>Funiro.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, autem?</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.first}><a href="">Links</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About</a></li>
        </ul>
      </div>
      <div className={styles.help}>
        <ul>
          <li className={styles.first}><a href="">Help</a></li>
          <li><a href="">Payment Options</a></li>
          <li><a href="">Returns</a></li>
          <li><a href="">Privacy Policies</a></li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h4>Newsletter</h4>
        <div>
          <input type="text" placeholder='Enter Your Email Address'/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
