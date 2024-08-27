(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2995],{8473:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,2970)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},4948:function(){},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},2970:function(e,n,t){"use strict";t.d(n,{default:function(){return d}});var l=t(7437),a=t(3356),o=t(529),c=t(8320),s=t(2265);t(4948);let i=function(e){let[n,t]=(0,s.useState)(0);return(0,l.jsxs)(c.Box,{children:[(0,l.jsxs)(c.Tabs,{...e,children:[(0,l.jsx)(c.Tab,{label:"Drafts",selectedTabIndex:n,index:0,onClick:t}),(0,l.jsx)(c.Tab,{label:"In Progress",selectedTabIndex:n,index:1,onClick:t}),(0,l.jsx)(c.Tab,{label:"In Review",selectedTabIndex:n,index:2,onClick:t}),(0,l.jsx)(c.Tab,{label:"On Hold",selectedTabIndex:n,index:3,onClick:t}),(0,l.jsx)(c.Tab,{label:"Complete",selectedTabIndex:n,index:4,onClick:t})]}),(0,l.jsxs)(c.TabPanels,{children:[(0,l.jsx)(c.TabPanel,{label:"Tab3",selected:2===n,children:"Content for Tab3"}),(0,l.jsx)(c.TabPanel,{label:"Tab1",selected:0===n,children:"Content for Tab1"}),(0,l.jsx)(c.TabPanel,{label:"Tab2",selected:1===n,children:"Content for Tab2"}),(0,l.jsx)(c.TabPanel,{label:"Tab4",selected:3===n,children:"Content for Tab4"}),(0,l.jsx)(c.TabPanel,{label:"Tab5",selected:4===n,children:"Content for Tab5"})]})],...(0,o.sx)("s1locm8y",{})})},r=[{name:"color",type:"ddl",values:["primary","secondary","success","error","warning","info"],defaultValue:"primary"},{name:"fullWidth",type:"boolean",defaultValue:!1}];function d(){return(0,l.jsx)(a.l,{code:"\nimport { useState } from 'react';\nimport {\n  Box,\n  Tab,\n  TabPanel,\n  TabPanels,\n  Tabs,\n  TabsProps,\n} from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [selectedTab, setSelectedTab] = useState(0);\n\n  return (\n    <Box sx={{ marginBottom: 20, width: '100%', overflowX: 'auto' }}>\n      <Tabs {{props}}>\n        <Tab\n          label='Drafts'\n          selectedTabIndex={selectedTab}\n          index={0}\n          onClick={setSelectedTab}\n        />\n        <Tab\n          label='In Progress'\n          selectedTabIndex={selectedTab}\n          index={1}\n          onClick={setSelectedTab}\n        />\n        <Tab\n          label='Ready for Review'\n          selectedTabIndex={selectedTab}\n          index={2}\n          onClick={setSelectedTab}\n        />\n        <Tab\n          label='On Hold'\n          selectedTabIndex={selectedTab}\n          index={3}\n          onClick={setSelectedTab}\n        />\n        <Tab\n          label='Complete'\n          selectedTabIndex={selectedTab}\n          index={4}\n          onClick={setSelectedTab}\n        />\n      </Tabs>\n      <TabPanels>\n        <TabPanel label='Tab3' selected={selectedTab === 2}>\n          Content for Tab3\n        </TabPanel>\n        <TabPanel label='Tab1' selected={selectedTab === 0}>\n          Content for Tab1\n        </TabPanel>\n        <TabPanel label='Tab2' selected={selectedTab === 1}>\n          Content for Tab2\n        </TabPanel>\n        <TabPanel label='Tab4' selected={selectedTab === 3}>\n          Content for Tab4\n        </TabPanel>\n        <TabPanel label='Tab5' selected={selectedTab === 4}>\n          Content for Tab5\n        </TabPanel>\n      </TabPanels>\n    </Box>\n  );\n}\n",component:i,propDefs:r})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var l=t(7437),a=t(4740),o=t(6128),c=t.n(o);function s(e){let{onClick:n}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{"aria-label":"Copy code",onClick:n,className:c().actionButton,children:(0,l.jsx)(a.Z,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var l=t(7437),a=t(2265),o=t(1322),c=t.n(o),s=t(6953),i=t(4772),r=t(8404);let d=e=>{let{children:n,language:t="tsx",title:o,render:d,showLineNumbers:b=!1}=e,[u,T]=(0,a.useState)(!1),_=e=>{navigator.clipboard.writeText(e)};return(0,l.jsxs)("div",{className:c().wrapper,children:[(0,l.jsx)("section",{className:c().header,children:(0,l.jsx)("div",{className:c().fullWidth,children:(0,l.jsxs)("div",{className:c().headerContent,children:[o&&(0,l.jsxs)("div",{className:c().titleHeader,children:[(0,l.jsx)("div",{className:c().title,children:o}),(0,l.jsx)("div",{className:c().action,children:(0,l.jsx)(i.K,{onClick:()=>_(n.trim())})})]}),d]})})}),(0,l.jsx)("section",{className:"".concat(c().content),children:(0,l.jsxs)("button",{className:"".concat(c().fullWidth),onClick:()=>{T(e=>!e)},children:[(0,l.jsx)(s.Z,{className:"".concat(u?c().rotate:"")}),u?"Hide Code":"Show Code"]})}),(0,l.jsx)(r.CodeBlockSection,{onCopy:_,language:t,showLineNumbers:b,visible:u,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return r}});var l=t(7437),a=t(5291),o=t(4772),c=t(7951),s=t.n(c),i=t(3058);function r(e){let{children:n,language:t="js",showLineNumbers:c,onCopy:r,visible:d=!0}=e,b=e=>{r?r(e):navigator.clipboard.writeText(e)};return(0,l.jsxs)("section",{className:(0,i.Z)(s().codeBlock,{[s().visible]:d}),children:[(0,l.jsx)(a.y$,{code:n.trim(),language:t,theme:a.np.oneLight,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:a}=e;return(0,l.jsx)("pre",{className:s().container,children:n.map((e,n)=>(0,l.jsxs)("div",{...t({line:e}),children:[c&&(0,l.jsx)("span",{className:s().lineNumber,children:n+1}),e.map((e,n)=>(0,l.jsx)("span",{...a({token:e})},n))]},n))})}}),(0,l.jsx)(o.K,{onClick:()=>b(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return u}});var l=t(7437),a=t(2265),o=t(1938);t(8404);var c=t(9924),s=t.n(c),i=t(8320);function r(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:o,value:c,values:s}=e,d=(0,a.useMemo)(()=>r(n),[n]);if("boolean"===t)return(0,l.jsx)(i.Switch,{id:n,label:d,checked:c,onToggle:()=>o(!c)});if("ddl"===t)return(0,l.jsx)(i.Select,{label:d,id:n,value:c?r(c):"",options:null==s?void 0:s.map(e=>({label:r(e),value:e})),onChange:e=>o(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,l.jsx)(i.TextInput,{type:t,label:d,value:c,onChange:e=>o(e.target.value)});if("segment"===t){var b;return(0,l.jsx)(i.SegmentedControl,{initialSelectedIndex:null!==(b=null==s?void 0:s.findIndex(e=>e===c))&&void 0!==b?b:-1,label:d,children:null==s?void 0:s.map(e=>(0,l.jsx)(i.SegmentedControlButton,{onClick:()=>o(e),children:r(e)},e))})}return null}function b(e){let{children:n,values:t={},onChange:o,propDefs:c}=e,[i,r]=(0,a.useState)(t);return(0,a.useEffect)(()=>{t&&Object.keys(t).length>0&&r({...t})},[t]),(0,l.jsxs)("div",{className:s().container,children:[(0,l.jsx)("div",{className:s().codeContainer,children:n}),c.length>0&&(0,l.jsx)("div",{className:s().propsContainer,children:c.map(e=>(0,l.jsx)(d,{onChange:n=>o(e.name,n),...e,value:i[e.name]},e.name))})]})}function u(e){let{code:n,component:t,propDefs:c,title:i="Usage"}=e,[r,d]=(0,a.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(c)}),u=Object.entries(r).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n,'="').concat(t,'"'):"boolean"==typeof t?t?n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(" "),T=n.replace("{{props}}",u).replace("{{children}}",r.children);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:s().usageContentTitle,children:i}),(0,l.jsx)(o.CodeBlock,{render:(0,l.jsx)(b,{onChange:(e,n)=>d(t=>({...t,[e]:n})),values:r,propDefs:c,children:(0,l.jsx)(t,{...r})}),children:T})]})}}},function(e){e.O(0,[4383,7757,9685,5501,3808,7904,5845,5746,2971,7379,1744],function(){return e(e.s=8473)}),_N_E=e.O()}]);