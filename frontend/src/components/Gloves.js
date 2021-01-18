import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/gloveReducer'

const Gloves = () => {

  const dispatch = useDispatch()
  const gloves = useSelector(state => state.gloves)

  useEffect(() => {
    console.log('Gloves effect')
    dispatch(getInitial())
  }, [dispatch])

  if (!gloves) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {gloves.map(glove =>
          <li key={glove.id}>{glove.name}: {glove.manufacturer}</li>
        )}
      </ul>
    </div>
  )
}

export default Gloves