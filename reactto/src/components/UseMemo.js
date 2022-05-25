import React,{useMemo} from 'react'
import MemoChild from './MemoChild'


const UseMemo = () => {
    const [counter,setCounter]=React.useState(0)
    //here props doesnt update so rate count doesnt increase thus useMemo is used
const memos = useMemo(()=>{
    console.log('memo')
    return <MemoChild></MemoChild>
},[])
const increment = () => {
    setCounter(counter+1)
}
  return (
    <div>UseMemo
        <div>counter:{counter}</div>
        <button onClick={increment}>increment</button>
        <div>{memos}</div>
    </div>
    
  )
}

export default UseMemo