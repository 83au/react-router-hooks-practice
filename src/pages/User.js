import React from 'react'

function User({ match }) {
  return (
    <div>
      User: { match.params.name }
    </div>
  )
}

export default User