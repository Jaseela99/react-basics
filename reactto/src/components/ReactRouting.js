import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'

const ReactRouting = () => {
  return (
    
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/signup" exact element={<SignUp/>}/>
        </Routes>
    
  )
}

export default ReactRouting