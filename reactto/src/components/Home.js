import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
      <>
      <Link to="/signup">
          <div>signup</div>
    </Link>
    <div>Welcome Home</div>
      </>
  )
}

export default Home