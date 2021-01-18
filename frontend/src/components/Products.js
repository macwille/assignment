import React, { useState } from 'react'
import Masks from './Masks'
import Beanies from './Beanies'
import Gloves from './Gloves'
import { Box, AppBar, Tabs, Tab, Typography, Paper } from '@material-ui/core'

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
        <Box p={3}>
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
      <TabPanel p={0} value={value} index={0}>
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
