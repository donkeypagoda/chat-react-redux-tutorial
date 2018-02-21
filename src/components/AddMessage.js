import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input

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
              props.dispatch(input.value, 'username')
              input.value = ""
            }
        }}
        type="text"
        ref ={(node) =>{
          input = node
        }}></input>
      </label>
    </section>
  )
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
