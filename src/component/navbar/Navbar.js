import React from 'react'
import { Link } from 'react-router-dom'

//style
import styles from './Navbar.module.css'

//img
import resume from '../../assets/img/resume.svg'
import eye from '../../assets/img/eye.svg'
import profile from '../../assets/img/profile.svg'
import contact from '../../assets/img/contact.svg'

const Navbar = () => {

  const smooth = () => {
     return window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.navContainer}>
      <Link to="/about" className={styles.navItem} onClick={smooth}>
        <img src={profile} alt="profile" />
        <span>ABOUT</span>
      </Link>
      <Link to="/resume" className={styles.navItem} onClick={smooth}>
        <img src={resume} alt="resume" />
        <span>RESUME</span>
      </Link>
      <Link to="/works" className={styles.navItem} onClick={smooth}>
        <img src={eye} alt="works" />
        <span>WORKS</span>
      </Link>
      <Link to="/contact" className={styles.navItem} onClick={smooth}>
        <img src={contact} alt="contact" />
        <span>CONTACT</span>
      </Link>
    </div>
  )
}

export default Navbar
