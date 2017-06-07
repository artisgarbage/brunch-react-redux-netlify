// Deps
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


// Exports
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="http://brunch.io/">
          <img src="http://brunch.io/images/logo.png" alt="Brunch" />
        </Link>
        <p>React + Redux + React Router / Redux + Stylus + CSS Modules </p>
      </div>
    )
  }
}
