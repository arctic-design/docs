(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4090],{4747:function(e,t,n){Promise.resolve().then(n.bind(n,8320)),Promise.resolve().then(n.bind(n,5148)),Promise.resolve().then(n.bind(n,2804)),Promise.resolve().then(n.bind(n,2746)),Promise.resolve().then(n.bind(n,8951)),Promise.resolve().then(n.bind(n,4222)),Promise.resolve().then(n.bind(n,8890)),Promise.resolve().then(n.bind(n,2071)),Promise.resolve().then(n.bind(n,3362)),Promise.resolve().then(n.bind(n,3329)),Promise.resolve().then(n.bind(n,1372)),Promise.resolve().then(n.t.bind(n,7630,23)),Promise.resolve().then(n.t.bind(n,8266,23)),Promise.resolve().then(n.t.bind(n,3594,23)),Promise.resolve().then(n.bind(n,3359)),Promise.resolve().then(n.bind(n,1938)),Promise.resolve().then(n.bind(n,8404)),Promise.resolve().then(n.t.bind(n,3386,23)),Promise.resolve().then(n.t.bind(n,8555,23)),Promise.resolve().then(n.t.bind(n,9924,23))},5148:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(2265);function o(e){let{controlled:t,default:n,name:o,state:i="value"}=e,{current:c}=r.useRef(void 0!==t),[s,u]=r.useState(n),l=r.useCallback(e=>{c||u(e)},[]);return[c?t:s,l]}},2804:function(e,t,n){"use strict";var r=n(2265);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.default=o},2746:function(e,t,n){"use strict";var r=n(2265),o=n(2804);t.default=function(e){let t=r.useRef(e);return(0,o.default)(()=>{t.current=e}),r.useRef(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)}).current}},8951:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var r=n(2265);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{"function"==typeof t?t(e):t&&(t.current=e)})},t)}},4222:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r,o=n(2265);let i=0,c=(r||(r=n.t(o,2)))["useId".toString()];function s(e){if(void 0!==c){let t=c();return null!=e?e:t}return function(e){let[t,n]=o.useState(e),r=e||t;return o.useEffect(()=>{null==t&&(i+=1,n("mui-".concat(i)))},[t]),r}(e)}},8890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _},teardown:function(){return f}});var r=n(2265),o=n(1372);let i=!0,c=!1,s=new o.Timeout,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function a(){i=!1}function d(){"hidden"===this.visibilityState&&c&&(i=!0)}function f(e){e.removeEventListener("keydown",l,!0),e.removeEventListener("mousedown",a,!0),e.removeEventListener("pointerdown",a,!0),e.removeEventListener("touchstart",a,!0),e.removeEventListener("visibilitychange",d,!0)}function _(){let e=r.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",d,!0)}},[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){let{type:t,tagName:n}=e;return"INPUT"===n&&!!u[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(c=!0,s.start(100,()=>{c=!1}),t.current=!1,!0)},ref:e}}},2071:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(2265);let o={};function i(e,t){let n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}},3362:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(2265);let o=[];function i(e){r.useEffect(e,o)}},3329:function(e,t,n){"use strict";var r=n(2265);t.default=e=>{let t=r.useRef({});return r.useEffect(()=>{t.current=e}),t.current}},1372:function(e,t,n){"use strict";n.r(t),n.d(t,{Timeout:function(){return i},default:function(){return c}});var r=n(2071),o=n(3362);class i{static create(){return new i}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function c(){let e=(0,r.default)(i.create).current;return(0,o.default)(e.disposeEffect),e}},7630:function(){},3594:function(){},8266:function(){},2014:function(e){e.exports={container:"listIcons_container__sRJkf",inputContainer:"listIcons_inputContainer___eC1c",cardContainer:"listIcons_cardContainer___iRGV",card:"listIcons_card__afNA4",copyButton:"listIcons_copyButton__WtIDj"}},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},8555:function(e){e.exports={spinner:"Spinner_spinner__dYTEm",spin:"Spinner_spin__wEDl_"}},9924:function(e){e.exports={container:"ComponentUsage_container__yfx0v",codeContainer:"ComponentUsage_codeContainer__QGIXV",propsContainer:"ComponentUsage_propsContainer__ZdTVG",loading:"ComponentUsage_loading__QkCaK",usageContentTitle:"ComponentUsage_usageContentTitle__xcuAE"}},3386:function(e){e.exports={container:"markdown_container__oFpp8",note:"markdown_note__7v8Mu",moreInfo:"markdown_moreInfo__XN3Td"}},3359:function(e,t,n){"use strict";n.d(t,{ArcticIcons:function(){return f}});var r=n(7437),o=n(976),i=n(2014),c=n.n(i),s=n(8320),u=n(2265);function l(e){let{name:t}=e,[n,i]=(0,u.useState)(!1),l=e=>{navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),2e3)};return(0,r.jsx)(s.IconButton,{onClick:()=>l("import { ".concat(t," } from '@arctic-kit/icons';")),size:"small",className:c().copyButton,children:n?(0,r.jsx)(o.CheckIcon,{color:"green"}):(0,r.jsx)(o.DocumentDuplicateIcon,{})})}function a(e){let{render:t}=e,[n,i]=(0,u.useState)(""),[l,a]=(0,u.useState)("");return(0,u.useEffect)(()=>{let e=setTimeout(()=>{a(n)},300);return()=>{clearTimeout(e)}},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:c().inputContainer,children:(0,r.jsx)(s.TextInput,{placeholder:"Search icons",prefix:(0,r.jsx)(o.MagnifyingGlassIcon,{}),size:"large",value:n,onChange:e=>i(e.target.value)})}),t(l)]})}let d=e=>{let t=e.replace(/Icon$/,"");return(t=(t=t.replace(/(\d+)([a-zA-Z])/g,"$1 $2")).replace(/([a-zA-Z])(\d+)/g,"$1 $2")).replace(/([a-z])([A-Z])/g,"$1 $2")};function f(){return(0,r.jsx)("div",{className:c().container,children:(0,r.jsx)(a,{render:e=>{let t=e.trim().toLowerCase().split(/\s+/);return(0,r.jsx)("div",{className:c().cardContainer,children:Object.entries(o).filter(e=>{let[n]=e;return t.some(e=>n.toLowerCase().includes(e))}).map(e=>{let[t,n]=e;return(0,r.jsxs)("div",{className:c().card,children:[(0,r.jsx)(l,{name:t}),(0,r.jsx)(n,{}),(0,r.jsx)("p",{children:d(t)})]},t)})})}})})}},4772:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(7437),o=n(4740),i=n(6128),c=n.n(i);function s(e){let{onClick:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{"aria-label":"Copy code",onClick:t,className:c().actionButton,children:(0,r.jsx)(o.Z,{})})})}},1938:function(e,t,n){"use strict";n.d(t,{CodeBlock:function(){return a}});var r=n(7437),o=n(2265),i=n(1322),c=n.n(i),s=n(6953),u=n(4772),l=n(8404);let a=e=>{let{children:t,language:n="tsx",title:i,render:a,showLineNumbers:d=!1}=e,[f,_]=(0,o.useState)(!1),m=e=>{navigator.clipboard.writeText(e)};return(0,r.jsxs)("div",{className:c().wrapper,children:[(0,r.jsx)("section",{className:c().header,children:(0,r.jsx)("div",{className:c().fullWidth,children:(0,r.jsxs)("div",{className:c().headerContent,children:[i&&(0,r.jsxs)("div",{className:c().titleHeader,children:[(0,r.jsx)("div",{className:c().title,children:i}),(0,r.jsx)("div",{className:c().action,children:(0,r.jsx)(u.K,{onClick:()=>m(t.trim())})})]}),a]})})}),(0,r.jsx)("section",{className:"".concat(c().content),children:(0,r.jsxs)("button",{className:"".concat(c().fullWidth),onClick:()=>{_(e=>!e)},children:[(0,r.jsx)(s.Z,{className:"".concat(f?c().rotate:"")}),f?"Hide Code":"Show Code"]})}),(0,r.jsx)(l.CodeBlockSection,{onCopy:m,language:n,showLineNumbers:d,visible:f,children:t})]})}},8404:function(e,t,n){"use strict";n.d(t,{CodeBlockSection:function(){return l}});var r=n(7437),o=n(5291),i=n(4772),c=n(7951),s=n.n(c),u=n(3058);function l(e){let{children:t,language:n="js",showLineNumbers:c,onCopy:l,visible:a=!0}=e,d=e=>{l?l(e):navigator.clipboard.writeText(e)};return(0,r.jsxs)("section",{className:(0,u.Z)(s().codeBlock,{[s().visible]:a}),children:[(0,r.jsx)(o.y$,{code:t.trim(),language:n,theme:o.np.oneLight,children:e=>{let{tokens:t,getLineProps:n,getTokenProps:o}=e;return(0,r.jsx)("pre",{className:s().container,children:t.map((e,t)=>(0,r.jsxs)("div",{...n({line:e}),children:[c&&(0,r.jsx)("span",{className:s().lineNumber,children:t+1}),e.map((e,t)=>(0,r.jsx)("span",{...o({token:e})},t))]},t))})}}),(0,r.jsx)(i.K,{onClick:()=>d(t.trim())})]})}}},function(e){e.O(0,[5607,4383,7757,5501,1947,7904,5845,2971,7379,1744],function(){return e(e.s=4747)}),_N_E=e.O()}]);