import React, { useEffect, useState, useCallback } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import Actions from '@store/actions'
import selectors from '@selectors/index'
import { Preloader } from '@view/shared/Preloader'
import { StoreTypes, ApiTypes } from 'src/types'
import { TablePaginationNav } from './TablePaginationNav'

interface Props {
  repositories: ApiTypes.Repository[]
  isRepositoriesReqested: boolean | null

  onGetRepositories: () => void
}

const ReposetoriesPage: React.FC<Props> = React.memo((props) => {
  const { onGetRepositories, repositories, isRepositoriesReqested } = props
  const [page, setPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [serchedRepositories, setSerchedRepositories] = useState<ApiTypes.Repository[]>([])

  const currentRepositories = searchValue === '' ? repositories : serchedRepositories

  const currentPage = currentRepositories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const onChangePage = useCallback((event, value) => setPage(value), [])

  const onChangeRowsPerPage = useCallback(event => {
    setPage(0)
    setRowsPerPage(event.target.value)
  }, [])

  useEffect(() => {
    if (isRepositoriesReqested === null && !repositories?.length) {
      onGetRepositories()
    }
  }, [isRepositoriesReqested, repositories, searchValue, onGetRepositories])

  const onSearch = (value) => {
    setSearchValue(value.toLowerCase())
    setPage(0)
    
    const result = repositories.filter(item => {

      if (item?.name.indexOf(value.toLowerCase()) > -1) {
        return true
      }

      if (item?.owner?.login.indexOf(value.toLowerCase()) > -1) {
        return true
      }

      return false
    })

    setSerchedRepositories(result)
  }

  const renderTable = () => {

    if (currentRepositories?.length) {
      return (
        <>
          <TableContainer className="table">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="center">Owner Name</TableCell>
                  <TableCell align="center">Repo name</TableCell>
                  <TableCell align="right">URL</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {currentPage && currentPage.map(item => (
                  <TableRow key={uuidv4()}>
                    <TableCell className="table__avatar">
                      {item?.owner?.avatar_url && <img className="table__img"
                        src={item?.owner?.avatar_url}
                        alt={item?.owner?.login} />}
                    </TableCell>
                    <TableCell align="center">
                      {item?.owner?.login}
                    </TableCell>
                    <TableCell align="center">
                      {item?.name}
                    </TableCell>
                    <TableCell align="right" className="table__url">
                      {item?.html_url && <a target="_blank"
                        className="table__link"
                        rel="noopener noreferrer"
                        href={item?.html_url}>
                        {item?.html_url}
                      </a>}
                    </TableCell>
                    <TableCell align="right" className="table__desription" >
                      {item?.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 25]}
            count={currentRepositories?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            ActionsComponent={TablePaginationNav}
          />
        </>
      )
    }

    return (
      <div className="empty-list">
        <span>No data</span>
      </div>
    )
  }

  return (
    <main className="page-wrapper">
      <Paper className="search">
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(event) => onSearch(event.target.value)}
          value={searchValue}
        />
        <IconButton aria-label="search" size="small">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper>
        {isRepositoriesReqested ? <Preloader /> : renderTable()}
      </Paper>
    </main>
  )
})

type StateProps = Pick<Props, 'repositories' | 'isRepositoriesReqested'>
const mapStateToProps = (state: StoreTypes): StateProps => ({
  isRepositoriesReqested: selectors.repositories.isRepositoriesReqested(state),
  repositories: selectors.repositories.repositories(state),
})

type DispatchProps = Pick<Props, 'onGetRepositories'>
const mapDispatchToProps = (dispatch): DispatchProps => ({
  onGetRepositories: () => dispatch(Actions.repositories.getRepositoriesRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReposetoriesPage)
