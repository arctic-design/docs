(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1913],{4219:function(e,n,o){Promise.resolve().then(o.bind(o,1938)),Promise.resolve().then(o.bind(o,8404)),Promise.resolve().then(o.t.bind(o,3386,23))},6128:function(e){e.exports={actionButton:"ActionButton_actionButton__8k_Xa"}},1322:function(e){e.exports={wrapper:"CodeBlock_wrapper__9N6Rd",header:"CodeBlock_header__C3N8K",headerContent:"CodeBlock_headerContent__XfERD",fullWidth:"CodeBlock_fullWidth__8Pnc9",titleHeader:"CodeBlock_titleHeader__WmyK9",title:"CodeBlock_title__ALV8_",action:"CodeBlock_action__chN41",content:"CodeBlock_content__xRIjx",rotate:"CodeBlock_rotate__dw5VC",codeBlock:"CodeBlock_codeBlock__B7EOr"}},7951:function(e){e.exports={codeBlock:"CodeBlockSection_codeBlock__rn2Sd",container:"CodeBlockSection_container__VxLFX",visible:"CodeBlockSection_visible__wKmeR",lineNumber:"CodeBlockSection_lineNumber__BT_7l"}},3386:function(e){e.exports={container:"markdown_container__oFpp8",note:"markdown_note__7v8Mu",moreInfo:"markdown_moreInfo__XN3Td"}},4772:function(e,n,o){"use strict";o.d(n,{K:function(){return l}});var t=o(7437),c=o(976),i=o(6128),r=o.n(i);function l(e){let{onClick:n}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("button",{"aria-label":"Copy code",onClick:n,className:r().actionButton,children:(0,t.jsx)(c.ClipboardDocumentIcon,{})})})}},1938:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return d}});var t=o(7437),c=o(2265),i=o(1322),r=o.n(i),l=o(976),s=o(4772),a=o(8404);let d=e=>{let{children:n,language:o="tsx",title:i,render:d,showLineNumbers:_=!1}=e,[u,h]=(0,c.useState)(!1),f=e=>{navigator.clipboard.writeText(e)};return(0,t.jsxs)("div",{className:r().wrapper,children:[(0,t.jsx)("section",{className:r().header,children:(0,t.jsx)("div",{className:r().fullWidth,children:(0,t.jsxs)("div",{className:r().headerContent,children:[i&&(0,t.jsxs)("div",{className:r().titleHeader,children:[(0,t.jsx)("div",{className:r().title,children:i}),(0,t.jsx)("div",{className:r().action,children:(0,t.jsx)(s.K,{onClick:()=>f(n.trim())})})]}),d]})})}),(0,t.jsx)("section",{className:"".concat(r().content),children:(0,t.jsxs)("button",{className:"".concat(r().fullWidth),onClick:()=>{h(e=>!e)},children:[(0,t.jsx)(l.ChevronRightIcon,{className:"".concat(u?r().rotate:"")}),u?"Hide Code":"Show Code"]})}),(0,t.jsx)(a.CodeBlockSection,{onCopy:f,language:o,showLineNumbers:_,visible:u,children:n})]})}},8404:function(e,n,o){"use strict";o.d(n,{CodeBlockSection:function(){return a}});var t=o(7437),c=o(5291),i=o(4772),r=o(7951),l=o.n(r),s=o(3058);function a(e){let{children:n,language:o="js",showLineNumbers:r,onCopy:a,visible:d=!0}=e,_=e=>{a?a(e):navigator.clipboard.writeText(e)};return(0,t.jsxs)("section",{className:(0,s.Z)(l().codeBlock,{[l().visible]:d}),children:[(0,t.jsx)(c.y$,{code:n.trim(),language:o,theme:c.np.oneLight,children:e=>{let{tokens:n,getLineProps:o,getTokenProps:c}=e;return(0,t.jsx)("pre",{className:l().container,children:n.map((e,n)=>(0,t.jsxs)("div",{...o({line:e}),children:[r&&(0,t.jsx)("span",{className:l().lineNumber,children:n+1}),e.map((e,n)=>(0,t.jsx)("span",{...c({token:e})},n))]},n))})}}),(0,t.jsx)(i.K,{onClick:()=>_(n.trim())})]})}},3058:function(e,n,o){"use strict";n.Z=function(){for(var e,n,o=0,t="",c=arguments.length;o<c;o++)(e=arguments[o])&&(n=function e(n){var o,t,c="";if("string"==typeof n||"number"==typeof n)c+=n;else if("object"==typeof n){if(Array.isArray(n)){var i=n.length;for(o=0;o<i;o++)n[o]&&(t=e(n[o]))&&(c&&(c+=" "),c+=t)}else for(t in n)n[t]&&(c&&(c+=" "),c+=t)}return c}(e))&&(t&&(t+=" "),t+=n);return t}}},function(e){e.O(0,[4383,2811,1947,5291,2971,7379,1744],function(){return e(e.s=4219)}),_N_E=e.O()}]);