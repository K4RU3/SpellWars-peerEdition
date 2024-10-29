import React from 'react'

export default function MagicLoad({style}) {
    const anim = `
        @keyframes positive {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes negative {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-360deg);
            }
        }
        
        #text, #inner1, #inner2, #outer1, #outer2 {
            transform-origin: center;
            text-align: right;
        }
            
        #text {
            animation: positive 25s linear infinite;
        }

        #inner1 {
            animation: positive 20s linear infinite;
        }

        #inner2 {
            animation: negative 20s linear infinite;
        }

        #outer1 {
            animation: negative 15s linear infinite;
        }

        #outer2 {
            animation: positive 15s linear infinite;
        }
        `
        const svgStyle = {
            right: "0",
            bottom: "0"
        }

  return (
    <div style={{...style}}>
        <style>{anim}</style>
        <svg id="_レイヤー_1" style={svgStyle} data-name="レイヤー_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1000">
            <defs>
                <style>
                {`
                    .st0 {
                        fill: #d965ff;
                        font-family: MagicRing, MagicRing;
                        font-size: 32.4px;
                    }

                    .st1 {
                        fill: #b145ff;
                    }
                `}
                </style>
                <path id="path" d="M905,500c0,223.7-181.3,405-405,405S95,723.7,95,500,276.3,95,500,95s405,181.3,405,405Z"/>
            </defs>
            <text id="text">
                <textPath startOffset="0%" href="#path"><tspan className="st0"><tspan x="0" y="0">In the days before time, when the stars were but embers in the night sky, the Elders of </tspan></tspan>
                </textPath></text>
            <g id="outercircle">
                <path className="st1" d="M500,33c63,0,124.2,12.3,181.8,36.7,55.6,23.5,105.6,57.2,148.4,100.1,42.9,42.9,76.6,92.8,100.1,148.4,24.3,57.6,36.7,118.7,36.7,181.8s-12.3,124.2-36.7,181.8c-23.5,55.6-57.2,105.6-100.1,148.4s-92.8,76.6-148.4,100.1c-57.6,24.3-118.7,36.7-181.8,36.7s-124.2-12.3-181.8-36.7c-55.6-23.5-105.6-57.2-148.4-100.1-42.9-42.9-76.6-92.8-100.1-148.4-24.3-57.6-36.7-118.7-36.7-181.8s12.3-124.2,36.7-181.8c23.5-55.6,57.2-105.6,100.1-148.4,42.9-42.9,92.8-76.6,148.4-100.1,57.6-24.3,118.7-36.7,181.8-36.7M500,25C237.7,25,25,237.7,25,500s212.7,475,475,475,475-212.7,475-475S762.3,25,500,25h0Z"/>
            </g>
            <g id="innercircle">
                <path className="st1" d="M500,129c50.1,0,98.7,9.8,144.4,29.2,44.2,18.7,83.9,45.4,117.9,79.5,34.1,34.1,60.8,73.7,79.5,117.9,19.3,45.7,29.2,94.3,29.2,144.4s-9.8,98.7-29.2,144.4c-18.7,44.2-45.4,83.9-79.5,117.9s-73.7,60.8-117.9,79.5c-45.7,19.3-94.3,29.2-144.4,29.2s-98.7-9.8-144.4-29.2c-44.2-18.7-83.9-45.4-117.9-79.5-34.1-34.1-60.8-73.7-79.5-117.9-19.3-45.7-29.2-94.3-29.2-144.4s9.8-98.7,29.2-144.4c18.7-44.2,45.4-83.9,79.5-117.9,34.1-34.1,73.7-60.8,117.9-79.5,45.7-19.3,94.3-29.2,144.4-29.2M500,125c-207.1,0-375,167.9-375,375s167.9,375,375,375,375-167.9,375-375S707.1,125,500,125h0Z"/>
            </g>
            <g id="inner2">
                <path className="st1" d="M764.1,347.5l-264,457.2L236.1,347.5h527.9M771,343.5H229.2l270.9,469.2,270.9-469.2h0Z"/>
            </g>
            <g id="inner1">
                <path className="st1" d="M499.7,195.5l264,457.2H235.8L499.7,195.5M499.7,187.5l-270.9,469.2h541.8L499.7,187.5h0Z"/>
            </g>
            <g id="outer2">
                <path className="st1" d="M815.7,317.6l-315.2,546L185.2,317.6h630.5M822.6,313.6H178.3l322.2,558,322.2-558h0Z"/>
            </g>
            <g id="outer1">
                <path className="st1" d="M500,136l315.2,546H184.8L500,136M500,128L177.8,686h644.3L500,128h0Z"/>
            </g>
            </svg>
    </div>
  )
}
