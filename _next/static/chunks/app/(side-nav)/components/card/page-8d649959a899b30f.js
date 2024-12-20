(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4704],{4959:function(e,n,t){Promise.resolve().then(t.bind(t,263)),Promise.resolve().then(t.bind(t,3870)),Promise.resolve().then(t.bind(t,8518)),Promise.resolve().then(t.bind(t,334)),Promise.resolve().then(t.bind(t,7605)),Promise.resolve().then(t.bind(t,2180)),Promise.resolve().then(t.bind(t,3337)),Promise.resolve().then(t.bind(t,4480)),Promise.resolve().then(t.bind(t,664)),Promise.resolve().then(t.bind(t,2634)),Promise.resolve().then(t.bind(t,458)),Promise.resolve().then(t.bind(t,8587)),Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.bind(t,8769)),Promise.resolve().then(t.bind(t,3220)),Promise.resolve().then(t.bind(t,3224)),Promise.resolve().then(t.bind(t,1702)),Promise.resolve().then(t.bind(t,24)),Promise.resolve().then(t.bind(t,2286)),Promise.resolve().then(t.bind(t,9519)),Promise.resolve().then(t.bind(t,448)),Promise.resolve().then(t.bind(t,8025)),Promise.resolve().then(t.bind(t,7363)),Promise.resolve().then(t.bind(t,8263)),Promise.resolve().then(t.bind(t,4289)),Promise.resolve().then(t.bind(t,5658)),Promise.resolve().then(t.bind(t,1222)),Promise.resolve().then(t.bind(t,1802)),Promise.resolve().then(t.bind(t,1869)),Promise.resolve().then(t.t.bind(t,9831,23)),Promise.resolve().then(t.bind(t,7966)),Promise.resolve().then(t.t.bind(t,1864,23)),Promise.resolve().then(t.t.bind(t,9351,23))},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa",clipboardIcon:"ActionButton_clipboardIcon__7Xyab",checkIcon:"ActionButton_checkIcon___lxZd",clicked:"ActionButton_clicked__WNQPb"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},9831:function(e){e.exports={container:"ComponentMeta_container__ODDfV",title:"ComponentMeta_title__owmzG",subTitle:"ComponentMeta_subTitle__dtdOU",meta:"ComponentMeta_meta__UApf7",row:"ComponentMeta_row__NeTUR",usageContent:"ComponentMeta_usageContent__3mx5c",usageContentTitle:"ComponentMeta_usageContentTitle__Sl88T"}},7245:function(e){e.exports={tableContainer:"Table_tableContainer__1C8T3",tableCellData:"Table_tableCellData__ijX_T",iconContainer:"Table_iconContainer__Xe5F7",icon:"Table_icon__IPD_V"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},3220:function(e,n,t){"use strict";t.d(n,{default:function(){return c}});var o=t(7437),l=t(7665),r=t(263);let a=[{value:"conference",label:"Conference"},{value:"workshop",label:"Workshop"},{value:"webinar",label:"Webinar"},{value:"meetup",label:"Meetup"}],i=function(e){let{children:n,size:t="small",...l}=e;return(0,o.jsxs)(r.Card,{size:t,...l,children:[(0,o.jsxs)(r.CardHeader,{children:[(0,o.jsx)(r.CardTitle,{children:"Create New Event"}),(0,o.jsx)(r.CardDescription,{children:"Organize and manage your upcoming events effortlessly."})]}),(0,o.jsx)(r.CardContent,{children:(0,o.jsxs)(r.Stack,{spacing:3,children:[(0,o.jsx)(r.TextInput,{id:"event-name",label:"Event Name",placeholder:"Enter the name of your event"}),(0,o.jsx)(r.Select,{label:"Category",id:"category",options:a,placeholder:"Select a category"}),(0,o.jsx)(r.DatePicker,{id:"event-date",label:"Date",placeholder:"Select event date"})]})}),(0,o.jsx)(r.CardFooter,{className:"flex justify-between",children:(0,o.jsxs)(r.Stack,{direction:"horizontal",spacing:3,justifyBetween:!0,children:[(0,o.jsx)(r.Button,{variant:"outlined",children:"Reset"}),(0,o.jsx)(r.Button,{children:"Save Event"})]})})]})},s=[{name:"size",type:"segment",values:["small","medium","large"],defaultValue:"medium"},{name:"variant",type:"segment",values:["elevation","outlined"],defaultValue:"outlined"},{name:"square",type:"boolean",defaultValue:!1}];function c(){return(0,o.jsx)(l.l,{code:"\nimport {\n  Button,\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardProps,\n  CardTitle,\n  DatePicker,\n  Select,\n  Stack,\n  TextInput,\n} from '@arctic-kit/snow';\n\nconst selectOptions = [\n  { value: 'conference', label: 'Conference' },\n  { value: 'workshop', label: 'Workshop' },\n  { value: 'webinar', label: 'Webinar' },\n  { value: 'meetup', label: 'Meetup' },\n];\n\nfunction Demo() {\n  return (\n    <Card {{props}} sx={{ minWidth: 350 }}>\n      <CardHeader>\n        <CardTitle>Create New Event</CardTitle>\n        <CardDescription>\n          Organize and manage your upcoming events effortlessly.\n        </CardDescription>\n      </CardHeader>\n      <CardContent>\n        <Stack spacing={3}>\n          <TextInput\n            id='event-name'\n            label='Event Name'\n            placeholder='Enter the name of your event'\n          />\n          <Select\n            label='Category'\n            id='category'\n            options={selectOptions}\n            placeholder='Select a category'\n          />\n          <DatePicker\n            id='event-date'\n            label='Date'\n            placeholder='Select event date'\n          />\n        </Stack>\n      </CardContent>\n      <CardFooter className='flex justify-between'>\n        <Stack direction='horizontal' spacing={3} justifyBetween>\n          <Button variant='outlined'>Reset</Button>\n          <Button>Save Event</Button>\n        </Stack>\n      </CardFooter>\n    </Card>\n  );\n}\n",component:i,propDefs:s})}},3913:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var o=t(7437),l=t(9628),r=t(2369),a=t.n(r),i=t(2265);function s(e){let{onClick:n,timeout:t=3e3,ariaLabel:r="Copy code"}=e,[s,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e;return s&&(e=setTimeout(()=>{c(!1)},t)),()=>{e&&clearTimeout(e)}},[s,t]);let d=(0,i.useCallback)(()=>{c(!0),n()},[n]);return(0,o.jsxs)("button",{type:"button","aria-label":r,onClick:d,className:"".concat(a().actionButton," ").concat(s?a().clicked:""),disabled:s,children:[(0,o.jsx)(l.ClipboardDocumentIcon,{className:a().clipboardIcon}),(0,o.jsx)(l.CheckIcon,{className:a().checkIcon})]})}},7937:function(e,n,t){"use strict";t.d(n,{CodeBlock:function(){return d}});var o=t(7437),l=t(2265),r=t(9161),a=t.n(r),i=t(9628),s=t(3913),c=t(9943);let d=e=>{let{children:n,language:t="tsx",title:r,render:d,showLineNumbers:u=!1}=e,[m,h]=(0,l.useState)(!1),p=e=>{navigator.clipboard.writeText(e)};return(0,o.jsxs)("div",{className:a().wrapper,children:[(0,o.jsx)("section",{className:a().header,children:(0,o.jsx)("div",{className:a().fullWidth,children:(0,o.jsxs)("div",{className:a().headerContent,children:[r&&(0,o.jsxs)("div",{className:a().titleHeader,children:[(0,o.jsx)("div",{className:a().title,children:r}),(0,o.jsx)("div",{className:a().action,children:(0,o.jsx)(s.K,{onClick:()=>p(n.trim())})})]}),d]})})}),(0,o.jsx)("section",{className:"".concat(a().content),children:(0,o.jsxs)("button",{className:"".concat(a().fullWidth),onClick:()=>{h(e=>!e)},children:[(0,o.jsx)(i.ChevronRightIcon,{className:"".concat(m?a().rotate:"")}),m?"Hide Code":"Show Code"]})}),(0,o.jsx)(c.CodeBlockSection,{onCopy:p,language:t,showLineNumbers:u,visible:m,children:n})]})}},9943:function(e,n,t){"use strict";t.d(n,{CodeBlockSection:function(){return c}});var o=t(7437),l=t(7807),r=t(3913),a=t(2271),i=t.n(a),s=t(8224);function c(e){let{children:n,language:t="js",showLineNumbers:a,onCopy:c,visible:d=!0}=e,u=e=>{c?c(e):navigator.clipboard.writeText(e)};return(0,o.jsxs)("section",{className:(0,s.Z)(i().codeBlock,{[i().visible]:d}),children:[(0,o.jsx)(l.y$,{code:n.trim(),language:t,theme:l.np.dracula,children:e=>{let{tokens:n,getLineProps:t,getTokenProps:l}=e;return(0,o.jsx)("pre",{className:i().container,children:n.map((e,n)=>(0,o.jsxs)("div",{...t({line:e}),children:[a&&(0,o.jsx)("span",{className:i().lineNumber,children:n+1}),e.map((e,n)=>(0,o.jsx)("span",{...l({token:e})},n))]},n))})}}),(0,o.jsx)(r.K,{onClick:()=>u(n.trim())})]})}},7966:function(e,n,t){"use strict";t.d(n,{PropsReference:function(){return s}});var o=t(7437),l=t(7245),r=t.n(l),a=t(9628),i=t(263);function s(e){let{componentDoc:n}=e,t=null==n?void 0:n.props;if(!t||0===Object.keys(t).length)return null;let l=Object.entries(t).sort((e,n)=>{let[t]=e,[o]=n;return t.toLowerCase().localeCompare(o.toLowerCase())});return(0,o.jsx)("div",{className:r().tableContainer,children:(0,o.jsxs)(i.Table.Root,{children:[(0,o.jsx)(i.Table.Header,{children:(0,o.jsxs)(i.Table.Row,{children:[(0,o.jsx)(i.Table.ColumnHeaderCell,{children:"Props"}),(0,o.jsx)(i.Table.ColumnHeaderCell,{children:"Type"}),(0,o.jsx)(i.Table.ColumnHeaderCell,{children:"Default"})]})}),(0,o.jsx)(i.Table.Body,{children:l.map((e,n)=>{var t,l,s;let[c,d]=e,u=null==d?void 0:d.type,m=(null==u?void 0:u.name)==="enum",h=m&&(null==u?void 0:null===(t=u.value)||void 0===t?void 0:t.map(e=>e.value).filter(e=>"undefined"!==e))||[],p=m?null==u?void 0:null===(l=u.raw)||void 0===l?void 0:l.replace(" | undefined",""):null==u?void 0:u.name,C=m&&h.length>0&&(null==p?void 0:p.split(" | ").length)===1,v=(null==d?void 0:null===(s=d.defaultValue)||void 0===s?void 0:s.value)||"---";return(0,o.jsxs)(i.Table.Row,{children:[(0,o.jsx)(i.Table.Cell,{children:c}),(0,o.jsx)(i.Table.Cell,{children:(0,o.jsxs)("div",{className:r().tableCellData,children:[p||"",C&&(0,o.jsx)(i.Tooltip,{message:h.join(", "),children:(0,o.jsx)("span",{className:r().iconContainer,children:(0,o.jsx)(a.InformationCircleIcon,{className:r().icon})})})]})}),(0,o.jsx)(i.Table.Cell,{children:v})]},"".concat(c,"-").concat(n))})})]})})}},7665:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var o=t(7437),l=t(2265),r=t(7937);t(9943);var a=t(9351),i=t.n(a),s=t(263);function c(e){return e?e.replace(/([A-Z])/g," $1").replace(/\b\w/g,e=>e.toUpperCase()).trim():""}function d(e){let{name:n,type:t,onChange:r,value:a,values:i}=e,d=(0,l.useMemo)(()=>c(n),[n]);if("boolean"===t)return(0,o.jsx)(s.Switch,{id:n,label:d,checked:a,onToggle:()=>r(!a)});if("ddl"===t)return(0,o.jsx)(s.Select,{label:d,id:n,value:a?c(a):"",options:null==i?void 0:i.map(e=>({label:c(e),value:e})),onChange:e=>r(null==e?void 0:e.value)});if("text"===t||"number"===t)return(0,o.jsx)(s.TextInput,{type:t,label:d,value:a,onChange:e=>r(e.target.value)});if("segment"===t){var u;return(0,o.jsx)(s.SegmentedControl,{initialSelectedIndex:null!==(u=null==i?void 0:i.findIndex(e=>e===a))&&void 0!==u?u:-1,label:d,children:null==i?void 0:i.map(e=>(0,o.jsx)(s.SegmentedControlButton,{onClick:()=>r(e),children:c(e)},e))})}return null}function u(e){let{children:n,values:t={},onChange:r,propDefs:a}=e,[s,c]=(0,l.useState)(t);return(0,l.useEffect)(()=>{t&&Object.keys(t).length>0&&c({...t})},[t]),(0,o.jsxs)("div",{className:i().container,children:[(0,o.jsx)("div",{className:i().codeContainer,children:n}),a.length>0&&(0,o.jsx)("div",{className:i().propsContainer,children:a.map(e=>(0,o.jsx)(d,{onChange:n=>r(e.name,n),...e,value:s[e.name]},e.name))})]})}function m(e){let{code:n,component:t,propDefs:a,title:s="Usage",separator:c="="}=e,[d,m]=(0,l.useState)({...function(e){let n={};if(e.length>0)for(let t of e)t.defaultValue&&(n[t.name]=t.defaultValue||"boolean"!==t.type&&"");return n}(a)}),h=Object.entries(d).map(e=>{let[n,t]=e;return"children"===n?"":"string"==typeof t?"".concat(n).concat(c,'"').concat(t,'"'):"boolean"==typeof t?t?":"===c?"".concat(n,":true"):n:"":"number"==typeof t?"".concat(n,"={").concat(t,"}"):""}).filter(Boolean).join(":"===c?", \n	  ":" "),p=n.replace("{{props}}",h).replace("{{children}}",d.children);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:i().usageContentTitle,children:s}),(0,o.jsx)(r.CodeBlock,{render:(0,o.jsx)(u,{onChange:(e,n)=>m(t=>({...t,[e]:n})),values:d,propDefs:a,children:(0,o.jsx)(t,{...d})}),children:p})]})}}},function(e){e.O(0,[9998,6760,2925,1947,5501,3128,7512,3799,7807,7720,8265,2971,9033,1744],function(){return e(e.s=4959)}),_N_E=e.O()}]);