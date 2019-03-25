import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'
import styles from './scss/main.scss'
const list = [
]

ReactDOM.render(<List name="Webpack" list={list} />, document.getElementById('app'))



