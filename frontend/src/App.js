import React from 'react'
import { TITLE } from './config'
import Header from './components/Header'
import Products from './components/Products'

const App = () => {

  return (
    <div>
      <Header title={TITLE} />
      <Products />
    </div>
  )
}

export default App;
