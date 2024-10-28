import React from 'react'

import Home from './Home'
import { useAppContext } from '../AppContext'

export default function Matchmake({changeComponent, matchType}) {
  const {id, idLoading, idError} = useAppContext()
  return (
    <div>
      <h1>{matchType}</h1>
      <p>{idLoading ? "Loading..." : idError ? "Error" : id}</p>
      <button onClick={()=>changeComponent(Home)}>戻る</button>
    </div>
  )
}
