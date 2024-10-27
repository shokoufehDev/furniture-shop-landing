import { useState, useEffect } from 'react'
import styles from './styles/Slider.module.css'
import insp1 from '../assets/images/insp1.jpg'
import insp2 from '../assets/images/insp2.jpg'
import insp3 from '../assets/images/insp3.jpg'
import insp4 from '../assets/images/insp4.jpg'


function Slider() {
    const slides = [
        {
          title: "Inner Peace",
          subtitle: "01 — Bed Room",
          image: insp1,
        },
        {
          title: "Cozy Living Room",
          subtitle: "02 — Living Room",
          image: insp2,
        },
        {
          title: "Minimalist Kitchen",
          subtitle: "03 — Kitchen",
          image: insp3,
        },
        {
            title: "Minimalist Kitchen",
            subtitle: "04 — Kitchen",
            image: insp4,
        },

        
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

      const goToNextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    

    return (
       
        <div className={styles.slider} >
          <div className={styles.image_container} >
            <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className={styles.first} />
            <div className={styles.second_img_container}>
                <img src={slides[currentIndex + 1].image} alt={slides[currentIndex].title} className={styles.second}/>
                <div className={styles.indicators}>
                    {slides.map((_, index) => (
                    <span
                    key={index}
                    className={index === currentIndex ? styles.active : ''}
                    onClick={() => setCurrentIndex(index)}
                    ></span>
                    ))}
                </div>
            </div>
            <div className={styles.image_info}>
              <p>{slides[currentIndex].subtitle}</p>
              <h3>{slides[currentIndex].title}</h3>
            </div>
          </div>
          <button className={styles.next} onClick={goToNextSlide}>&#10095;</button>

        </div>
    )
}

export default Slider