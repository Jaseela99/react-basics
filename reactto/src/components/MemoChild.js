import React, { useEffect } from 'react'

let rateCounter = 0
const MemoChild = () => {
    useEffect(() => {
        rateCounter++
        console.log('memo')
    }, [])
  return (
    <div>{rateCounter }</div>
  )
}

export default MemoChild