import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/beanieReducer'

const Beanies = () => {
  const dispatch = useDispatch()
  const beanies = useSelector(state => state.beanies)

  useEffect(() => {
    console.log('Beanies effect')
    dispatch(getInitial())
  }, [dispatch])

  if (!beanies) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div>
      <h4>Size {beanies.length}</h4>
      <ul>
        {beanies.map(beanie =>
          <li key={beanie.id}>{beanie.name}: {beanie.color}</li>
        )}
      </ul>
    </div>
  )
}

export default Beanies