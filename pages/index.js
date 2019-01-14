/* eslint-env browser */
import React from 'react'
import Content from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="avatar" src="https://www.gravatar.com/avatar/3cf14fca02e292d08b9a598c02e9bdbc?s=80" alt="Ted Kesgar"/>
        <div className="content">
          <Content/>
        </div>
      </div>
    )
  }
}
