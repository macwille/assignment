import React from 'react'
import { TITLE } from './config'
import Header from './components/Header'
import Products from './components/products/Products'
import Footer from './components/Footer'
import { useTheme } from '@material-ui/core/styles'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header title={TITLE} />
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;
