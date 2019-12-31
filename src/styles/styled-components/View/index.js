import styled from 'styled-components';

const size = ({ w, h, minW, maxW, minH, maxH, lh }) => `
  ${ w ? `width: ${w}` : ""};
  ${ h ? `height: ${h}` : ""};
  ${ minW ? `min-width: ${minW}` : ""};
  ${ maxW ? `max-width: ${maxW}` : ""};
  ${ minH ? `min-height: ${minH}` : ""};
  ${ maxH ? `max-height: ${maxH}` : ""};
`;

const marginPadding = ({ m, p, mT, mB, mL, mR, pT, pB, pL, pR }) => `
  ${ m ? `margin: ${m}` : ""};
  ${ p ? `padding: ${p}` : ""};
  ${ mT ? `margin-top: ${mT}` : ""};
  ${ mB ? `margin-bottom: ${mB}` : ""};
  ${ mL ? `margin-left: ${mL}` : ""};
  ${ mR ? `margin-right: ${mR}` : ""};
  ${ pT ? `padding-top: ${pT}` : ""};
  ${ pB ? `padding-bottom: ${pB}` : ""};
  ${ pL ? `padding-left: ${pL}` : ""};
  ${ pR ? `padding-right: ${pR}` : ""};
`;

const fonts = ({ fontF, fontSize, fontW, fontStyle, fontStretch }) => `
  ${ fontF ? `font-family: ${fontF}` : ""};
  ${ fontSize ? `font-size: ${fontSize}` : ""};
  ${ fontW ? `font-weight: ${fontW}` : ""};
  ${ fontStyle ? `font-style: ${fontStyle}` : ""};
  ${ fontStretch ? `font-stretch: ${fontStretch}` : ""};
`;

const text = ({ tTf, whiteSpace, tabSize, lBreak, overflowWrap, tAlign, tD, tDLine, tDStyle, tDColor, tSh, tUP }) => `
  ${ tTf ? `text-transform: ${tTf}` : ""};
  ${ whiteSpace ? `white-space: ${whiteSpace}` : ""};
  ${ tabSize ? `tab-size: ${tabSize}` : ""};
  ${ lBreak ? `line-break: ${lBreak}` : ""};
  ${ overflowWrap ? `overflow-wrap: ${overflowWrap}` : ""};
  ${ tAlign ? `text-align: ${tAlign}` : ""};
  ${ tD ? `text-decoration: ${tD}` : ""};
  ${ tDLine ? `text-decoration-line: ${tDLine}` : ""};
  ${ tDStyle ? `text-decoration-style: ${tDStyle}` : ""};
  ${ tDColor ? `text-decoration-color: ${tDColor}` : ""};
  ${ tSh ? `text-shadow: ${tSh}` : ""};
  ${ tUP ? `text-underline-position: ${tUP}` : ""};
`;

const positions = ({ pos, top, right, bottom, left, float, z }) => `
  ${ pos ? `position: ${pos}` : ""};
  ${ top ? `top: ${top}` : ""};
  ${ right ? `right: ${right}` : ""};
  ${ bottom ? `bottom: ${bottom}` : ""};
  ${ left ? `left: ${left}` : ""};
  ${ float ? `float: ${float}` : ""};
  ${ z ? `z-index: ${z}` : ""}
`;

const border = ({ border, bW, bT, bB, bL, bR, bStyle, bRad, captionS, bColl, bColor, bSpac, emptyC }) => `
  ${ border ? `border: ${border}` : ""};
  ${ bW ? `border-width: ${bW}` : ""};
  ${ bT ? `border-top: ${bT}` : ""};
  ${ bB ? `border-bottom: ${bB}` : ""};
  ${ bL ? `border-left: ${bL}` : ""};
  ${ bR ? `border-right: ${bR}` : ""};
  ${ bStyle ? `border-style: ${bStyle}` : ""};
  ${ bRad ? `border-radius: ${bRad}` : ""};
  ${ captionS ? `caption-side: ${captionS}` : ""};
  ${ bColl ? `border-collapse: ${bColl}` : ""};
  ${ bColor ? `border-color: ${bColor}` : ""}
  ${ bSpac ? `border-spacing: ${bSpac}` : ""};
  ${ emptyC ? `empty-cells: ${emptyC}` : ""};
`;

