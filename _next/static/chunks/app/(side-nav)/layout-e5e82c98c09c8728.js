(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{8992:function(e,n,t){Promise.resolve().then(t.t.bind(t,3799,23)),Promise.resolve().then(t.t.bind(t,7103,23)),Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.t.bind(t,483,23)),Promise.resolve().then(t.bind(t,6585)),Promise.resolve().then(t.bind(t,6301))},4953:function(e,n,t){"use strict";t.d(n,{default:function(){return i.a}});var a=t(3799),i=t.n(a)},6858:function(e,n,t){"use strict";var a=t(8671);t.o(a,"usePathname")&&t.d(n,{usePathname:function(){return a.usePathname}})},4023:function(){},7103:function(e){e.exports={app:"layout_app__yIfxt",content:"layout_content__772sy"}},483:function(e){e.exports={footer:"Footer_footer__OYoYH",builtBy:"Footer_builtBy__ZRsYJ"}},5259:function(e){e.exports={paginationFooter:"Pagination_paginationFooter__N_c3x",hidden:"Pagination_hidden___Z6js",icon:"Pagination_icon__66uOc"}},5022:function(e){e.exports={container:"SideNav_container__0zla_",sideNav:"SideNav_sideNav__fBOit",navLinks:"SideNav_navLinks__IhcCM",navLinkContainer:"SideNav_navLinkContainer__a_h6F",navBar:"SideNav_navBar__qGOjI",caretButton:"SideNav_caretButton__66iGD",caretIcon:"SideNav_caretIcon__1WxTL",active:"SideNav_active__OniNt",navList:"SideNav_navList__LEVzm",subMenu:"SideNav_subMenu__cHtv7",navItem:"SideNav_navItem__Quopb",expanded:"SideNav_expanded__WtQ1H",overlay:"SideNav_overlay__VvqOQ",toggled:"SideNav_toggled__8zAJa"}},8213:function(e){e.exports={toggle:"Toggler_toggle__pas8g",active:"Toggler_active__i62Q8"}},1778:function(e){e.exports={container:"SnowLink_container__JOJyu"}},5474:function(e,n,t){"use strict";var a=t(7437),i=t(4953),c=t(2265),l=t(6858),r=t(1714);t(4023);let s=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let a of e){if(a.path===n)return[...t,a];if(a.children){let e=s(a.children,n,[...t,a]);if(e)return e}}return null};n.default=e=>{let{routes:n}=e,t=(0,l.usePathname)(),o=(0,c.useMemo)(()=>{let e=s(n,t);return(e?[{path:"/",label:"Home",clickable:!0},...e]:[]).map(e=>({title:e.label,href:e.path,clickable:e.clickable}))},[n,t]);return o?(0,a.jsx)(r.Breadcrumbs,{items:o,renderAnchor:(e,n)=>(0,a.jsx)(i.default,{href:n,className:"astrr8u",children:e})}):null}},6585:function(e,n,t){"use strict";t.d(n,{Pagination:function(){return u}});var a=t(7437),i=t(5259),c=t.n(i),l=t(6858),r=t(4722),s=t(685),o=t(2265);let u=e=>{let{routes:n}=e,t=(0,l.usePathname)(),i=(0,o.useMemo)(()=>n.filter(e=>e.path&&e.clickable),[n]),u=i.findIndex(e=>e.path===t);if(-1===u)return null;let d=i[u-1],h=i[u+1];return(0,a.jsxs)("div",{className:c().paginationFooter,children:[d?(0,a.jsxs)(s.W,{href:d.path,children:[(0,a.jsx)(r.ChevronLeftIcon,{className:c().icon})," ",d.label]}):(0,a.jsx)("span",{className:c().hidden}),h&&(0,a.jsxs)(s.W,{href:h.path,children:[h.label,(0,a.jsx)(r.ChevronRightIcon,{className:c().icon})]})]})}},6301:function(e,n,t){"use strict";t.d(n,{SideNav:function(){return p}});var a=t(7437),i=t(5022),c=t.n(i),l=t(6858),r=t(2265),s=t(4953),o=t(4722);let u=e=>{let{route:n,isOpen:t,toggleRoute:i,handleLinkClick:l,pathname:d}=e,[h,_]=(0,r.useState)(!1);(0,r.useEffect)(()=>{_(t)},[t]);let v=()=>{i(n.path),_(!h)};return(0,a.jsxs)("li",{className:c().navItem,children:[(0,a.jsxs)("div",{className:"".concat(c().navLinkContainer," ").concat(c().navLink," ").concat(d===n.path?c().active:""),children:[n.path&&n.clickable?(0,a.jsx)(s.default,{href:n.path,className:c().navBar,onClick:()=>l(n),children:n.label}):(0,a.jsx)("div",{className:c().navBar,onClick:v,children:n.label}),n.children&&n.children.length>0&&(0,a.jsx)("button",{className:c().caretButton,onClick:v,children:h?(0,a.jsx)(o.ChevronDownIcon,{className:c().caretIcon}):(0,a.jsx)(o.ChevronRightIcon,{className:c().caretIcon})})]}),n.children&&h&&(0,a.jsx)("ul",{className:"".concat(c().navList," ").concat(c().subMenu," ").concat(c().expanded),children:n.children.map(e=>(0,a.jsx)(u,{route:e,isOpen:t,toggleRoute:i,handleLinkClick:l,pathname:d},e.path))})]})};var d=e=>{let{routes:n,openRoutes:t,toggleRoute:i,handleLinkClick:l,pathname:r}=e;return(0,a.jsx)("ul",{className:c().navList,children:n.map((e,n)=>{let c=t.includes(e.path);return(0,a.jsx)(u,{route:e,isOpen:c,toggleRoute:i,handleLinkClick:l,pathname:r},n)})})},h=t(8213),_=t.n(h);function v(e){let{isToggled:n,onToggle:t}=e;return(0,a.jsx)("div",{className:"".concat(_().toggle," ").concat(n?_().active:""),onClick:()=>t(!n)})}let f=(e,n)=>{let t=[];for(let a of e)if(a.children){let e=f(a.children,n);(n.startsWith(a.path)||e.length>0)&&(t=[...t,a.path,...e])}else n.startsWith(a.path)&&t.push(a.path);return t},p=e=>{let{routes:n}=e,[t,i]=(0,r.useState)([]),[s,o]=(0,r.useState)(!1),u=(0,l.usePathname)();(0,r.useEffect)(()=>{i(f(n,u).filter(Boolean))},[u,n]);let h=(0,r.useCallback)(e=>{i(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},[]),_=(0,r.useCallback)(e=>{e.children&&!t.includes(e.path)&&i(n=>[...n,e.path]),o(!1)},[t]);return(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsx)(v,{isToggled:s,onToggle:o}),(0,a.jsx)("div",{className:"".concat(c().overlay," ").concat(s?c().toggled:""),children:(0,a.jsx)("div",{className:c().sideNav,children:(0,a.jsx)("nav",{className:c().navLinks,children:(0,a.jsx)(d,{routes:n,openRoutes:t,pathname:u,toggleRoute:h,handleLinkClick:_})})})})]})}},685:function(e,n,t){"use strict";t.d(n,{W:function(){return s}});var a=t(7437),i=t(2265),c=t(1778),l=t.n(c),r=t(4953);let s=(0,i.forwardRef)((e,n)=>{let{onClick:t,href:i,children:c,className:s,...o}=e;return(0,a.jsx)(r.default,{href:i,onClick:t,ref:n,className:"".concat(l().container," ").concat(s),...o,children:c})});s.displayName="SnowLink"}},function(e){e.O(0,[7597,23,3664,5164,5501,9329,6578,3799,2971,9033,1744],function(){return e(e.s=8992)}),_N_E=e.O()}]);