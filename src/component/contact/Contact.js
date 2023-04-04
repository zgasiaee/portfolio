import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//style
import styles from './Contact.module.css'

//img
import arrow from '../../assets/img/arrow-right.svg'

//function
import { validate } from '../../functions/validate'

//graphql
import { gql, useMutation } from '@apollo/client'

const CREATE_COMMENT = gql`
  mutation create($name: String!, $email: String!, $message: String!) {
    createComment(data: { message: $message, name: $name, email: $email }) {
      name
    }
  }
`

const Contact = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touch, setTouch] = useState({})

  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value })
  }

  const focusHandler = (event) => {
    setTouch({ ...info, [event.target.name]: true })
  }

  useEffect(() => {
    setErrors(validate(info))
  }, [info, touch])

  const [createComment, { data }] = useMutation(CREATE_COMMENT, {
    variables: { name: info.name, email: info.email, message: info.message },
  })

  const submitHandler = (event) => {
    event.preventDefault()

    if (!Object.keys(errors).length) {
      createComment()
      toast.success('thank you for your message', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.error('please check and try again', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setTouch({
      ...info,
      name: false,
      email: false,
      message: false,
    })
    setTimeout(function () {
      setInfo({
        name: '',
        email: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>
        <span className={styles.green}>G</span>et In Touch
      </h2>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <span className={styles.question}>Address :</span>
          <span className={styles.answer}>Marzdaran Blvd , Tehran</span>
        </div>
        <div className={styles.item}>
          <span className={styles.question}>Email :</span>
          <span className={styles.answer}>Zgasiaeee@gmail.com</span>
        </div>
        <div className={styles.item}>
          <span className={styles.question}>Phone :</span>
          <span className={styles.answer}>09199914406</span>
        </div>
        <div className={styles.item}>
          <span className={styles.question}>Telegram :</span>
          <span className={styles.answer}>Zahra_g_a</span>
        </div>
        <div className={styles.item}>
          <span className={styles.question}>Website :</span>
          <span className={styles.answer}>http://localhost:3000</span>
        </div>
        <div className={styles.item}>
          <span className={styles.question}>Freelance :</span>
          <span className={styles.answer}>Available</span>
        </div>
      </div>
      <h2 className={styles.title}>
        <span className={styles.green}>C</span>ontact Form
      </h2>
      <form onSubmit={submitHandler} className={styles.inputContainer}>
        <div className={styles.rowInput}>
          <div className={styles.inputItem}>
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Full Name"
              value={info.name}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={errors.name && touch.name ? styles.unComplete : ''}
            />
            {errors.name && touch.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.inputItem}>
            <input
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email"
              value={info.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={errors.email && touch.email ? styles.unComplete : ''}
            />
            {errors.email && touch.email && <span>{errors.email}</span>}
          </div>
        </div>
        <div className={styles.inputItem} style={{ width: '100%' }}>
          <textarea
            name="message"
            value={info.message}
            placeholder="Your Message"
            onChange={changeHandler}
            onFocus={focusHandler}
            className={errors.message && touch.message ? styles.unComplete : ''}
          />
          {errors.message && touch.message && <span>{errors.message}</span>}
        </div>
        <div className={styles.buttonContainer}>
          <button>SEND MESSAGE</button>
          <img src={arrow} alt="arrow" />
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Contact
