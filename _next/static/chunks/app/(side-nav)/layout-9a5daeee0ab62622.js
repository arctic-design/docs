(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{1358:function(e,n,t){Promise.resolve().then(t.t.bind(t,6299,23)),Promise.resolve().then(t.bind(t,5618)),Promise.resolve().then(t.bind(t,5281))},6396:function(e,n,t){"use strict";t.d(n,{default:function(){return l.a}});var a=t(3808),l=t.n(a)},8203:function(e,n,t){"use strict";var a=t(4463);t.o(a,"usePathname")&&t.d(n,{usePathname:function(){return a.usePathname}})},6299:function(e){e.exports={app:"layout_app__yIfxt",content:"layout_content__772sy"}},7473:function(e){e.exports={paginationFooter:"Pagination_paginationFooter__N_c3x",hidden:"Pagination_hidden___Z6js"}},2776:function(e){e.exports={sideNav:"SideNav_sideNav__fBOit",menuToggle:"SideNav_menuToggle__rj0qv",toggleBtn:"SideNav_toggleBtn__rH3Rl",navLinks:"SideNav_navLinks__IhcCM",navLinkContainer:"SideNav_navLinkContainer__a_h6F",navBar:"SideNav_navBar__qGOjI",caretButton:"SideNav_caretButton__66iGD",caretIcon:"SideNav_caretIcon__1WxTL",active:"SideNav_active__OniNt",activeChild:"SideNav_activeChild__Yp1aa",navList:"SideNav_navList__LEVzm",subMenu:"SideNav_subMenu__cHtv7",navItem:"SideNav_navItem__Quopb",expanded:"SideNav_expanded__WtQ1H"}},1557:function(e){e.exports={container:"SnowLink_container__JOJyu"}},5618:function(e,n,t){"use strict";t.d(n,{Pagination:function(){return _}});var a=t(7437),l=t(7473),i=t.n(l),r=t(8203),c=t(2265);let s=c.forwardRef(function({title:e,titleId:n,...t},a){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},t),e?c.createElement("title",{id:n},e):null,c.createElement("path",{fillRule:"evenodd",d:"M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}),o=c.forwardRef(function({title:e,titleId:n,...t},a){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},t),e?c.createElement("title",{id:n},e):null,c.createElement("path",{fillRule:"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});var d=t(1557),u=t.n(d),v=t(6396);let h=(0,c.forwardRef)((e,n)=>{let{onClick:t,href:l,children:i,className:r,...c}=e;return(0,a.jsx)(v.default,{href:l,onClick:t,ref:n,className:"".concat(u().container," ").concat(r),...c,children:i})});h.displayName="SnowLink";let _=e=>{let{routes:n}=e,t=(0,r.usePathname)(),l=(0,c.useMemo)(()=>n.filter(e=>e.path),[n]),d=l.findIndex(e=>e.path===t);if(-1===d)return null;let u=l[d-1],v=l[d+1];return(0,a.jsxs)("div",{className:i().paginationFooter,children:[u?(0,a.jsxs)(h,{href:u.path,children:[(0,a.jsx)(s,{})," ",u.label]}):(0,a.jsx)("span",{className:i().hidden}),v&&(0,a.jsxs)(h,{href:v.path,children:[v.label,(0,a.jsx)(o,{})]})]})}},5281:function(e,n,t){"use strict";t.d(n,{SideNav:function(){return v}});var a=t(7437),l=t(2776),i=t.n(l),r=t(8203),c=t(2265),s=t(6396);let o=c.forwardRef(function(e,n){let{title:t,titleId:a,...l}=e;return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":a},l),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}),d=c.forwardRef(function(e,n){let{title:t,titleId:a,...l}=e;return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":a},l),t?c.createElement("title",{id:a},t):null,c.createElement("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});var u=e=>{let{routes:n,openRoutes:t,pathname:l,toggleRoute:r,handleLinkClick:u}=e,v=(0,c.useMemo)(()=>{let e=function(n){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,a.jsx)("ul",{className:"".concat(i().navList," ").concat(c>0?i().subMenu:""),children:n.map((n,v)=>{let h=t.includes(n.path);return(0,a.jsxs)("li",{className:i().navItem,children:[(0,a.jsxs)("div",{className:"".concat(i().navLinkContainer," ").concat(i().navLink," ").concat(l===n.path?i().active:""),children:[n.path?(0,a.jsx)(s.default,{href:n.path,onClick:()=>u(n),className:i().navBar,children:n.label}):(0,a.jsx)("div",{className:i().navBar,onClick:()=>r(n.path),children:n.label}),n.children&&n.children.length>0&&(0,a.jsx)("button",{className:i().caretButton,onClick:()=>r(n.path),children:h?(0,a.jsx)(o,{className:i().caretIcon}):(0,a.jsx)(d,{className:i().caretIcon})})]}),n.children&&h&&e(n.children,c+1)]},v)})})};return e(n)},[n,t,l,r,u]);return(0,a.jsx)(a.Fragment,{children:v})};let v=e=>{let{routes:n}=e,[t,l]=(0,c.useState)([]),s=(0,r.usePathname)();(0,c.useEffect)(()=>{let e=(n,t)=>{for(let a of n)if(a.children&&t.startsWith(a.path))return[a.path,...e(a.children,t)];return[]};l(e(n,s))},[s,n]);let o=(0,c.useCallback)(e=>{l(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},[]),d=(0,c.useCallback)(e=>{e.children&&!t.includes(e.path)&&l(n=>[...n,e.path])},[t]);return(0,a.jsxs)("div",{className:i().sideNav,children:[(0,a.jsx)("input",{type:"checkbox",id:"menuToggle",className:i().menuToggle}),(0,a.jsx)("label",{htmlFor:"menuToggle",className:i().toggleBtn,children:"☰"}),(0,a.jsx)("nav",{className:i().navLinks,children:(0,a.jsx)(u,{routes:n,openRoutes:t,pathname:s,toggleRoute:o,handleLinkClick:d})})]})}}},function(e){e.O(0,[693,808,971,379,744],function(){return e(e.s=1358)}),_N_E=e.O()}]);