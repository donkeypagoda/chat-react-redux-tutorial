import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input
  let name

  return (
    <section id="new-message">
      <label>Whats on your mind?
        <input onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.dispatch(input.value, 'Me')
              input.value = ""
            }
        }}
        type="text"
        ref ={(node) =>{
          input = node
        }}></input>
      </label>
      <label>Your name?
        <input onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.dispatch(name.value, 'username')
              name.value = ""
            }
        }}
        type="text"
        ref ={(node) =>{
          name = node
        }}></input>
      </label>
    </section>
  )
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
