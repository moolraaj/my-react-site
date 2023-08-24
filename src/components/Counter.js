import React, { useState,memo } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)

const data=memo(function CountHandel(){
    setNumber(number+1)
} )

  return (
   <>
   <h1></h1>
   <button onClick={data}>Counter</button>
   </>
  )
}

export default Counter