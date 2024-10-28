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
                        accentColor="lightblue"
                        text={"クイック"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "quick"})}
                    />
                    <ButtonMain
                        accentColor="limegreen"
                        text={"ルーム"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "room"})}
                    />
                </div>
                <div style={{...ButtonRowStyle, ...{top:"75%"}}}>
                    <ButtonMain
                        accentColor="red"
                        text={"ランク"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "ranking"})}
                    />
                    <ButtonMain
                        accentColor="purple"
                        text={"修行"}
                        width="30vw"
                        insideColor={"#38a0f0"}
                        outColor={"#4d1089"}
                        onClick={()=>changeComponent(Matchmake, {matchType: "training"})}
                    />
                </div>
            </div>
        </div>
    );
}
