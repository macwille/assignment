import { TableContainer, Table, TableHead, TableBody, TableFooter, TableCell, TableRow, TablePagination, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
  tableContainer: {
    padding: '0px',
  }
})

const ProductTable = ({ products }) => {
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

  if (!products) {
    return null
  }

  return (
    <TableContainer >
      <Table size="small" className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell aling="right">Manufacturer</TableCell>
            <TableCell aling="right">Price €</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : products
          ).map((product, i) => (
            <TableRow key={product.id}>
              <TableCell>
                {i + 1}
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
  )
}

export default ProductTable