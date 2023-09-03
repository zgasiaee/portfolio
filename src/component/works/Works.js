import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//style
import styles from './Works.module.css'

//img
import budgetManagment from '../../assets/img/budget-managment.png'
import login from '../../assets/img/login.png'
import shoppingCart from '../../assets/img/redux-shoppingCart.png'
import todoList from '../../assets/img/todo-list.png'
import randomPerson from '../../assets/img/random-person-info.png'
import snackGame from '../../assets/img/snack-game.png'
import adventure from '../../assets/img/adventure-website.png'
import hangman from '../../assets/img/hangman-game.png'
import quiz from '../../assets/img/quzi.png'
import weather from '../../assets/img/weather-app.png'
import note from '../../assets/img/note-app.png'
import snapp from '../../assets/img/snapp.png'
import footbal from '../../assets/img/footbal-show.png'
import enfoldTravel from '../../assets/img/enfold-travel.png'
import instagram from '../../assets/img/instagram.png'
import ticTacToe from '../../assets/img/tic-tac-toe.png'
import stopWatch from '../../assets/img/stop-watch.png'
import gussColor from '../../assets/img/guss-color.png'
import pairGame from '../../assets/img/pair-game.png'
import bmiCalculator from '../../assets/img/bmi-calculator.png'
import whackAMole from '../../assets/img/whack-a-mole.png'
import waterAnimation from '../../assets/img/water-animation.png'
import dayNight from '../../assets/img/day-night.png'
import typescriptShopping from '../../assets/img/typescript-shopping.png'

const Works = () => {
  const [active, setActive] = useState('All')

  const activeHandler = (event) => {
    setActive(event)
  }

  const worksData = [
    {
      name: 'snapp',
      slug: 'https://zgasiaee-snapp.netlify.app/',
      img: snapp,
      category: 'React',
    },
    {
      name: 'Enfold-travel',
      slug: 'https://zgasiaee-enfold-travel.netlify.app/',
      img: enfoldTravel,
      category: 'Css',
    },
    {
      name: 'stop-watch',
      slug: 'https://zgasiaee-stop-watch.netlify.app/',
      img: stopWatch,
      category: 'JavaScript',
    },

    {
      name: 'footbal-show',
      slug: 'https://zgasiaee-footbal.netlify.app/',
      img: footbal,
      category: 'Css',
    },
    {
      name: 'hangman-game',
      slug: 'https://zgasiaee-hangman.netlify.app/',
      img: hangman,
      category: 'React',
    },
    {
      name: 'guss-color',
      slug: 'https://zgasiaee-guss-color.netlify.app/',
      img: gussColor,
      category: 'JavaScript',
    },
    {
      name: 'instagram',
      slug: 'https://zgasiaee-instagram.netlify.app/',
      img: instagram,
      category: 'React',
    },
    {
      name: 'water-animation',
      slug: 'https://zgasiaee-water-animation.netlify.app/',
      img: waterAnimation,
      category: 'Css',
    },
    {
      name: 'tic-tac-toe',
      slug: 'https://zgasiaee-tic-tac-toe.netlify.app/',
      img: ticTacToe,
      category: 'JavaScript',
    },
    {
      name: 'note-app',
      slug: 'https://zgasiaee-note.netlify.app/',
      img: note,
      category: 'React',
    },
    {
      name: 'day-night-simulation',
      slug: 'https://zgasiaee-day-night-simulation.netlify.app/',
      img: dayNight,
      category: 'Css',
    },
    {
      name: 'typescript-shopping',
      slug: 'https://zgasiaee-typescript-shopping.netlify.app/',
      img: typescriptShopping,
      category: 'JavaScript',
    },
    {
      name: 'pair-game',
      slug: 'https://zgasiaee-pair-game.netlify.app/',
      img: pairGame,
      category: 'JavaScript',
    },
    {
      name: 'quiz',
      slug: 'https://zgasiaee-quiz.netlify.app/',
      img: quiz,
      category: 'React',
    },
    {
      name: 'bmi-calculator',
      slug: 'https://zgasiaee-bmi-calculator.netlify.app/',
      img: bmiCalculator,
      category: 'JavaScript',
    },
    {
      name: 'adventure-website',
      slug: 'https://zgasiaee-adventure.netlify.app/',
      img: adventure,
      category: 'React',
    },
    {
      name: 'whack-a-mole',
      slug: 'https://zgasiaee-whack-a-mole.netlify.app/',
      img: whackAMole,
      category: 'JavaScript',
    },
    {
      name: 'todo-list',
      slug: 'https://zgasiaee-todolist.netlify.app/',
      img: todoList,
      category: 'React',
    },
    {
      name: 'weather-app',
      slug: 'https://zgasiaee-weather-app.netlify.app/',
      img: weather,
      category: 'React',
    },
    
    {
      name: 'random-person-info',
      slug: 'https://zgasiaee-random.netlify.app/',
      img: randomPerson,
      category: 'React',
    },
    {
      name: 'redux-shoppingCart',
      slug: 'https://zgasiaee-shopping-cart.netlify.app/',
      img: shoppingCart,
      category: 'React',
    },
    {
      name: 'login',
      slug: 'https://zgasiaee-login.netlify.app/',
      img: login,
      category: 'React',
    },
    {
      name: 'snack-game',
      slug: 'https://zgasiaee-snack.netlify.app/',
      img: snackGame,
      category: 'React',
    },
    {
      name: 'budget-managment',
      slug: 'https://zgasiaee-budget-managment.netlify.app/',
      img: budgetManagment,
      category: 'React',
    },
  ]

  const matchData = worksData.filter((work) =>
    active === 'All' ? work.category : work.category === active,
  )

  return (
    <div className={styles.worksContainer}>
      <h2 className={styles.title}>
        <div>
          <span className={styles.green}>W</span>orks
        </div>
        <ul className={styles.itemContainer}>
          <li
            className={active === 'All' ? styles.active : styles.item}
            onClick={() => activeHandler('All')}
          >
            All
          </li>
          <li
            className={active === 'React' ? styles.active : styles.item}
            onClick={() => activeHandler('React')}
          >
            React
          </li>
          <li
            className={active === 'JavaScript' ? styles.active : styles.item}
            onClick={() => activeHandler('JavaScript')}
          >
            JavaScript
          </li>
          <li
            className={active === 'Css' ? styles.active : styles.item}
            onClick={() => activeHandler('Css')}
          >
            Css
          </li>
        </ul>
      </h2>
      <div className={styles.projectContainer}>
        {matchData.map((work, index) => (
          <Link to={work.slug} key={index} className={styles.project}>
            <figure className={styles.imgContainer}>
              <img src={work.img} alt={work.img} />
            </figure>
            <h4 className={styles.titleProject}>{work.name}</h4>
            <span className={styles.textProject}>{work.category}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Works
