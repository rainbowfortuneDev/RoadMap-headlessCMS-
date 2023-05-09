// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { theme } from '../src/styles/theme'
import { getMuiServerStyleSheets } from '../src/utils/mui/get-mui-server-style-sheets'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color={theme.palette.primary.main}
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />

          <div id="recaptcha-container-wrapper">
            <div id="recaptcha-container" />
          </div>
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const muiServerStyleSheets = await getMuiServerStyleSheets(ctx)
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      muiServerStyleSheets.getStyleElement(),
    ],
  }
}
