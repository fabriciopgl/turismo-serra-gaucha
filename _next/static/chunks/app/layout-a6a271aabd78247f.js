(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{127:function(e,s,n){Promise.resolve().then(n.bind(n,8121)),Promise.resolve().then(n.bind(n,6776)),Promise.resolve().then(n.t.bind(n,966,23)),Promise.resolve().then(n.t.bind(n,4332,23))},8121:function(e,s,n){"use strict";n.d(s,{default:function(){return f}});var t=n(7437),r=n(749),l=n(9759),a=n(2265),i=n(8472),o=n(2649);let c=(0,a.createContext)(void 0),d="site_visited",u=e=>{let{children:s}=e,[n,r]=(0,a.useState)(!1),l=async()=>{if(!n){if(o.Z.get(d)){console.log("Log j\xe1 enviado recentemente. Evitando novo envio.");return}try{let e={...(await i.Z.get("https://ipinfo.io/json?token=6cf47125441753")).data,userAgent:navigator.userAgent,referrer:document.referrer||"Direto",screenResolution:"".concat(window.screen.width,"x").concat(window.screen.height),timestamp:new Date().toISOString()};console.log("Log de acesso enviado:",e),await i.Z.post("https://script.google.com/macros/s/AKfycbyIoQY8ojiz1nsVEjFbKirfsG44XxpsQOAfW6C1fNCSY799yxo49gnTPICJ20_AdXfjqg/exec",e,{headers:{"Content-Type":"text/plain;charset=utf-8"}}),o.Z.set(d,"true",{expires:3/24}),r(!0)}catch(e){console.error("Erro ao enviar log:",e)}}};return(0,a.useEffect)(()=>{l()},[]),(0,t.jsx)(c.Provider,{value:{logHomeVisit:l},children:s})};var h=n(3799),x=n(92),m=n(9512),j=n(6463),f=e=>{let{children:s,themeProps:n}=e,i=(0,j.useRouter)(),[o,c]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{c(!0)},[]),o)?(0,t.jsx)(x.w,{navigate:i.push,children:(0,t.jsx)(m.f,{disableTransitionOnChange:!0,...n,children:(0,t.jsx)(r.H,{children:(0,t.jsx)(l.s,{children:(0,t.jsx)(h.Y,{children:(0,t.jsx)(u,{children:s})})})})})}):null}},6776:function(e,s,n){"use strict";n.d(s,{default:function(){return R}});var t=n(7437),r=n(9862),l=n(6425),a=n(3891),i=n(8319),o=n(5274),c=n(6254),d=n(7874),u=n(949),h=n(7045),x=n(6249),m=n(2428),j=n(196),f=n(1514),g=n(8826),p=n(749),v=n(6463),b=n(2265),C=n(1942),S=n(7948),k=n(6428),N=n(583),y=n(5256),O=n(1025),w=n(7274),P=n(8127),A=n(3726),_=n(7971),E=e=>{let{onClose:s,isOpen:n}=e,[r,l]=(0,b.useState)((()=>{let e=localStorage.getItem("selectValue");return e?JSON.parse(e):["all"]})()),[a,i]=(0,b.useState)((()=>{let e=localStorage.getItem("sliderValue");return e?JSON.parse(e):100})()),c=()=>{localStorage.setItem("selectValue",JSON.stringify(r)),localStorage.setItem("sliderValue",JSON.stringify(a))},d=()=>{c(),s()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(k.R,{isOpen:n,onOpenChange:()=>{s()},placement:"center",size:"lg",children:(0,t.jsx)(N.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.k,{className:"flex flex-col gap-1",children:"Prefer\xeancias"}),(0,t.jsxs)(O.I,{className:"gap-5",children:[(0,t.jsxs)(w.g,{disallowEmptySelection:!0,labelPlacement:"outside",defaultSelectedKeys:r,label:"Priorizar empreendimentos",children:[(0,t.jsx)(P.R,{title:"Pequenos",onClick:()=>l(["small"])},"small"),(0,t.jsx)(P.R,{title:"M\xe9dios",onClick:()=>l(["medium"])},"medium"),(0,t.jsx)(P.R,{title:"Grandes",onClick:()=>l(["large"])},"large"),(0,t.jsx)(P.R,{title:"Todos",onClick:()=>l(["all"])},"all")]}),(0,t.jsx)(A.L,{step:10,minValue:10,maxValue:1e3,hideValue:!0,defaultValue:a,onChange:e=>i(Number(e)),label:"Mostrar locais em um raio de ".concat(a," km")})]}),(0,t.jsxs)(_.R,{children:[(0,t.jsx)(o.A,{color:"danger",variant:"light",onPress:e,startContent:(0,t.jsx)(C.aHS,{}),children:"Cancelar"}),(0,t.jsx)(o.A,{startContent:(0,t.jsx)(C.TvB,{}),color:"primary",onPress:d,children:"Salvar"})]})]})})})})};function R(){let[e,s]=(0,b.useState)(!1),[n,k]=(0,b.useState)(),[N,y]=(0,b.useState)(!1),O=(0,v.usePathname)(),{user:w,isAnonymous:P,handleLogout:A}=(0,p.a)();(0,b.useEffect)(()=>{O.includes("sobre")?k("sobre"):O.includes("favoritos")?k("favoritos"):k("home")},[O]);let _=(0,b.useMemo)(()=>(0,t.jsx)("div",{children:(0,t.jsx)(C.Fm7,{})}),[]),R=(0,b.useMemo)(()=>(0,t.jsx)("div",{children:(0,t.jsx)(C.aHS,{})}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.R,{onMenuOpenChange:s,isBordered:!0,className:"w-full sticky top-0 z-40 backdrop-blur-lg backdrop-saturate-150 bg-background/70",children:[(0,t.jsxs)(l.H,{children:[(0,t.jsx)(C.hRB,{className:"text-3xl"}),(0,t.jsx)("p",{className:"font-bold text-2xl",style:{fontFamily:"'Lustria', sans-serif"},children:"Comino"})]}),(0,t.jsxs)(a.U,{className:"hidden sm:flex gap-4 justify-center",children:[(0,t.jsx)(i.k,{children:(0,t.jsx)(o.A,{as:c.O,href:"/",variant:"home"===n?"solid":"light",startContent:(0,t.jsx)(C.xng,{}),radius:"lg",children:"Home"})}),(0,t.jsx)(i.k,{children:(0,t.jsx)(o.A,{as:c.O,href:"/favoritos",variant:"favoritos"===n?"solid":"light",startContent:(0,t.jsx)(C.$0H,{}),radius:"lg",children:"Favoritos"})}),(0,t.jsx)(i.k,{children:(0,t.jsx)(o.A,{as:c.O,href:"/sobre",variant:"sobre"===n?"solid":"light",startContent:(0,t.jsx)(C.LL$,{}),radius:"lg",children:"Sobre"})})]}),(0,t.jsx)(a.U,{as:"div",justify:"end",children:(0,t.jsxs)(d.F,{placement:"bottom-end",children:[(0,t.jsx)(u.S,{children:(0,t.jsx)(h.h,{isBordered:!0,as:"button",className:"transition-transform",color:P?"default":"success",name:"".concat(null==w?void 0:w.given_name," ").concat(null==w?void 0:w.family_name),size:"sm",src:P?"":null==w?void 0:w.picture,fallback:(0,t.jsx)(C.Xws,{})})}),(0,t.jsxs)(x.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,t.jsxs)(m.W,{className:"h-14 gap-2",children:[(0,t.jsx)("p",{className:"font-semibold",children:"Bem vindo,"}),(0,t.jsx)("p",{className:"font-semibold",children:"".concat(null==w?void 0:w.given_name," ").concat(null==w?void 0:w.family_name)})]},"profile"),(0,t.jsx)(m.W,{startContent:(0,t.jsx)(C.rU2,{}),onClick:()=>{y(!0)},children:"Prefer\xeancias"},"preferences"),(0,t.jsx)(m.W,{startContent:(0,t.jsx)(C.g_g,{}),onClick:()=>window.open("https://github.com/fabriciopgl/turismo-serra-gaucha/blob/main/README.md","_blank"),children:"Ajuda"},"help"),(0,t.jsx)(m.W,{onClick:A,startContent:(0,t.jsx)(C.fHX,{}),color:P?"success":"danger",children:P?"Fazer login":"Log Out"},"logout")]})]})}),(0,t.jsx)(j.L,{"aria-label":e?"Close menu":"Open menu",className:"sm:hidden",icon:e?R:_}),(0,t.jsx)(f.$,{children:(0,t.jsx)(g.h,{children:(0,t.jsx)(S.Z,{className:"w-full p-4"})})})]}),(0,t.jsx)(E,{isOpen:N,onClose:()=>{y(!1)}})]})}},4332:function(){}},function(e){e.O(0,[733,228,699,100,144,770,581,971,23,744],function(){return e(e.s=127)}),_N_E=e.O()}]);