"use strict";(self.webpackChunkreact_xr_ui=self.webpackChunkreact_xr_ui||[]).push([[390],{553:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(294),i=n(728),r=n(634);function l(e){let{textContent:t,selected:n,onClick:l,fontSize:a,width:c,height:s,fontFamily:u="system-ui, sans-serif",optimizedRendering:m=!1}=e;const[g,h]=o.useState(!1);return o.createElement(i.Z,{onOver:()=>{h(!0),document.body.style.cursor="pointer"},onOut:()=>{h(!1),document.body.style.cursor="auto"},onDown:()=>{l(),h(!1)}},o.createElement(r.Z,{width:c,height:s,backgroundColor:g||n?"white":"#111111",color:g||n?"#111111":"white",textContent:t,fontFamily:u,fontSize:a,textAlign:"center",verticalAlign:"middle",optimizedRendering:m}))}},390:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var o=n(294),i=n(738),r=n(634),l=n(180),a=n(518),c=n(553);function s(e){let{children:t,alignItems:n="center",justifyContent:i="center"}=e;return o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"crimson",alignItems:n,justifyContent:i},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"blue",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"green",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"hotpink",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"purple",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"grey",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},o.createElement(r.Z,{width:"90%",height:"90%",backgroundColor:"aliceblue",alignItems:n,justifyContent:i,fontSize:.5,textContent:"A"},t)))))))}const u=["start","center","end"],m=["start","center","end"];let g=0;function h(){const[e,t]=o.useState("start"),[n,l]=o.useState("start"),a=o.useRef(Date.now());return(0,i.z)((()=>{const e=Date.now();e-a.current<200||(a.current=e,g++,t(u[g%u.length]),l(m[g%m.length]))})),o.createElement(r.Z,{width:1,height:1,backgroundColor:"black"},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n},o.createElement(s,{alignItems:e,justifyContent:n}))))))))))))}function d(){const[e,t]=o.useState(!1);return o.createElement(o.Fragment,null,o.createElement(l.Z,{optimizedRendering:e},o.createElement("group",{"position-y":.61},o.createElement(r.Z,{width:1,height:.2,flexDirection:"column",gap:.025},o.createElement(r.Z,{width:1,height:.1,gap:.05},o.createElement(c.Z,{width:.1,height:.1,fontSize:.5,textContent:"On",selected:e,onClick:()=>t(!0)}),o.createElement(c.Z,{width:.1,height:.1,fontSize:.5,textContent:"Off",selected:!e,onClick:()=>t(!1)})),o.createElement(r.Z,{width:1,height:.05,textContent:"Open Dev Tools to see Frame rendering stats",fontSize:.6,textAlign:"center",verticalAlign:"middle"}))),o.createElement(h,null)),o.createElement(a.Z,{pathname:"performance"}))}},728:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(294),i=n(638),r=n(878);function l(e){let{children:t,onMove:n,onOver:l,onOut:a,onDown:c,onUp:s,enabled:u=!0}=e;const m=(0,i.nH)((e=>e.isPresenting)),g=o.useCallback((e=>t=>{m&&u&&e&&e(t.intersection)}),[m,u,c,s,n,l,a]),h=o.useCallback((e=>t=>{m||u&&e&&(t.stopPropagation(),e(t.intersections[0]))}),[m,u,c,s,n,l,a]);return o.createElement(r.vj,{onSelectStart:g(c),onSelectEnd:g(s),onMove:g(n),onHover:g(l),onBlur:g(a)},o.createElement("group",{onPointerDown:h(c),onPointerUp:h(s),onPointerMove:h(n),onPointerOver:h(l),onPointerOut:h(a)},t))}}}]);
//# sourceMappingURL=390.0e27ef37.chunk.js.map