(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"3T+C":function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));var n=a("nKUr"),r=a("q1tI"),o=a("R/WZ"),i=a("H2TA"),c=a("Ff2n"),l=a("wx14"),d=(a("17x9"),a("iuhU"));var p=r.createContext(),s="table",u=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?s:o,u=e.padding,b=void 0===u?"normal":u,g=e.size,m=void 0===g?"medium":g,f=e.stickyHeader,h=void 0!==f&&f,x=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=r.useMemo((function(){return{padding:b,size:m,stickyHeader:h}}),[b,m,h]);return r.createElement(p.Provider,{value:v},r.createElement(i,Object(l.a)({role:i===s?null:"table",ref:t,className:Object(d.a)(a.root,n,h&&a.stickyHeader)},x)))})),b=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(u);var g=r.createContext(),m={variant:"body"},f="tbody",h=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?f:o,p=Object(c.a)(e,["classes","className","component"]);return r.createElement(g.Provider,{value:m},r.createElement(i,Object(l.a)({className:Object(d.a)(a.root,n),ref:t,role:i===f?null:"rowgroup"},p)))})),x=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(h),v=a("NqtD"),j=a("ye/S"),O=r.forwardRef((function(e,t){var a,n,o=e.align,i=void 0===o?"inherit":o,s=e.classes,u=e.className,b=e.component,m=e.padding,f=e.scope,h=e.size,x=e.sortDirection,j=e.variant,O=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=r.useContext(p),w=r.useContext(g),F=w&&"head"===w.variant;b?(n=b,a=F?"columnheader":"cell"):n=F?"th":"td";var k=f;!k&&F&&(k="col");var R=m||(y&&y.padding?y.padding:"normal"),N=h||(y&&y.size?y.size:"medium"),C=j||w&&w.variant,z=null;return x&&(z="asc"===x?"ascending":"descending"),r.createElement(n,Object(l.a)({ref:t,className:Object(d.a)(s.root,s[C],u,"inherit"!==i&&s["align".concat(Object(v.a)(i))],"normal"!==R&&s["padding".concat(Object(v.a)(R))],"medium"!==N&&s["size".concat(Object(v.a)(N))],"head"===C&&y&&y.stickyHeader&&s.stickyHeader),"aria-sort":z,role:a,scope:k},O))})),y=Object(i.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(j.d)(Object(j.a)(e.palette.divider,1),.88):Object(j.b)(Object(j.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(O),w=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?"div":o,p=Object(c.a)(e,["classes","className","component"]);return r.createElement(i,Object(l.a)({ref:t,className:Object(d.a)(a.root,n)},p))})),F=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(w),k={variant:"head"},R="thead",N=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?R:o,p=Object(c.a)(e,["classes","className","component"]);return r.createElement(g.Provider,{value:k},r.createElement(i,Object(l.a)({className:Object(d.a)(a.root,n),ref:t,role:i===R?null:"rowgroup"},p)))})),C=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(N),z=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?"tr":o,p=e.hover,s=void 0!==p&&p,u=e.selected,b=void 0!==u&&u,m=Object(c.a)(e,["classes","className","component","hover","selected"]),f=r.useContext(g);return r.createElement(i,Object(l.a)({ref:t,className:Object(d.a)(a.root,n,f&&{head:a.head,footer:a.footer}[f.variant],s&&a.hover,b&&a.selected),role:"tr"===i?null:"row"},m))})),S=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(j.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(z),T=a("kKAo"),H=a("4b23"),A=Object(o.a)({table:{minWidth:650}}),E=Object(i.a)((function(){return{head:{backgroundColor:"rgba(32,32,32,.7)",color:"#FFFFFF"},body:{backgroundColor:"rgba(32,32,32,.6)",color:"#FFFFFF"}}}))(y);function W(e){var t=e.rows,a=void 0===t?[]:t,r=e.header,o=void 0===r?[]:r,i=A();return Object(n.jsx)(F,{component:T.a,children:Object(n.jsxs)(b,{className:i.table,"aria-label":"simple table",children:[Object(n.jsx)(C,{children:Object(n.jsx)(S,{children:o.map((function(e){return Object(n.jsx)(E,{align:"left",children:e},e)}))})}),Object(n.jsx)(x,{children:a.map((function(e){var t=e.id,a=e.name,r=e.data;return Object(n.jsxs)(S,{children:[Object(n.jsx)(E,{component:"th",scope:"row",children:a}),r.map((function(e){var t=Object(H.a)();return Object(n.jsx)(E,{align:"left",children:e},t)}))]},t)}))})]})})}},"4b23":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));let n=(e=21)=>{let t="",a=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&a[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t}},"9vzh":function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"k",(function(){return p})),a.d(t,"m",(function(){return s})),a.d(t,"l",(function(){return u})),a.d(t,"h",(function(){return b})),a.d(t,"j",(function(){return g})),a.d(t,"i",(function(){return m})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return h}));var n=a("4b23");function r(e){for(var t=Object(n.a)(),a=arguments.length,r=new Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];return{id:t,name:e,data:[].concat(r)}}var o=[r("\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436","20-25 \u043c2","07-09","3000 \u0433\u0440\u043d"),r("\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436","35 \u043c2","12","3200 \u0433\u0440\u043d"),r("\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436","50 \u043c2","18","3600 \u0433\u0440\u043d"),r("\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436 (\u0441\u043f\u043b\u0438\u0442, \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u043e\u0433\u043e, \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430)","\u043e\u0442 70 \u043c2","24 - 30","4500 \u0433\u0440\u043d"),r("\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u043e\u043d\u0442\u0430\u0436 (\u0441\u043f\u043b\u0438\u0442, \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u043e\u0433\u043e, \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430)","\u043e\u0442 100 \u043c2","36 - 60","6500 \u0433\u0440\u043d")],i=[r("\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440","20-25 \u043c2","07-09","1500 \u0433\u0440\u043d"),r("\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440","35 \u043c2","12","1700 \u0433\u0440\u043d"),r("\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440","50 \u043c2","18","2000 \u0433\u0440\u043d"),r("\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440 (\u0441\u043f\u043b\u0438\u0442, \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u043e\u0433\u043e, \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430)","\u043e\u0442 70 \u043c2","24 - 30","\u043e\u0442 2500 \u0433\u0440\u043d"),r("\u041a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440 (\u0441\u043f\u043b\u0438\u0442, \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u043e\u0433\u043e, \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430)","\u043e\u0442 100 \u043c2","36 - 60","\u043e\u0442 3500 \u0433\u0440\u043d")],c=["\u0412\u0438\u0434 \u0440\u0430\u0431\u043e\u0442","\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f","\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c  \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u0430,  btu","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"],l=[r("\u0427\u0438\u0441\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0422\u041e","20-25 \u043c2","07-09","500 \u0433\u0440\u043d"),r("\u0427\u0438\u0441\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0422\u041e","35 \u043c2","12","600 \u0433\u0440\u043d"),r("\u0427\u0438\u0441\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0422\u041e","50 \u043c2","18","800 \u0433\u0440\u043d"),r("\u0427\u0438\u0441\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0422\u041e","\u043e\u0442 70 \u043c2","24 - 30","1000 \u0433\u0440\u043d"),r("\u0427\u0438\u0441\u0442\u043a\u0430 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u043f\u0430\u0440\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c",null,null,"200 \u0433\u0440\u043d"),r("\u041c\u043e\u0439\u043a\u0430 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u043a\u0435\u0440\u0445\u0435\u0440\u043e\u043c",null,null,"200 \u0433\u0440\u043d"),r("\u0417\u0430\u043f\u0440\u0430\u043a\u0430 \u0444\u0440\u0435\u043e\u043d\u043e\u043c R - 22, R - 410, R- 32",null,null,"100 \u0433\u0440/ 100 \u0433\u0440\u043d"),r("\u0412\u0430\u043a\u0443\u0443\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",null,null,"150 \u0433\u0440\u043d"),r("\u0412\u0430\u043b\u044c\u0446\u043e\u0432\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f (\u043f\u0440\u0438 \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u0442\u0435\u0447\u043a\u0438 \u0444\u0440\u0435\u043e\u043d\u0430)",null,null,"1 \u0448\u0442/ 100 \u0433\u0440\u043d")],d=["\u0412\u0438\u0434 \u0440\u0430\u0431\u043e\u0442","\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f","\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c  \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u0430,  btu","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"],p=[r("\u041c\u043e\u043d\u0442\u0430\u0436 \u0444\u0440\u0435\u043e\u043d\u043e\u0432\u043e\u0439 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u0438, \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0434\u043e 3 \u043c.\u043f.","20-25 \u043c2","07-09","1500 \u0433\u0440\u043d"),r("\u041c\u043e\u043d\u0442\u0430\u0436 \u0444\u0440\u0435\u043e\u043d\u043e\u0432\u043e\u0439 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u0438, \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0434\u043e 3 \u043c.\u043f.","35 \u043c2","12","1600 \u0433\u0440\u043d"),r("\u041c\u043e\u043d\u0442\u0430\u0436 \u0444\u0440\u0435\u043e\u043d\u043e\u0432\u043e\u0439 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u0438, \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0434\u043e 3 \u043c.\u043f.","50 \u043c2","18","1900 \u0433\u0440\u043d"),r("\u041c\u043e\u043d\u0442\u0430\u0436 \u0444\u0440\u0435\u043e\u043d\u043e\u0432\u043e\u0439 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u0438, \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0434\u043e 3 \u043c.\u043f.","\u043e\u0442 70 \u043c2","24 - 30","2400 \u0433\u0440\u043d")],s=[r("\u0428\u0442\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0435\u043d \u043f\u043e\u0434 \u0444\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c ( \u043a\u0438\u0440\u043f\u0438\u0447, \u0433\u0430\u0437\u043e\u0431\u043b\u043e\u043a)","\u043c.\u043f.","1","150 \u0433\u0440\u043d"),r("\u0428\u0442\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0435\u043d \u043f\u043e\u0434 \u0444\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c ( \u0431\u0435\u0442\u043e\u043d)","\u043c.\u043f.","1","250 \u0433\u0440\u043d"),r("\u0428\u0442\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0435\u043d \u043f\u043e\u0434 \u0434\u0440\u0435\u043d\u0430\u0436\u043d\u0443\u044e \u0442\u0440\u0443\u0431\u0443","\u043c.\u043f.","1","60 \u0433\u0440\u043d"),r("\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435 \u043f\u043e\u0434 \u0444\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c (\u043a\u0438\u0440\u043f\u0438\u0447)","\u043c.\u043f.","1","150 \u0433\u0440\u043d"),r("\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435 \u043f\u043e\u0434 \u0444\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c (\u0431\u0435\u0442\u043e\u043d)","\u043c.\u043f.","1","250 \u0433\u0440\u043d"),r("\u041c\u043e\u043d\u0442\u0430\u0436/\u0434\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0441\u0442\u0435\u043a\u043b\u043e\u043f\u0430\u043a\u0435\u0442\u0430","\u043c.\u043f.","1","150 \u0433\u0440\u043d")],u=[r("\u0424\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c","\u043c.\u043f.","20-25 \u043c2","07-09","300 \u0433\u0440\u043d"),r("\u0424\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c","\u043c.\u043f.","35 \u043c2","12","400 \u0433\u0440\u043d"),r("\u0424\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c","\u043c.\u043f.","50 \u043c2","18","450 \u0433\u0440\u043d"),r("\u0424\u0440\u0435\u043e\u043d\u043e\u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043b\u044c","\u043c.\u043f.","\u043e\u0442 70 \u043c2","24 - 30","550 \u0433\u0440\u043d"),r("\u0414\u0440\u0435\u043d\u0430\u0436\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430 D 16","\u043c.\u043f.",null,null,"40 \u0433\u0440\u043d"),r("\u041a\u043e\u0440\u043e\u0431-\u043a\u0430\u043d\u0430\u043b 60\u044560","\u043c.\u043f.",null,null,"100 \u0433\u0440\u043d")],b=["\u0412\u0438\u0434 \u0440\u0430\u0431\u043e\u0442","\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f","\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c  \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u0430,  btu","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"],g=["\u0412\u0438\u0434 \u0440\u0430\u0431\u043e\u0442","\u0415\u0434\u0438\u043d\u0438\u0446\u0430 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f ","\u041a\u043e\u043b-\u0432\u043e","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"],m=["\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b","\u0415\u0434\u0438\u043d\u0438\u0446\u0430 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f ","\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f","\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c  \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u0430,  btu","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"],f=[r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0431\u044b\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 7-12 tbtu","600 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430\u0441\u0442\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-36 tbtu","700 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e-\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-24 btu","900 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u044b\u0445, \u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0445, \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-24 btu","900 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043f\u043e\u043b\u0443\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0435\u0440\u0438\u0438 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 30-60 btu","1200 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0431\u044b\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432   7-12 tbtu, \u0431\u043e\u043b\u0435\u0435 2 \u0448\u0442","600 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430\u0441\u0442\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-36 tbtu, \u0431\u043e\u043b\u0435\u0435 2 \u0448\u0442","700 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u043e-\u043f\u043e\u0442\u043e\u043b\u043e\u0447\u043d\u044b\u0445 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-24 btu, \u0431\u043e\u043b\u0435\u0435 2 \u0448\u0442","900 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u044b\u0445, \u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0445,  \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 18-24 btu, \u0431\u043e\u043b\u0435\u0435 2 \u0448\u0442","900 \u0433\u0440\u043d"),r("\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u043f\u043e\u043b\u0443\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0435\u0440\u0438\u0438 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432 30-60 btu, \u0431\u043e\u043b\u0435\u0435 2 \u0448\u0442","1200 \u0433\u0440\u043d")],h=["\u0423\u0441\u043b\u0443\u0433\u0430","\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0440\u043d"]},uabi:function(e,t,a){"use strict";var n=a("cpVT"),r=a("jyBA");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={container:i({zIndex:"12",color:"",padding:"10px 0 30px",minHeight:"calc(100vh - 50px - 50px - 80px)",height:"100%"},r.b),title:i(i({},r.r),{},{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#55555",textDecoration:"none"}),subtitle:{fontSize:"1.313rem",maxWidth:"500px",margin:"10px auto 0"},main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"100px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)","@media (max-width: 960px)":{margin:"90px 10px 0px"}},sectionTitle:{fontWeight:"bold",marginTop:"30px"},list:{padding:"0"},listItem:{listStyle:"none",paddingLeft:"50px",position:"relative","&:before":{content:'"\\276F"',position:"absolute",left:"1em",color:"teal"}},trailTitle:{fontWeight:"bold"},trailSube:{fontWeight:"bold",paddingLeft:"50px",position:"relative","&:before":{content:'"\\276F"',position:"absolute",left:"1em",color:"teal"}},accent:{fontWeight:"bold"},deliveryCard:{width:"80%",padding:"20px",background:"rgba(32,32,32,.7)",borderRadius:"5px",color:"#FFFFFF","@media (max-width: 992px)":{width:"100%"},"& > h2":{marginBottom:"20px"},"& > p":{fontSize:"18px"}},contactsCard:{borderRadius:"5px",width:"50%",padding:"20px",background:"rgba(32,32,32,.7)",color:"#FFFFFF",fontWeight:"500","@media (max-width: 992px)":{width:"100%"}},contactsItem:{color:"#FFFFFF",fontSize:"18px",padding:"10px 0",margin:"0",fontWeight:"500","&:hover,&:focus":{color:"teal"}},contactsItemCity:{color:"#FFFFFF",fontSize:"18px",padding:"10px 0",margin:"0",fontWeight:"500"},icons:{width:"20px",height:"20px",marginRight:"3px",color:"inherit"},socialIcons:{position:"relative",fontSize:"20px !important",marginRight:"4px",color:"inherit"},email:{marginLeft:"10px",textTransform:"lowercase",color:"inherit"},phone:{marginLeft:"12px",textTransform:"lowercase",color:"inherit"},pageWithBackground:{minHeight:"calc(100vh - 50px - 50px - 80px)",height:"100%",padding:"30px",background:"linear-gradient(92deg,rgba(255,255,255,.0001) 0%,rgba(255,255,255,.3) 100%),url(img/contacts-bg.jpeg)",backgroundSize:"cover"}};t.a=c}}]);