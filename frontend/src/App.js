import React from 'react'
import { TITLE } from './config'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import { Container } from '@material-ui/core'

const App = () => {

  return (
    <Container>
      <Header title={TITLE} />
      <Products />
      <Footer/>
    </Container>
  )
}

export default App;
