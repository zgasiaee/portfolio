import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

//style
import styles from './Resume.module.css'

//img
import university from '../../assets/img/university.svg'
import briefcase from '../../assets/img/briefcase.svg'
import arrow from '../../assets/img/arrow.svg'
import flag from '../../assets/img/flag.svg'
import code from '../../assets/img/code.svg'
import list from '../../assets/img/list.svg'
import check from '../../assets/img/check.svg'
import frontEnd from '../../assets/img/front-end.png'
import lessSass from '../../assets/img/less-sass.png'
import backEnd from '../../assets/img/back-end.png'

const Resume = () => {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const coding = [
    { id: 1, name: 'Html', percentage: '100' },
    { id: 2, name: 'Css', percentage: '90' },
    { id: 3, name: 'JavaScript', percentage: '70' },
    { id: 4, name: 'Jquery', percentage: '80' },
    { id: 5, name: 'Ajax', percentage: '70' },
    { id: 6, name: 'Bootstrap', percentage: '65' },
    { id: 7, name: 'React', percentage: '75' },
    { id: 8, name: 'Redux', percentage: '70' },
    { id: 9, name: 'GraphQl', percentage: '80' },
    { id: 10, name: 'Less', percentage: '95' },
    { id: 11, name: 'Sass', percentage: '95' },
    { id: 12, name: 'Git', percentage: '100' },
    { id: 13, name: 'TypeScript', percentage: '85' },
  ]

  const [frontOpen, setFrontOpen] = useState(false)
  const [lessOpen, setLessOpen] = useState(false)
  const [backOpen, setBackOpen] = useState(false)

  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.title}>
        <div>
          <span className={styles.green}>R</span>esume
        </div>
      </h2>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <div className={styles.textHeader}>
            <img src={briefcase} alt="briefcase" />
            <h4>EXPERIENCE</h4>
          </div>
          <div className={styles.textBody} id={styles.border}>
            <div className={styles.textItem}>
              <span className={styles.year}>2021 - 2021</span>
              <h4 className={styles.textTitle}>Digital Marketing</h4>
              <p className={styles.text}>
                Collaborate with creative and development teams to content
                production.
              </p>
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2022 - 2022</span>
              <h4 className={styles.textTitle}>Front End Devloper</h4>
              <p className={styles.text}>
                Development of the online reservation site of the Solaleh
                collection.
              </p>
              <div className={styles.buttonContainer}>
                <a href="https://zgasiaee-solaleh-reservation.netlify.app/">
                  DEMO
                </a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2023 - 2024</span>
              <h4 className={styles.textTitle}>React Devloper</h4>
              <p className={styles.text}>
                Development of menus with different functionalities for comprehensive ERP system of tyam software.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.textBox}>
          <div className={styles.textHeader}>
            <img src={university} alt="university" />
            <h4>EDUCATION</h4>
          </div>
          <div className={styles.textBody}>
            <div className={styles.textItem}>
              <span className={styles.year}>2020 - 2023</span>
              <h4 className={styles.textTitle}>Alzahra University</h4>
              <p className={styles.text}>
                Bachelor's Degree in Computer Engineering Alzahra University,
                Tehran, Iran.
              </p>
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2021 - 2021</span>
              <h4 className={styles.textTitle}>Front End Course</h4>
              <p className={styles.text}>
                Coursework : Html , Css , Javascript , Jquery , Ajax , Bootstrap
                , Git
              </p>
              <div className={styles.buttonContainer}>
                <button onClick={() => setFrontOpen(true)}>CERTIFICATE</button>
                <img src={arrow} alt="arrow" />
              </div>
              {frontOpen && (
                <Lightbox
                  mainSrc={frontEnd}
                  onCloseRequest={() => setFrontOpen(false)}
                />
              )}
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2022 - 2022</span>
              <h4 className={styles.textTitle}>Back End Course</h4>
              <p className={styles.text}>Coursework : Php , MySql</p>
              <div className={styles.buttonContainer}>
                <button onClick={() => setBackOpen(true)}>CERTIFICATE</button>
                <img src={arrow} alt="arrow" />
              </div>
              {backOpen && (
                <Lightbox
                  mainSrc={backEnd}
                  onCloseRequest={() => setBackOpen(false)}
                />
              )}
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2022 - 2022</span>
              <h4 className={styles.textTitle}>Preprocessors Course</h4>
              <p className={styles.text}>Coursework : Less , Sass</p>
              <div className={styles.buttonContainer}>
                <button onClick={() => setLessOpen(true)}>CERTIFICATE</button>
                <img src={arrow} alt="arrow" />
              </div>
              {lessOpen && (
                <Lightbox
                  mainSrc={lessSass}
                  onCloseRequest={() => setLessOpen(false)}
                />
              )}
            </div>
            <div className={styles.textItem}>
              <span className={styles.year}>2022 - 2022</span>
              <h4 className={styles.textTitle}>React Course</h4>
              <p className={styles.text}>
                Coursework : React , Redux , GraphQl
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>
        <div>
          <span className={styles.green}>S</span>kills
        </div>
      </h2>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <div className={styles.textHeader}>
            <img src={code} alt="code" />
            <h4>CODING</h4>
          </div>
          <div className={styles.codeContainer}>
            {coding.map((code) => (
              <div className={styles.codeItem} key={code.id}>
                <div className={styles.circle}>
                  <CircularProgressbar
                    value={code.percentage}
                    text={`${code.percentage}%`}
                    styles={buildStyles({
                      textSize: '18px',
                      pathColor: '#78cc6d',
                      textColor: '#323232',
                      trailColor: '#eeeeee',
                    })}
                  />
                </div>
                <span className={styles.text}>{code.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textBox}>
          <div className={styles.textHeader}>
            <img src={flag} alt="flag" />
            <h4>LANGUAGES</h4>
          </div>
          <div className={styles.languageContainer}>
            <div className={styles.language}>
              <span>English</span>
              <div className={styles.circleContainer}>
                {n.map((circle) => (
                  <div
                    key={circle}
                    className={styles.circle}
                    style={{
                      backgroundColor: circle > 7 ? '#eeeeee' : '#78cc6d',
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.textHeader}>
              <img src={list} alt="list" />
              <h4>INTERESTS</h4>
            </div>
            <div className={styles.textBody}>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Problem Solving</span>
              </div>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Team Work</span>
              </div>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Learning new Technologies</span>
              </div>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Hard Working</span>
              </div>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Responsible</span>
              </div>
              <div className={styles.interestItem}>
                <img src={check} alt="check" />
                <span>Language Learning </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
