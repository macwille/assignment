import React, { useState } from 'react'
import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import availabilityRouter from '../services/availability'


const AvailabilityInfo = ({ id, manufacturer }) => {
  const [info, setInfo] = useState(null)

  const getInfo = async (event) => {
    event.preventDefault()
    setInfo('Loading')
    const availability = await availabilityRouter.getAvailability(id, manufacturer)
    const result = availability.split(/<INSTOCKVALUE>([A-Za-z.@]+)<\/INSTOCKVALUE>/).filter((t, i) => i % 2)
    if (result[0] === 'INSTOCK') {
      setInfo('In stock')
    }
    if (result[0] === 'OUTOFSTOCK') {
      setInfo('Out of stock')
    }
    if (!result[0]) {
      setInfo('Error')
    }
  }

  const render = () => {
    if (info) {
      if (info === 'Error') {
        return (
          <>
            <Typography>Error try again <Button size="small" variant="outlined" color="primary" onClick={getInfo}>Get</Button>
            </Typography>
          </>
        )
      }
      if (info === 'Loading') {
        return (
          <CircularProgress />
        )
      }
      return info
    }
    return (
      <Button size="small" variant="outlined" color="primary" onClick={getInfo}>Get</Button>
    )
  }

  return (
    <Box>
      <div>
        {render()}
      </div>
    </Box>
  )
}

export default AvailabilityInfo 