import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const nav = useNavigate()
    const [username, setUsername] = React.useState('')
    const [loggedin, setLoggedin] = React.useState(false)
    const handleSignin = () => {
        console.log(username)
        setUsername(username)
        username?setLoggedin(true):setLoggedin(false)
        console.log(loggedin)
        loggedin?nav('/'):nav('/signup')
        
    }
  return (
    <div>
        <input placeholder='name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={handleSignin}>Sign Up</button>
    </div>

  )
}

export default SignUp