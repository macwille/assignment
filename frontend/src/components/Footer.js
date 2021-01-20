import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

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