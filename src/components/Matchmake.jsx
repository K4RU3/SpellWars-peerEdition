import React, { useEffect, useState } from 'react'

import Home from './Home'
import { useAppContext } from '../AppContext'
import Magic_load from './other/Magic_load'

export default function Matchmake({changeComponent, matchType}) {
  const {id, idLoading, idError} = useAppContext()

  const [dotCount, setDotCount] = useState(0)

  const loadDivStyle = {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "5%",
    right: "5%",
    flexDirection: "column",
  }
  const loadStyle = {
    width: "6vw",
    marginRight: "1vw",
  }

  setInterval(()=>{
    setDotCount(()=>(dotCount+1)%4)
  }, 500)

  useEffect(() => {
    if(idError === true) {
      alert("IDの取得に失敗しました。ホームに戻ります。")
      changeComponent(Home)
    }
  }, [idError])

  return (
    <div>
      <div style={loadDivStyle}>
        <Magic_load style={loadStyle}/>
        <p style={{display: "block", position: "relative", bottom: "0%"}}>{idLoading ? "Loading" : "Matchmaking" + ".".repeat(dotCount)}</p>
      </div>
    </div>
  )
}
