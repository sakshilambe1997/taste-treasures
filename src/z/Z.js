import React, { useState } from 'react'

function Z() {
    const [count,serCount]=useState(0)
  return (
    <div>
     <h1>Use State</h1>
    <p>Count {count}</p>


    <button type="button" className='btn' onClick={()=>{
        serCount(count+1)
    }} > Count</button>
    </div>
  )
}

export default Z