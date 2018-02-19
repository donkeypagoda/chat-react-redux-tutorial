import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'



export const MessagesListComponent = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)
