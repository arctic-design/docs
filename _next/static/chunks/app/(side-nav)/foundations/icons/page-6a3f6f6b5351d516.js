(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4090],{8275:function(e,t,n){Promise.resolve().then(n.bind(n,5085)),Promise.resolve().then(n.bind(n,3870)),Promise.resolve().then(n.bind(n,8518)),Promise.resolve().then(n.bind(n,334)),Promise.resolve().then(n.bind(n,7605)),Promise.resolve().then(n.bind(n,2180)),Promise.resolve().then(n.bind(n,3337)),Promise.resolve().then(n.bind(n,4480)),Promise.resolve().then(n.bind(n,664)),Promise.resolve().then(n.bind(n,2634)),Promise.resolve().then(n.bind(n,458)),Promise.resolve().then(n.bind(n,8587)),Promise.resolve().then(n.t.bind(n,6002,23)),Promise.resolve().then(n.t.bind(n,6344,23)),Promise.resolve().then(n.t.bind(n,4359,23)),Promise.resolve().then(n.bind(n,8370)),Promise.resolve().then(n.bind(n,7937)),Promise.resolve().then(n.bind(n,9943)),Promise.resolve().then(n.t.bind(n,7694,23)),Promise.resolve().then(n.t.bind(n,1864,23)),Promise.resolve().then(n.t.bind(n,9351,23))},3870:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(2265);function o(e){let{controlled:t,default:n,name:o,state:i="value"}=e,{current:s}=r.useRef(void 0!==t),[c,l]=r.useState(n),a=r.useCallback(e=>{s||l(e)},[]);return[s?t:c,a]}},8518:function(e,t,n){"use strict";var r=n(2265);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.default=o},334:function(e,t,n){"use strict";var r=n(2265),o=n(8518);t.default=function(e){let t=r.useRef(e);return(0,o.default)(()=>{t.current=e}),r.useRef(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)}).current}},7605:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(2265);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{"function"==typeof t?t(e):t&&(t.current=e)})},t)}},2180:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r,o=n(2265);let i=0,s={...r||(r=n.t(o,2))}.useId;function c(e){if(void 0!==s){let t=s();return null!=e?e:t}return function(e){let[t,n]=o.useState(e),r=e||t;return o.useEffect(()=>{null==t&&(i+=1,n("mui-".concat(i)))},[t]),r}(e)}},3337:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m},teardown:function(){return f}});var r=n(2265),o=n(8587);let i=!0,s=!1,c=new o.Timeout,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function u(){i=!1}function d(){"hidden"===this.visibilityState&&s&&(i=!0)}function f(e){e.removeEventListener("keydown",a,!0),e.removeEventListener("mousedown",u,!0),e.removeEventListener("pointerdown",u,!0),e.removeEventListener("touchstart",u,!0),e.removeEventListener("visibilitychange",d,!0)}function m(){let e=r.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0)}},[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){let{type:t,tagName:n}=e;return"INPUT"===n&&!!l[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(s=!0,c.start(100,()=>{s=!1}),t.current=!1,!0)},ref:e}}},4480:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(2265);let o={};function i(e,t){let n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}},664:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(2265);let o=[];function i(e){r.useEffect(e,o)}},2634:function(e,t,n){"use strict";var r=n(2265);t.default=e=>{let t=r.useRef({});return r.useEffect(()=>{t.current=e}),t.current}},458:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7605),o=n(8224),i=function(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n},s=function(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t},c=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:c,className:l}=e;if(!t){let e=(0,o.Z)(n?.className,l,c?.className,r?.className),t={...n?.style,...c?.style,...r?.style},i={...n,...c,...r};return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}let a=i({...c,...r}),u=s(r),d=s(c),f=t(a),m=(0,o.Z)(f?.className,n?.className,l,c?.className,r?.className),h={...f?.style,...n?.style,...c?.style,...r?.style},_={...f,...n,...d,...u};return m.length>0&&(_.className=m),Object.keys(h).length>0&&(_.style=h),{props:_,internalRef:f.ref}},l=function(e){var t,n;let{elementType:o,externalSlotProps:i,ownerState:s,skipResolvingSlotProps:l=!1,...a}=e,u=l?{}:"function"==typeof i?i(s,void 0):i,{props:d,internalRef:f}=c({...a,externalSlotProps:u}),m=(0,r.default)(f,null==u?void 0:u.ref,null===(t=e.additionalProps)||void 0===t?void 0:t.ref);return n={...d,ref:m},void 0===o||"string"==typeof o?n:{...n,ownerState:{...n.ownerState,...s}}}},8587:function(e,t,n){"use strict";n.r(t),n.d(t,{Timeout:function(){return i},default:function(){return s}});var r=n(4480),o=n(664);class i{static create(){return new i}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function s(){let e=(0,r.default)(i.create).current;return(0,o.default)(e.disposeEffect),e}},6002:function(){},4359:function(){},6344:function(){},3790:function(){},7015:function(e){e.exports={container:"listIcons_container__sRJkf",inputContainer:"listIcons_inputContainer___eC1c",cardContainer:"listIcons_cardContainer___iRGV",card:"listIcons_card__afNA4",copyButton:"listIcons_copyButton__WtIDj"}},2369:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},9161:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},2271:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},1864:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9351:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},7694:function(e){e.exports={container:"markdown_container__oFpp8",note:"markdown_note__7v8Mu",moreInfo:"markdown_moreInfo__XN3Td"}},8370:function(e,t,n){"use strict";n.d(t,{ArcticIcons:function(){return h}});var r=n(8993),o=n(7437),i=n(9628),s=n(4722),c=n(7015),l=n.n(c),a=n(5085),u=n(2265);function d(e){let{name:t,variant:n}=e,[r,s]=(0,u.useState)(!1),c=e=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return(0,o.jsx)(a.IconButton,{onClick:()=>c("import { ".concat(t," } from '@arctic-kit/icons").concat("outline"!==n?"/".concat(n):"","';")),size:"small",className:l().copyButton,children:r?(0,o.jsx)(i.CheckIcon,{color:"green"}):(0,o.jsx)(i.DocumentDuplicateIcon,{})})}function f(e){let{render:t}=e,[n,r]=(0,u.useState)(""),[s,c]=(0,u.useState)("");return(0,u.useEffect)(()=>{let e=setTimeout(()=>{c(n)},300);return()=>{clearTimeout(e)}},[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:l().inputContainer,children:(0,o.jsx)(a.TextInput,{placeholder:"Search icons",prefix:(0,o.jsx)(i.MagnifyingGlassIcon,{}),size:"large",value:n,onChange:e=>r(e.target.value),suffix:n&&(0,o.jsx)(i.XMarkIcon,{strokeWidth:2}),suffixProps:{onClick:()=>r(""),style:{pointerEvents:"auto"}}})}),t(s)]})}n(3790);let m=e=>{let t=e.replace(/Icon$/,"");return(t=(t=t.replace(/(\d+)([a-zA-Z])/g,"$1 $2")).replace(/([a-zA-Z])(\d+)/g,"$1 $2")).replace(/([a-z])([A-Z])/g,"$1 $2")};function h(){let[e,t]=(0,u.useState)("outline"),[n,c]=(0,u.useState)(),h=(0,u.useMemo)(()=>"solid"===e?s:i,[e]);return(0,o.jsxs)("div",{className:l().container,children:[(0,o.jsx)(a.Box,{children:(0,o.jsx)(a.Grid,{children:(0,o.jsxs)(a.GridRow,{children:[(0,o.jsx)(a.GridColumn,{xs:12,sm:6,children:(0,o.jsxs)(a.SegmentedControl,{initialSelectedIndex:0,label:"Variants",size:"large",children:[(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>t("outline"),children:"Outline"}),(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>t("solid"),children:"Solid"})]})}),(0,o.jsx)(a.GridColumn,{xs:12,sm:6,children:(0,o.jsxs)(a.SegmentedControl,{initialSelectedIndex:0,label:"Color",size:"large",children:[(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>c(void 0),children:"None"}),(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>c("primary"),children:"Primary"}),(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>c("secondary"),children:"Secondary"}),(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>c("success"),children:"Success"}),(0,o.jsx)(a.SegmentedControlButton,{onClick:()=>c("error"),children:"Error"})]})})]})}),...(0,r.sx)("s1wfhz7u",{})}),(0,o.jsx)(a.Box,{style:{color:n?"var(--snow-colors-".concat(n,"-main"):"inherit"},children:(0,o.jsx)(f,{render:t=>{let n=t.trim().toLowerCase().split(/\s+/);return(0,o.jsx)("div",{className:l().cardContainer,children:Object.entries(h).filter(e=>{let[t]=e;return n.some(e=>t.toLowerCase().includes(e))}).map(t=>{let[n,r]=t;return(0,o.jsxs)("div",{className:l().card,children:[(0,o.jsx)(d,{name:n,variant:e}),(0,o.jsx)(r,{}),(0,o.jsx)("p",{children:m(n)})]},n)})})}})})]})}},3913:function(e,t,n){"use strict";n.d(t,{K:function(){return c}});var r=n(7437),o=n(9628),i=n(2369),s=n.n(i);function c(e){let{onClick:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{"aria-label":"Copy code",onClick:t,className:s().actionButton,children:(0,r.jsx)(o.ClipboardDocumentIcon,{})})})}},7937:function(e,t,n){"use strict";n.d(t,{CodeBlock:function(){return u}});var r=n(7437),o=n(2265),i=n(9161),s=n.n(i),c=n(9628),l=n(3913),a=n(9943);let u=e=>{let{children:t,language:n="tsx",title:i,render:u,showLineNumbers:d=!1}=e,[f,m]=(0,o.useState)(!1),h=e=>{navigator.clipboard.writeText(e)};return(0,r.jsxs)("div",{className:s().wrapper,children:[(0,r.jsx)("section",{className:s().header,children:(0,r.jsx)("div",{className:s().fullWidth,children:(0,r.jsxs)("div",{className:s().headerContent,children:[i&&(0,r.jsxs)("div",{className:s().titleHeader,children:[(0,r.jsx)("div",{className:s().title,children:i}),(0,r.jsx)("div",{className:s().action,children:(0,r.jsx)(l.K,{onClick:()=>h(t.trim())})})]}),u]})})}),(0,r.jsx)("section",{className:"".concat(s().content),children:(0,r.jsxs)("button",{className:"".concat(s().fullWidth),onClick:()=>{m(e=>!e)},children:[(0,r.jsx)(c.ChevronRightIcon,{className:"".concat(f?s().rotate:"")}),f?"Hide Code":"Show Code"]})}),(0,r.jsx)(a.CodeBlockSection,{onCopy:h,language:n,showLineNumbers:d,visible:f,children:t})]})}},9943:function(e,t,n){"use strict";n.d(t,{CodeBlockSection:function(){return a}});var r=n(7437),o=n(7807),i=n(3913),s=n(2271),c=n.n(s),l=n(8224);function a(e){let{children:t,language:n="js",showLineNumbers:s,onCopy:a,visible:u=!0}=e,d=e=>{a?a(e):navigator.clipboard.writeText(e)};return(0,r.jsxs)("section",{className:(0,l.Z)(c().codeBlock,{[c().visible]:u}),children:[(0,r.jsx)(o.y$,{code:t.trim(),language:n,theme:o.np.dracula,children:e=>{let{tokens:t,getLineProps:n,getTokenProps:o}=e;return(0,r.jsx)("pre",{className:c().container,children:t.map((e,t)=>(0,r.jsxs)("div",{...n({line:e}),children:[s&&(0,r.jsx)("span",{className:c().lineNumber,children:t+1}),e.map((e,t)=>(0,r.jsx)("span",{...o({token:e})},t))]},t))})}}),(0,r.jsx)(i.K,{onClick:()=>d(t.trim())})]})}}},function(e){e.O(0,[3698,9998,7920,5501,1947,9329,3442,7807,2971,9033,1744],function(){return e(e.s=8275)}),_N_E=e.O()}]);