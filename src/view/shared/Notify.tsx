import React from 'react'
import ReactDOM from 'react-dom'
import Notifications, { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { StoreTypes } from 'src/types'
import Actions from '@store/actions'

const modalRoot = document.getElementById('modal')

export interface Props {
  errorMessage: string
  successMessage: string

  setErrorNotify: (text: string) => void
  setSuccessNotify: (text: string) => void
}

class Notify extends React.PureComponent<Props> {

  timerID

  mapNotification = () => {
    if (!modalRoot) return false

    return ReactDOM.createPortal((
      <Notifications options={{ zIndex: 3000, top: '0px' }} />
    ), modalRoot)
  }

  componentDidUpdate() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage) {
      notify.show((errorMessage), 'error', 4000)
      this.timerID = setTimeout(() => this.props.setErrorNotify(''), 5000)
    }

    if (successMessage) {
      notify.show(successMessage, 'success', 3000)
      this.timerID = setTimeout(() => this.props.setSuccessNotify(''), 4000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerID)
  }

  render() {
    const { errorMessage, successMessage } = this.props

    if (errorMessage || successMessage) {
      return this.mapNotification()
    } else return null
  }
}

type StateProps = Pick<Props, 'errorMessage' | 'successMessage'>
const mapStateToProps = (state: StoreTypes): StateProps => ({
  errorMessage: state.common.errorMessage,
  successMessage: state.common.successMessage,
})

type DispatchProps = Pick<Props, 'setErrorNotify' | 'setSuccessNotify'>
const mapDispatchToProps = (dispatch): DispatchProps => ({
  setErrorNotify: (value: string) => dispatch(Actions.common.setErrorNotify(value)),
  setSuccessNotify: (value: string) => dispatch(Actions.common.setSuccessNotify(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notify)
