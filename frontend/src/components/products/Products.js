import React, { useState } from 'react'
import Masks from './Masks'
import Beanies from './Beanies'
import Gloves from './Gloves'

import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Products = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)

  }

  return (
    <Paper>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Facemasks" />
          <Tab label="Beanies" />
          <Tab label="Gloves" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Masks />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Beanies />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Gloves />
      </TabPanel>
    </Paper>
  )

}

export default Products
