(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{7949:function(e,t,s){Promise.resolve().then(s.bind(s,4101))},4101:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var l=s(7437),a=s(2265),n=s(1942),r=e=>{let{images:t}=e,[s,r]=(0,a.useState)(0);return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,l.jsx)("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:"translateX(-".concat(100*s,"%)")},children:t.map((e,t)=>(0,l.jsx)("div",{className:"w-full h-full flex justify-center items-center flex-shrink-0",children:(0,l.jsx)("img",{src:e,alt:"Imagem ".concat(t+1),className:"w-full h-full object-contain"})},t))})}),(0,l.jsx)("button",{onClick:()=>{r(e=>(e-1+t.length)%t.length)},className:"absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-lg z-10",children:(0,l.jsx)(n.bUI,{})}),(0,l.jsx)("button",{onClick:()=>{r(e=>(e+1)%t.length)},className:"absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-lg z-10",children:(0,l.jsx)(n.Dli,{})}),(0,l.jsx)("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",children:t.map((e,t)=>(0,l.jsx)("div",{onClick:()=>r(t),className:"w-3 h-3 rounded-full bg-white cursor-pointer ".concat(s===t?"bg-opacity-100":"bg-opacity-50")},t))})]})},c=s(3799),i=s(6463),o=()=>{let[e,t]=(0,a.useState)(),{places:s,placeDetails:o,loading:u,fetchPlaceDetails:d}=(0,c.i)(),h=(0,i.useSearchParams)().get("placeId");return(0,a.useEffect)(()=>{s.length>0&&t(s.find(e=>e.id===Number(h)))},[h,s]),(0,a.useEffect)(()=>{(async()=>{d(h||"")})()},[h]),(0,l.jsxs)("div",{className:"container mx-auto p-4",children:[(0,l.jsx)("div",{className:"relative h-[50vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[50vh] portrait:h-[15vh] mb-8",children:u?(0,l.jsx)("div",{className:"w-full h-full bg-gray-200 animate-pulse rounded-lg",children:(0,l.jsx)("div",{className:"w-full h-full bg-gray-300 rounded-lg"})}):(0,l.jsx)(r,{images:(null==o?void 0:o.carouselImages)||[]})}),(0,l.jsx)("h1",{className:"text-4xl font-bold mb-4",children:null==e?void 0:e.name}),(0,l.jsxs)("div",{className:"flex items-center space-x-2 mb-4",children:[(0,l.jsx)(n.ekl,{className:"text-red-500"}),(0,l.jsx)("span",{className:"text-lg",children:null==o?void 0:o.location})]}),(0,l.jsx)("p",{className:"text-lg mb-8",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sapien eu ligula blandit consequat. Integer eget dolor in lacus posuere volutpat."}),(null==e?void 0:e.description)&&(0,l.jsx)("div",{className:"w-full h-[400px] mb-8"})]})}},3799:function(e,t,s){"use strict";s.d(t,{Y:function(){return c},i:function(){return i}});var l=s(7437),a=s(8472),n=s(2265);let r=(0,n.createContext)(void 0),c=e=>{let{children:t}=e,[s,c]=(0,n.useState)([]),[i,o]=(0,n.useState)(void 0),[u,d]=(0,n.useState)(!0),[h,m]=(0,n.useState)(null);(0,n.useEffect)(()=>{(async()=>{d(!0),m(null);try{let e=await fetch("https://script.google.com/macros/s/AKfycbwAkmGG9Ehou1Q1tDQ4vD2ugnyARx0g_NpiIPuv7mpdvyDkL9dpt1zTkGFUEJvjtWyDyQ/exec");if(!e.ok)throw Error("Error fetching data: ".concat(e.status));let t=await e.json();c(t.data||[])}catch(e){m(e.message)}finally{d(!1)}})()},[]);let f=async e=>{try{d(!0);let t=await a.Z.get("".concat("https://script.google.com/macros/s/AKfycbwwy6xZlXO9Z8Gdv-B24B_B6OtMVfUv_kbs6WDlOxpa8c0ddIUOPe4kCg7SinS01n1buw/exec","?placeId=").concat(e));o(t.data[0])}catch(e){console.error("Error fetching place details")}finally{d(!1)}};return(0,l.jsx)(r.Provider,{value:{places:s,placeDetails:i,loading:u,error:h,fetchPlaceDetails:f},children:t})},i=()=>{let e=(0,n.useContext)(r);if(!e)throw Error("usePlacesContext deve ser usado dentro de PlacesProvider");return e}}},function(e){e.O(0,[699,100,971,23,744],function(){return e(e.s=7949)}),_N_E=e.O()}]);