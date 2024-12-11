(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{1830:function(e,n,l){Promise.resolve().then(l.t.bind(l,6440,23)),Promise.resolve().then(l.t.bind(l,3799,23)),Promise.resolve().then(l.bind(l,8154)),Promise.resolve().then(l.t.bind(l,9831,23)),Promise.resolve().then(l.bind(l,7966)),Promise.resolve().then(l.t.bind(l,1864,23)),Promise.resolve().then(l.t.bind(l,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},8154:function(e,n,l){"use strict";l.d(n,{default:function(){return s}});var t=l(7437),o=l(7665),a=l(1714),r=l(2265);let i=function(e){let[n,l]=(0,r.useState)("");return(0,t.jsx)(a.RadioGroup,{...e,id:"sample-radio-grp",options:[{label:"Ford Mustang",value:"ford_mustang"},{label:"Chevrolet Camaro",value:"chevrolet_camaro"},{label:"Porsche 911",value:"porsche_911"},{label:"Tesla Model S",value:"tesla_model_s"},{label:"Ferrari F40",value:"ferrari_f40"},{label:"Lamborghini Aventador",value:"lamborghini_aventador"},{label:"Audi R8",value:"audi_r8"},{label:"BMW M3",value:"bmw_m3"}],value:n,onChange:e=>{l(e)}})},c=[{name:"label",type:"text",defaultValue:"Select an option"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1},{name:"readOnly",type:"boolean",defaultValue:!1},{name:"required",type:"boolean",defaultValue:!1},{name:"errorText",type:"text",defaultValue:""}];function s(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.l,{code:"\nimport { useState } from 'react';\nimport { OptionType, RadioGroup } from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  const onChange = (val: OptionType['value']) => {\n    setValue(val);\n  };\n\n  return (\n    <RadioGroup\n      {{props}}\n      id='sample-radio-grp'\n      options={[\n        { label: 'Ford Mustang', value: 'ford_mustang' },\n        { label: 'Chevrolet Camaro', value: 'chevrolet_camaro' },\n        { label: 'Porsche 911', value: 'porsche_911' },\n        { label: 'Tesla Model S', value: 'tesla_model_s' },\n        { label: 'Ferrari F40', value: 'ferrari_f40' },\n        { label: 'Lamborghini Aventador', value: 'lamborghini_aventador' },\n        { label: 'Audi R8', value: 'audi_r8' },\n        { label: 'BMW M3', value: 'bmw_m3' },\n      ]}\n      value={value}\n      onChange={onChange}\n    />\n  );\n}\n",component:i,propDefs:c})})}},3913:function(e,n,l){"use strict";l.d(n,{K:function(){return i}});var t=l(7437),o=l(9628),a=l(2369),r=l.n(a);function i(e){let{onClick:n}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,t.jsx)(o.ClipboardDocumentIcon,{})})})}},7937:function(e,n,l){"use strict";l.d(n,{CodeBlock:function(){return d}});var t=l(7437),o=l(2265),a=l(9161),r=l.n(a),i=l(9628),c=l(3913),s=l(9943);let d=e=>{let{children:n,language:l="tsx",title:a,render:d,showLineNumbers:u=!1}=e,[_,m]=(0,o.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:r().wrapper,children:[(0,t.jsx)("section",{className:r().header,children:(0,t.jsx)("div",{className:r().fullWidth,children:(0,t.jsxs)("div",{className:r().headerContent,children:[a&&(0,t.jsxs)("div",{className:r().titleHeader,children:[(0,t.jsx)("div",{className:r().title,children:a}),(0,t.jsx)("div",{className:r().action,children:(0,t.jsx)(c.K,{onClick:()=>p(n.trim())})})]}),d]})})}),(0,t.jsx)("section",{className:"".concat(r().content),children:(0,t.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,t.jsx)(i.ChevronRightIcon,{className:"".concat(_?r().rotate:"")}),_?"Hide Code":"Show Code"]})}),(0,t.jsx)(s.CodeBlockSection,{onCopy:p,language:l,showLineNumbers:u,visible:_,children:n})]})}},9943:function(e,n,l){"use strict";l.d(n,{CodeBlockSection:function(){return s}});var t=l(7437),o=l(7807),a=l(3913),r=l(2271),i=l.n(r),c=l(8224);function s(e){let{children:n,language:l="js",showLineNumbers:r,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,c.Z)(i().codeBlock,{[i().visible]:d}),children:[(0,t.jsx)(o.y$,{code:n.trim(),language:l,theme:o.np.dracula,children:e=>{let{tokens:n,getLineProps:l,getTokenProps:o}=e;return(0,t.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...l({line:e}),children:[r&&(0,t.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...o({token:e})},n))]},n))})}}),(0,t.jsx)(a.K,{onClick:()=>u(n.trim())})]})}},7966:function(e,n,l){"use strict";l.d(n,{PropsReference:function(){return c}});var t=l(7437),o=l(7245),a=l.n(o),r=l(9628),i=l(1714);function c(e){let{componentDoc:n}=e,l=null==n?void 0:n.props;if(!l||0===Object.keys(l).length)return null;let o=Object.entries(l).sort((e,n)=>{let[l]=e,[t]=n;return l.toLowerCase().localeCompare(t.toLowerCase())});return(0,t.jsx)("div",{className:a().tableContainer,children:(0,t.jsxs)(i.Table.Root,{children:[(0,t.jsx)(i.Table.Header,{children:(0,t.jsxs)(i.Table.Row,{children:[(0,t.jsx)(i.Table.ColumnHeaderCell,{children:"Props"}),(0,t.jsx)(i.Table.ColumnHeaderCell,{children:"Type"}),(0,t.jsx)(i.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,t.jsx)(i.Table.Body,{children:o.map((e,n)=>{var l,o,c;let[s,d]=e,u=null==d?void 0:d.type,_=(null==u?void 0:u.name)==="enum",m=_&&(null==u?void 0:null===(l=u.value)||void 0===l?void 0:l.map(e=>e.value).filter(e=>"undefined"!==e))||[],p=_?null==u?void 0:null===(o=u.raw)||void 0===o?void 0:o.replace(" | undefined",""):null==u?void 0:u.name,v=_&&m.length>0&&(null==p?void 0:p.split(" | ").length)===1,C=(null==d?void 0:null===(c=d.defaultValue)||void 0===c?void 0:c.value)||"---";return(0,t.jsxs)(i.Table.Row,{children:[(0,t.jsx)(i.Table.Cell,{children:s}),(0,t.jsx)(i.Table.Cell,{children:(0,t.jsxs)("div",{className:a().tableCellData,children:[p||"",v&&(0,t.jsx)(i.Tooltip,{message:m.join(", "),children:(0,t.jsx)("span",{className:a().iconContainer,children:(0,t.jsx)(r.InformationCircleIcon,{className:a().icon})})})]})}),(0,t.jsx)(i.Table.Cell,{children:C})]},"".concat(s,"-").concat(n))})})]})})}},7665:function(e,n,l){"use strict";l.d(n,{l:function(){return _}});var t=l(7437),o=l(2265),a=l(7937);l(9943);var r=l(9351),i=l.n(r),c=l(1714);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:l,onChange:a,value:r,values:i}=e,d=(0,o.useMemo)(()=>s(n),[n]);if("boolean"===l)return(0,t.jsx)(c.Switch,{id:n,label:d,checked:r,onToggle:()=>a(!r)});if("ddl"===l)return(0,t.jsx)(c.Select,{label:d,id:n,value:r?s(r):"",options:null==i?void 0:i.map(e=>({label:s(e),value:e})),onChange:e=>a(null==e?void 0:e.value)});if("text"===l||"number"===l)return(0,t.jsx)(c.TextInput,{type:l,label:d,value:r,onChange:e=>a(e.target.value)});if("segment"===l){var u;return(0,t.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(u=null==i?void 0:i.findIndex(e=>e===r))&&void 0!==u?u:-1,label:d,children:null==i?void 0:i.map(e=>(0,t.jsx)(c.SegmentedControlButton,{onClick:()=>a(e),children:s(e)},e))})}return null}function u(e){let{children:n,values:l={},onChange:a,propDefs:r}=e,[c,s]=(0,o.useState)(l);return(0,o.useEffect)(()=>{l&&Object.keys(l).length>0&&s({...l})},[l]),(0,t.jsxs)("div",{className:i().container,children:[(0,t.jsx)("div",{className:i().codeContainer,children:n}),r.length>0&&(0,t.jsx)("div",{className:i().propsContainer,children:r.map(e=>(0,t.jsx)(d,{onChange:n=>a(e.name,n),...e,value:c[e.name]},e.name))})]})}function _(e){let{code:n,component:l,propDefs:r,title:c="Usage",separator:s="="}=e,[d,_]=(0,o.useState)({...function(e){let n={};if(e.length>0)for(let l of e)l.defaultValue&&(n[l.name]=l.defaultValue||"boolean"!==l.type&&"");return n}(r)}),m=Object.entries(d).map(e=>{let[n,l]=e;return"children"===n?"":"string"==typeof l?"".concat(n).concat(s,'"').concat(l,'"'):"boolean"==typeof l?l?":"===s?"".concat(n,":true"):n:"":"number"==typeof l?"".concat(n,"={").concat(l,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),p=n.replace("{{props}}",m).replace("{{children}}",d.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:i().usageContentTitle,children:c}),(0,t.jsx)(a.CodeBlock,{render:(0,t.jsx)(u,{onChange:(e,n)=>_(l=>({...l,[e]:n})),values:d,propDefs:r,children:(0,t.jsx)(l,{...d})}),children:p})]})}}},function(e){e.O(0,[9998,6306,5501,1947,6578,3799,7807,6440,2971,9033,1744],function(){return e(e.s=1830)}),_N_E=e.O()}]);