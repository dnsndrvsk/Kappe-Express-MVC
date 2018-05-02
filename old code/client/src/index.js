import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/Routes'
import registerServiceWorker from './registerServiceWorker'
import './styles/base.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

registerServiceWorker()