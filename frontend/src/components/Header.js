import { Container, Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  mainHeader: {
    padding: '0.4em',
    marginBottom: '0.8em',
  },
  titleText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

const Header = ({ title }) => {
  const classes = useStyles()
  if (title) {
    return (
      <Box className={classes.mainHeader}>
        <Typography className={classes.titleText} variant="h3" paragraph>{title}</Typography>
      </Box>
    )
  }
  return (
    <Container>
      <Typography variant="h4" paragraph>No title given</Typography>
    </Container>
  )
}

export default Header