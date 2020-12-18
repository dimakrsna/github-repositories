import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions'

export const TablePaginationNav: React.FC<TablePaginationActionsProps> = React.memo((props) => {
  const { count, page, rowsPerPage, onChangePage } = props

  const onFirstPageButtonClick = (event) => onChangePage(event, 0)

  const onBackButtonClick = (event) => onChangePage(event, page - 1)

  const onNextButtonClick = (event) => onChangePage(event, page + 1)

  const onLastPageButtonClick = (event) => onChangePage(event,
    Math.max(0, Math.ceil(count / rowsPerPage) - 1),
  )

  return (
    <>
      <IconButton
        onClick={onFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={onBackButtonClick}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={onNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={onLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        <LastPageIcon />
      </IconButton>
    </>
  )

})
