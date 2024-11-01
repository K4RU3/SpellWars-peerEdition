import React from 'react'

export default function Battle({changeComponent, selfID, targetID}) {
  return (
    <div>
        Battle
        <p>me {selfID}</p>
        <p>enemy {targetID}</p>
    </div>
    
  )
}
