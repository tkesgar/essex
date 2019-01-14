/* eslint-env browser */
import React from 'react'
import Head from 'next/head'
import NextApp, {Container} from 'next/app'

// eslint-disable-next-line import/no-unassigned-import
import '../styles/main'

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          <title>Ted Kesgar</title>
          <meta name="description" content="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."/>

          <meta name="twitter:card" value="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."/>

          <meta property="og:title" content="Ted Kesgar"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://www.tkesgar.com/"/>
          <meta property="og:image" content="/static/site-image.jpg"/>
          <meta property="og:description" content="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."/>

          <link rel="icon" type="image/png" href="/static/favicon.png"/>
        </Head>
        <Container>
          <Component {...pageProps}/>
        </Container>
      </>
    )
  }
}
