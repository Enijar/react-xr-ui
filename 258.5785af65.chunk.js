"use strict";(self.webpackChunk_app_client=self.webpackChunk_app_client||[]).push([[258],{261:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(294),i=n(413);function o(e){let{textContent:t,selected:n,onClick:o,fontSize:a,width:l,height:c,fontFamily:s="system-ui, sans-serif"}=e;const[d,u]=r.useState(!1);return r.createElement(i.Z,{width:l,height:c,backgroundColor:d||n?"white":"#111111",color:d||n?"#111111":"white",textContent:t,fontFamily:s,fontSize:a,textAlign:"center",verticalAlign:"middle",onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:e=>{o(e),u(!1)}})}},291:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(294),i=n(369),o=n(659),a=n(846),l=n(989),c=n(581);function s(e){let{children:t}=e;const n=r.useMemo((()=>new i.d(6,6,6,10,10,10).translate(0,3,0)),[]);return r.createElement(o.de,{legacy:!0,flat:!0,linear:!0,gl:{alpha:!1}},r.createElement("color",{args:["#333333"],attach:"background"}),r.createElement("lineSegments",{geometry:n},r.createElement("lineBasicMaterial",{color:"#c0c0c0"})),r.createElement(l.c,{makeDefault:!0,position:[0,1.6,0]}),r.createElement(c.z,{makeDefault:!0,target:[0,1,-1.8]}),r.createElement("ambientLight",null),r.createElement(a.M,null),r.createElement("group",{position:[0,1,-1.88]},t))}},258:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(294),i=n(291),o=n(413),a=n(261);function l(){const[e,t]=r.useState("row"),[n,l]=r.useState("center"),[c,s]=r.useState("space-around");return r.createElement(i.Z,null,r.createElement(o.Z,{width:1.5,height:.2,flexDirection:"column",justifyContent:"space-between","position-y":.625},r.createElement(o.Z,{width:.8,height:.05,justifyContent:"space-around"},r.createElement(a.Z,{width:.1,height:.05,fontSize:.5,textContent:"row",selected:"row"===e,onClick:()=>t("row")}),r.createElement(a.Z,{width:.2,height:.05,fontSize:.5,textContent:"row-reverse",selected:"row-reverse"===e,onClick:()=>t("row-reverse")}),r.createElement(a.Z,{width:.15,height:.05,fontSize:.5,textContent:"column",selected:"column"===e,onClick:()=>t("column")}),r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"column-reverse",selected:"column-reverse"===e,onClick:()=>t("column-reverse")})),r.createElement(o.Z,{width:.85,height:.05,justifyContent:"space-around"},r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: start",selected:"start"===n,onClick:()=>l("start")}),r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: center",selected:"center"===n,onClick:()=>l("center")}),r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"alignItems: end",selected:"end"===n,onClick:()=>l("end")})),r.createElement(o.Z,{width:1.6,height:.05,justifyContent:"space-around"},r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: start",selected:"start"===c,onClick:()=>s("start")}),r.createElement(a.Z,{width:.35,height:.05,fontSize:.5,textContent:"justifyContent: space-around",selected:"space-around"===c,onClick:()=>s("space-around")}),r.createElement(a.Z,{width:.35,height:.05,fontSize:.5,textContent:"justifyContent: space-between",selected:"space-between"===c,onClick:()=>s("space-between")}),r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: center",selected:"center"===c,onClick:()=>s("center")}),r.createElement(a.Z,{width:.25,height:.05,fontSize:.5,textContent:"justifyContent: end",selected:"end"===c,onClick:()=>s("end")}))),r.createElement(o.Z,{width:1,height:1,borderWidth:.025,borderColor:"#222222",borderRadius:.05,backgroundColor:"#444444",flexDirection:e,alignItems:n,justifyContent:c},r.createElement(o.Z,{width:.25,height:.25,backgroundColor:"red"}),r.createElement(o.Z,{width:.25,height:.25,backgroundColor:"green"}),r.createElement(o.Z,{width:.25,height:.25,backgroundColor:"lightblue"})))}},413:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(462),i=n(294),o=n(477),a=n(149),l=n(561),c=n.n(l);let s=-1;const d=i.createContext({parentUuid:null,currentChildren:[],addChild(){},removeChild(){}}),u=[0,0];function h(e,t){let{zIndex:n=0,resolution:l=2048,visible:h=!0,autoLayout:m=!0,width:f=1,height:g=1,opacity:p=1,backgroundColor:C="transparent",backgroundImage:w,backgroundSize:v,backgroundPosition:x=u,borderRadius:E=0,borderWidth:b=0,borderColor:k="transparent",flexDirection:y="row",alignItems:S="center",justifyContent:M="center",gap:Z=0,textContent:I,textAlign:z="left",justifyText:j=!1,verticalAlign:U="top",color:A="white",fontFamily:D="system-ui, sans-serif",fontSize:T=.1,fontWeight:O="normal",childIndex:P,children:R,...W}=e;const B=i.useMemo((()=>++s),[]),F=(0,a.w)((e=>e.gl)),_=i.useRef(null),L=i.useRef(null),G=i.useContext(d),N=i.useMemo((()=>o.MathUtils.generateUUID()),[]);i.useEffect((()=>{if(null!==G.parentUuid)return G.addChild({width:f,height:g,index:P,uuid:N}),()=>{G.removeChild(N)}}),[f,g,P,G.parentUuid]);const V=i.useMemo((()=>document.createElement("canvas").getContext("2d")),[]);i.useMemo((()=>{V.canvas.width=Math.max(1,Math.floor(f*l)),V.canvas.height=Math.max(1,Math.floor(g*l))}),[V.canvas,f,g,l]);const q=i.useMemo((()=>{const e=new o.CanvasTexture(V.canvas);return e.anisotropy=F.capabilities.getMaxAnisotropy(),e}),[V.canvas,F.capabilities,f,g]),H=i.useMemo((()=>({backgroundImage:new Image})),[]);i.useMemo((()=>{H.backgroundImage.src=w}),[H.backgroundImage,w]),(0,a.x)((()=>{const e=V.canvas.width,t=V.canvas.height,n=Math.PI/180,r=(e+t)/2,{mapLinear:i}=o.MathUtils;V.globalCompositeOperation="source-over",V.clearRect(0,0,e,t);{const i=Array.isArray(E),o=E,a=E;let[l=0,c=0,s=0,d=0]=i?o:[a,a,a,a];l*=r,c*=r,s*=r,d*=r,V.beginPath(),V.moveTo(l,0),V.lineTo(e-c,0),V.arc(e-c,c,c,270*n,360*n),V.lineTo(e,t-s),V.arc(e-s,t-s,s,0,90*n),V.lineTo(d,t),V.arc(d,t-d,d,90*n,180*n),V.lineTo(0,l),V.arc(l,l,l,180*n,270*n),V.closePath()}V.globalAlpha=p,V.fillStyle=C,V.lineWidth=b*r*2,V.fill();const a=b*r,l=b*r;if(void 0!==w){const n=x[0],r=x[1],o=0,c=0,s=H.backgroundImage.width,d=H.backgroundImage.height,u=s/d,h=e/t;let m=s,f=d;switch(v){case"stretch":m=e,f=t;break;case"contain":m=e-2*a,f=t-2*l,u>h?f=m/u:m=f*u;break;case"cover":m=e-2*a,f=t-2*l,u<h?f=m/u:m=f*u}const g=a+i(n,0,1,0,e-2*a-m),p=l+i(r,0,1,0,t-2*l-f);V.save(),V.clip(),V.drawImage(H.backgroundImage,o,c,s,d,g,p,m,f),V.restore()}void 0!==I&&(c().font=D,c().fontSize=T*Math.min(e,t),c().align=z,c().vAlign=U,c().justify=j,c().fontWeight=O,V.textBaseline="bottom",V.fillStyle=A,c().drawText(V,I,a,l,e-2*a,t-2*l)),V.globalCompositeOperation="destination-out",V.stroke(),V.globalCompositeOperation="source-over",V.save(),V.clip(),V.strokeStyle=k,V.stroke(),V.restore(),q.needsUpdate=!0}));const[J,K]=i.useState([]),Q=i.useMemo((()=>J.map((()=>i.createRef()))),[J]);i.useEffect((()=>{const e={width:f,height:g};e.width-=2*b,e.height-=2*b;let t=[...Q];["column","row-reverse"].includes(y)&&t.reverse(),t.forEach(((t,n)=>{const[r,i]=function(e){let{currentChildren:t,index:n,flexDirection:r,alignItems:i,justifyContent:o,gap:a,size:l}=e;const c=t.reduce(((e,t)=>e+t.width),0),s=t.reduce(((e,t)=>e+t.height),0);let d=0,u=0,h=c,m="width",f="height";if(["column","column-reverse"].includes(r)&&(m="height",f="width",h=s),t.length>0&&!["space-between","space-around"].includes(o)&&(h+=a*(t.length-1)),"start"===o){d=.5*l[m]+.5*t[0][m]-l[m],"column"===r&&(d=.5*l[m]+.5*t[0][m]-h);for(let e=1;e<=n;e++)d+=.5*t[e-1][m]+.5*t[e][m]+a}if("center"===o){d=.5*t[0][m]-.5*h;for(let e=1;e<=n;e++)d+=.5*t[e-1][m]+.5*t[e][m]+a}if("end"===o){d=.5*l[m]+.5*t[0][m]-h,"column"===r&&(d=.5*l[m]+.5*t[0][m]-l[m]);for(let e=1;e<=n;e++)d+=.5*t[e-1][m]+.5*t[e][m]+a}if("space-between"===o)if(h>=l[m]){d=.5*l[m]+.5*t[0][m]-l[m];for(let e=1;e<=n;e++)d+=.5*t[e-1][m]+.5*t[e][m]}else{let e=Math.max(0,l[m]-h);0===t.length?e=0:e>0&&(e/=t.length-1),d=.5*l[m]+.5*t[0][m]-l[m];for(let r=1;r<=n;r++)d+=.5*t[r-1][m]+.5*t[r][m]+e}if("space-around"===o)if(h>=l[m]){d=.5*l[m]+.5*t[0][m]-l[m];for(let e=1;e<=n;e++)d+=.5*t[e-1][m]+.5*t[e][m]}else{let e=Math.max(0,l[m]-h);0===t.length?e=0:e>0&&(e/=t.length+1),d=.5*l[m]+.5*t[0][m]-l[m],d+=e;for(let r=1;r<=n;r++)d+=.5*t[r-1][m]+.5*t[r][m]+e}return"start"===i&&(["row","row-reverse"].includes(r)&&(u=.5*l[f]-.5*t[n][f]),["column","column-reverse"].includes(r)&&(u=-.5*l[f]+.5*t[n][f])),"end"===i&&(["row","row-reverse"].includes(r)&&(u=-.5*l[f]+.5*t[n][f]),["column","column-reverse"].includes(r)&&(u=.5*l[f]-.5*t[n][f])),["column","column-reverse"].includes(r)?[u,d]:[d,u]}({currentChildren:J,index:n,flexDirection:y,alignItems:S,justifyContent:M,gap:Z,size:e});t.current.position.x=r,t.current.position.y=i}))}),[Q,J,f,g,y,S,M,b,Z]);const X=i.useMemo((()=>({currentChildren:J,parentUuid:N,addChild(e){K((t=>{const n=[...t],r=t.findIndex((t=>t.uuid===e.uuid));return-1===r?n.push({...e}):n[r]={...e},n.sort(((e,t)=>e.index-t.index))}))},removeChild(e){K((t=>t.filter((t=>t.uuid!==e))))}})),[J,N]);return i.useEffect((()=>{const e=L.current;null!==e&&e.traverse((e=>{e instanceof o.Mesh&&e.material instanceof o.Material&&(e.material.transparent=!0,e.material.opacity=p,e.material.needsUpdate=!0)}))}),[p]),i.createElement(d.Provider,{value:X},i.createElement("group",(0,r.Z)({ref:t},W,{visible:h}),i.createElement("mesh",{renderOrder:B+n},i.createElement("planeBufferGeometry",{args:[f,g]}),i.createElement("meshBasicMaterial",{ref:_,side:o.FrontSide,opacity:p,transparent:!0,depthWrite:!1,map:q})),i.createElement("group",{renderOrder:B+n+1,ref:L},i.Children.map(R,((e,t)=>i.isValidElement(e)?i.createElement("group",{key:t,ref:Q[t]},i.cloneElement(e,{...e.props,childIndex:t})):e)))))}const m=i.forwardRef(h);m.displayName="layer";var f=m}}]);
//# sourceMappingURL=258.5785af65.chunk.js.map