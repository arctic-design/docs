(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8752],{6831:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,323)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},323:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var o=t(7437),r=t(3356),i=t(9631);function a(e){let{enqueueProps:n}=e,{enqueueSnackbar:t,closeSnackbar:r}=(0,i.useSnackbar)();return(0,o.jsxs)(i.Center,{children:[(0,o.jsx)(i.Button,{onClick:()=>t(n),children:"Show notification"}),(0,o.jsx)(i.Button,{color:"secondary",onClick:()=>r(),children:"Close all"})]})}let c=function(e){return(0,o.jsx)(i.SnackbarProvider,{children:(0,o.jsx)(a,{enqueueProps:e})})},l=[{name:"variant",type:"segment",values:["success","error","warning","info"],defaultValue:"info"},{name:"title",type:"text",defaultValue:"Notification received"},{name:"message",type:"text",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}];function s(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.l,{code:"\nimport {\n  SnackbarProvider,\n  EnqueueSnackbarProps,\n  useSnackbar,\n  Button,\n  Center,\n} from '@arctic-kit/snow';\n\nfunction Demo({ enqueueProps }: { enqueueProps: EnqueueSnackbarProps }) {\n  const { enqueueSnackbar, closeSnackbar } = useSnackbar();\n\n  return (\n    <Center>\n      <Button onClick={() => enqueueSnackbar(enqueueProps)}>\n        Show notification\n      </Button>\n      <Button color='secondary' onClick={() => closeSnackbar()}>\n        Close all\n      </Button>\n    </Center>\n  );\n}\n\nfunction RootApp(props: EnqueueSnackbarProps) {\n  return (\n    <SnackbarProvider>\n      <Demo\n        enqueueProps={{\n          {{props}}\n        }}\n      />\n    </SnackbarProvider>\n  );\n}\n",component:c,propDefs:l,separator:":"})})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return c}});var o=t(7437),r=t(976),i=t(6128),a=t.n(i);function c(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:a().actionButton,children:(0,o.jsx)(r.ClipboardDocumentIcon,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return u}});var o=t(7437),r=t(2265),i=t(1322),a=t.n(i),c=t(976),l=t(4772),s=t(8404);let u=e=>{let{children:n,language:t="tsx",title:i,render:u,showLineNumbers:d=!1}=e,[p,_]=(0,r.useState)(!1),m=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:a().wrapper,children:[(0,o.jsx)("section",{className:a().header,children:(0,o.jsx)("div",{className:a().fullWidth,children:(0,o.jsxs)("div",{className:a().headerContent,children:[i&&(0,o.jsxs)("div",{className:a().titleHeader,children:[(0,o.jsx)("div",{className:a().title,children:i}),(0,o.jsx)("div",{className:a().action,children:(0,o.jsx)(l.K,{onClick:()=>m(n.trim())})})]}),u]})})}),(0,o.jsx)("section",{className:"".concat(a().content),children:(0,o.jsxs)("button",{className:"".concat(a().fullWidth),onClick:()=>{_(e=>!e)},children:[(0,o.jsx)(c.ChevronRightIcon,{className:"".concat(p?a().rotate:"")}),p?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:m,language:t,showLineNumbers:d,visible:p,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),r=t(5291),i=t(4772),a=t(7951),c=t.n(a),l=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:a,onCopy:s,visible:u=!0}=e,d=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,l.Z)(c().codeBlock,{[c().visible]:u}),children:[(0,o.jsx)(r.y$,{code:n.trim(),language:t,theme:r.np.oneDark,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:r}=e;return(0,o.jsx)("pre",{className:c().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[a&&(0,o.jsx)("span",{className:c().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...r({token:e})},n))]},n))})}}),(0,o.jsx)(i.K,{onClick:()=>d(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return p}});var o=t(7437),r=t(2265),i=t(1938);t(8404);var a=t(9924),c=t.n(a),l=t(9631);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function u(e){let{name:n,type:t,onChange:i,value:a,values:c}=e,u=(0,r.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(l.Switch,{id:n,label:u,checked:a,onToggle:()=>i(!a)});if("ddl"===t)return(0,o.jsx)(l.Select,{label:u,id:n,value:a?s(a):"",options:null==c?void 0:c.map(e=>({label:s(e),value:e})),onChange:e=>i(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(l.TextInput,{type:t,label:u,value:a,onChange:e=>i(e.target.value)});if("segment"===t){var d;return(0,o.jsx)(l.SegmentedControl,{initialSelectedIndex:null!==(d=null==c?void 0:c.findIndex(e=>e===a))&&void 0!==d?d:-1,label:u,children:null==c?void 0:c.map(e=>(0,o.jsx)(l.SegmentedControlButton,{onClick:()=>i(e),children:s(e)},e))})}return null}function d(e){let{children:n,values:t={},onChange:i,propDefs:a}=e,[l,s]=(0,r.useState)(t);return(0,r.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsx)("div",{className:c().codeContainer,children:n}),a.length>0&&(0,o.jsx)("div",{className:c().propsContainer,children:a.map(e=>(0,o.jsx)(u,{onChange:n=>i(e.name,n),...e,value:l[e.name]},e.name))})]})}function p(e){let{code:n,component:t,propDefs:a,title:l="Usage",separator:s="="}=e,[u,p]=(0,r.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(a)}),_=Object.entries(u).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),m=n.replace("{{props}}",_).replace("{{children}}",u.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:c().usageContentTitle,children:l}),(0,o.jsx)(i.CodeBlock,{render:(0,o.jsx)(d,{onChange:(e,n)=>p(t=>({...t,[e]:n})),values:u,propDefs:a,children:(0,o.jsx)(t,{...u})}),children:m})]})}}},function(e){e.O(0,[4383,2811,5501,1947,8843,3808,5291,5746,2971,7379,1744],function(){return e(e.s=6831)}),_N_E=e.O()}]);