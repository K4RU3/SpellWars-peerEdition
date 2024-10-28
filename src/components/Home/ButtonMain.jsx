import React from "react";

export default function ButtonMain({ changeComponent, accentColor, outColor, insideColor, text, width, onClick }) {
    const mainStyle = {
        width: width,
        position: "relative"
    }
    const accentStyle = {
        stroke: accentColor
    }

    const stroke1 = {
        strokeWidth: 1
    }
    const stroke2 = {
        strokeWidth: 4
    }
    const stroke3 = {
        strokeWidth: 5
    }
    const stroke4 = {
        strokeWidth: 8
    }

    return (
        <div style={mainStyle} onClick={onClick}>
           <svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 510.3 325.57">
                <defs>
                    <radialGradient id="_名称未設定グラデーション_116" data-name="名称未設定グラデーション 116" cx="255.03" cy="162.62" fx="255.03" fy="162.62" r="173.97" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={insideColor}/>
                    <stop offset="1" stopColor={outColor}/>
                    </radialGradient>
                </defs>
                <g>
                    <g id="mainLayer">
                    <g id="mButton">
                        <g id="m">
                        <rect id="mo" x="41.1" y="41.1" width="427.85" height="243.04" rx="10.13" ry="10.13" fill="url(#_名称未設定グラデーション_116)" stroke="#231815" strokeMiterlimit="10" style={stroke4}/>
                        <rect id="mi" style={{...accentStyle, ...stroke2}} x="41.1" y="41.1" width="427.85" height="243.04" rx="10.13" ry="10.13" fill="none" strokeMiterlimit="10"/>
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" style={{ fontSize: "4rem", fontWeight: "bold" }}>{text}</text>
                        </g>
                        <g id="_x34_">
                        <g id="_x34_o">
                            <g id="_x34_so">
                            <rect id="_x34_4so" x="408.67" y="29.02" width="24.17" height="24.17" transform="translate(94.17 309.56) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x34_3so" x="425.76" y="29.02" width="24.17" height="24.17" transform="translate(99.18 321.64) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x34_2so" x="456.87" y="60.12" width="24.17" height="24.17" transform="translate(86.29 352.75) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x34_1so" x="456.87" y="77.21" width="24.17" height="24.17" transform="translate(74.21 357.75) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            </g>
                            <rect id="_x34_bo" x="446.96" y="19.11" width="43.99" height="43.99" transform="translate(108.29 343.64) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke4}/>
                        </g>
                        <g id="_x34_i">
                            <g id="_x34_si">
                            <rect id="_x34_4si" x="408.67" y="29.02" width="24.17" height="24.17" transform="translate(94.17 309.56) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10"/>
                            <rect id="_x34_3si" x="425.76" y="29.02" width="24.17" height="24.17" transform="translate(99.18 321.64) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10"/>
                            <rect id="_x34_2si" x="456.87" y="60.12" width="24.17" height="24.17" transform="translate(86.29 352.75) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10"/>
                            <rect id="_x34_1si" x="456.87" y="77.21" width="24.17" height="24.17" transform="translate(74.21 357.75) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10"/>
                            </g>
                            <rect id="_x34_bi" x="446.96" y="19.11" width="43.99" height="43.99" transform="translate(108.29 343.64) rotate(-45)" fill="none" style={{...accentStyle, ...stroke2}} strokeMiterlimit="10"/>
                        </g>
                        </g>
                        <g id="_x33_">
                        <g id="_x33_o">
                            <g id="_x33_so">
                            <rect id="_x33_4so" x="456.87" y="223.86" width="24.17" height="24.17" transform="translate(-29.49 400.71) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x33_3so" x="456.87" y="240.95" width="24.17" height="24.17" transform="translate(-41.57 405.71) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x33_2so" x="425.76" y="272.05" width="24.17" height="24.17" transform="translate(-72.68 392.83) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x33_1so" x="408.67" y="272.05" width="24.17" height="24.17" transform="translate(-77.68 380.74) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            </g>
                            <rect id="_x33_bo" x="446.96" y="262.15" width="43.99" height="43.99" transform="translate(-63.57 414.82) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke4}/>
                        </g>
                        <g id="_x33_i">
                            <g id="_x33_si">
                            <rect id="_x33_4si" x="456.87" y="223.86" width="24.17" height="24.17" transform="translate(-29.49 400.71) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x33_3si" x="456.87" y="240.95" width="24.17" height="24.17" transform="translate(-41.57 405.71) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x33_2si" x="425.76" y="272.05" width="24.17" height="24.17" transform="translate(-72.68 392.83) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x33_1si" x="408.67" y="272.05" width="24.17" height="24.17" transform="translate(-77.68 380.74) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            </g>
                            <rect id="_x33_bi" x="446.96" y="262.15" width="43.99" height="43.99" transform="translate(-63.57 414.82) rotate(-45)" fill="none" style={{...accentStyle, ...stroke2}} strokeMiterlimit="10" />
                        </g>
                        </g>
                        <g id="_x32_">
                        <g id="_x32_o">
                            <g id="_x32_so">
                            <rect id="_x32_4so" x="77.21" y="272.05" width="24.17" height="24.17" transform="translate(-174.76 146.37) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x32_3so" x="60.12" y="272.05" width="24.17" height="24.17" transform="translate(-179.77 134.28) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x32_2so" x="29.02" y="240.95" width="24.17" height="24.17" transform="translate(-166.89 103.18) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x32_1so" x="29.02" y="223.86" width="24.17" height="24.17" transform="translate(-154.8 98.17) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            </g>
                            <rect id="_x32_bo" x="19.11" y="262.15" width="43.99" height="43.99" transform="translate(-188.88 112.29) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke4}/>
                        </g>
                        <g id="_x32_i">
                            <g id="_x32_si">
                            <rect id="_x32_4si" x="77.21" y="272.05" width="24.17" height="24.17" transform="translate(-174.76 146.37) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x32_3si" x="60.12" y="272.05" width="24.17" height="24.17" transform="translate(-179.77 134.28) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x32_2si" x="29.02" y="240.95" width="24.17" height="24.17" transform="translate(-166.89 103.18) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x32_1si" x="29.02" y="223.86" width="24.17" height="24.17" transform="translate(-154.8 98.17) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            </g>
                            <rect id="_x32_bi" x="19.11" y="262.15" width="43.99" height="43.99" transform="translate(-188.88 112.29) rotate(-45)" fill="none" style={{...accentStyle, ...stroke2}} strokeMiterlimit="10" />
                        </g>
                        </g>
                        <g id="_x31_">
                        <g id="_x31_o">
                            <g id="_x31_so">
                            <rect id="_x31_4so" x="29.02" y="77.21" width="24.17" height="24.17" transform="translate(-51.11 55.22) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x31_3so" x="29.02" y="60.12" width="24.17" height="24.17" transform="translate(-39.02 50.21) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x31_2so" x="60.12" y="29.02" width="24.17" height="24.17" transform="translate(-7.92 63.1) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            <rect id="_x31_1so" x="77.21" y="29.02" width="24.17" height="24.17" transform="translate(-2.91 75.18) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke3}/>
                            </g>
                            <rect id="_x31_bo" x="19.11" y="19.11" width="43.99" height="43.99" transform="translate(-17.03 41.1) rotate(-45)" fill="none" stroke="#231815" strokeMiterlimit="10" style={stroke4}/>
                        </g>
                        <g id="_x31_i">
                            <g id="_x31_si">
                            <rect id="_x31_4si" x="29.02" y="77.21" width="24.17" height="24.17" transform="translate(-51.11 55.22) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x31_3si" x="29.02" y="60.12" width="24.17" height="24.17" transform="translate(-39.02 50.21) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x31_2si" x="60.12" y="29.02" width="24.17" height="24.17" transform="translate(-7.92 63.1) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            <rect id="_x31_1si" x="77.21" y="29.02" width="24.17" height="24.17" transform="translate(-2.91 75.18) rotate(-45)" fill="none" style={{...accentStyle, ...stroke1}} strokeMiterlimit="10" />
                            </g>
                            <rect id="_x31_bi" x="19.11" y="19.11" width="43.99" height="43.99" transform="translate(-17.03 41.1) rotate(-45)" fill="none" style={{...accentStyle, ...stroke2}} strokeMiterlimit="10" />
                        </g>
                        </g>
                    </g>
                    </g>
                </g>
                </svg>
        </div>
    );
}
