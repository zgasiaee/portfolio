import React from 'react'

//style
import styles from './About.module.css'

//img
import quoteDown from '../../assets/img/quote-down.svg'
import quoteUp from '../../assets/img/quote-up.svg'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>
        <span className={styles.green}>A</span>bout Me
      </h2>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <span className={styles.bold}>Hello ! I’m Zahra Goodasiaee.</span>
          <p className={styles.normal}>
            I’m Front End Devloper from Tehran , Iran . I have 1 year experience of
            being Front End Devloper . I'm working with React as most popular
            Front End framework . I’m looking for a job to working as a Front
            End (React.js) Developer . I love to talk with you about our unique
            .
          </p>
        </div>
        <div className={styles.textBox}>
          <div className={styles.item}>
            <span className={styles.question}>Age :</span>
            <span className={styles.answer}>22</span>
          </div>
          <div className={styles.item}>
            <span className={styles.question}>Address :</span>
            <span className={styles.answer}>Tehran , Iran</span>
          </div>
          <div className={styles.item}>
            <span className={styles.question}>Freelance :</span>
            <span className={styles.answer}>Available</span>
          </div>
        </div>
      </div>
      <div className={styles.quoteContainer}>
        <h2 className={styles.title}>
          <span className={styles.green}>Q</span>uote
        </h2>
        <div className={styles.text}>
          <img src={quoteUp} alt="quote" />
          <p className={styles.quote}> Life Has No CTRL + Z</p>
          <img src={quoteDown} alt="quote" />
        </div>
      </div>
    </div>
  )
}

export default About
