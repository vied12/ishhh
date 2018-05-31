import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { unregister } from './registerServiceWorker'
import 'typeface-open-sans'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
unregister()
