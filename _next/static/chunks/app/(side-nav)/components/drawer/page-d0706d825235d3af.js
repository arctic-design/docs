(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7752],{2047:function(e,n,t){Promise.resolve().then(t.t.bind(t,5746,23)),Promise.resolve().then(t.t.bind(t,3808,23)),Promise.resolve().then(t.bind(t,9808)),Promise.resolve().then(t.t.bind(t,2997,23)),Promise.resolve().then(t.t.bind(t,8555,23)),Promise.resolve().then(t.t.bind(t,9924,23))},185:function(){},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},2997:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},9808:function(e,n,t){"use strict";t.d(n,{default:function(){return d}});var o=t(7437),l=t(3356),r=t(529),a=t(9631),i=t(2265);t(185);let c=function(e){let[n,t]=(0,i.useState)(!1),l=()=>{t(!n)};return(0,o.jsxs)(a.Box,{children:[(0,o.jsx)(a.Button,{onClick:l,children:"Toggle Drawer"}),(0,o.jsx)(a.Drawer,{...e,open:n,onOpenChange:l,onCancel:l,onAction:l,onClose:l,children:(0,o.jsx)(a.Grid,{spacing:1,children:(0,o.jsxs)(a.GridRow,{children:[(0,o.jsx)(a.GridColumn,{xs:12,lg:6,children:(0,o.jsxs)(a.SegmentedControl,{children:[(0,o.jsx)(a.SegmentedControlButton,{children:"React"}),(0,o.jsx)(a.SegmentedControlButton,{children:"Angular"}),(0,o.jsx)(a.SegmentedControlButton,{children:"Vue"})]})}),(0,o.jsx)(a.GridColumn,{xs:12,lg:6,children:(0,o.jsx)(a.TextInput,{label:"First name"})}),(0,o.jsx)(a.GridColumn,{xs:12,lg:6,children:(0,o.jsx)(a.TextInput,{label:"Second name"})}),(0,o.jsx)(a.GridColumn,{xs:12,lg:6,children:(0,o.jsx)(a.Select,{label:"Fruit",options:["Apple","Banana","Orange","Mango","Pineapple","Grapes","Strawberry","Watermelon","Kiwi","Peach","Plum"],placeholder:"Select a fruit"})}),(0,o.jsx)(a.GridColumn,{xs:12,lg:6,children:(0,o.jsx)(a.Autocomplete,{label:"Car",options:["Audi","BMW","Chevrolet","Dodge"],placeholder:"Select a car"})})]})})})],...(0,r.sx)("s16ae0ft",{})})},s=[{name:"title",type:"text",defaultValue:"Drawer Title"},{name:"titleFooter",type:"text",defaultValue:"Title Footer section"},{name:"position",type:"segment",values:["left","right","top","bottom"],defaultValue:"left"},{name:"size",type:"ddl",values:["small","medium","large","extraSmall","fullWidth"],defaultValue:"medium"},{name:"cancelLabel",type:"text",defaultValue:"Cancel"},{name:"actionLabel",type:"text",defaultValue:"Save"},{name:"actionSize",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"hideHeader",type:"boolean",defaultValue:!1},{name:"hideFooter",type:"boolean",defaultValue:!1},{name:"disableOutsidePressAndEscape",type:"boolean",defaultValue:!1},{name:"loading",type:"boolean",defaultValue:!1}];function d(){return(0,o.jsx)(l.l,{code:"\nimport { useState } from 'react';\nimport {\n  Autocomplete,\n  Box,\n  Button,\n  Drawer,\n  DrawerProps,\n  Grid,\n  GridColumn,\n  GridRow,\n  SegmentedControl,\n  SegmentedControlButton,\n  Select,\n  TextInput,\n} from '@arctic-kit/snow';\n\nfunction Demo() {\n  const [isDrawerOpen, setDrawerOpen] = useState(false);\n  const toggleDrawer = () => {\n    setDrawerOpen(!isDrawerOpen);\n  };\n  return (\n    <Box sx={{ display: 'flex' }}>\n      <Button onClick={toggleDrawer}>Toggle Drawer</Button>\n      <Drawer\n        {{props}}\n        open={isDrawerOpen}\n        onOpenChange={toggleDrawer}\n        onCancel={toggleDrawer}\n        onAction={toggleDrawer}\n        onClose={toggleDrawer}\n      >\n        <Grid spacing={1}>\n          <GridRow>\n            <GridColumn xs={12} lg={6}>\n              <SegmentedControl>\n                <SegmentedControlButton>React</SegmentedControlButton>\n                <SegmentedControlButton>Angular</SegmentedControlButton>\n                <SegmentedControlButton>Vue</SegmentedControlButton>\n              </SegmentedControl>\n            </GridColumn>\n            <GridColumn xs={12} lg={6}>\n              <TextInput label='First name' />\n            </GridColumn>\n            <GridColumn xs={12} lg={6}>\n              <TextInput label='Second name' />\n            </GridColumn>\n            <GridColumn xs={12} lg={6}>\n              <Select\n                label='Fruit'\n                options={[\n                  'Apple',\n                  'Banana',\n                  'Orange',\n                  'Mango',\n                  'Pineapple',\n                  'Grapes',\n                  'Strawberry',\n                  'Watermelon',\n                  'Kiwi',\n                  'Peach',\n                  'Plum',\n                ]}\n                placeholder='Select a fruit'\n              />\n            </GridColumn>\n            <GridColumn xs={12} lg={6}>\n              <Autocomplete\n                label='Car'\n                options={['Audi', 'BMW', 'Chevrolet', 'Dodge']}\n                placeholder='Select a car'\n              />\n            </GridColumn>\n          </GridRow>\n        </Grid>\n      </Drawer>\n    </Box>\n  );\n}\n",component:c,propDefs:s})}},4772:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var o=t(7437),l=t(976),r=t(6128),a=t.n(r);function i(e){let{onClick:n}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("button",{"aria-label":"Copy code",onClick:n,className:a().actionButton,children:(0,o.jsx)(l.ClipboardDocumentIcon,{})})})}},1938:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var o=t(7437),l=t(2265),r=t(1322),a=t.n(r),i=t(976),c=t(4772),s=t(8404);let d=e=>{let{children:n,language:t="tsx",title:r,render:d,showLineNumbers:u=!1}=e,[m,p]=(0,l.useState)(!1),C=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:a().wrapper,children:[(0,o.jsx)("section",{className:a().header,children:(0,o.jsx)("div",{className:a().fullWidth,children:(0,o.jsxs)("div",{className:a().headerContent,children:[r&&(0,o.jsxs)("div",{className:a().titleHeader,children:[(0,o.jsx)("div",{className:a().title,children:r}),(0,o.jsx)("div",{className:a().action,children:(0,o.jsx)(c.K,{onClick:()=>C(n.trim())})})]}),d]})})}),(0,o.jsx)("section",{className:"".concat(a().content),children:(0,o.jsxs)("button",{className:"".concat(a().fullWidth),onClick:()=>{p(e=>!e)},children:[(0,o.jsx)(i.ChevronRightIcon,{className:"".concat(m?a().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,o.jsx)(s.CodeBlockSection,{onCopy:C,language:t,showLineNumbers:u,visible:m,children:n})]})}},8404:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return s}});var o=t(7437),l=t(5291),r=t(4772),a=t(7951),i=t.n(a),c=t(3058);function s(e){let{children:n,language:t="js",showLineNumbers:a,onCopy:s,visible:d=!0}=e,u=e=>{s?s(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,c.Z)(i().codeBlock,{[i().visible]:d}),children:[(0,o.jsx)(l.y$,{code:n.trim(),language:t,theme:l.np.oneDark,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:l}=e;return(0,o.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[a&&(0,o.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,o.jsx)(r.K,{onClick:()=>u(n.trim())})]})}},3356:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var o=t(7437),l=t(2265),r=t(1938);t(8404);var a=t(9924),i=t.n(a),c=t(9631);function s(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:r,value:a,values:i}=e,d=(0,l.useMemo)(()=>s(n),[n]);if("boolean"===t)return(0,o.jsx)(c.Switch,{id:n,label:d,checked:a,onToggle:()=>r(!a)});if("ddl"===t)return(0,o.jsx)(c.Select,{label:d,id:n,value:a?s(a):"",options:null==i?void 0:i.map(e=>({label:s(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(c.TextInput,{type:t,label:d,value:a,onChange:e=>r(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(c.SegmentedControl,{initialSelectedIndex:null!==(u=null==i?void 0:i.findIndex(e=>e===a))&&void 0!==u?u:-1,label:d,children:null==i?void 0:i.map(e=>(0,o.jsx)(c.SegmentedControlButton,{onClick:()=>r(e),children:s(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:r,propDefs:a}=e,[c,s]=(0,l.useState)(t);return(0,l.useEffect)(()=>{t&&Object.keys(t).length>0&&s({...t})},[t]),(0,o.jsxs)("div",{className:i().container,children:[(0,o.jsx)("div",{className:i().codeContainer,children:n}),a.length>0&&(0,o.jsx)("div",{className:i().propsContainer,children:a.map(e=>(0,o.jsx)(d,{onChange:n=>r(e.name,n),...e,value:c[e.name]},e.name))})]})}function m(e){let{code:n,component:t,propDefs:a,title:c="Usage",separator:s="="}=e,[d,m]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(a)}),p=Object.entries(d).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(s,'"').concat(t,'"'):"boolean"==typeof t?t?":"===s?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===s?", \n	  ":" "),C=n.replace("{{props}}",p).replace("{{children}}",d.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:i().usageContentTitle,children:c}),(0,o.jsx)(r.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>m(t=>({...t,[e]:n})),values:d,propDefs:a,children:(0,o.jsx)(t,{...d})}),children:C})]})}}},function(e){e.O(0,[4383,2811,3698,5501,1947,8843,3808,5291,5746,2971,7379,1744],function(){return e(e.s=2047)}),_N_E=e.O()}]);