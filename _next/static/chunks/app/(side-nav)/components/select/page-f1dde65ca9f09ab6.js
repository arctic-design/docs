(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4707],{6413:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,678)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},678:function(e,n,t){"use strict";t.d(n,{default:function(){return u}});var l=t(7437),o=t(3356),a=t(210);let r="\nimport { Select } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Select\n      {{props}}\n      options={[\n        { label: 'Green', value: 'green' },\n        { label: 'Blue', value: 'blue' },\n        { label: 'Red', value: 'red' },\n        { label: 'Yellow', value: 'yellow' },\n        { label: 'Orange', value: 'orange' },\n        { label: 'Pink', value: 'pink' },\n        { label: 'Purple', value: 'purple' },\n        { label: 'Grey', value: 'grey' },\n      ]}\n    />\n  );\n}\n",i=[{name:"label",type:"text",defaultValue:"Colors"},{name:"placeholder",type:"text",defaultValue:"Pick a value"},{name:"fullWidth",type:"boolean",defaultValue:!0},{name:"searchable",type:"boolean",defaultValue:!1},{name:"clearable",type:"boolean",defaultValue:!0},{name:"required",type:"boolean",defaultValue:!0},{name:"errorText",type:"text",defaultValue:"Required field"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"ddl",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1}];function c(e){return(0,l.jsx)(a.Select,{...e,options:[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}]})}let s={component:c,centered:!0,maxWidth:440,code:r,propDefs:i.filter(e=>!["errorText","required"].includes(e.name))},d={component:c,centered:!0,maxWidth:440,code:r,propDefs:i.filter(e=>["errorText","required","label","placeholder"].includes(e.name))};function u(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.l,{code:s.code,component:s.component,propDefs:s.propDefs}),(0,l.jsx)(o.l,{code:d.code,component:d.component,propDefs:d.propDefs,title:"Error State"})]})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var l=t(7437),o=t(4740),a=t(6128),r=t.n(a);function i(e){let{onClick:n}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,l.jsx)(o.Z,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var l=t(7437),o=t(2265),a=t(1322),r=t.n(a),i=t(6953),c=t(4772),s=t(8404);let d=e=>{let{children:n,language:t="tsx",title:a,render:d,showLineNumbers:u=!1}=e,[p,m]=(0,o.useState)(!1),_=e=>{navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})};return(0,l.jsxs)("div",{className:r().wrapper,children:[(0,l.jsx)("section",{className:r().header,children:(0,l.jsx)("div",{className:r().fullWidth,children:(0,l.jsxs)("div",{className:r().headerContent,children:[a&&(0,l.jsxs)("div",{className:r().titleHeader,children:[(0,l.jsx)("div",{className:r().title,children:a}),(0,l.jsx)("div",{className:r().action,children:(0,l.jsx)(c.K,{onClick:()=>_(n.trim())})})]}),d]})})}),(0,l.jsx)("section",{className:"".concat(r().content),children:(0,l.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,l.jsx)(i.Z,{className:"".concat(p?r().rotate:"")}),p?"Hide Code":"Show Code"]})}),(0,l.jsx)(s.CodeBlockSection,{onCopy:_,language:t,showLineNumbers:u,visible:p,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var l=t(7437),o=t(5291),a=t(4772),r=t(7951),i=t.n(r),c=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:r,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})};return(0,l.jsxs)("section",{className:(0,c.Z)(i().codeBlock,{[i().visible]:d}),children:[(0,l.jsx)(o.y$,{code:n.trim(),language:t,theme:o.np.oneLight,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:o}=e;return(0,l.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,l.jsxs)("div",{...t({line:e}),children:[r&&(0,l.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,l.jsx)("span",{...o({token:e})},n))]},n))})}}),(0,l.jsx)(a.K,{onClick:()=>u(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return p}});var l=t(7437),o=t(2265),a=t(1938);t(8404);var r=t(9924),i=t.n(r),c=t(210);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:a,value:r,values:i}=e,d=(0,o.useMemo)(()=>s(n),[n]);return"boolean"===t?(0,l.jsx)(c.Switch,{id:n,label:d,checked:r,onToggle:()=>a(!r)}):"ddl"===t?(0,l.jsx)(c.Select,{label:d,id:n,value:r?s(r):"",options:null==i?void 0:i.map(e=>({label:s(e),value:e})),onChange:e=>a(null==e?void 0:e.value)}):"text"===t||"number"===t?(0,l.jsx)(c.TextInput,{type:t,label:d,value:r,onChange:e=>a(e.target.value)}):null}function u(e){let{children:n,values:t={},onChange:a,propDefs:r}=e,[c,s]=(0,o.useState)(t);return(0,o.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,l.jsxs)("div",{className:i().container,children:[(0,l.jsx)("div",{className:i().codeContainer,children:n}),r.length>0&&(0,l.jsx)("div",{className:i().propsContainer,children:r.map(e=>(0,l.jsx)(d,{onChange:n=>a(e.name,n),...e,value:c[e.name]},e.name))})]})}function p(e){let{code:n,component:t,propDefs:r,title:c="Usage"}=e,[s,d]=(0,o.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(r)}),p=Object.entries(s).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n,'="').concat(t,'"'):"boolean"==typeof t?t?n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(" "),m=n.replace("{{props}}",p).replace("{{children}}",s.children);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:i().usageContentTitle,children:c}),(0,l.jsx)(a.CodeBlock,{render:(0,l.jsx)(u,{onChange:(e,n)=>d(t=>({...t,[e]:n})),values:s,propDefs:r,children:(0,l.jsx)(t,{...s})}),children:m})]})}}},function(e){e.O(0,[906,3808,210,5845,5746,2971,7379,1744],function(){return e(e.s=6413)}),_N_E=e.O()}]);