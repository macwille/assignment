import { Typography, Box, Link, Grid, IconButton } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

const Footer = () => {

  return (
    <Box pb="2em" pt="10em">
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography paragraph color="textSecondary">
            Made by Ville Manninen. Licensed <Link href="https://opensource.org/licenses/MIT">MIT</Link>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item >
          <IconButton href="https://github.com/macwille/assignment" color="primary">
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer