import React from 'react'
import Child from './Child'

const Parent = () => {

    const [data,setData] = React.useState("hello")
    //this executes when callback from chld component triggers
    const trigger= (data) => {
        setData(data)
    }
  return (
    <div>

        {/* parent to Child passing through the props which cannot be changed in child component */}
<Child trigger={trigger} data={data}/>
    </div>
  )
}

export default Parent