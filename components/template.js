/* eslint-env browser */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <img className="avatar" src="https://www.gravatar.com/avatar/3cf14fca02e292d08b9a598c02e9bdbc?s=80" alt="Ted Kesgar"/>
          <h1>Ted Kesgar</h1>
          <ul className="navigation">
            <li><Link href="/"><a>About</a></Link></li>
            <li><Link href="/works"><a>Works</a></Link></li>
          </ul>
        </header>
        <section className="content">
          {this.props.children}
        </section>
        <footer className="footer">
          Last updated: {new Date(process.env.BUILD_DATE).toLocaleString('id')}
        </footer>
      </div>
    )
  }
}
