import React from 'react'
//we have to pass the props to functional comopnents
const Function = (props) => {
  return (
      
    <div>
        <div>
          {/* to pass content we use props.children */}
        {props.children}   
        | age:{props.age}
            </div>
            </div>
  )
}

export default Function