(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1942],{1486:function(e,n,t){Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,2580,23)),Promise.resolve().then(t.bind(t,843)),Promise.resolve().then(t.t.bind(t,9831,23)),Promise.resolve().then(t.t.bind(t,1864,23)),Promise.resolve().then(t.t.bind(t,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},843:function(e,n,t){"use strict";t.d(n,{default:function(){return d}});var l=t(7437),o=t(7665),a=t(5085);let r="\nimport { MultiSelect } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      {{props}}\n      options={[\n        { label: 'Green', value: 'green' },\n        { label: 'Blue', value: 'blue' },\n        { label: 'Red', value: 'red' },\n        { label: 'Yellow', value: 'yellow' },\n        { label: 'Orange', value: 'orange' },\n        { label: 'Pink', value: 'pink' },\n        { label: 'Purple', value: 'purple' },\n        { label: 'Grey', value: 'grey' },\n      ]}\n    />\n  );\n}\n",i=[{name:"label",type:"text",defaultValue:"Colors"},{name:"placeholder",type:"text",defaultValue:"Pick a value"},{name:"fullWidth",type:"boolean",defaultValue:!0},{name:"searchable",type:"boolean",defaultValue:!1},{name:"clearable",type:"boolean",defaultValue:!0},{name:"required",type:"boolean",defaultValue:!0},{name:"errorText",type:"text",defaultValue:"Required field"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1}];function c(e){return(0,l.jsx)(a.MultiSelect,{...e,options:[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}]})}let s={component:c,centered:!0,maxWidth:440,code:r,propDefs:i.filter(e=>!["errorText","required"].includes(e.name))},u={component:c,centered:!0,maxWidth:440,code:r,propDefs:i.filter(e=>["errorText","required","label","placeholder"].includes(e.name))};function d(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.l,{code:s.code,component:s.component,propDefs:s.propDefs}),(0,l.jsx)(o.l,{code:u.code,component:u.component,propDefs:u.propDefs,title:"Error State"})]})}},3913:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var l=t(7437),o=t(9628),a=t(2369),r=t.n(a);function i(e){let{onClick:n}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,l.jsx)(o.ClipboardDocumentIcon,{})})})}},7937:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return u}});var l=t(7437),o=t(2265),a=t(9161),r=t.n(a),i=t(9628),c=t(3913),s=t(9943);let u=e=>{let{children:n,language:t="tsx",title:a,render:u,showLineNumbers:d=!1}=e,[p,m]=(0,o.useState)(!1),_=e=>{navigator.clipboard.writeText(e)};return(0,l.jsxs)("div",{className:r().wrapper,children:[(0,l.jsx)("section",{className:r().header,children:(0,l.jsx)("div",{className:r().fullWidth,children:(0,l.jsxs)("div",{className:r().headerContent,children:[a&&(0,l.jsxs)("div",{className:r().titleHeader,children:[(0,l.jsx)("div",{className:r().title,children:a}),(0,l.jsx)("div",{className:r().action,children:(0,l.jsx)(c.K,{onClick:()=>_(n.trim())})})]}),u]})})}),(0,l.jsx)("section",{className:"".concat(r().content),children:(0,l.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,l.jsx)(i.ChevronRightIcon,{className:"".concat(p?r().rotate:"")}),p?"Hide Code":"Show Code"]})}),(0,l.jsx)(s.CodeBlockSection,{onCopy:_,language:t,showLineNumbers:d,visible:p,children:n})]})}},9943:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var l=t(7437),o=t(7807),a=t(3913),r=t(2271),i=t.n(r),c=t(8224);function s(e){let{children:n,language:t="js",showLineNumbers:r,onCopy:s,visible:u=!0}=e,d=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,l.jsxs)("section",{className:(0,c.Z)(i().codeBlock,{[i().visible]:u}),children:[(0,l.jsx)(o.y$,{code:n.trim(),language:t,theme:o.np.dracula,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:o}=e;return(0,l.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,l.jsxs)("div",{...t({line:e}),children:[r&&(0,l.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,l.jsx)("span",{...o({token:e})},n))]},n))})}}),(0,l.jsx)(a.K,{onClick:()=>d(n.trim())})]})}},7665:function(e,n,t){"use strict";t.d(n,{l:function(){return p}});var l=t(7437),o=t(2265),a=t(7937);t(9943);var r=t(9351),i=t.n(r),c=t(5085);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function u(e){let{name:n,type:t,onChange:a,value:r,values:i}=e,u=(0,o.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,l.jsx)(c.Switch,{id:n,label:u,checked:r,onToggle:()=>a(!r)});if("ddl"===t)return(0,l.jsx)(c.Select,{label:u,id:n,value:r?s(r):"",options:null==i?void 0:i.map(e=>({label:s(e),value:e})),onChange:e=>a(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,l.jsx)(c.TextInput,{type:t,label:u,value:r,onChange:e=>a(e.target.value)});if("segment"===t){var d;return(0,l.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(d=null==i?void 0:i.findIndex(e=>e===r))&&void 0!==d?d:-1,label:u,children:null==i?void 0:i.map(e=>(0,l.jsx)(c.SegmentedControlButton,{onClick:()=>a(e),children:s(e)},e))})}return null}function d(e){let{children:n,values:t={},onChange:a,propDefs:r}=e,[c,s]=(0,o.useState)(t);return(0,o.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,l.jsxs)("div",{className:i().container,children:[(0,l.jsx)("div",{className:i().codeContainer,children:n}),r.length>0&&(0,l.jsx)("div",{className:i().propsContainer,children:r.map(e=>(0,l.jsx)(u,{onChange:n=>a(e.name,n),...e,value:c[e.name]},e.name))})]})}function p(e){let{code:n,component:t,propDefs:r,title:c="Usage",separator:s="="}=e,[u,p]=(0,o.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(r)}),m=Object.entries(u).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),_=n.replace("{{props}}",m).replace("{{children}}",u.children);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:i().usageContentTitle,children:c}),(0,l.jsx)(a.CodeBlock,{render:(0,l.jsx)(d,{onChange:(e,n)=>p(t=>({...t,[e]:n})),values:u,propDefs:r,children:(0,l.jsx)(t,{...u})}),children:_})]})}}},function(e){e.O(0,[9998,7920,5501,1947,3442,3799,7807,6440,2971,9033,1744],function(){return e(e.s=1486)}),_N_E=e.O()}]);