import React from "react";

import ButtonMain from "./Home/ButtonMain";

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
                        changeComponent={changeComponent}
                        accentColor="lightblue"
                        text={"クイック"}
                    />
                    <ButtonMain
                        changeComponent={changeComponent}
                        accentColor="limegreen"
                        text={"ルーム"}
                    />
                </div>
                <div style={{...ButtonRowStyle, ...{top:"65%"}}}>
                    <ButtonMain
                        changeComponent={changeComponent}
                        accentColor="red"
                        text={"ランク"}
                    />
                    <ButtonMain
                        changeComponent={changeComponent}
                        accentColor="purple"
                        text={"修行"}
                    />
                </div>
            </div>
        </div>
    );
}
