import React from 'react'

const Header = ({ title }) => {
  if (title) {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>No title given</h2>
    </div>
  )
}

export default Header