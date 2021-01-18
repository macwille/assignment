import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/facemaskReducer'


const Masks = () => {
  const dispatch = useDispatch()
  const masks = useSelector(state => state.facemasks)

  useEffect(() => {
    console.log('Masks effect')
    dispatch(getInitial())
  }, [dispatch])

  if (!masks) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {masks.map(mask =>
          <li key={mask.id}>{mask.name}: {mask.color}</li>
        )}
      </ul>
    </div>
  )
}

export default Masks