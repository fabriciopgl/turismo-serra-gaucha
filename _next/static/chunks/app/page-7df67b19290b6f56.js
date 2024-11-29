(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2177:function(e,s,l){Promise.resolve().then(l.bind(l,6774))},6774:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return f}});var r=l(7437),t=l(7948),a=l(203),n=l(3652),i=l(749),c=l(9759),d=l(3799),o=l(2354),u=l(5448),x=l(5274),h=l(2265),m=l(1942);function f(){let{user:e,isAnonymous:s}=(0,i.a)(),{favorites:l,fetchFavorites:f,isLoading:g}=(0,c.r)(),{filteredPlaces:j,loading:p}=(0,d.i)(),[b,N]=(0,h.useState)(1),[v,w]=(0,h.useState)(j),[y,C]=(0,h.useState)(""),k=Math.ceil(v.length/9),Z=9*b,_=v.slice(Z-9,Z);return(0,h.useEffect)(()=>{let e=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=e(y.trim().toLowerCase());w(j.filter(l=>{let r=e(l.name.toLowerCase()),t=e(l.description.toLowerCase());return r.includes(s)||t.includes(s)})),N(1)},[y,j]),(0,h.useEffect)(()=>{e&&!s&&0===l.length&&f(e.internalId)},[e,s]),(0,r.jsxs)("div",{className:"container mx-auto flex p-4",children:[(0,r.jsx)(t.Z,{className:"hidden md:block w-1/6 p-4 border-r border-gray-300"}),(0,r.jsxs)("div",{className:"flex-1 p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold",children:"Descubra a Serra Ga\xfacha"}),(0,r.jsx)("div",{className:"w-1/3",children:(0,r.jsx)(a.Z,{onSearch:e=>{C(e)}})})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pt-8",children:p||g?Array.from({length:9}).map((e,s)=>(0,r.jsxs)(o.w,{className:"w-80 h-90 mx-auto shadow-lg animate-pulse",children:[(0,r.jsx)("div",{className:"bg-gray-300 h-[250px] w-full object-cover rounded-t-lg"}),(0,r.jsxs)(u.G,{className:"flex flex-col h-full p-4",children:[(0,r.jsx)("div",{className:"bg-gray-300 h-6 w-3/4 mb-4 rounded"}),(0,r.jsx)("div",{className:"bg-gray-300 h-4 w-full mb-4 rounded"}),(0,r.jsx)("div",{className:"bg-gray-300 h-4 w-5/6 rounded mb-4 flex-1"}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center gap-2",children:[(0,r.jsx)("div",{className:"bg-gray-300 h-10 w-full rounded-lg"}),(0,r.jsx)("div",{className:"bg-gray-300 h-10 w-10 rounded-full"})]})]})]},s)):_.map(e=>(0,r.jsx)(n.Z,{id:e.id,name:e.name,imageUrl:e.image,description:e.description,favorite:null==l?void 0:l.some(s=>s===e.id)},e.id))}),!p&&_.length>0?(0,r.jsxs)("div",{className:"flex justify-center items-center mt-8",children:[(0,r.jsx)(x.A,{startContent:(0,r.jsx)(m.x_l,{}),className:"px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer",onClick:()=>{b>1&&N(b-1)},isDisabled:1===b,children:"Anterior"}),(0,r.jsxs)("span",{className:"px-4",children:[b," de ",k]}),(0,r.jsx)(x.A,{endContent:(0,r.jsx)(m.Z1Y,{}),className:"px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer",onClick:()=>{b<k&&N(b+1)},isDisabled:b===k,children:"Pr\xf3xima"})]}):(0,r.jsx)("div",{className:"flex justify-center items-center mt-4",children:(0,r.jsx)(o.w,{children:(0,r.jsxs)(u.G,{className:"flex flex-row justify-center items-center gap-2",children:["Nenhum resultado encontrado, tente pesquisar novamente"," ",(0,r.jsx)(m.U41,{})]})})})]})]})}},203:function(e,s,l){"use strict";var r=l(7437),t=l(3183),a=l(7446),n=l(1942);s.Z=e=>{let{onSearch:s}=e,l=(0,r.jsx)(t.Y,{"aria-label":"Search",classNames:{inputWrapper:"bg-default-100",input:"text-sm"},endContent:(0,r.jsx)(a.C,{className:"hidden lg:inline-block",keys:["enter"]}),labelPlacement:"outside",placeholder:"Descobrir lugares...",startContent:(0,r.jsx)(n.U41,{}),type:"search",onChange:e=>{s(e.target.value)}});return(0,r.jsx)("div",{className:"hidden lg:flex",children:l})}},3652:function(e,s,l){"use strict";l.d(s,{Z:function(){return u}});var r=l(7437),t=l(9759),a=l(2354),n=l(6778),i=l(5448),c=l(5274),d=l(6463);l(2265);let o=e=>{let{size:s=24,width:l,height:t,strokeWidth:a=1.5,fill:n="none",...i}=e;return(0,r.jsx)("svg",{"aria-hidden":"true",fill:n,focusable:"false",height:s||t,role:"presentation",viewBox:"0 0 24 24",width:s||l,...i,children:(0,r.jsx)("path",{d:"M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:a})})};function u(e){let{id:s,name:l,description:u,imageUrl:x,favorite:h}=e,m=(0,d.useRouter)(),{addFavorite:f,removeFavorite:g,favorites:j}=(0,t.r)();return(0,r.jsxs)(a.w,{className:"w-80 h-90 mx-auto shadow-lg transition-transform transform-gpu hover:scale-105 active:scale-100 cursor-pointer",children:[(0,r.jsx)(n.J,{src:x,alt:l,width:"100%",height:250,className:"object-cover rounded-t-lg"}),(0,r.jsxs)(i.G,{className:"flex flex-col h-full p-4",children:[(0,r.jsx)("h1",{className:"text-xl font-bold text-gray-800 mb-2",children:l}),(0,r.jsx)("section",{className:"text-sm text-gray-600 mb-4 flex-1",children:u}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center gap-2",children:[(0,r.jsx)(c.A,{onClick:()=>{m.push("/detalhes?placeId=".concat(s))},className:"mt-auto bg-green-800 text-white font-semibold py-2 rounded-lg transition-colors duration-300 hover:bg-green-700 w-full",children:"Ver mais"}),(0,r.jsx)(c.A,{isIconOnly:!0,className:"text-default-900/60 data-[hover]:bg-foreground/10",radius:"full",variant:"light",onPress:()=>{(null==j?void 0:j.includes(s))?g(s):f(s)},children:(0,r.jsx)(o,{className:h?"[&>path]:stroke-transparent fill-red-500":"",fill:h?"currentColor":"none",width:void 0,height:void 0})})]})]})]})}}},function(e){e.O(0,[699,100,144,118,581,971,23,744],function(){return e(e.s=2177)}),_N_E=e.O()}]);