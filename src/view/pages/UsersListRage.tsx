import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { v4 as uuidv4 } from 'uuid'

const UsersListPage = () => {
  return (
    <main className="page-wrapper">
      <Paper className="search">
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton aria-label="search" size="small">
          <SearchIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper}>
        <Table className="users-list">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">
                Owner Name
              </TableCell>
              <TableCell align="right">
                Repo name
              </TableCell>
              <TableCell align="right">
                URL
              </TableCell>
              <TableCell align="right">
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                image
              </TableCell>
              <TableCell align="right">
                name
              </TableCell>
              <TableCell align="right">
                repo name
              </TableCell>
              <TableCell align="right">
                repo url
              </TableCell>
              <TableCell align="right">
                description
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                count={20}
                rowsPerPage={10}
                page={1}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={() => { }}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </main>
  )
}

export default UsersListPage
