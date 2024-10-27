import React from "react";

export default function ButtonMain({ changeComponent, accentColor, outColor, insideColor, text }) {
    const mainStyle = {
        width: "40vw"
    }
    return (
        <div style={mainStyle}>
            <svg id="_レイヤー_1" data-name="レイヤー_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 600">
                <defs>
                    <style>
                        {`
                            .st0, .st1, .st2, .st3 {
                                fill: none;
                            }

                            .st0, .st1, .st2, .st3, .st4 {
                                stroke-miterlimit: 10;
                            }

                            .st0, .st3, .st4 {
                                stroke: #231815;
                            }

                            .st0, .st4 {
                                stroke-width: 6px;
                            }

                            .st1 {
                                stroke-width: 2px;
                            }

                            .st1, .st2 {
                                stroke: ${accentColor};
                            }

                            .st3 {
                                stroke-width: 4px;
                            }

                            .st4 {
                                fill: url(#_名称未設定グラデーション_116);
                            }
                        `}
                    </style>
                    <radialGradient id="_名称未設定グラデーション_116" data-name="名称未設定グラデーション 116" cx="408.2" cy="288.3" fx="408.2" fy="288.3" r="174" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#00a0e9"/>
                        <stop offset="1" stop-color="#172a88"/>
                    </radialGradient>
                </defs>
                <rect id="co" class="st4" x="194.3" y="166.7" width="427.8" height="243" rx="10.1" ry="10.1"/>
                <rect id="ci" class="st1" x="194.3" y="166.7" width="427.8" height="243" rx="10.1" ry="10.1"/>
                <rect id="mo16" class="st3" x="182.2" y="185.8" width="24.2" height="24.2" transform="translate(-83 195.3) rotate(-45)"/>
                <rect id="mo15" class="st3" x="213.3" y="154.7" width="24.2" height="24.2" transform="translate(-51.9 208.2) rotate(-45)"/>
                <rect id="mo14" class="st3" x="230.4" y="154.7" width="24.2" height="24.2" transform="translate(-46.9 220.3) rotate(-45)"/>
                <rect id="mo13" class="st3" x="182.2" y="202.9" width="24.2" height="24.2" transform="translate(-95.1 200.3) rotate(-45)"/>
                <rect id="mo12" class="st3" x="182.2" y="366.6" width="24.2" height="24.2" transform="translate(-210.9 248.3) rotate(-45)"/>
                <rect id="mo11" class="st3" x="182.2" y="349.5" width="24.2" height="24.2" transform="translate(-198.8 243.3) rotate(-45)"/>
                <rect id="mo10" class="st3" x="213.3" y="397.7" width="24.2" height="24.2" transform="translate(-223.7 279.4) rotate(-45)"/>
                <rect id="mo9" class="st3" x="230.4" y="397.7" width="24.2" height="24.2" transform="translate(-218.7 291.5) rotate(-45)"/>
                <rect id="mo8" class="st3" x="584.3" y="154.7" width="24.2" height="24.2" transform="translate(56.8 470.5) rotate(-45)"/>
                <rect id="mo7" class="st3" x="567.2" y="154.7" width="24.2" height="24.2" transform="translate(51.8 458.4) rotate(-45)"/>
                <rect id="mo6" class="st3" x="610.1" y="185.8" width="24.2" height="24.2" transform="translate(42.3 497.9) rotate(-45)"/>
                <rect id="mo5" class="st3" x="610.1" y="202.9" width="24.2" height="24.2" transform="translate(30.2 502.9) rotate(-45)"/>
                <rect id="mo4" class="st3" x="610.1" y="366.6" width="24.2" height="24.2" transform="translate(-85.5 550.8) rotate(-45)"/>
                <rect id="mo3" class="st3" x="610.1" y="349.5" width="24.2" height="24.2" transform="translate(-73.5 545.8) rotate(-45)"/>
                <rect id="mo2" class="st3" x="574.9" y="397.7" width="24.2" height="24.2" transform="translate(-117.8 535.1) rotate(-45)"/>
                <rect id="mo1" class="st3" x="561.9" y="397.7" width="24.2" height="24.2" transform="translate(-121.7 525.9) rotate(-45)"/>
                <rect id="mi16" class="st2" x="182.2" y="185.8" width="24.2" height="24.2" transform="translate(-83 195.3) rotate(-45)"/>
                <rect id="mi15" class="st2" x="213.3" y="154.7" width="24.2" height="24.2" transform="translate(-51.9 208.2) rotate(-45)"/>
                <rect id="mi14" class="st2" x="230.4" y="154.7" width="24.2" height="24.2" transform="translate(-46.9 220.3) rotate(-45)"/>
                <rect id="mi13" class="st2" x="182.2" y="202.9" width="24.2" height="24.2" transform="translate(-95.1 200.3) rotate(-45)"/>
                <rect id="mi12" class="st2" x="182.2" y="366.6" width="24.2" height="24.2" transform="translate(-210.9 248.3) rotate(-45)"/>
                <rect id="mi11" class="st2" x="182.2" y="349.5" width="24.2" height="24.2" transform="translate(-198.8 243.3) rotate(-45)"/>
                <rect id="mi10" class="st2" x="213.3" y="397.7" width="24.2" height="24.2" transform="translate(-223.7 279.4) rotate(-45)"/>
                <rect id="mi9" class="st2" x="230.4" y="397.7" width="24.2" height="24.2" transform="translate(-218.7 291.5) rotate(-45)"/>
                <rect id="mi8" class="st2" x="584.3" y="154.7" width="24.2" height="24.2" transform="translate(56.8 470.5) rotate(-45)"/>
                <rect id="mi7" class="st2" x="567.2" y="154.7" width="24.2" height="24.2" transform="translate(51.8 458.4) rotate(-45)"/>
                <rect id="mi6" class="st2" x="610.1" y="185.8" width="24.2" height="24.2" transform="translate(42.3 497.9) rotate(-45)"/>
                <rect id="mi5" class="st2" x="610.1" y="202.9" width="24.2" height="24.2" transform="translate(30.2 502.9) rotate(-45)"/>
                <rect id="mi4" class="st2" x="610.1" y="366.6" width="24.2" height="24.2" transform="translate(-85.5 550.8) rotate(-45)"/>
                <rect id="mi3" class="st2" x="610.1" y="349.5" width="24.2" height="24.2" transform="translate(-73.5 545.8) rotate(-45)"/>
                <rect id="mi2" class="st2" x="574.9" y="397.7" width="24.2" height="24.2" transform="translate(-117.8 535.1) rotate(-45)"/>
                <rect id="mi1" class="st2" x="561.9" y="397.7" width="24.2" height="24.2" transform="translate(-121.7 525.9) rotate(-45)"/>
                <rect id="bo4" class="st0" x="172.3" y="144.7" width="44" height="44" transform="translate(-61 186.2) rotate(-45)"/>
                <rect id="bo3" class="st0" x="172.3" y="387.8" width="44" height="44" transform="translate(-232.9 257.4) rotate(-45)"/>
                <rect id="bo2" class="st0" x="600.1" y="387.8" width="44" height="44" transform="translate(-107.5 559.9) rotate(-45)"/>
                <rect id="bo1" class="st0" x="600.1" y="144.7" width="44" height="44" transform="translate(64.3 488.8) rotate(-45)"/>
                <rect id="bi4" class="st1" x="172.3" y="144.7" width="44" height="44" transform="translate(-61 186.2) rotate(-45)"/>
                <rect id="bi3" class="st1" x="172.3" y="387.8" width="44" height="44" transform="translate(-232.9 257.4) rotate(-45)"/>
                <rect id="bi2" class="st1" x="600.1" y="387.8" width="44" height="44" transform="translate(-107.5 559.9) rotate(-45)"/>
                <rect id="bi1" class="st1" x="600.1" y="144.7" width="44" height="44" transform="translate(64.3 488.8) rotate(-45)"/>
            </svg>
        </div>
    );
}
