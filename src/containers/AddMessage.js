import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapMessageDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapMessageDispatchToProps)(AddMessageComponent)
