import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'

const title = 'Hello world'

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root'),
)

module.hot.accept()