const backgrounds = ({
  bg, 
  bgOr, 
  bgAt,
  bgImg, 
  bgPos, 
  bgRep, 
  bgSize, 
  bgClip, 
  bgColor, 
}) => `
  ${ bg ? `background: ${bg}` : ''}
  ${ bgOr ? `background-origin: ${bgOr}` : '' }
  ${ bgRep ? `background-repeat: ${bgRep}` : '' }
  ${ bgSize ? `background-size: ${bgSize}` : '' }
  ${ bgClip ? `background-clip: ${bgClip}` : '' }
  ${ bgPos ? `background-position: ${bgPos}` : '' }
  ${ bgAt ? `background-attachment: ${bgAt}` : '' }
  ${ bgColor ? `background-color: ${bgColor}` : '' }
  ${ bgImg ? `background-image: url(${bgImg})` : '' }
`;

const flexBox = ({
  row,
  flex, 
  wrap,
  grow,
  aEnd,
  jEnd,
  sEnd,
  order,
  basis,
  column,
  noWrap,
  sStart,
  shrink,
  aStart,
  jStart,
  around,
  evenly,
  aCenter,
  sCenter,
  jCenter,
  between,
  aStretch,
  rowReverse,
  columnReverse
}) => `
  ${ flex ? 'display: flex;' : '' }
  ${ order ? `order: ${order};` : ""}
  ${ wrap ? 'flex-wrap: wrap;' : '' }
  ${ grow ? `flex-grow: ${grow};` : '' }
  ${ row ? 'flex-direction: row;' : '' }
  ${ noWrap ? 'flex-wrap: no-wrap;' : '' }
  ${ aEnd ? 'align-items: flex-end;' : ''}
  ${ sEnd ? 'align-self: self-end;' : '' }
  ${ aCenter ? 'align-items: center;' : ''}
  ${ basis ? `flex-basis: ${basis};` : '' }
  ${ sCenter ? 'align-self: center;' : '' }
  ${ aStretch ? 'align-items: stretch;' : ''} 
  ${ column ? 'flex-direction: column;' : '' }
  ${ sStart ? 'align-self: self-start;' : '' }
  ${ shrink ? `flex-shrink: ${shrink};` : '' }
  ${ jEnd ? 'justify-content: flex-end;' : ''}
  ${ aStart ? 'align-items: flex-start;' : ''}
  ${ jCenter ? 'justify-content: center;' : ''}
  ${ jStart ? 'justify-content: flex-start;' : ''}
  ${ around ? 'justify-content: space-around;' : ''}
  ${ evenly ? 'justify-content: space-evenly;' : ''}
  ${ between ? 'justify-content: space-between;' : ''}
  ${ rowReverse ? 'flex-direction: row-reverse;' : '' }
  ${ columnReverse ? 'flex-direction: column-reverse;' : '' }
`;

const other = ({ boxS, boxSh, overflow, c, op, tr }) => `
  ${ boxS ? `box-sizing: ${boxS}` : ""};
  ${ boxSh ? `box-shadow: ${boxSh}` : ""};
  ${ overflow ? `overflow : ${overflow}` : ""};
  ${ c ? `color: ${c}` : ""};
  ${ op ? `opacity: ${op}` : ""};
  ${ tr ? `transition: ${tr}` : ""};
`;

const View = styled.div`
  ${ size}
  ${ fonts}
  ${ text}
  ${ marginPadding}
  ${ positions}
  ${ backgrounds}
  ${ flexBox}
  ${ border}
  ${ other}
`;

export default View;