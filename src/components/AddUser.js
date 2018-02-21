import React from 'react'
import PropTypes from 'prop-types'

const AddUser = (props) => {
  let name

  return (
    <section id="add-user">
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

AddUser.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddUser
