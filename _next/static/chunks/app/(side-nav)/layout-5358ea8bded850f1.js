(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{599:function(e,n,t){Promise.resolve().then(t.bind(t,263)),Promise.resolve().then(t.bind(t,3870)),Promise.resolve().then(t.bind(t,8518)),Promise.resolve().then(t.bind(t,334)),Promise.resolve().then(t.bind(t,7605)),Promise.resolve().then(t.bind(t,2180)),Promise.resolve().then(t.bind(t,3337)),Promise.resolve().then(t.bind(t,4480)),Promise.resolve().then(t.bind(t,664)),Promise.resolve().then(t.bind(t,2634)),Promise.resolve().then(t.bind(t,458)),Promise.resolve().then(t.bind(t,8587)),Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.bind(t,8769)),Promise.resolve().then(t.bind(t,3224)),Promise.resolve().then(t.bind(t,1702)),Promise.resolve().then(t.bind(t,24)),Promise.resolve().then(t.bind(t,2286)),Promise.resolve().then(t.bind(t,9519)),Promise.resolve().then(t.bind(t,448)),Promise.resolve().then(t.bind(t,8025)),Promise.resolve().then(t.bind(t,7363)),Promise.resolve().then(t.bind(t,8263)),Promise.resolve().then(t.bind(t,4289)),Promise.resolve().then(t.bind(t,5658)),Promise.resolve().then(t.bind(t,1222)),Promise.resolve().then(t.bind(t,1802)),Promise.resolve().then(t.bind(t,1869)),Promise.resolve().then(t.t.bind(t,7103,23)),Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.t.bind(t,483,23)),Promise.resolve().then(t.bind(t,6585)),Promise.resolve().then(t.bind(t,6301))},4953:function(e,n,t){"use strict";t.d(n,{default:function(){return a.a}});var i=t(3799),a=t.n(i)},6858:function(e,n,t){"use strict";var i=t(8671);t.o(i,"usePathname")&&t.d(n,{usePathname:function(){return i.usePathname}})},4023:function(){},7026:function(){},6382:function(){},7240:function(){},4682:function(){},4838:function(){},9728:function(){},95:function(){},7103:function(e){e.exports={app:"layout_app__yIfxt",content:"layout_content__772sy"}},483:function(e){e.exports={footer:"Footer_footer__OYoYH",builtBy:"Footer_builtBy__ZRsYJ"}},5259:function(e){e.exports={paginationFooter:"Pagination_paginationFooter__N_c3x",hidden:"Pagination_hidden___Z6js",icon:"Pagination_icon__66uOc"}},5022:function(e){e.exports={container:"SideNav_container__0zla_",sideNav:"SideNav_sideNav__fBOit",navLinks:"SideNav_navLinks__IhcCM",navLinkContainer:"SideNav_navLinkContainer__a_h6F",navBar:"SideNav_navBar__qGOjI",caretButton:"SideNav_caretButton__66iGD",caretIcon:"SideNav_caretIcon__1WxTL",active:"SideNav_active__OniNt",navList:"SideNav_navList__LEVzm",subMenu:"SideNav_subMenu__cHtv7",navItem:"SideNav_navItem__Quopb",expanded:"SideNav_expanded__WtQ1H",overlay:"SideNav_overlay__VvqOQ",toggled:"SideNav_toggled__8zAJa"}},8213:function(e){e.exports={toggle:"Toggler_toggle__pas8g",active:"Toggler_active__i62Q8"}},1778:function(e){e.exports={container:"SnowLink_container__JOJyu"}},5474:function(e,n,t){"use strict";var i=t(7437),a=t(4953),o=t(2265),r=t(6858),s=t(263);t(4023);let l=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let i of e){if(i.path===n)return[...t,i];if(i.children){let e=l(i.children,n,[...t,i]);if(e)return e}}return null};n.default=e=>{let{routes:n}=e,t=(0,r.usePathname)(),c=(0,o.useMemo)(()=>{let e=l(n,t);return(e?[{path:"/",label:"Home",clickable:!0},...e]:[]).map(e=>({title:e.label,href:e.path,clickable:e.clickable}))},[n,t]);return c?(0,i.jsx)(s.Breadcrumbs,{items:c,renderAnchor:(e,n)=>(0,i.jsx)(a.default,{href:n,className:"astrr8u",children:e})}):null}},6585:function(e,n,t){"use strict";t.d(n,{Pagination:function(){return d}});var i=t(7437),a=t(5259),o=t.n(a),r=t(6858),s=t(4722),l=t(685),c=t(2265);let d=e=>{let{routes:n}=e,t=(0,r.usePathname)(),a=(0,c.useMemo)(()=>n.filter(e=>e.path&&e.clickable),[n]),d=a.findIndex(e=>e.path===t);if(-1===d)return null;let h=a[d-1],u=a[d+1];return(0,i.jsxs)("div",{className:o().paginationFooter,children:[h?(0,i.jsxs)(l.W,{href:h.path,children:[(0,i.jsx)(s.ChevronLeftIcon,{className:o().icon})," ",h.label]}):(0,i.jsx)("span",{className:o().hidden}),u&&(0,i.jsxs)(l.W,{href:u.path,children:[u.label,(0,i.jsx)(s.ChevronRightIcon,{className:o().icon})]})]})}},6301:function(e,n,t){"use strict";t.d(n,{SideNav:function(){return f}});var i=t(7437),a=t(5022),o=t.n(a),r=t(6858),s=t(2265),l=t(4953),c=t(4722);let d=e=>{let{route:n,isOpen:t,toggleRoute:a,handleLinkClick:r,pathname:h}=e,[u,v]=(0,s.useState)(!1);(0,s.useEffect)(()=>{v(t)},[t]);let _=()=>{a(n.path),v(!u)};return(0,i.jsxs)("li",{className:o().navItem,children:[(0,i.jsxs)("div",{className:"".concat(o().navLinkContainer," ").concat(o().navLink," ").concat(h===n.path?o().active:""),children:[n.path&&n.clickable?(0,i.jsx)(l.default,{href:n.path,className:o().navBar,onClick:()=>r(n),children:n.label}):(0,i.jsx)("div",{className:o().navBar,onClick:_,children:n.label}),n.children&&n.children.length>0&&(0,i.jsx)("button",{className:o().caretButton,onClick:_,children:u?(0,i.jsx)(c.ChevronDownIcon,{className:o().caretIcon}):(0,i.jsx)(c.ChevronRightIcon,{className:o().caretIcon})})]}),n.children&&u&&(0,i.jsx)("ul",{className:"".concat(o().navList," ").concat(o().subMenu," ").concat(o().expanded),children:n.children.map(e=>(0,i.jsx)(d,{route:e,isOpen:t,toggleRoute:a,handleLinkClick:r,pathname:h},e.path))})]})};var h=e=>{let{routes:n,openRoutes:t,toggleRoute:a,handleLinkClick:r,pathname:s}=e;return(0,i.jsx)("ul",{className:o().navList,children:n.map((e,n)=>{let o=t.includes(e.path);return(0,i.jsx)(d,{route:e,isOpen:o,toggleRoute:a,handleLinkClick:r,pathname:s},n)})})},u=t(8213),v=t.n(u);function _(e){let{isToggled:n,onToggle:t}=e;return(0,i.jsx)("div",{className:"".concat(v().toggle," ").concat(n?v().active:""),onClick:()=>t(!n)})}let m=(e,n)=>{let t=[];for(let i of e)if(i.children){let e=m(i.children,n);(n.startsWith(i.path)||e.length>0)&&(t=[...t,i.path,...e])}else n.startsWith(i.path)&&t.push(i.path);return t},f=e=>{let{routes:n}=e,[t,a]=(0,s.useState)([]),[l,c]=(0,s.useState)(!1),d=(0,r.usePathname)();(0,s.useEffect)(()=>{a(m(n,d).filter(Boolean))},[d,n]);let u=(0,s.useCallback)(e=>{a(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},[]),v=(0,s.useCallback)(e=>{e.children&&!t.includes(e.path)&&a(n=>[...n,e.path]),c(!1)},[t]);return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)(_,{isToggled:l,onToggle:c}),(0,i.jsx)("div",{className:"".concat(o().overlay," ").concat(l?o().toggled:""),children:(0,i.jsx)("div",{className:o().sideNav,children:(0,i.jsx)("nav",{className:o().navLinks,children:(0,i.jsx)(h,{routes:n,openRoutes:t,pathname:d,toggleRoute:u,handleLinkClick:v})})})})]})}},685:function(e,n,t){"use strict";t.d(n,{W:function(){return l}});var i=t(7437),a=t(2265),o=t(1778),r=t.n(o),s=t(4953);let l=(0,a.forwardRef)((e,n)=>{let{onClick:t,href:a,children:o,className:l,...c}=e;return(0,i.jsx)(s.default,{href:a,onClick:t,ref:n,className:"".concat(r().container," ").concat(l),...c,children:o})});l.displayName="SnowLink"}},function(e){e.O(0,[2925,7597,3581,4067,4240,1947,5501,9329,3128,7512,3799,8265,2971,9033,1744],function(){return e(e.s=599)}),_N_E=e.O()}]);