(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7690],{24506:function(e,n,o){Promise.resolve().then(o.bind(o,45768)),Promise.resolve().then(o.bind(o,93493)),Promise.resolve().then(o.bind(o,61225)),Promise.resolve().then(o.bind(o,77261)),Promise.resolve().then(o.bind(o,92310)),Promise.resolve().then(o.bind(o,12982)),Promise.resolve().then(o.bind(o,7108)),Promise.resolve().then(o.bind(o,43236)),Promise.resolve().then(o.bind(o,23688)),Promise.resolve().then(o.bind(o,98753)),Promise.resolve().then(o.bind(o,83890)),Promise.resolve().then(o.bind(o,62966)),Promise.resolve().then(o.bind(o,7713)),Promise.resolve().then(o.bind(o,97580)),Promise.resolve().then(o.bind(o,93977)),Promise.resolve().then(o.bind(o,4954)),Promise.resolve().then(o.bind(o,26627)),Promise.resolve().then(o.bind(o,51728)),Promise.resolve().then(o.bind(o,36379)),Promise.resolve().then(o.bind(o,54587)),Promise.resolve().then(o.bind(o,27418)),Promise.resolve().then(o.bind(o,75461)),Promise.resolve().then(o.bind(o,39473)),Promise.resolve().then(o.bind(o,19316)),Promise.resolve().then(o.bind(o,44960)),Promise.resolve().then(o.bind(o,20190)),Promise.resolve().then(o.bind(o,64109)),Promise.resolve().then(o.bind(o,67915)),Promise.resolve().then(o.bind(o,83098)),Promise.resolve().then(o.bind(o,23501)),Promise.resolve().then(o.bind(o,10335)),Promise.resolve().then(o.bind(o,82337)),Promise.resolve().then(o.bind(o,78996)),Promise.resolve().then(o.bind(o,73046)),Promise.resolve().then(o.bind(o,75102)),Promise.resolve().then(o.bind(o,67763)),Promise.resolve().then(o.bind(o,48157)),Promise.resolve().then(o.bind(o,33870)),Promise.resolve().then(o.bind(o,88518)),Promise.resolve().then(o.bind(o,90334)),Promise.resolve().then(o.bind(o,67605)),Promise.resolve().then(o.bind(o,2180)),Promise.resolve().then(o.bind(o,13337)),Promise.resolve().then(o.bind(o,54480)),Promise.resolve().then(o.bind(o,34429)),Promise.resolve().then(o.bind(o,62634)),Promise.resolve().then(o.bind(o,20458)),Promise.resolve().then(o.bind(o,8587)),Promise.resolve().then(o.t.bind(o,46440,23)),Promise.resolve().then(o.t.bind(o,13799,23)),Promise.resolve().then(o.bind(o,68769)),Promise.resolve().then(o.bind(o,13224)),Promise.resolve().then(o.bind(o,91702)),Promise.resolve().then(o.bind(o,62565)),Promise.resolve().then(o.bind(o,52286)),Promise.resolve().then(o.bind(o,49519)),Promise.resolve().then(o.bind(o,448)),Promise.resolve().then(o.bind(o,78025)),Promise.resolve().then(o.bind(o,7363)),Promise.resolve().then(o.bind(o,78263)),Promise.resolve().then(o.bind(o,55658)),Promise.resolve().then(o.bind(o,11222)),Promise.resolve().then(o.bind(o,11802)),Promise.resolve().then(o.bind(o,60270)),Promise.resolve().then(o.bind(o,61869)),Promise.resolve().then(o.t.bind(o,29831,23)),Promise.resolve().then(o.t.bind(o,57245,23)),Promise.resolve().then(o.t.bind(o,1864,23)),Promise.resolve().then(o.t.bind(o,49351,23))},32369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},29161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},82271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},29831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},57245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},49351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},60270:function(e,n,o){"use strict";o.d(n,{default:function(){return s}});var t=o(57437),i=o(27665),r=o(11802);function s(){return(0,t.jsx)(i.l,{code:r.codeConfig.code,component:r.codeConfig.component,propDefs:r.codeConfig.propDefs})}},43913:function(e,n,o){"use strict";o.d(n,{K:function(){return c}});var t=o(57437),i=o(59628),r=o(32369),s=o.n(r),l=o(2265);function c(e){let{onClick:n,timeout:o=3e3,ariaLabel:r="Copy code"}=e,[c,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e;return c&&(e=setTimeout(()=>{a(!1)},o)),()=>{e&&clearTimeout(e)}},[c,o]);let d=(0,l.useCallback)(()=>{a(!0),n()},[n]);return(0,t.jsxs)("button",{type:"button","aria-label":r,onClick:d,className:"".concat(s().actionButton," ").concat(c?s().clicked:""),disabled:c,children:[(0,t.jsx)(i.ClipboardDocumentIcon,{className:s().clipboardIcon}),(0,t.jsx)(i.CheckIcon,{className:s().checkIcon})]})}},57937:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return d}});var t=o(57437),i=o(2265),r=o(29161),s=o.n(r),l=o(59628),c=o(43913),a=o(9943);let d=e=>{let{children:n,language:o="tsx",title:r,render:d,showLineNumbers:m=!1}=e,[h,u]=(0,i.useState)(!1),_=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:s().wrapper,children:[(0,t.jsx)("section",{className:s().header,children:(0,t.jsx)("div",{className:s().fullWidth,children:(0,t.jsxs)("div",{className:s().headerContent,children:[r&&(0,t.jsxs)("div",{className:s().titleHeader,children:[(0,t.jsx)("div",{className:s().title,children:r}),(0,t.jsx)("div",{className:s().action,children:(0,t.jsx)(c.K,{onClick:()=>_(n.trim())})})]}),d]})})}),(0,t.jsx)("section",{className:"".concat(s().content),children:(0,t.jsxs)("button",{className:"".concat(s().fullWidth),onClick:()=>{u(e=>!e)},children:[(0,t.jsx)(l.ChevronRightIcon,{className:"".concat(h?s().rotate:"")}),h?"Hide Code":"Show Code"]})}),(0,t.jsx)(a.CodeBlockSection,{onCopy:_,language:o,showLineNumbers:m,visible:h,children:n})]})}},9943:function(e,n,o){"use strict";o.d(n,{CodeBlockSection:function(){return a}});var t=o(57437),i=o(67807),r=o(43913),s=o(82271),l=o.n(s),c=o(8224);function a(e){let{children:n,language:o="js",showLineNumbers:s,onCopy:a,visible:d=!0}=e,m=e=>{a?a(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,c.Z)(l().codeBlock,{[l().visible]:d}),children:[(0,t.jsx)(i.y$,{code:n.trim(),language:o,theme:i.np.dracula,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:i}=e;return(0,t.jsx)("pre",{className:l().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[s&&(0,t.jsx)("span",{className:l().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...i({token:e})},n))]},n))})}}),(0,t.jsx)(r.K,{onClick:()=>m(n.trim())})]})}},27665:function(e,n,o){"use strict";o.d(n,{l:function(){return h}});var t=o(57437),i=o(2265),r=o(57937);o(9943);var s=o(49351),l=o.n(s),c=o(70486);function a(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:o,onChange:r,value:s,values:l}=e,d=(0,i.useMemo)(()=>a(n),[n]);if("boolean"===o)return(0,t.jsx)(c.rs,{id:n,label:d,checked:s,onToggle:()=>r(!s)});if("ddl"===o)return(0,t.jsx)(c.Ph,{label:d,id:n,value:s?a(s):"",options:null==l?void 0:l.map(e=>({label:a(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===o||"number"===o)return(0,t.jsx)(c.oi,{type:o,label:d,value:s,onChange:e=>r(e.target.value)});if("segment"===o){var m;return(0,t.jsx)(c.sY,{initialSelectedIndex:null!==(m=null==l?void 0:l.findIndex(e=>e===s))&&void 0!==m?m:-1,label:d,children:null==l?void 0:l.map(e=>(0,t.jsx)(c.He,{onClick:()=>r(e),children:a(e)},e))})}return null}function m(e){let{children:n,values:o={},onChange:r,propDefs:s}=e,[c,a]=(0,i.useState)(o);return(0,i.useEffect)(()=>{o&&Object.keys(o).length>0&&a({...o})},[o]),(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("div",{className:l().codeContainer,children:n}),s.length>0&&(0,t.jsx)("div",{className:l().propsContainer,children:s.map(e=>(0,t.jsx)(d,{onChange:n=>r(e.name,n),...e,value:c[e.name]},e.name))})]})}function h(e){let{code:n,component:o,propDefs:s,title:c="Usage",separator:a="="}=e,[d,h]=(0,i.useState)({...function(e){let n={};if(e.length>0)for(let o of e)o.defaultValue&&(n[o.name]=o.defaultValue||"boolean"!==o.type&&"");return n}(s)}),u=Object.entries(d).map(e=>{let[n,o]=e;return"children"===n?"":"string"==typeof o?"".concat(n).concat(a,'"').concat(o,'"'):"boolean"==typeof o?o?":"===a?"".concat(n,":true"):n:"":"number"==typeof o?"".concat(n,"={").concat(o,"}"):""}).filter(Boolean).join(":"===a?", \n	  ":" "),_=n.replace("{{props}}",u).replace("{{children}}",d.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:l().usageContentTitle,children:c}),(0,t.jsx)(r.CodeBlock,{render:(0,t.jsx)(m,{onChange:(e,n)=>h(o=>({...o,[e]:n})),values:d,propDefs:s,children:(0,t.jsx)(o,{...d})}),children:_})]})}}},function(e){e.O(0,[2925,9998,6760,1947,5501,9192,7512,3799,7807,7720,5131,2971,9033,1744],function(){return e(e.s=24506)}),_N_E=e.O()}]);