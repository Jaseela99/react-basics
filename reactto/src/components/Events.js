import React from 'react'

const Events = () => {
    //state and function to update state
    const [name,setName] = React.useState('jaseela');
//event handler
const handleName=()=>{
    setName('jaseena');
}
  return (
    <div>
        {/* to set input as the changed state */}
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleName}>
            change State
        </button>
        <div>{name}</div>
    </div>
  )
}

export default Events