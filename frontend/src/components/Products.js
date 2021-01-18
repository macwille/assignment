import React, { useState } from 'react'
import Masks from './Masks'
import Beanies from './Beanies'
import Gloves from './Gloves'

const Products = () => {
  const [selected, setSelected] = useState('facemasks')

  const handleSelect = (value) => {
    setSelected(value)
  }

  return (
    <div>
      <h4>Products: {selected}</h4>
      <button onClick={() => handleSelect('facemasks')}>Masks</button>
      <button onClick={() => handleSelect('beanies')}>Beanies</button>
      <button onClick={() => handleSelect('gloves')}>Gloves</button>
      {selected === 'facemasks' && <Masks />}
      {selected === 'beanies' && <div><Beanies /></div>}
      {selected === 'gloves' && <div><Gloves /></div>}
    </div>
  )

}

export default Products
