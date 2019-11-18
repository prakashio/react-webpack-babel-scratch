import React from 'react'
import PropTypes from 'prop-types' // ES6

import styles from './app.css'

const app = ({ title }) => <div className={styles.title}>{title}</div>

export default app

app.propTypes = {
  title: PropTypes.string.isRequired,
}
