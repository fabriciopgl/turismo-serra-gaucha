(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{793:function(e,s,t){Promise.resolve().then(t.bind(t,9082)),Promise.resolve().then(t.bind(t,6776)),Promise.resolve().then(t.t.bind(t,7017,23)),Promise.resolve().then(t.t.bind(t,5348,23)),Promise.resolve().then(t.t.bind(t,4332,23))},9082:function(e,s,t){"use strict";var n=t(7437),r=t(6608),a=t(103),l=t(9512),i=t(6463),o=t(2265);s.default=e=>{let{children:s,themeProps:t}=e,c=(0,i.useRouter)(),[d,u]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{u(!0)},[]),d)?(0,n.jsx)(a.w,{navigate:c.push,children:(0,n.jsx)(l.f,{disableTransitionOnChange:!0,...t,children:(0,n.jsx)(r.H,{children:s})})}):null}},7948:function(e,s,t){"use strict";var n=t(7437),r=t(2265),a=t(1942);s.Z=e=>{let{className:s}=e,[t,l]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:"".concat(s),children:[(0,n.jsxs)("h2",{className:"flex text-xl font-bold mb-4 gap-2 justify-start items-center",children:[(0,n.jsx)(a.ulB,{})," Filtros"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-2",children:"Tipo:"}),(0,n.jsxs)("select",{className:"block w-full p-2 border rounded",children:[(0,n.jsx)("option",{value:"",children:"Todos"}),(0,n.jsx)("option",{value:"restaurante",children:"Restaurantes"}),(0,n.jsx)("option",{value:"atracao",children:"Atra\xe7\xf5es"}),(0,n.jsx)("option",{value:"atracao",children:"Rota"})]})]}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("label",{className:"block mb-2",children:"Avalia\xe7\xe3o:"}),(0,n.jsxs)("select",{className:"block w-full p-2 border rounded",children:[(0,n.jsx)("option",{value:"",children:"Todas"}),(0,n.jsx)("option",{value:"alta",children:"Alta"}),(0,n.jsx)("option",{value:"media",children:"M\xe9dia"}),(0,n.jsx)("option",{value:"media",children:"Baixa"})]})]})]})}},6776:function(e,s,t){"use strict";t.d(s,{default:function(){return P}});var n=t(7437),r=t(9862),a=t(6425),l=t(3891),i=t(8319),o=t(3499),c=t(551),d=t(209),u=t(949),x=t(7045),m=t(9786),h=t(400),j=t(196),f=t(1514),v=t(8826),g=t(6608),p=t(6463),b=t(2265),y=t(1942),N=t(7948),C=t(6428),k=t(583),w=t(5256),S=t(1025),A=t(7971),O=e=>{let{onClose:s,isOpen:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(C.R,{isOpen:t,onOpenChange:()=>{s()},placement:"center",children:(0,n.jsx)(k.A,{children:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.k,{className:"flex flex-col gap-1",children:"Prefer\xeancias"}),(0,n.jsx)(S.I,{}),(0,n.jsxs)(A.R,{children:[(0,n.jsx)(o.A,{color:"danger",variant:"light",onPress:e,startContent:(0,n.jsx)(y.aHS,{}),children:"Cancelar"}),(0,n.jsx)(o.A,{startContent:(0,n.jsx)(y.TvB,{}),color:"primary",onPress:e,children:"Salvar"})]})]})})})})};function P(){let[e,s]=(0,b.useState)(!1),[t,C]=(0,b.useState)(),[k,w]=(0,b.useState)(!1),S=(0,p.usePathname)(),{user:A,isAnonymous:P,handleLogout:_}=(0,g.a)();(0,b.useEffect)(()=>{S.includes("sobre")?C("sobre"):S.includes("favoritos")?C("favoritos"):C("home")},[S]);let B=(0,b.useMemo)(()=>(0,n.jsx)("div",{children:(0,n.jsx)(y.Fm7,{})}),[]),E=(0,b.useMemo)(()=>(0,n.jsx)("div",{children:(0,n.jsx)(y.aHS,{})}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.R,{onMenuOpenChange:s,isBordered:!0,className:"w-full sticky top-0 z-40 backdrop-blur-lg backdrop-saturate-150 bg-background/70",children:[(0,n.jsxs)(a.H,{children:[(0,n.jsx)(y.hRB,{className:"text-3xl"}),(0,n.jsx)("p",{className:"font-bold text-2xl",style:{fontFamily:"'Lustria', sans-serif"},children:"Comino"})]}),(0,n.jsxs)(l.U,{className:"hidden sm:flex gap-4 justify-center",children:[(0,n.jsx)(i.k,{children:(0,n.jsx)(o.A,{as:c.O,href:"/",variant:"home"===t?"solid":"light",startContent:(0,n.jsx)(y.xng,{}),radius:"lg",children:"Home"})}),(0,n.jsx)(i.k,{children:(0,n.jsx)(o.A,{as:c.O,href:"/favoritos",variant:"favoritos"===t?"solid":"light",startContent:(0,n.jsx)(y.$0H,{}),radius:"lg",children:"Favoritos"})}),(0,n.jsx)(i.k,{children:(0,n.jsx)(o.A,{as:c.O,href:"/sobre",variant:"sobre"===t?"solid":"light",startContent:(0,n.jsx)(y.LL$,{}),radius:"lg",children:"Sobre"})})]}),(0,n.jsx)(l.U,{as:"div",justify:"end",children:(0,n.jsxs)(d.F,{placement:"bottom-end",children:[(0,n.jsx)(u.S,{children:(0,n.jsx)(x.h,{isBordered:!0,as:"button",className:"transition-transform",color:P?"default":"success",name:"".concat(null==A?void 0:A.given_name," ").concat(null==A?void 0:A.family_name),size:"sm",src:P?"":null==A?void 0:A.picture,fallback:(0,n.jsx)(y.Xws,{})})}),(0,n.jsxs)(m.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,n.jsxs)(h.W,{className:"h-14 gap-2",children:[(0,n.jsx)("p",{className:"font-semibold",children:"Bem vindo,"}),(0,n.jsx)("p",{className:"font-semibold",children:"".concat(null==A?void 0:A.given_name," ").concat(null==A?void 0:A.family_name)})]},"profile"),(0,n.jsx)(h.W,{startContent:(0,n.jsx)(y.rU2,{}),onClick:()=>{w(!0)},children:"Prefer\xeancias"},"preferences"),(0,n.jsx)(h.W,{startContent:(0,n.jsx)(y.g_g,{}),children:"Ajuda"},"help"),(0,n.jsx)(h.W,{onClick:_,startContent:(0,n.jsx)(y.fHX,{}),color:P?"success":"danger",children:P?"Fazer login":"Log Out"},"logout")]})]})}),(0,n.jsx)(j.L,{"aria-label":e?"Close menu":"Open menu",className:"sm:hidden",icon:e?E:B}),(0,n.jsx)(f.$,{children:(0,n.jsx)(v.h,{children:(0,n.jsx)(N.Z,{className:"w-full p-4"})})})]}),(0,n.jsx)(O,{isOpen:k,onClose:()=>{w(!1)}})]})}},6608:function(e,s,t){"use strict";t.d(s,{H:function(){return h},a:function(){return m}});var n=t(7437),r=t(3499),a=t(8472),l=t(9714),i=t(2265),o=t(1942);function c(e){let{onSuccess:s}=e,t="805846529075-v4lkha22l3le1v2di45v1f79i3s27tp9.apps.googleusercontent.com",c="https://script.google.com/macros/s/AKfycbzhHrNvPvcGJLaiMevPmlWYg5GMQv1WLZ-VOqqEARvLetBSDc2P1-beB-WDniwUjCbtkg/exec";return(0,i.useEffect)(()=>{let e=async e=>{let t=(0,l.o)(e.credential);try{let e=await n(t);t.internalId=e,s(t)}catch(e){console.error("Error registering user:",e)}},n=async e=>{try{let s=await a.Z.post(c,e,{headers:{"Content-Type":"text/plain;charset=utf-8"}});return Number(s.data)}catch(e){console.error("Error sending data to Google Apps Script:",e)}},r=document.createElement("script");return r.src="https://accounts.google.com/gsi/client",r.async=!0,r.defer=!0,r.onload=()=>{window.google.accounts.id.initialize({client_id:t,callback:e}),window.google.accounts.id.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"})},document.body.appendChild(r),()=>{document.body.removeChild(r)}},[t,s,c]),(0,n.jsxs)("div",{className:"relative flex min-h-screen items-center justify-center bg-gray-100",children:[(0,n.jsx)("img",{alt:"Background",src:"/_next/static/media/waterfall_background.f8b95f9a.jpg",className:"absolute inset-0 w-full h-full object-cover opacity-50 z-0"}),(0,n.jsxs)("div",{className:"relative bg-white p-8 rounded-lg shadow-lg w-96 z-10",children:[(0,n.jsxs)("div",{className:"absolute top-4 left-4 flex items-center text-xl font-semibold text-gray-700 p-2",children:[(0,n.jsx)(o.hRB,{className:"text-2xl mr-2"}),(0,n.jsx)("span",{style:{fontFamily:"'Lustria', sans-serif"},children:"Comino"})]}),(0,n.jsx)("div",{id:"signInDiv",className:"mt-10"}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("hr",{className:"flex-1 border-t border-gray-300"}),(0,n.jsx)("span",{className:"mx-4 text-gray-500",children:"ou"}),(0,n.jsx)("hr",{className:"flex-1 border-t border-gray-300"})]}),(0,n.jsx)(r.A,{startContent:(0,n.jsx)(o.Xws,{}),onClick:()=>s("anonymous"),variant:"bordered",className:"w-full py-2 hover:bg-blue-50 hover:bg-opacity-80 border-[1px] border-[#dadce0] text-sm rounded-md",style:{fontFamily:"'Google Sans', Arial, sans-serif"},children:(0,n.jsx)("span",{className:"flex-1 text-center",children:"Acessar sem fazer login"})})]})]})}var d=t(2649),u=t(6463);let x=(0,i.createContext)(void 0),m=()=>{let e=(0,i.useContext)(x);if(!e)throw Error("useAuth must be used within an AuthProvider");return e},h=e=>{let{children:s}=e,[t,r]=(0,i.useState)(null),[a,l]=(0,i.useState)(!1),[o,m]=(0,i.useState)(!0),[h,j]=(0,i.useState)(!0),f=(0,u.useRouter)();(0,i.useEffect)(()=>{let e=d.Z.get("userCredentials");if(e){let s=JSON.parse(e);r(s),l(!0),m("anonymous"===s.sub)}else m(!0);j(!1)},[]);let v=e=>{if("anonymous"===e){let e={sub:"anonymous",internalId:0,name:"Visitante",given_name:"Visitante",family_name:"do Comino",email:"visitante@example.com",picture:""};r(e),m(!0),d.Z.set("userCredentials",JSON.stringify(e),{expires:1})}else r(e),m(!1),d.Z.set("userCredentials",JSON.stringify(e),{expires:1});l(!0),f.push("/")};return a||h?(0,n.jsx)(x.Provider,{value:{user:t,isLoggedIn:a,isAnonymous:o,handleLoginSuccess:v,handleLogout:()=>{d.Z.remove("userCredentials"),r(null),m(!0),l(!1),f.push("/")}},children:s}):(0,n.jsx)(c,{onSuccess:v})}},4332:function(){}},function(e){e.O(0,[954,228,699,975,995,971,23,744],function(){return e(e.s=793)}),_N_E=e.O()}]);