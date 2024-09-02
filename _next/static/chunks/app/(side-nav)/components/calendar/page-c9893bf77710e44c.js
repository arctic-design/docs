(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9155],{8157:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,8737)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},8737:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var o=t(7437),l=t(3356),i=t(4743),c=t(2265);let r=function(e){let[n,t]=(0,c.useState)(new Date);return(0,o.jsx)(i.Calendar,{...e,selected:n,onSelect:t})},a=[];function s(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.l,{code:"\nimport { useState } from 'react';\nimport { Calendar } from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [value, setValue] = useState(new Date());\n  return <Calendar selected={value} onSelect={setValue} />;\n}\n",component:r,propDefs:a})})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var o=t(7437),l=t(976),i=t(6128),c=t.n(i);function r(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:c().actionButton,children:(0,o.jsx)(l.ClipboardDocumentIcon,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var o=t(7437),l=t(2265),i=t(1322),c=t.n(i),r=t(976),a=t(4772),s=t(8404);let d=e=>{let{children:n,language:t="tsx",title:i,render:d,showLineNumbers:u=!1}=e,[_,m]=(0,l.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:c().wrapper,children:[(0,o.jsx)("section",{className:c().header,children:(0,o.jsx)("div",{className:c().fullWidth,children:(0,o.jsxs)("div",{className:c().headerContent,children:[i&&(0,o.jsxs)("div",{className:c().titleHeader,children:[(0,o.jsx)("div",{className:c().title,children:i}),(0,o.jsx)("div",{className:c().action,children:(0,o.jsx)(a.K,{onClick:()=>p(n.trim())})})]}),d]})})}),(0,o.jsx)("section",{className:"".concat(c().content),children:(0,o.jsxs)("button",{className:"".concat(c().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,o.jsx)(r.ChevronRightIcon,{className:"".concat(_?c().rotate:"")}),_?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:p,language:t,showLineNumbers:u,visible:_,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),l=t(5291),i=t(4772),c=t(7951),r=t.n(c),a=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:c,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,a.Z)(r().codeBlock,{[r().visible]:d}),children:[(0,o.jsx)(l.y$,{code:n.trim(),language:t,theme:l.np.oneLight,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:l}=e;return(0,o.jsx)("pre",{className:r().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[c&&(0,o.jsx)("span",{className:r().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,o.jsx)(i.K,{onClick:()=>u(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return _}});var o=t(7437),l=t(2265),i=t(1938);t(8404);var c=t(9924),r=t.n(c),a=t(4743);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:i,value:c,values:r}=e,d=(0,l.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(a.Switch,{id:n,label:d,checked:c,onToggle:()=>i(!c)});if("ddl"===t)return(0,o.jsx)(a.Select,{label:d,id:n,value:c?s(c):"",options:null==r?void 0:r.map(e=>({label:s(e),value:e})),onChange:e=>i(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(a.TextInput,{type:t,label:d,value:c,onChange:e=>i(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(a.SegmentedControl,{initialSelectedIndex:null!==(u=null==r?void 0:r.findIndex(e=>e===c))&&void 0!==u?u:-1,label:d,children:null==r?void 0:r.map(e=>(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>i(e),children:s(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:i,propDefs:c}=e,[a,s]=(0,l.useState)(t);return(0,l.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:r().container,children:[(0,o.jsx)("div",{className:r().codeContainer,children:n}),c.length>0&&(0,o.jsx)("div",{className:r().propsContainer,children:c.map(e=>(0,o.jsx)(d,{onChange:n=>i(e.name,n),...e,value:a[e.name]},e.name))})]})}function _(e){let{code:n,component:t,propDefs:c,title:a="Usage",separator:s="="}=e,[d,_]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(c)}),m=Object.entries(d).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),p=n.replace("{{props}}",m).replace("{{children}}",d.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:r().usageContentTitle,children:a}),(0,o.jsx)(i.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>_(t=>({...t,[e]:n})),values:d,propDefs:c,children:(0,o.jsx)(t,{...d})}),children:p})]})}}},function(e){e.O(0,[4383,2811,5501,1947,6299,3808,5291,5746,2971,7379,1744],function(){return e(e.s=8157)}),_N_E=e.O()}]);