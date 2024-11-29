import React from "react";

import ButtonMain from "./Home/ButtonMain";
import Matchmake from "./Matchmake";

export default function Home({ changeComponent }) {
    const ButtonRowStyle = {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "100px",
        marginTop: "20px",
        transform: "translate(-50%, -50%)",
        left: "50%",
    };

    // Debug用
    const [roomWord, setRoomWord] = React.useState(localStorage.getItem("roomWord") || undefined);
    const [rate, setRate] = React.useState(localStorage.getItem("rate") || undefined);
    const matchStatusStyle = {
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0"
    }
    const handleWordInput = (e) => {
        setRoomWord(e.target.value);
    }
    const handleRateInput = (e) => {
        if(e.target.value.match(/^[0-9]+$/) || e.target.value === ""){
            setRate(e.target.value);
        }
    }

    return (
        <div
            style={{
                position: "relative", // 親要素に相対位置を設定
                height: "100vh", // 親要素の高さを100vhに設定（必要に応じて調整）
                userSelect: "none",
            }}
        >
            <h1
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "8rem",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                SpellWars
            </h1>
            <div>
                <div style={{...ButtonRowStyle, ...{top:"40%"}}}>
                    <ButtonMain
                        accentColor="#4BDEFF"
                        text={"クイック"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "quick"})}
                    />
                    <ButtonMain
                        accentColor="#36DA40"
                        text={"ルーム"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "room", roomWord: roomWord})}
                    />
                </div>
                <div style={{...ButtonRowStyle, ...{top:"75%"}}}>
                    <ButtonMain
                        accentColor="#EC6666"
                        text={"ランク"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "ranking", rate: rate})}
                    />
                    <ButtonMain
                        accentColor="#8A44EB"
                        text={"修行"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "training"})}
                    />
                </div>
            </div>

            {/* <debug matchmake status> */}
            <div style = {matchStatusStyle} >
                <input type="text" name="" id="" placeholder="roomWord" value={roomWord} onInput={handleWordInput} />
                <input type="nuber" name="" id="" placeholder="rate" value={rate} onInput={handleRateInput} />
            </div>
        </div>
    );
}
