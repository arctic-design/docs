(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6994],{7688:function(e,n,o){Promise.resolve().then(o.t.bind(o,5746,23)),Promise.resolve().then(o.t.bind(o,3808,23)),Promise.resolve().then(o.bind(o,2533)),Promise.resolve().then(o.t.bind(o,2997,23)),Promise.resolve().then(o.t.bind(o,8555,23)),Promise.resolve().then(o.t.bind(o,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},2533:function(e,n,o){"use strict";o.d(n,{default:function(){return d}});var t=o(7437),r=o(3356),i=o(210),s=o(2265);let l=s.forwardRef(function(e,n){let{title:o,titleId:t,...r}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),o?s.createElement("title",{id:t},o):null,s.createElement("path",{d:"M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"}))}),c=[{name:"placement",type:"ddl",values:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],defaultValue:"bottom-start"}],a=function(e){let[n,o]=(0,s.useState)(!1);return(0,t.jsx)("div",{children:(0,t.jsxs)(i.Popover,{...e,open:n,onOpenChange:o,children:[(0,t.jsx)(i.PopoverTrigger,{onClick:()=>o(e=>!e),children:"My Trigger"}),(0,t.jsxs)(i.PopoverContent,{children:[(0,t.jsx)(i.PopoverHeading,{children:"My popover heading"}),(0,t.jsx)(i.PopoverDescription,{children:"My popover description"}),(0,t.jsx)(i.PopoverClose,{children:"Close"})]})]})})},p=function(e){let[n,o]=(0,s.useState)(!1);return(0,t.jsx)("div",{children:(0,t.jsxs)(i.Popover,{...e,open:n,onOpenChange:o,children:[(0,t.jsx)(i.PopoverTrigger,{onClick:()=>o(e=>!e),asChild:!0,children:(0,t.jsx)(i.IconButton,{children:(0,t.jsx)(l,{})})}),(0,t.jsxs)(i.PopoverContent,{children:[(0,t.jsx)(i.PopoverHeading,{children:"My popover heading"}),(0,t.jsx)(i.PopoverDescription,{children:"My popover description"}),(0,t.jsx)(i.PopoverClose,{children:"Close"})]})]})})};function d(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.l,{code:"\nimport { useState } from 'react';\nimport {\n  Popover,\n  PopoverClose,\n  PopoverContent,\n  PopoverDescription,\n  PopoverHeading,\n  PopoverOptions,\n  PopoverTrigger,\n} from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div>\n      <Popover {{props}} open={open} onOpenChange={setOpen}>\n        <PopoverTrigger onClick={() => setOpen((v) => !v)}>\n          My Trigger\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeading>My popover heading</PopoverHeading>\n          <PopoverDescription>My popover description</PopoverDescription>\n          <PopoverClose>Close</PopoverClose>\n        </PopoverContent>\n      </Popover>\n    </div>\n  );\n}\n",component:a,propDefs:c}),(0,t.jsx)(r.l,{code:"\nimport { useState } from 'react';\nimport {\n  IconButton,\n  Popover,\n  PopoverClose,\n  PopoverContent,\n  PopoverDescription,\n  PopoverHeading,\n  PopoverOptions,\n  PopoverTrigger,\n} from '@arctic-kit/snow';\n import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <div>\n      <Popover {{props}} open={open} onOpenChange={setOpen}>\n        <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>\n          <IconButton>\n            <EllipsisHorizontalIcon />\n          </IconButton>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeading>My popover heading</PopoverHeading>\n          <PopoverDescription>My popover description</PopoverDescription>\n          <PopoverClose>Close</PopoverClose>\n        </PopoverContent>\n      </Popover>\n    </div>\n  );\n}\n",component:p,propDefs:c,title:"Custom Trigger"})]})}},4772:function(e,n,o){"use strict";o.d(n,{K:function(){return l}});var t=o(7437),r=o(4740),i=o(6128),s=o.n(i);function l(e){let{onClick:n}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("button",{"aria-label":"Copy code",onClick:n,className:s().actionButton,children:(0,t.jsx)(r.Z,{})})})}},1938:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return p}});var t=o(7437),r=o(2265),i=o(1322),s=o.n(i),l=o(6953),c=o(4772),a=o(8404);let p=e=>{let{children:n,language:o="tsx",title:i,render:p,showLineNumbers:d=!1}=e,[u,v]=(0,r.useState)(!1),C=e=>{navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})};return(0,t.jsxs)("div",{className:s().wrapper,children:[(0,t.jsx)("section",{className:s().header,children:(0,t.jsx)("div",{className:s().fullWidth,children:(0,t.jsxs)("div",{className:s().headerContent,children:[i&&(0,t.jsxs)("div",{className:s().titleHeader,children:[(0,t.jsx)("div",{className:s().title,children:i}),(0,t.jsx)("div",{className:s().action,children:(0,t.jsx)(c.K,{onClick:()=>C(n.trim())})})]}),p]})})}),(0,t.jsx)("section",{className:"".concat(s().content),children:(0,t.jsxs)("button",{className:"".concat(s().fullWidth),onClick:()=>{v(e=>!e)},children:[(0,t.jsx)(l.Z,{className:"".concat(u?s().rotate:"")}),u?"Hide Code":"Show Code"]})}),(0,t.jsx)(a.CodeBlockSection,{onCopy:C,language:o,showLineNumbers:d,visible:u,children:n})]})}},8404:function(e,n,o){"use strict";o.d(n,{CodeBlockSection:function(){return a}});var t=o(7437),r=o(5291),i=o(4772),s=o(7951),l=o.n(s),c=o(3058);function a(e){let{children:n,language:o="js",showLineNumbers:s,onCopy:a,visible:p=!0}=e,d=e=>{a?a(e):navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})};return(0,t.jsxs)("section",{className:(0,c.Z)(l().codeBlock,{[l().visible]:p}),children:[(0,t.jsx)(r.y$,{code:n.trim(),language:o,theme:r.np.oneLight,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:r}=e;return(0,t.jsx)("pre",{className:l().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[s&&(0,t.jsx)("span",{className:l().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...r({token:e})},n))]},n))})}}),(0,t.jsx)(i.K,{onClick:()=>d(n.trim())})]})}},3356:function(e,n,o){"use strict";o.d(n,{l:function(){return u}});var t=o(7437),r=o(2265),i=o(1938);o(8404);var s=o(9924),l=o.n(s),c=o(210);function a(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function p(e){let{name:n,type:o,onChange:i,value:s,values:l}=e,p=(0,r.useMemo)(()=>a(n),[n]);return"boolean"===o?(0,t.jsx)(c.Switch,{id:n,label:p,checked:s,onToggle:()=>i(!s)}):"ddl"===o?(0,t.jsx)(c.Select,{label:p,id:n,value:s?a(s):"",options:null==l?void 0:l.map(e=>({label:a(e),value:e})),onChange:e=>i(null==e?void 0:e.value)}):"text"===o||"number"===o?(0,t.jsx)(c.TextInput,{type:o,label:p,value:s,onChange:e=>i(e.target.value)}):null}function d(e){let{children:n,values:o={},onChange:i,propDefs:s}=e,[c,a]=(0,r.useState)(o);return(0,r.useEffect)(()=>{o&&Object.keys(o).length>0&&a({...o})},[o]),(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("div",{className:l().codeContainer,children:n}),s.length>0&&(0,t.jsx)("div",{className:l().propsContainer,children:s.map(e=>(0,t.jsx)(p,{onChange:n=>i(e.name,n),...e,value:c[e.name]},e.name))})]})}function u(e){let{code:n,component:o,propDefs:s,title:c="Usage"}=e,[a,p]=(0,r.useState)({...function(e){let n={};if(e.length>0)for(let o of e)o.defaultValue&&(n[o.name]=o.defaultValue||"boolean"!==o.type&&"");return n}(s)}),u=Object.entries(a).map(e=>{let[n,o]=e;return"children"===n?"":"string"==typeof o?"".concat(n,'="').concat(o,'"'):"boolean"==typeof o?o?n:"":"number"==typeof o?"".concat(n,"={").concat(o,"}"):""}).filter(Boolean).join(" "),v=n.replace("{{props}}",u).replace("{{children}}",a.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:l().usageContentTitle,children:c}),(0,t.jsx)(i.CodeBlock,{render:(0,t.jsx)(d,{onChange:(e,n)=>p(o=>({...o,[e]:n})),values:a,propDefs:s,children:(0,t.jsx)(o,{...a})}),children:v})]})}}},function(e){e.O(0,[906,3808,210,5845,5746,2971,7379,1744],function(){return e(e.s=7688)}),_N_E=e.O()}]);