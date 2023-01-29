import React from 'react'

const ClickCounter = ({counter,clickCounter}) => {
    console.log(clickCounter);
  return (
    <div>
        <button onClick={()=>clickCounter()}>+ {counter}</button>
    </div>
  )
}

export default ClickCounter 