(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3308],{2451:function(e,n,t){Promise.resolve().then(t.bind(t,8124)),Promise.resolve().then(t.bind(t,3870)),Promise.resolve().then(t.bind(t,8518)),Promise.resolve().then(t.bind(t,334)),Promise.resolve().then(t.bind(t,7605)),Promise.resolve().then(t.bind(t,2180)),Promise.resolve().then(t.bind(t,3337)),Promise.resolve().then(t.bind(t,4480)),Promise.resolve().then(t.bind(t,664)),Promise.resolve().then(t.bind(t,2634)),Promise.resolve().then(t.bind(t,458)),Promise.resolve().then(t.bind(t,8587)),Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.bind(t,8769)),Promise.resolve().then(t.bind(t,6278)),Promise.resolve().then(t.bind(t,3224)),Promise.resolve().then(t.bind(t,1702)),Promise.resolve().then(t.bind(t,24)),Promise.resolve().then(t.bind(t,2286)),Promise.resolve().then(t.bind(t,9519)),Promise.resolve().then(t.bind(t,448)),Promise.resolve().then(t.bind(t,8025)),Promise.resolve().then(t.bind(t,7363)),Promise.resolve().then(t.bind(t,8263)),Promise.resolve().then(t.bind(t,4289)),Promise.resolve().then(t.bind(t,5658)),Promise.resolve().then(t.bind(t,1222)),Promise.resolve().then(t.bind(t,1802)),Promise.resolve().then(t.bind(t,1869)),Promise.resolve().then(t.t.bind(t,9831,23)),Promise.resolve().then(t.bind(t,7966)),Promise.resolve().then(t.t.bind(t,1864,23)),Promise.resolve().then(t.t.bind(t,9351,23))},2871:function(){},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},6278:function(e,n,t){"use strict";t.d(n,{default:function(){return h}});var o=t(7437),i=t(7665),l=t(8993),r=t(8124);t(2871);let c="\nimport { Box, CardStack } from '@arctic-kit/snow';\n\nfunction Demo() {\n  return (\n    <Box sx={{ width: '100%' }}>\n      <CardStack totalItems={5} completedItems={2} {{props}}>\n        {Array.from({ length: 5 }).map((_, index) => (\n          <Box\n            key={index}\n            sx={{\n              padding: '12px 8px',\n              backgroundColor: 'var(--snow-colors-neutral-0)',\n              margin: 4,\n            }}\n            as='p'\n          >\n            This could be a section {index + 1} element\n          </Box>\n        ))}\n      </CardStack>\n    </Box>\n  );\n}\n",s=[{name:"title",type:"text",defaultValue:"Group Header"},{name:"loading",type:"boolean"},{name:"active",type:"boolean"},{name:"initialCollapsed",type:"boolean",defaultValue:!0},{name:"loadingText",type:"text",defaultValue:"Updating records"},{name:"errorText",type:"text",defaultValue:"Last action failed"}];function a(e){let{children:n,totalItems:t,...i}=e;return(0,o.jsx)(r.Box,{children:(0,o.jsx)(r.CardStack,{totalItems:5,completedItems:2,...i,children:Array.from({length:5}).map((e,n)=>(0,o.jsxs)(r.Box,{as:"p",children:["This could be a section ",n+1," element"],...(0,l.sx)("s1uqymsw",{})},n))}),...(0,l.sx)("stcd7db",{})})}function d(e){let{activeIndex:n=0,indexes:t,onClick:i}=e;return(0,o.jsxs)(r.Accordion,{children:[(0,o.jsx)(r.AccordionItem,{title:"Title 1",subTitle:"Sub-title1",active:t[0]===n,onToggle:()=>i&&i(t[0]),defaultExpanded:t[0]===n,titleFooter:"Footer text1",leadingExpandSection:(0,o.jsx)(r.Chip,{color:"success",size:"small",children:"Success"}),children:(0,o.jsxs)(r.Box,{children:[(0,o.jsx)(r.Chip,{size:"small",children:"Option 1"}),(0,o.jsx)(r.Chip,{size:"small",children:"Option 2"}),(0,o.jsx)(r.Chip,{size:"small",children:"Option 3"})],...(0,l.sx)("s1cqlft4",{})})}),(0,o.jsx)(r.AccordionItem,{title:"Title 2",subTitle:"Sub-title2",titleFooter:"Footer text2",active:t[1]===n,onToggle:()=>i&&i(t[1]),defaultExpanded:t[1]===n,children:(0,o.jsx)(r.Box,{children:"This is the content of the second section",...(0,l.sx)("s1y0ehg6",{})})}),(0,o.jsx)(r.AccordionItem,{title:"Title 3",subTitle:"Sub-title3",titleFooter:"Footer text3",active:t[2]===n,onToggle:()=>i&&i(t[2]),defaultExpanded:t[2]===n,children:"This is the content of section 3."})]})}let u={component:a,centered:!0,maxWidth:440,code:c,propDefs:s.filter(e=>!["loadingText","errorText"].includes(e.name))},m={component:a,centered:!0,maxWidth:440,code:c,propDefs:s.filter(e=>["title","loadingText","loading"].includes(e.name))},p={component:a,centered:!0,maxWidth:440,code:c,propDefs:s.filter(e=>["title","errorText"].includes(e.name))},x={component:function(e){let{children:n,totalItems:t,...i}=e;return(0,o.jsx)(r.Box,{children:(0,o.jsx)(r.CardStack,{totalItems:5,completedItems:2,...i,children:(0,o.jsx)(d,{indexes:[0,1,2]})}),...(0,l.sx)("sf1638c",{})})},centered:!0,maxWidth:440,code:"\nimport { Accordion, AccordionItem, Box, CardStack, Chip } from '@arctic-kit/snow';\n\nfunction AccordionChild({\n  activeIndex = 0,\n  indexes,\n  onClick,\n}: {\n  activeIndex?: number;\n  indexes: number[];\n  onClick?: (index: number) => void;\n}) {\n  return (\n    <Accordion>\n      <AccordionItem\n        title='Title 1'\n        subTitle='Sub-title1'\n        active={indexes[0] === activeIndex}\n        onToggle={() => onClick && onClick(indexes[0])}\n        defaultExpanded={indexes[0] === activeIndex}\n        titleFooter='Footer text1'\n        leadingExpandSection={\n          <Chip color='success' size='small'>\n            Success\n          </Chip>\n        }\n      >\n        <Box\n          sx={{\n            display: 'flex',\n            alignItems: 'center',\n            flexWrap: 'wrap',\n            gap: 4,\n          }}\n        >\n          <Chip size='small'>Option 1</Chip>\n          <Chip size='small'>Option 2</Chip>\n          <Chip size='small'>Option 3</Chip>\n        </Box>\n      </AccordionItem>\n      <AccordionItem\n        title='Title 2'\n        subTitle='Sub-title2'\n        titleFooter='Footer text2'\n        active={indexes[1] === activeIndex}\n        onToggle={() => onClick && onClick(indexes[1])}\n        defaultExpanded={indexes[1] === activeIndex}\n      >\n        <Box\n          sx={{\n            padding: 12,\n          }}\n        >\n          This is the content of the second section\n        </Box>\n      </AccordionItem>\n      <AccordionItem\n        title='Title 3'\n        subTitle='Sub-title3'\n        titleFooter='Footer text3'\n        active={indexes[2] === activeIndex}\n        onToggle={() => onClick && onClick(indexes[2])}\n        defaultExpanded={indexes[2] === activeIndex}\n      >\n        This is the content of section 3.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n\nfunction Demo() {\n  return (\n    <Box sx={{ width: '100%' }}>\n      <CardStack totalItems={5} completedItems={2} {{props}}>\n        <AccordionChild indexes={[0, 1, 2]} />\n      </CardStack>\n    </Box>\n  );\n}\n",propDefs:s.filter(e=>!["loadingText","errorText"].includes(e.name))};function h(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.l,{code:u.code,component:u.component,propDefs:u.propDefs}),(0,o.jsx)(i.l,{code:p.code,component:p.component,propDefs:p.propDefs,title:"With Error text"}),(0,o.jsx)(i.l,{code:m.code,component:m.component,propDefs:m.propDefs,title:"With Loading text"}),(0,o.jsx)(i.l,{code:x.code,component:x.component,propDefs:x.propDefs,title:"With Accordion children"})]})}},3913:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var o=t(7437),i=t(9628),l=t(2369),r=t.n(l),c=t(2265);function s(e){let{onClick:n,timeout:t=3e3,ariaLabel:l="Copy code"}=e,[s,a]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e;return s&&(e=setTimeout(()=>{a(!1)},t)),()=>{e&&clearTimeout(e)}},[s,t]);let d=(0,c.useCallback)(()=>{a(!0),n()},[n]);return(0,o.jsxs)("button",{type:"button","aria-label":l,onClick:d,className:"".concat(r().actionButton," ").concat(s?r().clicked:""),disabled:s,children:[(0,o.jsx)(i.ClipboardDocumentIcon,{className:r().clipboardIcon}),(0,o.jsx)(i.CheckIcon,{className:r().checkIcon})]})}},7937:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var o=t(7437),i=t(2265),l=t(9161),r=t.n(l),c=t(9628),s=t(3913),a=t(9943);let d=e=>{let{children:n,language:t="tsx",title:l,render:d,showLineNumbers:u=!1}=e,[m,p]=(0,i.useState)(!1),x=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:r().wrapper,children:[(0,o.jsx)("section",{className:r().header,children:(0,o.jsx)("div",{className:r().fullWidth,children:(0,o.jsxs)("div",{className:r().headerContent,children:[l&&(0,o.jsxs)("div",{className:r().titleHeader,children:[(0,o.jsx)("div",{className:r().title,children:l}),(0,o.jsx)("div",{className:r().action,children:(0,o.jsx)(s.K,{onClick:()=>x(n.trim())})})]}),d]})})}),(0,o.jsx)("section",{className:"".concat(r().content),children:(0,o.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{p(e=>!e)},children:[(0,o.jsx)(c.ChevronRightIcon,{className:"".concat(m?r().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,o.jsx)(a.CodeBlockSection,{onCopy:x,language:t,showLineNumbers:u,visible:m,children:n})]})}},9943:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return a}});var o=t(7437),i=t(7807),l=t(3913),r=t(2271),c=t.n(r),s=t(8224);function a(e){let{children:n,language:t="js",showLineNumbers:r,onCopy:a,visible:d=!0}=e,u=e=>{a?a(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,s.Z)(c().codeBlock,{[c().visible]:d}),children:[(0,o.jsx)(i.y$,{code:n.trim(),language:t,theme:i.np.dracula,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:i}=e;return(0,o.jsx)("pre",{className:c().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[r&&(0,o.jsx)("span",{className:c().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...i({token:e})},n))]},n))})}}),(0,o.jsx)(l.K,{onClick:()=>u(n.trim())})]})}},7966:function(e,n,t){"use strict";t.d(n,{PropsReference:function(){return s}});var o=t(7437),i=t(7245),l=t.n(i),r=t(9628),c=t(8124);function s(e){let{componentDoc:n}=e,t=null==n?void 0:n.props;if(!t||0===Object.keys(t).length)return null;let i=Object.entries(t).sort((e,n)=>{let[t]=e,[o]=n;return t.toLowerCase().localeCompare(o.toLowerCase())});return(0,o.jsx)("div",{className:l().tableContainer,children:(0,o.jsxs)(c.Table.Root,{children:[(0,o.jsx)(c.Table.Header,{children:(0,o.jsxs)(c.Table.Row,{children:[(0,o.jsx)(c.Table.ColumnHeaderCell,{children:"Props"}),(0,o.jsx)(c.Table.ColumnHeaderCell,{children:"Type"}),(0,o.jsx)(c.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,o.jsx)(c.Table.Body,{children:i.map((e,n)=>{var t,i,s;let[a,d]=e,u=null==d?void 0:d.type,m=(null==u?void 0:u.name)==="enum",p=m&&(null==u?void 0:null===(t=u.value)||void 0===t?void 0:t.map(e=>e.value).filter(e=>"undefined"!==e))||[],x=m?null==u?void 0:null===(i=u.raw)||void 0===i?void 0:i.replace(" | undefined",""):null==u?void 0:u.name,h=m&&p.length>0&&(null==x?void 0:x.split(" | ").length)===1,C=(null==d?void 0:null===(s=d.defaultValue)||void 0===s?void 0:s.value)||"---";return(0,o.jsxs)(c.Table.Row,{children:[(0,o.jsx)(c.Table.Cell,{children:(0,o.jsx)("code",{children:a})}),(0,o.jsx)(c.Table.Cell,{children:(0,o.jsxs)("code",{className:l().tableCellData,children:[x||"",h&&(0,o.jsx)(c.Tooltip,{message:p.join(", "),children:(0,o.jsx)("span",{className:l().iconContainer,children:(0,o.jsx)(r.InformationCircleIcon,{className:l().icon})})})]})}),(0,o.jsx)(c.Table.Cell,{children:"---"!==C&&(0,o.jsx)("code",{children:C})})]},"".concat(a,"-").concat(n))})})]})})}},7665:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var o=t(7437),i=t(2265),l=t(7937);t(9943);var r=t(9351),c=t.n(r),s=t(8124);function a(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:l,value:r,values:c}=e,d=(0,i.useMemo)(()=>a(n),[n]);if("boolean"===t)return(0,o.jsx)(s.Switch,{id:n,label:d,checked:r,onToggle:()=>l(!r)});if("ddl"===t)return(0,o.jsx)(s.Select,{label:d,id:n,value:r?a(r):"",options:null==c?void 0:c.map(e=>({label:a(e),value:e})),onChange:e=>l(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(s.TextInput,{type:t,label:d,value:r,onChange:e=>l(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(s.SegmentedControl,{initialSelectedIndex:null!==(u=null==c?void 0:c.findIndex(e=>e===r))&&void 0!==u?u:-1,label:d,children:null==c?void 0:c.map(e=>(0,o.jsx)(s.SegmentedControlButton,{onClick:()=>l(e),children:a(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:l,propDefs:r}=e,[s,a]=(0,i.useState)(t);return(0,i.useEffect)(()=>{t&&Object.keys(t).length>0&&a({...t})},[t]),(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsx)("div",{className:c().codeContainer,children:n}),r.length>0&&(0,o.jsx)("div",{className:c().propsContainer,children:r.map(e=>(0,o.jsx)(d,{onChange:n=>l(e.name,n),...e,value:s[e.name]},e.name))})]})}function m(e){let{code:n,component:t,propDefs:r,title:s="Usage",separator:a="="}=e,[d,m]=(0,i.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(r)}),p=Object.entries(d).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(a,'"').concat(t,'"'):"boolean"==typeof t?t?":"===a?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===a?", \n	  ":" "),x=n.replace("{{props}}",p).replace("{{children}}",d.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:c().usageContentTitle,children:s}),(0,o.jsx)(l.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>m(t=>({...t,[e]:n})),values:d,propDefs:r,children:(0,o.jsx)(t,{...d})}),children:x})]})}}},function(e){e.O(0,[9998,6760,959,2925,1947,5501,5561,7512,3799,7807,7720,8265,2971,9033,1744],function(){return e(e.s=2451)}),_N_E=e.O()}]);