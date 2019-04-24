/* eslint-env browser */
import React from 'react'
import Template from '../components/template'
import Works from '../components/works'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Template>
        <Works/>
      </Template>
    )
  }
}
