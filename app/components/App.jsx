console.log('loaded')

import React, { PropTypes } from 'react'
import style from './app.styl'

export default class App extends React.Component {
  render() {
    return (
      <div id="content" className={style.content}>
        something
      </div>
    );
  }
}


