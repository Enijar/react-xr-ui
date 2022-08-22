"use strict";(self.webpackChunkreact_xr_ui=self.webpackChunkreact_xr_ui||[]).push([[657],{947:function(e,t,n){n.d(t,{m:function(){return h}});var r=n(462),i=n(294),o=n(477),a=n(149),l=n(561);let c=-1;const s=i.createContext({parentUuid:null,currentChildren:[],addChild(){},removeChild(){}}),u=[0,0];function d(e,t){let{zIndex:n=0,resolution:d=2048,visible:m=!0,autoLayout:h=!0,width:f=1,height:g=1,opacity:p=1,backgroundColor:v="transparent",backgroundImage:x,backgroundSize:w,backgroundPosition:C=u,borderRadius:b=0,borderWidth:k=0,borderColor:E="transparent",flexDirection:y="row",alignItems:M="center",justifyContent:I="center",gap:S=0,textContent:z,textAlign:U="left",justifyText:A=!1,verticalAlign:T="top",color:O="white",fontFamily:P="system-ui, sans-serif",fontSize:Z=.1,fontWeight:D="normal",childIndex:R,children:j,...W}=e;const B=i.useMemo((()=>++c),[]),F=(0,a.w)((e=>e.gl)),L=i.useRef(null),_=i.useRef(null),G=i.useContext(s),N=i.useMemo((()=>o.MathUtils.generateUUID()),[]);i.useEffect((()=>{if(null!==G.parentUuid)return G.addChild({width:f,height:g,index:R,uuid:N}),()=>{G.removeChild(N)}}),[f,g,R,G.parentUuid]);const V=i.useMemo((()=>document.createElement("canvas").getContext("2d")),[]);i.useMemo((()=>{V.canvas.width=Math.max(1,Math.floor(f*d)),V.canvas.height=Math.max(1,Math.floor(g*d))}),[V.canvas,f,g,d]);const X=i.useMemo((()=>{const e=new o.CanvasTexture(V.canvas);return e.anisotropy=F.capabilities.getMaxAnisotropy(),e}),[V.canvas,F.capabilities,f,g]),q=i.useMemo((()=>({backgroundImage:new Image})),[]);i.useMemo((()=>{q.backgroundImage.src=x}),[q.backgroundImage,x]),(0,a.x)((()=>{const e=V.canvas.width,t=V.canvas.height,n=Math.PI/180,r=(e+t)/2,{mapLinear:i}=o.MathUtils;V.globalCompositeOperation="source-over",V.clearRect(0,0,e,t);{const i=Array.isArray(b),o=b,a=b;let[l=0,c=0,s=0,u=0]=i?o:[a,a,a,a];l*=r,c*=r,s*=r,u*=r,V.beginPath(),V.moveTo(l,0),V.lineTo(e-c,0),V.arc(e-c,c,c,270*n,360*n),V.lineTo(e,t-s),V.arc(e-s,t-s,s,0,90*n),V.lineTo(u,t),V.arc(u,t-u,u,90*n,180*n),V.lineTo(0,l),V.arc(l,l,l,180*n,270*n),V.closePath()}V.globalAlpha=p,V.fillStyle=v,V.lineWidth=k*r*2,V.fill();const a=k*r,c=k*r;if(void 0!==x){const n=C[0],r=C[1],o=0,l=0,s=q.backgroundImage.width,u=q.backgroundImage.height,d=s/u,m=e/t;let h=s,f=u;switch(w){case"stretch":h=e,f=t;break;case"contain":h=e-2*a,f=t-2*c,d>m?f=h/d:h=f*d;break;case"cover":h=e-2*a,f=t-2*c,d<m?f=h/d:h=f*d}const g=a+i(n,0,1,0,e-2*a-h),p=c+i(r,0,1,0,t-2*c-f);V.save(),V.clip(),V.drawImage(q.backgroundImage,o,l,s,u,g,p,h,f),V.restore()}void 0!==z&&(l.font=P,l.fontSize=Z*Math.min(e,t),l.align=U,l.vAlign=T,l.justify=A,l.fontWeight=D,V.textBaseline="bottom",V.fillStyle=O,l.drawText(V,z,a,c,e-2*a,t-2*c)),V.globalCompositeOperation="destination-out",V.stroke(),V.globalCompositeOperation="source-over",V.save(),V.clip(),V.strokeStyle=E,V.stroke(),V.restore(),X.needsUpdate=!0}));const[H,J]=i.useState([]),K=i.useMemo((()=>H.map((()=>i.createRef()))),[H]);i.useEffect((()=>{const e={width:f,height:g};e.width-=2*k,e.height-=2*k;let t=[...K];["column","row-reverse"].includes(y)&&t.reverse(),t.forEach(((t,n)=>{const[r,i]=function(e){let{currentChildren:t,index:n,flexDirection:r,alignItems:i,justifyContent:o,gap:a,size:l}=e;const c=t.reduce(((e,t)=>e+t.width),0),s=t.reduce(((e,t)=>e+t.height),0);let u=0,d=0,m=c,h="width",f="height";if(["column","column-reverse"].includes(r)&&(h="height",f="width",m=s),t.length>0&&!["space-between","space-around"].includes(o)&&(m+=a*(t.length-1)),"start"===o){u=.5*l[h]+.5*t[0][h]-l[h],"column"===r&&(u=.5*l[h]+.5*t[0][h]-m);for(let e=1;e<=n;e++)u+=.5*t[e-1][h]+.5*t[e][h]+a}if("center"===o){u=.5*t[0][h]-.5*m;for(let e=1;e<=n;e++)u+=.5*t[e-1][h]+.5*t[e][h]+a}if("end"===o){u=.5*l[h]+.5*t[0][h]-m,"column"===r&&(u=.5*l[h]+.5*t[0][h]-l[h]);for(let e=1;e<=n;e++)u+=.5*t[e-1][h]+.5*t[e][h]+a}if("space-between"===o)if(m>=l[h]){u=.5*l[h]+.5*t[0][h]-l[h];for(let e=1;e<=n;e++)u+=.5*t[e-1][h]+.5*t[e][h]}else{let e=Math.max(0,l[h]-m);0===t.length?e=0:e>0&&(e/=t.length-1),u=.5*l[h]+.5*t[0][h]-l[h];for(let r=1;r<=n;r++)u+=.5*t[r-1][h]+.5*t[r][h]+e}if("space-around"===o)if(m>=l[h]){u=.5*l[h]+.5*t[0][h]-l[h];for(let e=1;e<=n;e++)u+=.5*t[e-1][h]+.5*t[e][h]}else{let e=Math.max(0,l[h]-m);0===t.length?e=0:e>0&&(e/=t.length+1),u=.5*l[h]+.5*t[0][h]-l[h],u+=e;for(let r=1;r<=n;r++)u+=.5*t[r-1][h]+.5*t[r][h]+e}return"start"===i&&(["row","row-reverse"].includes(r)&&(d=.5*l[f]-.5*t[n][f]),["column","column-reverse"].includes(r)&&(d=-.5*l[f]+.5*t[n][f])),"end"===i&&(["row","row-reverse"].includes(r)&&(d=-.5*l[f]+.5*t[n][f]),["column","column-reverse"].includes(r)&&(d=.5*l[f]-.5*t[n][f])),["column","column-reverse"].includes(r)?[d,u]:[u,d]}({currentChildren:H,index:n,flexDirection:y,alignItems:M,justifyContent:I,gap:S,size:e});t.current.position.x=r,t.current.position.y=i}))}),[K,H,f,g,y,M,I,k,S]);const Q=i.useMemo((()=>({currentChildren:H,parentUuid:N,addChild(e){J((t=>{const n=[...t],r=t.findIndex((t=>t.uuid===e.uuid));return-1===r?n.push({...e}):n[r]={...e},n.sort(((e,t)=>e.index-t.index))}))},removeChild(e){J((t=>t.filter((t=>t.uuid!==e))))}})),[H,N]);return i.useEffect((()=>{const e=_.current;null!==e&&e.traverse((e=>{e instanceof o.Mesh&&e.material instanceof o.Material&&(e.material.transparent=!0,e.material.opacity=p,e.material.needsUpdate=!0)}))}),[p]),i.createElement(s.Provider,{value:Q},i.createElement("group",(0,r.Z)({ref:t},W,{visible:m}),i.createElement("mesh",{renderOrder:B+n},i.createElement("planeBufferGeometry",{args:[f,g]}),i.createElement("meshBasicMaterial",{ref:L,side:o.FrontSide,opacity:p,transparent:!0,depthWrite:!1,map:X})),i.createElement("group",{renderOrder:B+n+1,ref:_},i.Children.map(j,((e,t)=>i.isValidElement(e)?i.createElement("group",{key:t,ref:K[t]},i.cloneElement(e,{...e.props,childIndex:t})):e)))))}const m=i.forwardRef(d);m.displayName="layer";var h=m},261:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(294),i=n(947);function o(e){let{textContent:t,selected:n,onClick:o,fontSize:a,width:l,height:c,fontFamily:s="system-ui, sans-serif"}=e;const[u,d]=r.useState(!1);return r.createElement(i.m,{width:l,height:c,backgroundColor:u||n?"white":"#111111",color:u||n?"#111111":"white",textContent:t,fontFamily:s,fontSize:a,textAlign:"center",verticalAlign:"middle",onPointerOver:()=>d(!0),onPointerOut:()=>d(!1),onClick:e=>{o(e),d(!1)}})}},291:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(294),i=n(369),o=n(659),a=n(846),l=n(989),c=n(581);function s(e){let{children:t}=e;const n=r.useMemo((()=>new i.d(6,6,6,10,10,10).translate(0,3,0)),[]);return r.createElement(o.de,{legacy:!0,flat:!0,linear:!0,gl:{alpha:!1}},r.createElement("color",{args:["#333333"],attach:"background"}),r.createElement("lineSegments",{geometry:n},r.createElement("lineBasicMaterial",{color:"#c0c0c0"})),r.createElement(l.c,{makeDefault:!0,position:[0,1.6,0]}),r.createElement(c.z,{makeDefault:!0,target:[0,1,-1.8]}),r.createElement("ambientLight",null),r.createElement(a.M,null),r.createElement("group",{position:[0,1,-1.88]},t))}},657:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(294),i=n(291),o=n(947),a=n(261);function l(){const e=r.useMemo((()=>({xl:.75,m:.5,s:.25})),[]),[t,n]=r.useState("m");return r.createElement(i.Z,null,r.createElement(o.m,{width:1,height:.1,gap:.05,"position-y":.5},r.createElement(a.Z,{width:.1,height:.1,fontSize:.5,textContent:"XL",selected:"xl"===t,onClick:()=>n("xl")}),r.createElement(a.Z,{width:.1,height:.1,fontSize:.5,textContent:"M",selected:"m"===t,onClick:()=>n("m")}),r.createElement(a.Z,{width:.1,height:.1,fontSize:.5,textContent:"S",selected:"s"===t,onClick:()=>n("s")})),r.createElement(o.m,{width:e[t],height:e[t],backgroundColor:"crimson"}))}}}]);
//# sourceMappingURL=657.1e6989c3.chunk.js.map