(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{2153:e=>{e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},2367:(e,n,o)=>{"use strict";o.d(n,{CodeBlockSection:()=>d});var t=o(95155),l=o(97879),r=o(89650),i=o(95676),s=o.n(i),a=o(4776);function d(e){let{children:n,language:o="js",showLineNumbers:i,onCopy:d,visible:c=!0}=e,m=e=>{d?d(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,a.A)(s().codeBlock,{[s().visible]:c}),children:[(0,t.jsx)(l.f4,{code:n.trim(),language:o,theme:l.Zj.dracula,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:l}=e;return(0,t.jsx)("pre",{className:s().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[i&&(0,t.jsx)("span",{className:s().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,t.jsx)(r.r,{onClick:()=>m(n.trim())})]})}},16863:(e,n,o)=>{"use strict";o.d(n,{default:()=>m});var t=o(95155),l=o(29081),r=o(48690);let i="\nimport { MultiSelect } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      {{props}}\n      options={[\n        { label: 'Green', value: 'green' },\n        { label: 'Blue', value: 'blue' },\n        { label: 'Red', value: 'red' },\n        { label: 'Yellow', value: 'yellow' },\n        { label: 'Orange', value: 'orange' },\n        { label: 'Pink', value: 'pink' },\n        { label: 'Purple', value: 'purple' },\n        { label: 'Grey', value: 'grey' },\n      ]}\n    />\n  );\n}\n",s=[{name:"label",type:"text",defaultValue:"Colors"},{name:"placeholder",type:"text",defaultValue:"Pick a value"},{name:"fullWidth",type:"boolean",defaultValue:!0},{name:"searchable",type:"boolean",defaultValue:!1},{name:"clearable",type:"boolean",defaultValue:!0},{name:"required",type:"boolean",defaultValue:!0},{name:"errorText",type:"text",defaultValue:"Required field"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1}];function a(e){return(0,t.jsx)(r.KF,{...e,options:[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}]})}let d={component:a,centered:!0,maxWidth:440,code:i,propDefs:s.filter(e=>!["errorText","required"].includes(e.name))},c={component:a,centered:!0,maxWidth:440,code:i,propDefs:s.filter(e=>["errorText","required","label","placeholder"].includes(e.name))};function m(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l._,{code:d.code,component:d.component,propDefs:d.propDefs}),(0,t.jsx)(l._,{code:c.code,component:c.component,propDefs:c.propDefs,title:"Error State"})]})}},29081:(e,n,o)=>{"use strict";o.d(n,{_:()=>u});var t=o(95155),l=o(12115),r=o(79046);o(2367);var i=o(85688),s=o.n(i),a=o(48690);function d(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function c(e){let{name:n,type:o,onChange:r,value:i,values:s}=e,c=(0,l.useMemo)(()=>d(n),[n]);if("boolean"===o)return(0,t.jsx)(a.dO,{id:n,label:c,checked:i,onToggle:()=>r(!i)});if("ddl"===o)return(0,t.jsx)(a.l6,{label:c,id:n,value:i?d(i):"",options:null==s?void 0:s.map(e=>({label:d(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===o||"number"===o)return(0,t.jsx)(a.ks,{type:o,label:c,value:i,onChange:e=>r(e.target.value)});if("segment"===o){var m;return(0,t.jsx)(a.Iz,{initialSelectedIndex:null!==(m=null==s?void 0:s.findIndex(e=>e===i))&&void 0!==m?m:-1,label:c,children:null==s?void 0:s.map(e=>(0,t.jsx)(a.EP,{onClick:()=>r(e),children:d(e)},e))})}return null}function m(e){let{children:n,values:o={},onChange:r,propDefs:i}=e,[a,d]=(0,l.useState)(o);return(0,l.useEffect)(()=>{o&&Object.keys(o).length>0&&d({...o})},[o]),(0,t.jsxs)("div",{className:s().container,children:[(0,t.jsx)("div",{className:s().codeContainer,children:n}),i.length>0&&(0,t.jsx)("div",{className:s().propsContainer,children:i.map(e=>(0,t.jsx)(c,{onChange:n=>r(e.name,n),...e,value:a[e.name]},e.name))})]})}function u(e){let{code:n,component:o,propDefs:i,title:a="Usage",separator:d="="}=e,[c,u]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let o of e)o.defaultValue&&(n[o.name]=o.defaultValue||"boolean"!==o.type&&"");return n}(i)}),b=Object.entries(c).map(e=>{let[n,o]=e;return"children"===n?"":"string"==typeof o?"".concat(n).concat(d,'"').concat(o,'"'):"boolean"==typeof o?o?":"===d?"".concat(n,":true"):n:"":"number"==typeof o?"".concat(n,"={").concat(o,"}"):""}).filter(Boolean).join(":"===d?", \n	  ":" "),h=n.replace("{{props}}",b).replace("{{children}}",c.children);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:s().usageContentTitle,children:a}),(0,t.jsx)(r.CodeBlock,{render:(0,t.jsx)(m,{onChange:(e,n)=>u(o=>({...o,[e]:n})),values:c,propDefs:i,children:(0,t.jsx)(o,{...c})}),children:h})]})}},42451:e=>{e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},45573:e=>{e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},68545:e=>{e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},79046:(e,n,o)=>{"use strict";o.d(n,{CodeBlock:()=>c});var t=o(95155),l=o(12115),r=o(45573),i=o.n(r),s=o(79873),a=o(89650),d=o(2367);let c=e=>{let{children:n,language:o="tsx",title:r,render:c,showLineNumbers:m=!1}=e,[u,b]=(0,l.useState)(!1),h=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:i().wrapper,children:[(0,t.jsx)("section",{className:i().header,children:(0,t.jsx)("div",{className:i().fullWidth,children:(0,t.jsxs)("div",{className:i().headerContent,children:[r&&(0,t.jsxs)("div",{className:i().titleHeader,children:[(0,t.jsx)("div",{className:i().title,children:r}),(0,t.jsx)("div",{className:i().action,children:(0,t.jsx)(a.r,{onClick:()=>h(n.trim())})})]}),c]})})}),(0,t.jsx)("section",{className:"".concat(i().content),children:(0,t.jsxs)("button",{className:"".concat(i().fullWidth),onClick:()=>{b(e=>!e)},children:[(0,t.jsx)(s.ChevronRightIcon,{className:"".concat(u?i().rotate:"")}),u?"Hide Code":"Show Code"]})}),(0,t.jsx)(d.CodeBlockSection,{onCopy:h,language:o,showLineNumbers:m,visible:u,children:n})]})}},85688:e=>{e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},86902:(e,n,o)=>{Promise.resolve().then(o.bind(o,30768)),Promise.resolve().then(o.bind(o,35558)),Promise.resolve().then(o.bind(o,44648)),Promise.resolve().then(o.bind(o,95)),Promise.resolve().then(o.bind(o,75530)),Promise.resolve().then(o.bind(o,57558)),Promise.resolve().then(o.bind(o,3960)),Promise.resolve().then(o.bind(o,64096)),Promise.resolve().then(o.bind(o,32691)),Promise.resolve().then(o.bind(o,26281)),Promise.resolve().then(o.bind(o,57752)),Promise.resolve().then(o.bind(o,88103)),Promise.resolve().then(o.bind(o,62253)),Promise.resolve().then(o.bind(o,50062)),Promise.resolve().then(o.bind(o,3067)),Promise.resolve().then(o.bind(o,39549)),Promise.resolve().then(o.bind(o,83830)),Promise.resolve().then(o.bind(o,94409)),Promise.resolve().then(o.bind(o,26698)),Promise.resolve().then(o.bind(o,93472)),Promise.resolve().then(o.bind(o,68064)),Promise.resolve().then(o.bind(o,67722)),Promise.resolve().then(o.bind(o,1518)),Promise.resolve().then(o.bind(o,89016)),Promise.resolve().then(o.bind(o,66840)),Promise.resolve().then(o.bind(o,71618)),Promise.resolve().then(o.bind(o,77492)),Promise.resolve().then(o.bind(o,17443)),Promise.resolve().then(o.bind(o,99818)),Promise.resolve().then(o.bind(o,77422)),Promise.resolve().then(o.bind(o,8902)),Promise.resolve().then(o.bind(o,66081)),Promise.resolve().then(o.bind(o,90201)),Promise.resolve().then(o.bind(o,81383)),Promise.resolve().then(o.bind(o,70952)),Promise.resolve().then(o.bind(o,95551)),Promise.resolve().then(o.bind(o,81392)),Promise.resolve().then(o.bind(o,14312)),Promise.resolve().then(o.bind(o,67036)),Promise.resolve().then(o.bind(o,33438)),Promise.resolve().then(o.bind(o,94754)),Promise.resolve().then(o.bind(o,98024)),Promise.resolve().then(o.bind(o,17956)),Promise.resolve().then(o.bind(o,74458)),Promise.resolve().then(o.bind(o,71600)),Promise.resolve().then(o.bind(o,89326)),Promise.resolve().then(o.bind(o,22770)),Promise.resolve().then(o.bind(o,65546)),Promise.resolve().then(o.t.bind(o,46902,23)),Promise.resolve().then(o.t.bind(o,8763,23)),Promise.resolve().then(o.bind(o,43643)),Promise.resolve().then(o.bind(o,31048)),Promise.resolve().then(o.bind(o,2906)),Promise.resolve().then(o.bind(o,30766)),Promise.resolve().then(o.bind(o,27065)),Promise.resolve().then(o.bind(o,54835)),Promise.resolve().then(o.bind(o,16863)),Promise.resolve().then(o.bind(o,78982)),Promise.resolve().then(o.bind(o,14480)),Promise.resolve().then(o.bind(o,8656)),Promise.resolve().then(o.bind(o,59389)),Promise.resolve().then(o.bind(o,11181)),Promise.resolve().then(o.bind(o,17232)),Promise.resolve().then(o.bind(o,85359)),Promise.resolve().then(o.bind(o,62831)),Promise.resolve().then(o.t.bind(o,2153,23)),Promise.resolve().then(o.t.bind(o,42451,23)),Promise.resolve().then(o.t.bind(o,96737,23)),Promise.resolve().then(o.t.bind(o,85688,23))},89650:(e,n,o)=>{"use strict";o.d(n,{r:()=>a});var t=o(95155),l=o(79873),r=o(68545),i=o.n(r),s=o(12115);function a(e){let{onClick:n,timeout:o=3e3,ariaLabel:r="Copy code"}=e,[a,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e;return a&&(e=setTimeout(()=>{d(!1)},o)),()=>{e&&clearTimeout(e)}},[a,o]);let c=(0,s.useCallback)(()=>{d(!0),n()},[n]);return(0,t.jsxs)("button",{type:"button","aria-label":r,onClick:c,className:"".concat(i().actionButton," ").concat(a?i().clicked:""),disabled:a,children:[(0,t.jsx)(l.ClipboardDocumentIcon,{className:i().clipboardIcon}),(0,t.jsx)(l.CheckIcon,{className:i().checkIcon})]})}},95676:e=>{e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},96737:e=>{e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}}},e=>{var n=n=>e(e.s=n);e.O(0,[5087,6149,61,5739,2545,5756,1585,6902,7879,4738,5526,8441,1816,7358],()=>n(86902)),_N_E=e.O()}]);