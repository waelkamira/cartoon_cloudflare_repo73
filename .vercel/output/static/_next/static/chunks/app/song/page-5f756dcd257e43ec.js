(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1343],{5875:function(e,t,l){Promise.resolve().then(l.bind(l,749))},749:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var s=l(7437),i=l(2265),a=l(6393);l(2954);var r=l(3145),o=l(705),n=l(8737),c=l(8827),d=l(7045),m=l(6653),u=l(4312),h=l(6328);function x(){var e,t,l,x;let[g,p]=(0,i.useState)(!1),[f,w]=(0,i.useState)([]),[v,j]=(0,i.useState)("");async function b(){let e=await fetch("/api/songs?songName=".concat(v)),t=await (null==e?void 0:e.json());e.ok&&w(t)}return(0,i.useEffect)(()=>{(()=>{{let e=new URLSearchParams(window.location.search).get("songName");e&&e!==v&&j(e)}})()},[v]),(0,i.useEffect)(()=>{v&&b()},[v]),(0,s.jsxs)("div",{className:"bg-one",children:[(0,s.jsxs)("div",{className:"relative w-full sm:p-4 lg:p-8 rounded-lg bg-one ",children:[(0,s.jsxs)("div",{className:"absolute flex flex-col items-start gap-2 z-40 top-2 right-2 sm:top-4 sm:right-4 xl:right-12 xl:top-12 ",children:[(0,s.jsx)(n.Ogj,{className:"p-1 rounded-lg text-3xl lg:text-5xl text-white cursor-pointer z-50  bg-two",onClick:()=>{p(!g)}}),g&&(0,s.jsx)(o.Z,{setIsOpen:p})]}),(0,s.jsx)("div",{className:"relative w-full h-44 sm:h-[500px] overflow-hidden shadow-lg shadow-one",children:(null===(e=f[0])||void 0===e?void 0:e.songImage)?(0,s.jsx)(r.default,{priority:!0,src:null===(t=f[0])||void 0===t?void 0:t.songImage,layout:"fill",objectFit:"cover",alt:"photo"}):(0,s.jsx)(c.Z,{})}),(0,s.jsx)("div",{className:"flex flex-col justify-start items-center w-full gap-4 my-2 px-2",children:(0,s.jsxs)("h1",{className:"grow text-sm lg:text-2xl w-full text-white",children:[(0,s.jsx)("span",{className:"text-gray-500 ml-2",children:"#"}),"اسم الأغنية: ",(0,s.jsx)("span",{className:"",children:null===(l=f[0])||void 0===l?void 0:l.songName}),(0,s.jsx)(m.default,{render:null===(x=f[0])||void 0===x?void 0:x.songName})]})}),(0,s.jsxs)("div",{className:"my-2 p-2",children:[(null==f?void 0:f.length)===0&&(0,s.jsx)(a.Z,{myMessage:"\uD83D\uDE09لا يوجد نتائج لعرضها"}),(0,s.jsx)("div",{className:"flex gap-8 justify-center items-center w-full",children:(null==f?void 0:f.length)>0&&(null==f?void 0:f.map(e=>(0,s.jsx)("div",{className:" flex flex-col items-center justify-center rounded-lg overflow-hidden w-full",children:(0,s.jsx)(h.Z,{videoUrl:e.songLink,image:null==e?void 0:e.songImage,episodeName:null==e?void 0:e.songName})},e.songLink)))})]})]}),(0,s.jsx)(d.default,{vertical:!0,title:!1,image:!1}),(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(u.U,{})})]})}},7045:function(e,t,l){"use strict";l.d(t,{default:function(){return h}});var s=l(7437),i=l(8779);l(466);var a=l(9376),r=l(2265),o=l(4481),n=l(3145),c=l(6393),d=l(8737),m=l(705);l(2954);var u=l(2744);function h(e){let{vertical:t=!1,image:l=!0,title:h=!0}=e,[x,g]=(0,r.useState)(1),[p,f]=(0,r.useState)([]),{newSong:w,deletedSong:v,dispatch:j}=(0,r.useContext)(o.t),b=(0,a.useRouter)(),[y,N]=(0,r.useState)(!1),[k,S]=(0,r.useState)(!0),[P,_]=(0,r.useState)(""),[E,L]=(0,i.E)({loop:!1,mode:"free",vertical:!!t,rtl:!t,slides:{perView:()=>{var e;return(null===(e=window)||void 0===e?void 0:e.innerWidth)>768||t?3:2},spacing:5},slideChanged(e){e.track.details.rel>=e.track.details.slides.length-3&&g(e=>e+1)}});async function R(){try{let e=await fetch("/api/songs?page=".concat(x,"&limit=4&random=true")),t=await e.json();if(e.ok){let e=new Set(p.map(e=>e.id)),l=t.filter(t=>!e.has(t.id));l.length>0&&f(e=>[...e,...l])}}catch(e){console.error("Error fetching songs:",e)}}(0,r.useEffect)(()=>{R();let e=setTimeout(()=>{S(!1)},9e4);return()=>clearTimeout(e)},[w,v,x]),(0,r.useEffect)(()=>{L.current&&L.current.update()},[p,w]);let T=e=>{_(window.location.pathname+window.location.search),b.push("/song?songName=".concat(e)),setTimeout(()=>{let e=window.location.pathname+window.location.search;if(e!==P&&e.includes("/song")){var t,l;null===(l=window)||void 0===l||null===(t=l.location)||void 0===t||t.reload()}},3e3)};return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full overflow-x-hidden p-2 bg-one",children:[t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsxs)("div",{className:"absolute flex flex-col items-start gap-2 z-40 top-2 right-2 sm:top-4 sm:right-4 xl:right-12 xl:top-12",children:[(0,s.jsx)(d.Ogj,{className:"p-1 rounded-lg text-3xl lg:text-5xl text-white cursor-pointer z-50 bg-two",onClick:()=>N(!y)}),y&&(0,s.jsx)(m.Z,{setIsOpen:N})]})]}):"",l?(0,s.jsxs)("div",{className:"relative h-44 w-48 sm:h-[300px] sm:w-80",children:[(0,s.jsx)(n.default,{src:"https://i.imgur.com/rRBpVhp.png",layout:"fill",objectFit:"cover",alt:"أغاني أطفال"})," "]}):"",h?(0,s.jsx)("h1",{className:"w-full text-start p-2 text-white my-2",children:"أغاني أطفال"}):"",k&&(0,s.jsxs)("div",{className:"relative w-full flex items-center justify-between text-white h-12  text-2xl px-2 ",children:[(0,s.jsx)(u.eDK,{}),(0,s.jsx)("h6",{className:"text-sm w-full text-start",children:"اسحب لمزيد من الأغاني"})]}),(0,s.jsx)("div",{ref:E,className:(t?"h-[600px]":" h-fit")+" keen-slider py-2 shadow-lg overflow-scroll rounded-md",children:0===p.length?(0,s.jsx)(c.Z,{}):null==p?void 0:p.map(e=>(0,s.jsxs)("div",{className:"keen-slider__slide snap-center flex flex-col items-center justify-start flex-shrink-0 px-2 w-full",onClick:()=>{j({type:"KIDS_SONG_NAME",payload:null==e?void 0:e.songName}),T(null==e?void 0:e.songName)},children:[(0,s.jsx)("div",{className:(t?"w-72 h-44":"w-40 h-[90px]")+" relative w-24 h-32 sm:w-full sm:h-64 rounded-md overflow-hidden hover:cursor-pointer",children:(0,s.jsx)(n.default,{src:null==e?void 0:e.songImage,layout:"fill",objectFit:"cover",alt:null==e?void 0:e.songName})}),(0,s.jsx)("h1",{className:"text-white text-center m-2 text-[10px] sm:text-[15px] w-full line-clamp-2 font-bold",children:null==e?void 0:e.songName})]},null==e?void 0:e.id))})]})}},4312:function(e,t,l){"use strict";l.d(t,{U:function(){return n}});var s=l(7437),i=l(2265),a=l(6595),r=l(9064),o=l(1759);let n=()=>{let[e,t]=(0,i.useState)(!1),[l,n]=(0,i.useState)({name:"",email:"",message:""}),c=(0,i.useRef)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:" btn w-fit tex-lg sm:text-xl text-white p-2 cursor-pointer rounded-lg shadow-lg",onClick:()=>t(!e),children:e?"إغلاق":"الإبلاغ عن رابط لا يعمل"}),(0,s.jsx)("div",{className:"w-full bg-one",children:e&&(0,s.jsxs)("form",{ref:c,onSubmit:e=>{e.preventDefault();let t=new Promise(async(e,t)=>{a.ZP.sendForm("service_1kwdc1b","template_ob2d528",c.current,{publicKey:"sz-p0MH13eKBG6rFP"}).then(()=>{console.log("SUCCESS!")},e=>{console.log("FAILED...",e.text)})?(e(),n({name:"",email:"",message:""})):t()});r.ZP.promise(t,{loading:"Sending ...",success:"تم إرسال رسالتك بنجاح",error:"حدث خطأ ما حاول مرة أخرى"})},className:"flex flex-col items-center gap-4",children:[(0,s.jsxs)("div",{className:" w-full flex flex-col sm:flex-row justify-between items-center lg:gap-16 sm:gap-8",children:[(0,s.jsxs)("div",{className:"w-full flex flex-col grow",children:[(0,s.jsxs)("label",{className:"tex-lg sm:text-xl text-white p-2 ",children:["الإسم:"," "]}),(0,s.jsx)("input",{value:null==l?void 0:l.name,onChange:e=>n({...l,name:e.target.value}),required:!0,type:"text",name:"user_name",placeholder:"اسمك",className:"p-2 rounded-lg outline-none shadow-none border-2 focus:border-primary border-solid tex-lg sm:text-xl "})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col grow",children:[(0,s.jsxs)("label",{className:"tex-lg sm:text-xl text-white p-2 ",children:["الإيميل:"," "]}),(0,s.jsx)("input",{value:null==l?void 0:l.email,onChange:e=>n({...l,email:e.target.value}),required:!0,type:"email",name:"user_email",placeholder:"عنوان البريد الإلكتروني",className:"w-full rounded-lg p-2 outline-none shadow-none focus:border-primary border-secondary tex-lg sm:text-xl placeholder:text-sm placeholder:sm:text-lg"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,s.jsx)("label",{className:"tex-lg sm:text-xl my-2 text-white p-2 ",children:"الرسالة:"}),(0,s.jsx)("textarea",{value:null==l?void 0:l.message,placeholder:"اكتب اسم المسلسل و رقم الحلقة أو اسم الفيلم الذي يحتوي على أشياء مخالفة للعقيدة الإسلامية ليتم حذفه فورا\nاكتب اسم المسلسل ورقم الحلقة أو اسم الفيلم الذي لا يعمل لنقوم بإصلاحه إن شاء الله",onChange:e=>n({...l,message:e.target.value}),required:!0,name:"message",className:"w-full rounded-lg p-2 outline-none shadow-none focus:border-primary border-secondary tex-lg sm:text-xl min-h-[200px] placeholder:text-sm placeholder:sm:text-lg"})]}),(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{title:"إرسال",type:"submit",style:" "})})]})})," "]})}},6595:function(e,t,l){"use strict";l.d(t,{ZP:function(){return y}});class s{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},a=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},r=async(e,t,l={})=>{let a=await fetch(i.origin+e,{method:"POST",headers:l,body:t}),r=await a.text(),o=new s(a.status,r);if(a.ok)return o;throw o},o=(e,t,l)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!l||"string"!=typeof l)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},n=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},c=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new s(451,"Unavailable For Headless Browser"),m=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},u=e=>!e.list?.length||!e.watchVariable,h=(e,t)=>e instanceof FormData?e.get(t):e[t],x=(e,t)=>{if(u(e))return!1;m(e.list,e.watchVariable);let l=h(t,e.watchVariable);return"string"==typeof l&&e.list.includes(l)},g=()=>new s(403,"Forbidden"),p=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},f=async(e,t,l)=>{let s=Number(await l.get(e)||0);return t-Date.now()+s},w=async(e,t,l)=>{if(!t.throttle||!l)return!1;p(t.throttle,t.id);let s=t.id||e;return await f(s,t.throttle,l)>0||(await l.set(s,Date.now().toString()),!1)},v=()=>new s(429,"Too Many Requests"),j=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},b=e=>"string"==typeof e?document.querySelector(e):e;var y={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let l=a(e);i.publicKey=l.publicKey,i.blockHeadless=l.blockHeadless,i.storageProvider=l.storageProvider,i.blockList=l.blockList,i.limitRate=l.limitRate,i.origin=l.origin||t},send:async(e,t,l,s)=>{let m=a(s),u=m.publicKey||i.publicKey,h=m.blockHeadless||i.blockHeadless,p=m.storageProvider||i.storageProvider,f={...i.blockList,...m.blockList},j={...i.limitRate,...m.limitRate};return h&&c(navigator)?Promise.reject(d()):(o(u,e,t),n(l),l&&x(f,l))?Promise.reject(g()):await w(location.pathname,j,p)?Promise.reject(v()):r("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:u,service_id:e,template_id:t,template_params:l}),{"Content-type":"application/json"})},sendForm:async(e,t,l,s)=>{let n=a(s),m=n.publicKey||i.publicKey,u=n.blockHeadless||i.blockHeadless,h=i.storageProvider||n.storageProvider,p={...i.blockList,...n.blockList},f={...i.limitRate,...n.limitRate};if(u&&c(navigator))return Promise.reject(d());let y=b(l);o(m,e,t),j(y);let N=new FormData(y);return x(p,N)?Promise.reject(g()):await w(location.pathname,f,h)?Promise.reject(v()):(N.append("lib_version","4.4.1"),N.append("service_id",e),N.append("template_id",t),N.append("user_id",m),r("/api/v1.0/email/send-form",N))},EmailJSResponseStatus:s}}},function(e){e.O(0,[5864,7240,5027,6950,6051,2972,605,5726,9064,9069,7562,7037,2971,5030,1744],function(){return e(e.s=5875)}),_N_E=e.O()}]);