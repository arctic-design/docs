(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9526],{6420:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,2031)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},2031:function(e,n,t){"use strict";t.d(n,{default:function(){return a}});var o=t(7437),i=t(3356),r=t(4743);let l=function(e){return(0,o.jsxs)(r.Grid,{...e,children:[(0,o.jsxs)(r.GridRow,{children:[(0,o.jsx)(r.GridColumn,{xs:12,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:4,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=4"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:8,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=8"})})]}),(0,o.jsxs)(r.GridRow,{children:[(0,o.jsx)(r.GridColumn,{xs:12,sm:6,md:4,lg:3,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=6 md=4 lg=3"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:6,md:4,lg:3,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=6 md=4 lg=3"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:6,md:4,lg:3,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=6 md=4 lg=3"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:6,md:12,lg:3,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=6 md=4 lg=3"})}),(0,o.jsx)(r.GridColumn,{xs:12,sm:8,children:(0,o.jsx)(r.Paper,{variant:"outlined",children:"xs=12 sm=8"})})]})]})},s=[{name:"spacing",type:"number",defaultValue:1}];function a(){return(0,o.jsx)(i.l,{code:"\nimport { Grid, GridColumn, GridRow, Paper } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Grid {{props}}>\n      <GridRow>\n        <GridColumn xs={12}>\n          <Paper variant='outlined'>xs=12</Paper>\n        </GridColumn>\n        <GridColumn xs={12} sm={4}>\n          <Paper variant='outlined'>xs=12 sm=4</Paper>\n        </GridColumn>\n        <GridColumn xs={12} sm={8}>\n          <Paper variant='outlined'>xs=12 sm=8</Paper>\n        </GridColumn>\n      </GridRow>\n      <GridRow>\n        <GridColumn xs={12} sm={6} md={4} lg={3}>\n          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>\n        </GridColumn>\n        <GridColumn xs={12} sm={6} md={4} lg={3}>\n          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>\n        </GridColumn>\n        <GridColumn xs={12} sm={6} md={4} lg={3}>\n          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>\n        </GridColumn>\n        <GridColumn xs={12} sm={6} md={12} lg={3}>\n          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>\n        </GridColumn>\n\n        <GridColumn xs={12} sm={8}>\n          <Paper variant='outlined'>xs=12 sm=8</Paper>\n        </GridColumn>\n      </GridRow>\n    </Grid>\n  );\n}\n",component:l,propDefs:s})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var o=t(7437),i=t(976),r=t(6128),l=t.n(r);function s(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:l().actionButton,children:(0,o.jsx)(i.ClipboardDocumentIcon,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return c}});var o=t(7437),i=t(2265),r=t(1322),l=t.n(r),s=t(976),a=t(4772),d=t(8404);let c=e=>{let{children:n,language:t="tsx",title:r,render:c,showLineNumbers:u=!1}=e,[m,x]=(0,i.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:l().wrapper,children:[(0,o.jsx)("section",{className:l().header,children:(0,o.jsx)("div",{className:l().fullWidth,children:(0,o.jsxs)("div",{className:l().headerContent,children:[r&&(0,o.jsxs)("div",{className:l().titleHeader,children:[(0,o.jsx)("div",{className:l().title,children:r}),(0,o.jsx)("div",{className:l().action,children:(0,o.jsx)(a.K,{onClick:()=>p(n.trim())})})]}),c]})})}),(0,o.jsx)("section",{className:"".concat(l().content),children:(0,o.jsxs)("button",{className:"".concat(l().fullWidth),onClick:()=>{x(e=>!e)},children:[(0,o.jsx)(s.ChevronRightIcon,{className:"".concat(m?l().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,o.jsx)(d.CodeBlockSection,{onCopy:p,language:t,showLineNumbers:u,visible:m,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return d}});var o=t(7437),i=t(5291),r=t(4772),l=t(7951),s=t.n(l),a=t(3058);function d(e){let{children:n,language:t="js",showLineNumbers:l,onCopy:d,visible:c=!0}=e,u=e=>{d?d(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,a.Z)(s().codeBlock,{[s().visible]:c}),children:[(0,o.jsx)(i.y$,{code:n.trim(),language:t,theme:i.np.oneLight,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:i}=e;return(0,o.jsx)("pre",{className:s().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[l&&(0,o.jsx)("span",{className:s().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...i({token:e})},n))]},n))})}}),(0,o.jsx)(r.K,{onClick:()=>u(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var o=t(7437),i=t(2265),r=t(1938);t(8404);var l=t(9924),s=t.n(l),a=t(4743);function d(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function c(e){let{name:n,type:t,onChange:r,value:l,values:s}=e,c=(0,i.useMemo)(()=>d(n),[n]);if("boolean"===t)return(0,o.jsx)(a.Switch,{id:n,label:c,checked:l,onToggle:()=>r(!l)});if("ddl"===t)return(0,o.jsx)(a.Select,{label:c,id:n,value:l?d(l):"",options:null==s?void 0:s.map(e=>({label:d(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(a.TextInput,{type:t,label:c,value:l,onChange:e=>r(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(a.SegmentedControl,{initialSelectedIndex:null!==(u=null==s?void 0:s.findIndex(e=>e===l))&&void 0!==u?u:-1,label:c,children:null==s?void 0:s.map(e=>(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>r(e),children:d(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:r,propDefs:l}=e,[a,d]=(0,i.useState)(t);return(0,i.useEffect)(()=>{t&&Object.keys(t).length>0&&d({...t})},[t]),(0,o.jsxs)("div",{className:s().container,children:[(0,o.jsx)("div",{className:s().codeContainer,children:n}),l.length>0&&(0,o.jsx)("div",{className:s().propsContainer,children:l.map(e=>(0,o.jsx)(c,{onChange:n=>r(e.name,n),...e,value:a[e.name]},e.name))})]})}function m(e){let{code:n,component:t,propDefs:l,title:a="Usage",separator:d="="}=e,[c,m]=(0,i.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(l)}),x=Object.entries(c).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(d,'"').concat(t,'"'):"boolean"==typeof t?t?":"===d?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===d?", \n	  ":" "),p=n.replace("{{props}}",x).replace("{{children}}",c.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s().usageContentTitle,children:a}),(0,o.jsx)(r.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>m(t=>({...t,[e]:n})),values:c,propDefs:l,children:(0,o.jsx)(t,{...c})}),children:p})]})}}},function(e){e.O(0,[4383,2811,5501,1947,6299,3808,5291,5746,2971,7379,1744],function(){return e(e.s=6420)}),_N_E=e.O()}]);