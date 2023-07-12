import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

//style
import styles from './MainCard.module.css'

//img
import profile from '../../assets/img/profile.jpg'
import github from '../../assets/img/github.png'
import telegram from '../../assets/img/telegram.svg'
import paperPlane from '../../assets/img/paper-plane.svg'
import archive from '../../assets/img/archive.svg'

const MainCard = () => {
  return (
    <div className={styles.card}>
      <figure className={styles.imgContainer}>
        <img src={profile} alt="profile" />
      </figure>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Zahra Goodasiaee</h2>
        <div className={styles.career}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Front End Devloper').start()
            }}
          />
        </div>
        <div className={styles.iconContainer}>
          <Link className={styles.icon} to="https://github.com/zgasiaee">
            <img src={github} alt="github" />
          </Link>
          <Link className={styles.icon} to="https://t.me/zahra_g_a">
            <img src={telegram} alt="telegram" />
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <a href="/Resume.pdf" className={styles.button} download>
            <p>DOWNLOAD CV</p>
            <img src={archive} alt="archive" />
          </a>
          <Link to="/contact" className={styles.button}>
            <p>CONTACT ME</p>
            <img src={paperPlane} alt="paper-plane" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainCard
