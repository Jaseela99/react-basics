import React from 'react'
//we have to pass the props to functional comopnents
const Function = (props) => {
  return (
      
    <div>
        <h1>UserLISt</h1>
        <div>
        {props.children} age:{props.age}
            </div>
            </div>
  )
}

export default Function