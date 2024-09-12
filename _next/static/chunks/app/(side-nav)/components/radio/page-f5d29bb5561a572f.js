(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{4508:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,5048)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},5048:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var o=t(7437),a=t(3356),l=t(9631),r=t(2265);let i=function(e){let[n,t]=(0,r.useState)("");return(0,o.jsx)(l.RadioGroup,{...e,id:"sample-radio-grp",options:[{label:"Ford Mustang",value:"ford_mustang"},{label:"Chevrolet Camaro",value:"chevrolet_camaro"},{label:"Porsche 911",value:"porsche_911"},{label:"Tesla Model S",value:"tesla_model_s"},{label:"Ferrari F40",value:"ferrari_f40"},{label:"Lamborghini Aventador",value:"lamborghini_aventador"},{label:"Audi R8",value:"audi_r8"},{label:"BMW M3",value:"bmw_m3"}],value:n,onChange:e=>{t(e)}})},c=[{name:"label",type:"text",defaultValue:"Select an option"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1},{name:"readOnly",type:"boolean",defaultValue:!1},{name:"required",type:"boolean",defaultValue:!1},{name:"errorText",type:"text",defaultValue:""}];function s(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.l,{code:"\nimport { useState } from 'react';\nimport { OptionType, RadioGroup } from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  const onChange = (val: OptionType['value']) => {\n    setValue(val);\n  };\n\n  return (\n    <RadioGroup\n      {{props}}\n      id='sample-radio-grp'\n      options={[\n        { label: 'Ford Mustang', value: 'ford_mustang' },\n        { label: 'Chevrolet Camaro', value: 'chevrolet_camaro' },\n        { label: 'Porsche 911', value: 'porsche_911' },\n        { label: 'Tesla Model S', value: 'tesla_model_s' },\n        { label: 'Ferrari F40', value: 'ferrari_f40' },\n        { label: 'Lamborghini Aventador', value: 'lamborghini_aventador' },\n        { label: 'Audi R8', value: 'audi_r8' },\n        { label: 'BMW M3', value: 'bmw_m3' },\n      ]}\n      value={value}\n      onChange={onChange}\n    />\n  );\n}\n",component:i,propDefs:c})})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var o=t(7437),a=t(976),l=t(6128),r=t.n(l);function i(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,o.jsx)(a.ClipboardDocumentIcon,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return u}});var o=t(7437),a=t(2265),l=t(1322),r=t.n(l),i=t(976),c=t(4772),s=t(8404);let u=e=>{let{children:n,language:t="tsx",title:l,render:u,showLineNumbers:d=!1}=e,[_,m]=(0,a.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:r().wrapper,children:[(0,o.jsx)("section",{className:r().header,children:(0,o.jsx)("div",{className:r().fullWidth,children:(0,o.jsxs)("div",{className:r().headerContent,children:[l&&(0,o.jsxs)("div",{className:r().titleHeader,children:[(0,o.jsx)("div",{className:r().title,children:l}),(0,o.jsx)("div",{className:r().action,children:(0,o.jsx)(c.K,{onClick:()=>p(n.trim())})})]}),u]})})}),(0,o.jsx)("section",{className:"".concat(r().content),children:(0,o.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,o.jsx)(i.ChevronRightIcon,{className:"".concat(_?r().rotate:"")}),_?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:p,language:t,showLineNumbers:d,visible:_,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),a=t(5291),l=t(4772),r=t(7951),i=t.n(r),c=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:r,onCopy:s,visible:u=!0}=e,d=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,c.Z)(i().codeBlock,{[i().visible]:u}),children:[(0,o.jsx)(a.y$,{code:n.trim(),language:t,theme:a.np.oneDark,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:a}=e;return(0,o.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[r&&(0,o.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...a({token:e})},n))]},n))})}}),(0,o.jsx)(l.K,{onClick:()=>d(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return _}});var o=t(7437),a=t(2265),l=t(1938);t(8404);var r=t(9924),i=t.n(r),c=t(9631);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function u(e){let{name:n,type:t,onChange:l,value:r,values:i}=e,u=(0,a.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(c.Switch,{id:n,label:u,checked:r,onToggle:()=>l(!r)});if("ddl"===t)return(0,o.jsx)(c.Select,{label:u,id:n,value:r?s(r):"",options:null==i?void 0:i.map(e=>({label:s(e),value:e})),onChange:e=>l(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(c.TextInput,{type:t,label:u,value:r,onChange:e=>l(e.target.value)});if("segment"===t){var d;return(0,o.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(d=null==i?void 0:i.findIndex(e=>e===r))&&void 0!==d?d:-1,label:u,children:null==i?void 0:i.map(e=>(0,o.jsx)(c.SegmentedControlButton,{onClick:()=>l(e),children:s(e)},e))})}return null}function d(e){let{children:n,values:t={},onChange:l,propDefs:r}=e,[c,s]=(0,a.useState)(t);return(0,a.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:i().container,children:[(0,o.jsx)("div",{className:i().codeContainer,children:n}),r.length>0&&(0,o.jsx)("div",{className:i().propsContainer,children:r.map(e=>(0,o.jsx)(u,{onChange:n=>l(e.name,n),...e,value:c[e.name]},e.name))})]})}function _(e){let{code:n,component:t,propDefs:r,title:c="Usage",separator:s="="}=e,[u,_]=(0,a.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(r)}),m=Object.entries(u).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),p=n.replace("{{props}}",m).replace("{{children}}",u.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:i().usageContentTitle,children:c}),(0,o.jsx)(l.CodeBlock,{render:(0,o.jsx)(d,{onChange:(e,n)=>_(t=>({...t,[e]:n})),values:u,propDefs:r,children:(0,o.jsx)(t,{...u})}),children:p})]})}}},function(e){e.O(0,[4383,2811,5501,1947,8843,3808,5291,5746,2971,7379,1744],function(){return e(e.s=4508)}),_N_E=e.O()}]);