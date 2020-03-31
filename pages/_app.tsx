/* eslint-env browser */
import React from "react";
import Head from "next/head";
import NextApp from "next/app";
import "../styles/main.scss";

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Ted Kesgar</title>
          <meta
            name="description"
            content="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."
          />

          <meta
            name="twitter:card"
            content="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."
          />

          <meta property="og:title" content="Ted Kesgar" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tkesgar.com/" />
          <meta property="og:image" content="/static/site-image.jpg" />
          <meta
            property="og:description"
            content="Hello, I am Ted Kesgar and this is my homepage containing list of works and some contact information."
          />

          <link rel="icon" type="image/png" href="/static/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
