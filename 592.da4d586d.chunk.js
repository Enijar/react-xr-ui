"use strict";(self.webpackChunkreact_xr_ui=self.webpackChunkreact_xr_ui||[]).push([[592],{553:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(294),r=n(728),i=n(634);function c(e){let{textContent:t,selected:n,onClick:c,fontSize:l,width:a,height:u,fontFamily:s="system-ui, sans-serif"}=e;const[h,d]=o.useState(!1);return o.createElement(r.Z,{onOver:()=>{d(!0),document.body.style.cursor="pointer"},onOut:()=>{d(!1),document.body.style.cursor="auto"},onDown:()=>{c(),d(!1)}},o.createElement(i.Z,{width:a,height:u,backgroundColor:h||n?"white":"#111111",color:h||n?"#111111":"white",textContent:t,fontFamily:s,fontSize:l,textAlign:"center",verticalAlign:"middle"}))}},592:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var o=n(294),r=n(180),i=n(634),c=n(553),l=n(518);function a(){const e=o.useMemo((()=>({xl:.75,m:.5,s:.25})),[]),[t,n]=o.useState("m");return o.createElement(o.Fragment,null,o.createElement(r.Z,null,o.createElement(i.Z,{width:1,height:.1,gap:.05,"position-y":.5},o.createElement(c.Z,{width:.1,height:.1,fontSize:.5,textContent:"XL",selected:"xl"===t,onClick:()=>n("xl")}),o.createElement(c.Z,{width:.1,height:.1,fontSize:.5,textContent:"M",selected:"m"===t,onClick:()=>n("m")}),o.createElement(c.Z,{width:.1,height:.1,fontSize:.5,textContent:"S",selected:"s"===t,onClick:()=>n("s")})),o.createElement(i.Z,{width:e[t],height:e[t],backgroundColor:"crimson"})),o.createElement(l.Z,{pathname:"basic"}))}},728:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(294),r=n(638),i=n(878);function c(e){let{children:t,onMove:n,onOver:c,onOut:l,onDown:a,onUp:u,enabled:s=!0}=e;const h=(0,r.nH)((e=>e.isPresenting)),d=o.useCallback((e=>t=>{h&&s&&e&&e(t.intersection)}),[h,s,a,u,n,c,l]),m=o.useCallback((e=>t=>{h||s&&e&&(t.stopPropagation(),e(t.intersections[0]))}),[h,s,a,u,n,c,l]);return o.createElement(i.vj,{onSelectStart:d(a),onSelectEnd:d(u),onMove:d(n),onHover:d(c),onBlur:d(l)},o.createElement("group",{onPointerDown:m(a),onPointerUp:m(u),onPointerMove:m(n),onPointerOver:m(c),onPointerOut:m(l)},t))}}}]);
//# sourceMappingURL=592.da4d586d.chunk.js.map