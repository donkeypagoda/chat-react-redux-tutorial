import { connect } from 'react-redux'
import AddUserComponent from '../components/AddUser'
import { addUser } from '../actions'

const addUserDispatchToProps = dispatch => ({
  dispatch: (name) => {
    dispatch(addUser(name))
  }
})

export const AddUser = connect(() => ({}), addUserDispatchToProps)(AddUserComponent)
