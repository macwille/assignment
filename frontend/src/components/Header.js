import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

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
  return title ?
    <Box className={classes.mainHeader}>
      <Typography className={classes.titleText} variant="h3" paragraph>{title}</Typography>
    </Box>
    :
    <Container>
      <Typography variant="h4" paragraph>No title given</Typography>
    </Container>

}

export default Header