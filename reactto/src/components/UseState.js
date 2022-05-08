import React from 'react'

const useState = () => {
    //returns an array of state and a function to update state ,setState is an async function
    const [name,setName] = React.useState('React')
    const [age,setAge] = React.useState(20)
  return (
    <div>
        <p>Name:
            {/*setName is called to set the name to e .target .value where  e is the synthetic event(react event handling systems) */}
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>

        </p>
        <p>
            Age:{age}
        </p>
        <button onClick={()=>setAge(age+1)}>Age Increment</button>

    </div>
  )
}

export default useState