import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import SearchAppBar from './appbar'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';


type Props = {
  children?: ReactNode
  title?: string
}
const theme = createTheme({
  typography: {
    fontFamily: 'PT Serif, serif',
  },
});

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet" />
    </Head>
    <header>
      <SearchAppBar />
    </header>
    {children}
  </ThemeProvider>
);


export default Layout
