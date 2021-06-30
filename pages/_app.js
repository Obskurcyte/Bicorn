import React from 'react';
import '../styles/globals.css';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sideBar.css';
import '../styles/hives.css';
import '../styles/nap.css';
import '../styles/army.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Bicorn</title>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin/>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
