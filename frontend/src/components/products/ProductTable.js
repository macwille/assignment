import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AvailabilityInfo from './AvailabilityInfo'

import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles({
  tableContainer: {
    padding: '0px',
  }
})

const ProductTable = ({ products, type }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return !products ?
    null
    :
    <TableContainer >
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell aling="right">Manufacturer</TableCell>
            <TableCell aling="right">Price €</TableCell>
            <TableCell aling="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : products
          ).map((product, i) => (
            <TableRow key={product.id}>
              <TableCell>
                {i + (page * rowsPerPage + 1)}
              </TableCell>
              <TableCell>
                {product.name}
              </TableCell>
              <TableCell>
                {product.manufacturer}
              </TableCell>
              <TableCell>
                {product.price}€
                </TableCell>
              <TableCell>
                <AvailabilityInfo id={product.id} manufacturer={product.manufacturer} type={type} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 50, 100, 500]}
              colSpan={3}
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

}

export default ProductTable