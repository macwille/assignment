import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Header = ({ title }) => {
  if (title) {
    return (
      <Paper>
        <Container >
          <Typography variant="h4" paragraph>{title}</Typography>
        </Container>
      </Paper>
    )
  }
  return (
    <Paper>
      <Typography variant="h4" paragraph>No title given</Typography>
    </Paper>
  )
}

export default Header