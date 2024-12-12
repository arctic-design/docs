(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{2406:function(e,n,t){Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.bind(t,8966)),Promise.resolve().then(t.t.bind(t,9831,23)),Promise.resolve().then(t.bind(t,7966)),Promise.resolve().then(t.t.bind(t,1864,23)),Promise.resolve().then(t.t.bind(t,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},8966:function(e,n,t){"use strict";t.d(n,{default:function(){return c}});var l=t(7437),o=t(7665),a=t(1714);let i=function(e){let{children:n,...t}=e;return(0,l.jsx)(a.Chip,{...t,children:n})},r=[{name:"children",type:"text",defaultValue:"Arctic Design"},{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"disabled",type:"boolean",defaultValue:!1},{name:"readOnly",type:"boolean",defaultValue:!1},{name:"loading",type:"boolean",defaultValue:!1},{name:"selected",type:"boolean",defaultValue:!1},{name:"interactive",type:"boolean",defaultValue:!1}];function c(){return(0,l.jsx)(o.l,{code:"\nimport { Chip } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Chip {{props}}>\n      {{children}}\n    </Chip>\n  );\n}\n",component:i,propDefs:r})}},3913:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var l=t(7437),o=t(9628),a=t(2369),i=t.n(a);function r(e){let{onClick:n}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{"aria-label":"Copy code",onClick:n,className:i().actionButton,children:(0,l.jsx)(o.ClipboardDocumentIcon,{})})})}},7937:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var l=t(7437),o=t(2265),a=t(9161),i=t.n(a),r=t(9628),c=t(3913),s=t(9943);let d=e=>{let{children:n,language:t="tsx",title:a,render:d,showLineNumbers:u=!1}=e,[_,m]=(0,o.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,l.jsxs)("div",{className:i().wrapper,children:[(0,l.jsx)("section",{className:i().header,children:(0,l.jsx)("div",{className:i().fullWidth,children:(0,l.jsxs)("div",{className:i().headerContent,children:[a&&(0,l.jsxs)("div",{className:i().titleHeader,children:[(0,l.jsx)("div",{className:i().title,children:a}),(0,l.jsx)("div",{className:i().action,children:(0,l.jsx)(c.K,{onClick:()=>p(n.trim())})})]}),d]})})}),(0,l.jsx)("section",{className:"".concat(i().content),children:(0,l.jsxs)("button",{className:"".concat(i().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,l.jsx)(r.ChevronRightIcon,{className:"".concat(_?i().rotate:"")}),_?"Hide Code":"Show Code"]})}),(0,l.jsx)(s.CodeBlockSection,{onCopy:p,language:t,showLineNumbers:u,visible:_,children:n})]})}},9943:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var l=t(7437),o=t(7807),a=t(3913),i=t(2271),r=t.n(i),c=t(8224);function s(e){let{children:n,language:t="js",showLineNumbers:i,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,l.jsxs)("section",{className:(0,c.Z)(r().codeBlock,{[r().visible]:d}),children:[(0,l.jsx)(o.y$,{code:n.trim(),language:t,theme:o.np.dracula,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:o}=e;return(0,l.jsx)("pre",{className:r().container,children:n.map((e,n)=>(0,l.jsxs)("div",{...t({line:e}),children:[i&&(0,l.jsx)("span",{className:r().lineNumber,children:n+1}),e.map((e,n)=>(0,l.jsx)("span",{...o({token:e})},n))]},n))})}}),(0,l.jsx)(a.K,{onClick:()=>u(n.trim())})]})}},7966:function(e,n,t){"use strict";t.d(n,{PropsReference:function(){return c}});var l=t(7437),o=t(7245),a=t.n(o),i=t(9628),r=t(1714);function c(e){let{componentDoc:n}=e,t=null==n?void 0:n.props;if(!t||0===Object.keys(t).length)return null;let o=Object.entries(t).sort((e,n)=>{let[t]=e,[l]=n;return t.toLowerCase().localeCompare(l.toLowerCase())});return(0,l.jsx)("div",{className:a().tableContainer,children:(0,l.jsxs)(r.Table.Root,{children:[(0,l.jsx)(r.Table.Header,{children:(0,l.jsxs)(r.Table.Row,{children:[(0,l.jsx)(r.Table.ColumnHeaderCell,{children:"Props"}),(0,l.jsx)(r.Table.ColumnHeaderCell,{children:"Type"}),(0,l.jsx)(r.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,l.jsx)(r.Table.Body,{children:o.map((e,n)=>{var t,o,c;let[s,d]=e,u=null==d?void 0:d.type,_=(null==u?void 0:u.name)==="enum",m=_&&(null==u?void 0:null===(t=u.value)||void 0===t?void 0:t.map(e=>e.value).filter(e=>"undefined"!==e))||[],p=_?null==u?void 0:null===(o=u.raw)||void 0===o?void 0:o.replace(" | undefined",""):null==u?void 0:u.name,C=_&&m.length>0&&(null==p?void 0:p.split(" | ").length)===1,h=(null==d?void 0:null===(c=d.defaultValue)||void 0===c?void 0:c.value)||"---";return(0,l.jsxs)(r.Table.Row,{children:[(0,l.jsx)(r.Table.Cell,{children:s}),(0,l.jsx)(r.Table.Cell,{children:(0,l.jsxs)("div",{className:a().tableCellData,children:[p||"",C&&(0,l.jsx)(r.Tooltip,{message:m.join(", "),children:(0,l.jsx)("span",{className:a().iconContainer,children:(0,l.jsx)(i.InformationCircleIcon,{className:a().icon})})})]})}),(0,l.jsx)(r.Table.Cell,{children:h})]},"".concat(s,"-").concat(n))})})]})})}},7665:function(e,n,t){"use strict";t.d(n,{l:function(){return _}});var l=t(7437),o=t(2265),a=t(7937);t(9943);var i=t(9351),r=t.n(i),c=t(1714);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:a,value:i,values:r}=e,d=(0,o.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,l.jsx)(c.Switch,{id:n,label:d,checked:i,onToggle:()=>a(!i)});if("ddl"===t)return(0,l.jsx)(c.Select,{label:d,id:n,value:i?s(i):"",options:null==r?void 0:r.map(e=>({label:s(e),value:e})),onChange:e=>a(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,l.jsx)(c.TextInput,{type:t,label:d,value:i,onChange:e=>a(e.target.value)});if("segment"===t){var u;return(0,l.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(u=null==r?void 0:r.findIndex(e=>e===i))&&void 0!==u?u:-1,label:d,children:null==r?void 0:r.map(e=>(0,l.jsx)(c.SegmentedControlButton,{onClick:()=>a(e),children:s(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:a,propDefs:i}=e,[c,s]=(0,o.useState)(t);return(0,o.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,l.jsxs)("div",{className:r().container,children:[(0,l.jsx)("div",{className:r().codeContainer,children:n}),i.length>0&&(0,l.jsx)("div",{className:r().propsContainer,children:i.map(e=>(0,l.jsx)(d,{onChange:n=>a(e.name,n),...e,value:c[e.name]},e.name))})]})}function _(e){let{code:n,component:t,propDefs:i,title:c="Usage",separator:s="="}=e,[d,_]=(0,o.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(i)}),m=Object.entries(d).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),p=n.replace("{{props}}",m).replace("{{children}}",d.children);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:r().usageContentTitle,children:c}),(0,l.jsx)(a.CodeBlock,{render:(0,l.jsx)(u,{onChange:(e,n)=>_(t=>({...t,[e]:n})),values:d,propDefs:i,children:(0,l.jsx)(t,{...d})}),children:p})]})}}},function(e){e.O(0,[9998,5164,5501,1947,6578,3799,7807,6440,2971,9033,1744],function(){return e(e.s=2406)}),_N_E=e.O()}]);