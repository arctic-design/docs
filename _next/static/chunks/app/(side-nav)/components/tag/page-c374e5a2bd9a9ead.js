(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5972],{1213:function(e,n,o){Promise.resolve().then(o.bind(o,263)),Promise.resolve().then(o.bind(o,3870)),Promise.resolve().then(o.bind(o,8518)),Promise.resolve().then(o.bind(o,334)),Promise.resolve().then(o.bind(o,7605)),Promise.resolve().then(o.bind(o,2180)),Promise.resolve().then(o.bind(o,3337)),Promise.resolve().then(o.bind(o,4480)),Promise.resolve().then(o.bind(o,664)),Promise.resolve().then(o.bind(o,2634)),Promise.resolve().then(o.bind(o,458)),Promise.resolve().then(o.bind(o,8587)),Promise.resolve().then(o.t.bind(o,6440,23)),Promise.resolve().then(o.t.bind(o,3799,23)),Promise.resolve().then(o.bind(o,8769)),Promise.resolve().then(o.bind(o,3224)),Promise.resolve().then(o.bind(o,1702)),Promise.resolve().then(o.bind(o,24)),Promise.resolve().then(o.bind(o,2286)),Promise.resolve().then(o.bind(o,9519)),Promise.resolve().then(o.bind(o,448)),Promise.resolve().then(o.bind(o,8025)),Promise.resolve().then(o.bind(o,7363)),Promise.resolve().then(o.bind(o,8263)),Promise.resolve().then(o.bind(o,4289)),Promise.resolve().then(o.bind(o,5658)),Promise.resolve().then(o.bind(o,7086)),Promise.resolve().then(o.bind(o,1222)),Promise.resolve().then(o.bind(o,1802)),Promise.resolve().then(o.bind(o,1869)),Promise.resolve().then(o.t.bind(o,9831,23)),Promise.resolve().then(o.bind(o,7966)),Promise.resolve().then(o.t.bind(o,1864,23)),Promise.resolve().then(o.t.bind(o,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},7086:function(e,n,o){"use strict";o.d(n,{default:function(){return s}});var t=o(7437),l=o(7665),i=o(263);let r=function(e){let{children:n,...o}=e;return(0,t.jsx)(i.Tag,{...o,children:n})},a=[{name:"children",type:"text",defaultValue:"Arctic Design"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"noFill",type:"boolean",defaultValue:!1}];function s(){return(0,t.jsx)(l.l,{code:"\nimport { Tag } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Tag {{props}}>\n      {{children}}\n    </Tag>\n  );\n}\n",component:r,propDefs:a})}},3913:function(e,n,o){"use strict";o.d(n,{K:function(){return s}});var t=o(7437),l=o(9628),i=o(2369),r=o.n(i),a=o(2265);function s(e){let{onClick:n,timeout:o=3e3,ariaLabel:i="Copy code"}=e,[s,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e;return s&&(e=setTimeout(()=>{c(!1)},o)),()=>{e&&clearTimeout(e)}},[s,o]);let d=(0,a.useCallback)(()=>{c(!0),n()},[n]);return(0,t.jsxs)("button",{type:"button","aria-label":i,onClick:d,className:"".concat(r().actionButton," ").concat(s?r().clicked:""),disabled:s,children:[(0,t.jsx)(l.ClipboardDocumentIcon,{className:r().clipboardIcon}),(0,t.jsx)(l.CheckIcon,{className:r().checkIcon})]})}},7937:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return d}});var t=o(7437),l=o(2265),i=o(9161),r=o.n(i),a=o(9628),s=o(3913),c=o(9943);let d=e=>{let{children:n,language:o="tsx",title:i,render:d,showLineNumbers:u=!1}=e,[m,_]=(0,l.useState)(!1),h=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:r().wrapper,children:[(0,t.jsx)("section",{className:r().header,children:(0,t.jsx)("div",{className:r().fullWidth,children:(0,t.jsxs)("div",{className:r().headerContent,children:[i&&(0,t.jsxs)("div",{className:r().titleHeader,children:[(0,t.jsx)("div",{className:r().title,children:i}),(0,t.jsx)("div",{className:r().action,children:(0,t.jsx)(s.K,{onClick:()=>h(n.trim())})})]}),d]})})}),(0,t.jsx)("section",{className:"".concat(r().content),children:(0,t.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{_(e=>!e)},children:[(0,t.jsx)(a.ChevronRightIcon,{className:"".concat(m?r().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,t.jsx)(c.CodeBlockSection,{onCopy:h,language:o,showLineNumbers:u,visible:m,children:n})]})}},9943:function(e,n,o){"use strict";o.d(n,{CodeBlockSection:function(){return c}});var t=o(7437),l=o(7807),i=o(3913),r=o(2271),a=o.n(r),s=o(8224);function c(e){let{children:n,language:o="js",showLineNumbers:r,onCopy:c,visible:d=!0}=e,u=e=>{c?c(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,s.Z)(a().codeBlock,{[a().visible]:d}),children:[(0,t.jsx)(l.y$,{code:n.trim(),language:o,theme:l.np.dracula,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:l}=e;return(0,t.jsx)("pre",{className:a().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[r&&(0,t.jsx)("span",{className:a().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,t.jsx)(i.K,{onClick:()=>u(n.trim())})]})}},7966:function(e,n,o){"use strict";o.d(n,{PropsReference:function(){return s}});var t=o(7437),l=o(7245),i=o.n(l),r=o(9628),a=o(263);function s(e){let{componentDoc:n}=e,o=null==n?void 0:n.props;if(!o||0===Object.keys(o).length)return null;let l=Object.entries(o).sort((e,n)=>{let[o]=e,[t]=n;return o.toLowerCase().localeCompare(t.toLowerCase())});return(0,t.jsx)("div",{className:i().tableContainer,children:(0,t.jsxs)(a.Table.Root,{children:[(0,t.jsx)(a.Table.Header,{children:(0,t.jsxs)(a.Table.Row,{children:[(0,t.jsx)(a.Table.ColumnHeaderCell,{children:"Props"}),(0,t.jsx)(a.Table.ColumnHeaderCell,{children:"Type"}),(0,t.jsx)(a.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,t.jsx)(a.Table.Body,{children:l.map((e,n)=>{var o,l,s;let[c,d]=e,u=null==d?void 0:d.type,m=(null==u?void 0:u.name)==="enum",_=m&&(null==u?void 0:null===(o=u.value)||void 0===o?void 0:o.map(e=>e.value).filter(e=>"undefined"!==e))||[],h=m?null==u?void 0:null===(l=u.raw)||void 0===l?void 0:l.replace(" | undefined",""):null==u?void 0:u.name,p=m&&_.length>0&&(null==h?void 0:h.split(" | ").length)===1,b=(null==d?void 0:null===(s=d.defaultValue)||void 0===s?void 0:s.value)||"---";return(0,t.jsxs)(a.Table.Row,{children:[(0,t.jsx)(a.Table.Cell,{children:c}),(0,t.jsx)(a.Table.Cell,{children:(0,t.jsxs)("div",{className:i().tableCellData,children:[h||"",p&&(0,t.jsx)(a.Tooltip,{message:_.join(", "),children:(0,t.jsx)("span",{className:i().iconContainer,children:(0,t.jsx)(r.InformationCircleIcon,{className:i().icon})})})]})}),(0,t.jsx)(a.Table.Cell,{children:b})]},"".concat(c,"-").concat(n))})})]})})}},7665:function(e,n,o){"use strict";o.d(n,{l:function(){return m}});var t=o(7437),l=o(2265),i=o(7937);o(9943);var r=o(9351),a=o.n(r),s=o(263);function c(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:o,onChange:i,value:r,values:a}=e,d=(0,l.useMemo)(()=>c(n),[n]);if("boolean"===o)return(0,t.jsx)(s.Switch,{id:n,label:d,checked:r,onToggle:()=>i(!r)});if("ddl"===o)return(0,t.jsx)(s.Select,{label:d,id:n,value:r?c(r):"",options:null==a?void 0:a.map(e=>({label:c(e),value:e})),onChange:e=>i(null==e?void 0:e.value)});if("text"===o||"number"===o)return(0,t.jsx)(s.TextInput,{type:o,label:d,value:r,onChange:e=>i(e.target.value)});if("segment"===o){var u;return(0,t.jsx)(s.SegmentedControl,{initialSelectedIndex:null!==(u=null==a?void 0:a.findIndex(e=>e===r))&&void 0!==u?u:-1,label:d,children:null==a?void 0:a.map(e=>(0,t.jsx)(s.SegmentedControlButton,{onClick:()=>i(e),children:c(e)},e))})}return null}function u(e){let{children:n,values:o={},onChange:i,propDefs:r}=e,[s,c]=(0,l.useState)(o);return(0,l.useEffect)(()=>{o&&Object.keys(o).length>0&&c({...o})},[o]),(0,t.jsxs)("div",{className:a().container,children:[(0,t.jsx)("div",{className:a().codeContainer,children:n}),r.length>0&&(0,t.jsx)("div",{className:a().propsContainer,children:r.map(e=>(0,t.jsx)(d,{onChange:n=>i(e.name,n),...e,value:s[e.name]},e.name))})]})}function m(e){let{code:n,component:o,propDefs:r,title:s="Usage",separator:c="="}=e,[d,m]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let o of e)o.defaultValue&&(n[o.name]=o.defaultValue||"boolean"!==o.type&&"");return n}(r)}),_=Object.entries(d).map(e=>{let[n,o]=e;return"children"===n?"":"string"==typeof o?"".concat(n).concat(c,'"').concat(o,'"'):"boolean"==typeof o?o?":"===c?"".concat(n,":true"):n:"":"number"==typeof o?"".concat(n,"={").concat(o,"}"):""}).filter(Boolean).join(":"===c?", \n	  ":" "),h=n.replace("{{props}}",_).replace("{{children}}",d.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:a().usageContentTitle,children:s}),(0,t.jsx)(i.CodeBlock,{render:(0,t.jsx)(u,{onChange:(e,n)=>m(o=>({...o,[e]:n})),values:d,propDefs:r,children:(0,t.jsx)(o,{...d})}),children:h})]})}}},function(e){e.O(0,[2925,9998,6760,1947,5501,3128,7512,3799,7807,7720,8265,2971,9033,1744],function(){return e(e.s=1213)}),_N_E=e.O()}]);