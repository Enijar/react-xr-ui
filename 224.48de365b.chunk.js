"use strict";(self.webpackChunkreact_xr_ui=self.webpackChunkreact_xr_ui||[]).push([[224],{553:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(294),r=n(728),i=n(634);function c(e){let{textContent:t,selected:n,onClick:c,fontSize:l,width:a,height:s,fontFamily:h="system-ui, sans-serif"}=e;const[u,d]=o.useState(!1);return o.createElement(r.Z,{onOver:()=>{d(!0),document.body.style.cursor="pointer"},onOut:()=>{d(!1),document.body.style.cursor="auto"},onDown:()=>{c(),d(!1)}},o.createElement(i.Z,{width:a,height:s,backgroundColor:u||n?"white":"#111111",color:u||n?"#111111":"white",textContent:t,fontFamily:h,fontSize:l,textAlign:"center",verticalAlign:"middle"}))}},224:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var o=n(294),r=n(180),i=n(634),c=n(553),l=n(518);function a(){const[e,t]=o.useState("row"),[n,a]=o.useState("center"),[s,h]=o.useState("space-around");return o.createElement(o.Fragment,null,o.createElement(r.Z,null,o.createElement(i.Z,{width:1.5,height:.2,flexDirection:"column",justifyContent:"space-between","position-y":.625},o.createElement(i.Z,{width:.8,height:.05,justifyContent:"space-around"},o.createElement(c.Z,{width:.1,height:.05,fontSize:.5,textContent:"row",selected:"row"===e,onClick:()=>t("row")}),o.createElement(c.Z,{width:.2,height:.05,fontSize:.5,textContent:"row-reverse",selected:"row-reverse"===e,onClick:()=>t("row-reverse")}),o.createElement(c.Z,{width:.15,height:.05,fontSize:.5,textContent:"column",selected:"column"===e,onClick:()=>t("column")}),o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"column-reverse",selected:"column-reverse"===e,onClick:()=>t("column-reverse")})),o.createElement(i.Z,{width:.85,height:.05,justifyContent:"space-around"},o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: start",selected:"start"===n,onClick:()=>a("start")}),o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: center",selected:"center"===n,onClick:()=>a("center")}),o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: end",selected:"end"===n,onClick:()=>a("end")})),o.createElement(i.Z,{width:1.6,height:.05,justifyContent:"space-around"},o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: start",selected:"start"===s,onClick:()=>h("start")}),o.createElement(c.Z,{width:.35,height:.05,fontSize:.5,textContent:"justifyContent: space-around",selected:"space-around"===s,onClick:()=>h("space-around")}),o.createElement(c.Z,{width:.35,height:.05,fontSize:.5,textContent:"justifyContent: space-between",selected:"space-between"===s,onClick:()=>h("space-between")}),o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: center",selected:"center"===s,onClick:()=>h("center")}),o.createElement(c.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: end",selected:"end"===s,onClick:()=>h("end")}))),o.createElement(i.Z,{width:1,height:1,borderWidth:.025,borderColor:"#222222",borderRadius:.05,backgroundColor:"#444444",flexDirection:e,alignItems:n,justifyContent:s},o.createElement(i.Z,{width:.1,height:.15,backgroundColor:"red"}),o.createElement(i.Z,{width:.3,height:.3,backgroundColor:"lightblue"}),o.createElement(i.Z,{width:.2,height:.1,backgroundColor:"green"}))),o.createElement(l.Z,{pathname:"layout"}))}},728:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(294),r=n(638),i=n(878);function c(e){let{children:t,onMove:n,onOver:c,onOut:l,onDown:a,onUp:s,enabled:h=!0}=e;const u=(0,r.nH)((e=>e.isPresenting)),d=o.useCallback((e=>t=>{u&&h&&e&&e(t.intersection)}),[u,h,a,s,n,c,l]),C=o.useCallback((e=>t=>{u||h&&e&&(t.stopPropagation(),e(t.intersections[0]))}),[u,h,a,s,n,c,l]);return o.createElement(i.vj,{onSelectStart:d(a),onSelectEnd:d(s),onMove:d(n),onHover:d(c),onBlur:d(l)},o.createElement("group",{onPointerDown:C(a),onPointerUp:C(s),onPointerMove:C(n),onPointerOver:C(c),onPointerOut:C(l)},t))}}}]);
//# sourceMappingURL=224.48de365b.chunk.js.map