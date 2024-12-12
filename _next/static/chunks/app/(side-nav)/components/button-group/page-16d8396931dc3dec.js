(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5881],{9121:function(e,n,t){Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.bind(t,9727)),Promise.resolve().then(t.t.bind(t,9831,23)),Promise.resolve().then(t.bind(t,7966)),Promise.resolve().then(t.t.bind(t,1864,23)),Promise.resolve().then(t.t.bind(t,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},9727:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var o=t(7437),l=t(7665),i=t(1714);let r=[{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"]},{name:"variant",type:"segment",values:["filled","outlined","text"],defaultValue:"outlined"},{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"orientation",type:"segment",values:["horizontal","vertical"],defaultValue:"horizontal"},{name:"disabled",type:"boolean"}],a=function(e){return(0,o.jsxs)(i.ButtonGroup,{...e,children:[(0,o.jsx)(i.Button,{children:"First"}),(0,o.jsx)(i.Button,{children:"Second"}),(0,o.jsx)(i.Button,{disabled:!0,children:"Third"}),(0,o.jsx)(i.Button,{children:"Fourth"})]})},c={component:function(e){return(0,o.jsxs)(i.ButtonGroup,{...e,children:[(0,o.jsx)(i.Button,{onClick:()=>console.log("button"),children:"Button"}),(0,o.jsxs)(i.ActionMenu,{placement:"bottom-end",children:[(0,o.jsx)(i.ActionMenuItem,{label:"Undo",onClick:()=>console.log("Undo")}),(0,o.jsx)(i.ActionMenuItem,{label:"Redo",disabled:!0,onClick:()=>console.log("Redo")}),(0,o.jsx)(i.ActionMenuItem,{label:"Cut",onClick:()=>console.log("Cut")})]})]})},code:"\nimport { ActionMenu, ActionMenuItem, Button, ButtonGroup } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <ButtonGroup {{props}}>\n      <Button onClick={() => console.log('button')}>Button</Button>\n      <ActionMenu placement='bottom-end'>\n        <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />\n        <ActionMenuItem\n          label='Redo'\n          disabled\n          onClick={() => console.log('Redo')}\n        />\n        <ActionMenuItem label='Cut' onClick={() => console.log('Cut')} />\n      </ActionMenu>\n    </ButtonGroup>\n  );\n}\n",propDefs:r.filter(e=>"disabled"!==e.name)};function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.l,{code:"\nimport { ButtonGroup } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <ButtonGroup {{props}}>\n      <Button>First</Button>\n      <Button>Second</Button>\n      <Button disabled>Third</Button>\n      <Button>Fourth</Button>\n    </ButtonGroup>\n  );\n}\n",component:a,propDefs:r}),(0,o.jsx)(l.l,{title:"It can be combined with ActionMenu to create a SplitButton",code:c.code,component:c.component,propDefs:c.propDefs})]})}},3913:function(e,n,t){"use strict";t.d(n,{K:function(){return a}});var o=t(7437),l=t(9628),i=t(2369),r=t.n(i);function a(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,o.jsx)(l.ClipboardDocumentIcon,{})})})}},7937:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return u}});var o=t(7437),l=t(2265),i=t(9161),r=t.n(i),a=t(9628),c=t(3913),s=t(9943);let u=e=>{let{children:n,language:t="tsx",title:i,render:u,showLineNumbers:d=!1}=e,[m,p]=(0,l.useState)(!1),_=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:r().wrapper,children:[(0,o.jsx)("section",{className:r().header,children:(0,o.jsx)("div",{className:r().fullWidth,children:(0,o.jsxs)("div",{className:r().headerContent,children:[i&&(0,o.jsxs)("div",{className:r().titleHeader,children:[(0,o.jsx)("div",{className:r().title,children:i}),(0,o.jsx)("div",{className:r().action,children:(0,o.jsx)(c.K,{onClick:()=>_(n.trim())})})]}),u]})})}),(0,o.jsx)("section",{className:"".concat(r().content),children:(0,o.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{p(e=>!e)},children:[(0,o.jsx)(a.ChevronRightIcon,{className:"".concat(m?r().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:_,language:t,showLineNumbers:d,visible:m,children:n})]})}},9943:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),l=t(7807),i=t(3913),r=t(2271),a=t.n(r),c=t(8224);function s(e){let{children:n,language:t="js",showLineNumbers:r,onCopy:s,visible:u=!0}=e,d=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,c.Z)(a().codeBlock,{[a().visible]:u}),children:[(0,o.jsx)(l.y$,{code:n.trim(),language:t,theme:l.np.dracula,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:l}=e;return(0,o.jsx)("pre",{className:a().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[r&&(0,o.jsx)("span",{className:a().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,o.jsx)(i.K,{onClick:()=>d(n.trim())})]})}},7966:function(e,n,t){"use strict";t.d(n,{PropsReference:function(){return c}});var o=t(7437),l=t(7245),i=t.n(l),r=t(9628),a=t(1714);function c(e){let{componentDoc:n}=e,t=null==n?void 0:n.props;if(!t||0===Object.keys(t).length)return null;let l=Object.entries(t).sort((e,n)=>{let[t]=e,[o]=n;return t.toLowerCase().localeCompare(o.toLowerCase())});return(0,o.jsx)("div",{className:i().tableContainer,children:(0,o.jsxs)(a.Table.Root,{children:[(0,o.jsx)(a.Table.Header,{children:(0,o.jsxs)(a.Table.Row,{children:[(0,o.jsx)(a.Table.ColumnHeaderCell,{children:"Props"}),(0,o.jsx)(a.Table.ColumnHeaderCell,{children:"Type"}),(0,o.jsx)(a.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,o.jsx)(a.Table.Body,{children:l.map((e,n)=>{var t,l,c;let[s,u]=e,d=null==u?void 0:u.type,m=(null==d?void 0:d.name)==="enum",p=m&&(null==d?void 0:null===(t=d.value)||void 0===t?void 0:t.map(e=>e.value).filter(e=>"undefined"!==e))||[],_=m?null==d?void 0:null===(l=d.raw)||void 0===l?void 0:l.replace(" | undefined",""):null==d?void 0:d.name,C=m&&p.length>0&&(null==_?void 0:_.split(" | ").length)===1,h=(null==u?void 0:null===(c=u.defaultValue)||void 0===c?void 0:c.value)||"---";return(0,o.jsxs)(a.Table.Row,{children:[(0,o.jsx)(a.Table.Cell,{children:s}),(0,o.jsx)(a.Table.Cell,{children:(0,o.jsxs)("div",{className:i().tableCellData,children:[_||"",C&&(0,o.jsx)(a.Tooltip,{message:p.join(", "),children:(0,o.jsx)("span",{className:i().iconContainer,children:(0,o.jsx)(r.InformationCircleIcon,{className:i().icon})})})]})}),(0,o.jsx)(a.Table.Cell,{children:h})]},"".concat(s,"-").concat(n))})})]})})}},7665:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var o=t(7437),l=t(2265),i=t(7937);t(9943);var r=t(9351),a=t.n(r),c=t(1714);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function u(e){let{name:n,type:t,onChange:i,value:r,values:a}=e,u=(0,l.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(c.Switch,{id:n,label:u,checked:r,onToggle:()=>i(!r)});if("ddl"===t)return(0,o.jsx)(c.Select,{label:u,id:n,value:r?s(r):"",options:null==a?void 0:a.map(e=>({label:s(e),value:e})),onChange:e=>i(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(c.TextInput,{type:t,label:u,value:r,onChange:e=>i(e.target.value)});if("segment"===t){var d;return(0,o.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(d=null==a?void 0:a.findIndex(e=>e===r))&&void 0!==d?d:-1,label:u,children:null==a?void 0:a.map(e=>(0,o.jsx)(c.SegmentedControlButton,{onClick:()=>i(e),children:s(e)},e))})}return null}function d(e){let{children:n,values:t={},onChange:i,propDefs:r}=e,[c,s]=(0,l.useState)(t);return(0,l.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:a().container,children:[(0,o.jsx)("div",{className:a().codeContainer,children:n}),r.length>0&&(0,o.jsx)("div",{className:a().propsContainer,children:r.map(e=>(0,o.jsx)(u,{onChange:n=>i(e.name,n),...e,value:c[e.name]},e.name))})]})}function m(e){let{code:n,component:t,propDefs:r,title:c="Usage",separator:s="="}=e,[u,m]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(r)}),p=Object.entries(u).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),_=n.replace("{{props}}",p).replace("{{children}}",u.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:a().usageContentTitle,children:c}),(0,o.jsx)(i.CodeBlock,{render:(0,o.jsx)(d,{onChange:(e,n)=>m(t=>({...t,[e]:n})),values:u,propDefs:r,children:(0,o.jsx)(t,{...u})}),children:_})]})}}},function(e){e.O(0,[9998,5164,5501,1947,6578,3799,7807,6440,2971,9033,1744],function(){return e(e.s=9121)}),_N_E=e.O()}]);