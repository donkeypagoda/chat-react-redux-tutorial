import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props, state) => {
  let input

  return (
    <section id="new-message">
      <label>Whats on your mind?
        <input onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.dispatch(input.value, "How to make this the entered username")
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
