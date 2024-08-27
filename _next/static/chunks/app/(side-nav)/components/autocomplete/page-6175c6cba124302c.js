(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6803],{1902:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,4649)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},4649:function(e,n,t){"use strict";t.d(n,{default:function(){return c}});var o=t(7437),a=t(3356),l=t(8320);let i=function(e){return(0,o.jsx)(l.Autocomplete,{...e,options:["Alfalfa Sprouts","Apple","Apricot","Artichoke","Asian Pear","Asparagus","Atemoya","Avocado","Bamboo Shoots","Banana","Bean Sprouts","Beans","Beets","Belgian Endive","Bell Peppers","Bitter Melon","Blackberries","Blueberries"]})},r=[{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"label",type:"text",defaultValue:"Fruit name"},{name:"placeholder",type:"text",defaultValue:"Enter fruit name"},{name:"required",type:"boolean"},{name:"disabled",type:"boolean"},{name:"readOnly",type:"boolean"},{name:"errorText",type:"text"}];function c(){return(0,o.jsx)(a.l,{code:"\nimport { Autocomplete } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Autocomplete\n      {{props}}\n      options={[\n        'Alfalfa Sprouts',\n        'Apple',\n        'Apricot',\n        'Artichoke',\n        'Asian Pear',\n        'Asparagus',\n        'Atemoya',\n        'Avocado',\n        'Bamboo Shoots',\n        'Banana',\n        'Bean Sprouts',\n        'Beans',\n        'Beets',\n        'Belgian Endive',\n        'Bell Peppers',\n        'Bitter Melon',\n        'Blackberries',\n        'Blueberries',\n      ]}\n    />\n  );\n}\n",component:i,propDefs:r})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var o=t(7437),a=t(4740),l=t(6128),i=t.n(l);function r(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:i().actionButton,children:(0,o.jsx)(a.Z,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var o=t(7437),a=t(2265),l=t(1322),i=t.n(l),r=t(6953),c=t(4772),s=t(8404);let d=e=>{let{children:n,language:t="tsx",title:l,render:d,showLineNumbers:u=!1}=e,[p,_]=(0,a.useState)(!1),m=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:i().wrapper,children:[(0,o.jsx)("section",{className:i().header,children:(0,o.jsx)("div",{className:i().fullWidth,children:(0,o.jsxs)("div",{className:i().headerContent,children:[l&&(0,o.jsxs)("div",{className:i().titleHeader,children:[(0,o.jsx)("div",{className:i().title,children:l}),(0,o.jsx)("div",{className:i().action,children:(0,o.jsx)(c.K,{onClick:()=>m(n.trim())})})]}),d]})})}),(0,o.jsx)("section",{className:"".concat(i().content),children:(0,o.jsxs)("button",{className:"".concat(i().fullWidth),onClick:()=>{_(e=>!e)},children:[(0,o.jsx)(r.Z,{className:"".concat(p?i().rotate:"")}),p?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:m,language:t,showLineNumbers:u,visible:p,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),a=t(5291),l=t(4772),i=t(7951),r=t.n(i),c=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:i,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,c.Z)(r().codeBlock,{[r().visible]:d}),children:[(0,o.jsx)(a.y$,{code:n.trim(),language:t,theme:a.np.oneLight,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:a}=e;return(0,o.jsx)("pre",{className:r().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[i&&(0,o.jsx)("span",{className:r().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...a({token:e})},n))]},n))})}}),(0,o.jsx)(l.K,{onClick:()=>u(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return p}});var o=t(7437),a=t(2265),l=t(1938);t(8404);var i=t(9924),r=t.n(i),c=t(8320);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:l,value:i,values:r}=e,d=(0,a.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(c.Switch,{id:n,label:d,checked:i,onToggle:()=>l(!i)});if("ddl"===t)return(0,o.jsx)(c.Select,{label:d,id:n,value:i?s(i):"",options:null==r?void 0:r.map(e=>({label:s(e),value:e})),onChange:e=>l(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(c.TextInput,{type:t,label:d,value:i,onChange:e=>l(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(u=null==r?void 0:r.findIndex(e=>e===i))&&void 0!==u?u:-1,label:d,children:null==r?void 0:r.map(e=>(0,o.jsx)(c.SegmentedControlButton,{onClick:()=>l(e),children:s(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:l,propDefs:i}=e,[c,s]=(0,a.useState)(t);return(0,a.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:r().container,children:[(0,o.jsx)("div",{className:r().codeContainer,children:n}),i.length>0&&(0,o.jsx)("div",{className:r().propsContainer,children:i.map(e=>(0,o.jsx)(d,{onChange:n=>l(e.name,n),...e,value:c[e.name]},e.name))})]})}function p(e){let{code:n,component:t,propDefs:i,title:c="Usage"}=e,[s,d]=(0,a.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(i)}),p=Object.entries(s).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n,'="').concat(t,'"'):"boolean"==typeof t?t?n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(" "),_=n.replace("{{props}}",p).replace("{{children}}",s.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:r().usageContentTitle,children:c}),(0,o.jsx)(l.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>d(t=>({...t,[e]:n})),values:s,propDefs:i,children:(0,o.jsx)(t,{...s})}),children:_})]})}}},function(e){e.O(0,[4383,7757,5501,3808,7904,5845,5746,2971,7379,1744],function(){return e(e.s=1902)}),_N_E=e.O()}]);