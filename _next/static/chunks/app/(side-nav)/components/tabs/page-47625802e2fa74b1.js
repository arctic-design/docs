(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2567],{2153:e=>{e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},2367:(e,n,o)=>{"use strict";o.d(n,{CodeBlockSection:()=>c});var t=o(95155),i=o(97879),r=o(89650),s=o(95676),l=o.n(s),a=o(4776);function c(e){let{children:n,language:o="js",showLineNumbers:s,onCopy:c,visible:d=!0}=e,m=e=>{c?c(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,a.A)(l().codeBlock,{[l().visible]:d}),children:[(0,t.jsx)(i.f4,{code:n.trim(),language:o,theme:i.Zj.dracula,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:i}=e;return(0,t.jsx)("pre",{className:l().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[s&&(0,t.jsx)("span",{className:l().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...i({token:e})},n))]},n))})}}),(0,t.jsx)(r.r,{onClick:()=>m(n.trim())})]})}},29081:(e,n,o)=>{"use strict";o.d(n,{_:()=>h});var t=o(95155),i=o(12115),r=o(79046);o(2367);var s=o(85688),l=o.n(s),a=o(48690);function c(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:o,onChange:r,value:s,values:l}=e,d=(0,i.useMemo)(()=>c(n),[n]);if("boolean"===o)return(0,t.jsx)(a.dO,{id:n,label:d,checked:s,onToggle:()=>r(!s)});if("ddl"===o)return(0,t.jsx)(a.l6,{label:d,id:n,value:s?c(s):"",options:null==l?void 0:l.map(e=>({label:c(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===o||"number"===o)return(0,t.jsx)(a.ks,{type:o,label:d,value:s,onChange:e=>r(e.target.value)});if("segment"===o){var m;return(0,t.jsx)(a.Iz,{initialSelectedIndex:null!==(m=null==l?void 0:l.findIndex(e=>e===s))&&void 0!==m?m:-1,label:d,children:null==l?void 0:l.map(e=>(0,t.jsx)(a.EP,{onClick:()=>r(e),children:c(e)},e))})}return null}function m(e){let{children:n,values:o={},onChange:r,propDefs:s}=e,[a,c]=(0,i.useState)(o);return(0,i.useEffect)(()=>{o&&Object.keys(o).length>0&&c({...o})},[o]),(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("div",{className:l().codeContainer,children:n}),s.length>0&&(0,t.jsx)("div",{className:l().propsContainer,children:s.map(e=>(0,t.jsx)(d,{onChange:n=>r(e.name,n),...e,value:a[e.name]},e.name))})]})}function h(e){let{code:n,component:o,propDefs:s,title:a="Usage",separator:c="="}=e,[d,h]=(0,i.useState)({...function(e){let n={};if(e.length>0)for(let o of e)o.defaultValue&&(n[o.name]=o.defaultValue||"boolean"!==o.type&&"");return n}(s)}),_=Object.entries(d).map(e=>{let[n,o]=e;return"children"===n?"":"string"==typeof o?"".concat(n).concat(c,'"').concat(o,'"'):"boolean"==typeof o?o?":"===c?"".concat(n,":true"):n:"":"number"==typeof o?"".concat(n,"={").concat(o,"}"):""}).filter(Boolean).join(":"===c?", \n	  ":" "),b=n.replace("{{props}}",_).replace("{{children}}",d.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:l().usageContentTitle,children:a}),(0,t.jsx)(r.CodeBlock,{render:(0,t.jsx)(m,{onChange:(e,n)=>h(o=>({...o,[e]:n})),values:d,propDefs:s,children:(0,t.jsx)(o,{...d})}),children:b})]})}},42451:e=>{e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},45573:e=>{e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},55366:(e,n,o)=>{"use strict";o.d(n,{default:()=>s});var t=o(95155),i=o(29081),r=o(11181);function s(){return(0,t.jsx)(i._,{code:r.codeConfig.code,component:r.codeConfig.component,propDefs:r.codeConfig.propDefs})}},61654:(e,n,o)=>{Promise.resolve().then(o.bind(o,30768)),Promise.resolve().then(o.bind(o,35558)),Promise.resolve().then(o.bind(o,44648)),Promise.resolve().then(o.bind(o,95)),Promise.resolve().then(o.bind(o,75530)),Promise.resolve().then(o.bind(o,57558)),Promise.resolve().then(o.bind(o,3960)),Promise.resolve().then(o.bind(o,64096)),Promise.resolve().then(o.bind(o,32691)),Promise.resolve().then(o.bind(o,26281)),Promise.resolve().then(o.bind(o,57752)),Promise.resolve().then(o.bind(o,88103)),Promise.resolve().then(o.bind(o,62253)),Promise.resolve().then(o.bind(o,50062)),Promise.resolve().then(o.bind(o,3067)),Promise.resolve().then(o.bind(o,39549)),Promise.resolve().then(o.bind(o,83830)),Promise.resolve().then(o.bind(o,94409)),Promise.resolve().then(o.bind(o,26698)),Promise.resolve().then(o.bind(o,93472)),Promise.resolve().then(o.bind(o,68064)),Promise.resolve().then(o.bind(o,67722)),Promise.resolve().then(o.bind(o,1518)),Promise.resolve().then(o.bind(o,89016)),Promise.resolve().then(o.bind(o,66840)),Promise.resolve().then(o.bind(o,71618)),Promise.resolve().then(o.bind(o,77492)),Promise.resolve().then(o.bind(o,17443)),Promise.resolve().then(o.bind(o,99818)),Promise.resolve().then(o.bind(o,77422)),Promise.resolve().then(o.bind(o,8902)),Promise.resolve().then(o.bind(o,66081)),Promise.resolve().then(o.bind(o,90201)),Promise.resolve().then(o.bind(o,81383)),Promise.resolve().then(o.bind(o,70952)),Promise.resolve().then(o.bind(o,95551)),Promise.resolve().then(o.bind(o,81392)),Promise.resolve().then(o.bind(o,14312)),Promise.resolve().then(o.bind(o,67036)),Promise.resolve().then(o.bind(o,33438)),Promise.resolve().then(o.bind(o,94754)),Promise.resolve().then(o.bind(o,98024)),Promise.resolve().then(o.bind(o,17956)),Promise.resolve().then(o.bind(o,74458)),Promise.resolve().then(o.bind(o,71600)),Promise.resolve().then(o.bind(o,89326)),Promise.resolve().then(o.bind(o,22770)),Promise.resolve().then(o.bind(o,65546)),Promise.resolve().then(o.t.bind(o,46902,23)),Promise.resolve().then(o.t.bind(o,8763,23)),Promise.resolve().then(o.bind(o,43643)),Promise.resolve().then(o.bind(o,31048)),Promise.resolve().then(o.bind(o,2906)),Promise.resolve().then(o.bind(o,30766)),Promise.resolve().then(o.bind(o,27065)),Promise.resolve().then(o.bind(o,54835)),Promise.resolve().then(o.bind(o,78982)),Promise.resolve().then(o.bind(o,14480)),Promise.resolve().then(o.bind(o,8656)),Promise.resolve().then(o.bind(o,59389)),Promise.resolve().then(o.bind(o,11181)),Promise.resolve().then(o.bind(o,55366)),Promise.resolve().then(o.bind(o,17232)),Promise.resolve().then(o.bind(o,85359)),Promise.resolve().then(o.bind(o,62831)),Promise.resolve().then(o.t.bind(o,2153,23)),Promise.resolve().then(o.t.bind(o,42451,23)),Promise.resolve().then(o.t.bind(o,96737,23)),Promise.resolve().then(o.t.bind(o,85688,23))},68545:e=>{e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},79046:(e,n,o)=>{"use strict";o.d(n,{CodeBlock:()=>d});var t=o(95155),i=o(12115),r=o(45573),s=o.n(r),l=o(79873),a=o(89650),c=o(2367);let d=e=>{let{children:n,language:o="tsx",title:r,render:d,showLineNumbers:m=!1}=e,[h,_]=(0,i.useState)(!1),b=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:s().wrapper,children:[(0,t.jsx)("section",{className:s().header,children:(0,t.jsx)("div",{className:s().fullWidth,children:(0,t.jsxs)("div",{className:s().headerContent,children:[r&&(0,t.jsxs)("div",{className:s().titleHeader,children:[(0,t.jsx)("div",{className:s().title,children:r}),(0,t.jsx)("div",{className:s().action,children:(0,t.jsx)(a.r,{onClick:()=>b(n.trim())})})]}),d]})})}),(0,t.jsx)("section",{className:"".concat(s().content),children:(0,t.jsxs)("button",{className:"".concat(s().fullWidth),onClick:()=>{_(e=>!e)},children:[(0,t.jsx)(l.ChevronRightIcon,{className:"".concat(h?s().rotate:"")}),h?"Hide Code":"Show Code"]})}),(0,t.jsx)(c.CodeBlockSection,{onCopy:b,language:o,showLineNumbers:m,visible:h,children:n})]})}},85688:e=>{e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},89650:(e,n,o)=>{"use strict";o.d(n,{r:()=>a});var t=o(95155),i=o(79873),r=o(68545),s=o.n(r),l=o(12115);function a(e){let{onClick:n,timeout:o=3e3,ariaLabel:r="Copy code"}=e,[a,c]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e;return a&&(e=setTimeout(()=>{c(!1)},o)),()=>{e&&clearTimeout(e)}},[a,o]);let d=(0,l.useCallback)(()=>{c(!0),n()},[n]);return(0,t.jsxs)("button",{type:"button","aria-label":r,onClick:d,className:"".concat(s().actionButton," ").concat(a?s().clicked:""),disabled:a,children:[(0,t.jsx)(i.ClipboardDocumentIcon,{className:s().clipboardIcon}),(0,t.jsx)(i.CheckIcon,{className:s().checkIcon})]})}},95676:e=>{e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},96737:e=>{e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}}},e=>{var n=n=>e(e.s=n);e.O(0,[5087,6149,61,5739,2545,5756,1585,6902,7879,4738,5526,8441,1816,7358],()=>n(61654)),_N_E=e.O()}]);