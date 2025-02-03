(()=>{"use strict";var e={n:l=>{var t=l&&l.__esModule?()=>l.default:()=>l;return e.d(t,{a:t}),t},d:(l,t)=>{for(var s in t)e.o(t,s)&&!e.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:t[s]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,t=JSON.parse('{"UU":"idc-block/article-cards"}'),s=window.wp.element,o=window.wp.apiFetch;var n=e.n(o);const i=window.wp.date,a=window.wp.blockEditor,r=window.wp.components,c=window.wp.data,d=(e,l)=>{const t=e.split(" ");return t.length>l?t.slice(0,l).join(" ")+"...":e},h=window.React;var m,x,p=e.n(h),g={exports:{}},u={},b=(x||(x=1,g.exports=function(){if(m)return u;m=1;var e=p(),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,i){var a,r={},c=null,d=null;for(a in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!n.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:l,type:e,key:c,ref:d,props:r,_owner:o.current}}return u.Fragment=t,u.jsx=i,u.jsxs=i,u}()),g.exports);const v={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl","6xl":"max-w-6xl","7xl":"max-w-7xl",max:"max-w-screen-2xl",full:"max-w-full"},w={1:"",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-2 lg:grid-cols-4",6:"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6","1/3":"lg:grid-cols-3 lg:[&>*:last-child]:col-span-2","2/3":"lg:grid-cols-3 lg:[&>*:first-child]:col-span-2","60/40":"md:grid-cols-2 lg:grid-cols-60-40"},j={1:"columns-1",2:"columns-1 md:columns-2",3:"columns-1 sm:columns-2 md:columns-3",4:"columns-1 md:columns-2 lg:columns-4"},k={none:"",white:"bg-white",blue:"bg-idc-blue-100 py-8 md:py-16",gradient:"bg-gradient-to-t from-idc-blue-100 to-white py-8 md:py-16",edge:"bg-white-blue-edge py-8 md:py-16"},f={sm:"text-lg md:text-xl lg:text-2xl lg:leading-[2rem]",md:"text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem]",lg:"text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]",xl:"text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem]"},y={light:"font-light",normal:"font-normal",semibold:"font-semibold",bold:"font-bold"},C=(Symbol.toStringTag,({children:e,bgType:l="light"})=>{const t="light"===l?"bg-idc-blue-50":"bg-idc-blue-600 text-white";return b.jsx("div",{className:`ui-prose-first-last px-7 py-6 md:px-16 md:py-12 ${t}`,children:e})});C.displayName="BluePanel.Content",Object.assign((({children:e,maxWidth:l="7xl",cols:t="60/40"})=>b.jsx("div",{className:`idc-bluecolumns ${v[l]} mx-auto grid ${w[t]} rounded-xl overflow-hidden bg-idc-blue-50`,children:e})),{Content:C});const N=({color:e="dark-blue",label:l,type:t="button",size:s="md",isOutline:o=!1,noBg:n=!1,onClick:i,...a})=>{const r=o?"idc-button--outline":"idc-button--solid",c=n&&o?"idc-button--no-bg":"";return b.jsx("button",{type:t,className:`idc-button idc-button--${e} ${r} idc-button--${s} ${c}`,onClick:i,...a,children:l})},B=({children:e,isCenter:l=!1})=>{const t=l?"justify-center":"justify-start";return b.jsx("div",{className:`ui-buttongroup idc-component flex ${t} gap-4 flex-wrap`,children:e})},L=({title:e,as:l="h2",date:t,datePrefix:s})=>{const o=l,n=t?new Date(t).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return b.jsxs("header",{children:[b.jsx(o,{className:"text-lg font-semibold md:text-xl",children:e}),t&&b.jsxs("time",{className:"block mt-1 text-sm italic md:text-base text-idc-black-500 md:mt-3",children:[s&&`${s} `,n]})]})};L.displayName="Card.Header";const S=({children:e})=>b.jsx("footer",{className:"mt-4 md:mt-6",children:e});S.displayName="Card.Footer";const T=({text:e,link:l,isExcerpt:t=!1,hideMobile:s=!1})=>{const o=s?"hidden md:block":"";return b.jsx("p",{className:`${o} mt-2 text-base font-normal leading-7 md:mt-3`,children:t&&e&&e.length>170?b.jsxs(b.Fragment,{children:[e.substring(0,170),"...",l&&b.jsx("a",{href:l,className:"ml-1 font-semibold text-idc-orange-700 hover:underline",children:"More"})]}):e})};T.displayName="Card.Content";const $=({children:e})=>b.jsx("div",{className:"idc-card-quote text-base leading-7 px-5 py-3.5 bg-white rounded-md md:px-8 md:py-6 shadow-md",children:e});$.displayName="Card.Quote";const P=({children:e,cite:l})=>b.jsxs("footer",{className:"flex items-center gap-4 mt-4 italic font-semibold text-idc-blue-800",children:[e,b.jsx("span",{children:l})]});P.displayName="Card.Cite";const Z={Briefcase:"briefcase-solid","Apple Pay":"cc-apple-pay-brands-solid",Mastercard:"cc-mastercard-brands-solid",Visa:"cc-visa-brands-solid","Circle Check":"circle-check-solid","Circle Info":"circle-info-solid",Clock:"clock-regular",Comment:"comment-solid",Envelope:"envelope-solid",Facebook:"facebook-brands-solid","File Circle Check":"file-circle-check-solid","Folder Open":"folder-open-solid",Globe:"globe-solid",Handshake:"handshake-solid",Instagram:"instagram-brands-solid",Key:"key-solid",Lightbulb:"lightbulb-solid",Linkedin:"linkedin-brands-solid",Paperclip:"paperclip-solid",Paypal:"paypal-brands-solid","Pen Fancy":"pen-fancy-solid","Phone Volume":"phone-volume-solid",Signature:"signature-solid",Thumbtack:"thumbtack-solid","Truck Fast":"truck-fast-solid",Twitter:"twitter-brands-solid",Users:"users-solid",Youtube:"youtube-brands-solid"},M=(Symbol.toStringTag,({children:e,iconName:l})=>{const[t,s]=(0,h.useState)(null),o=l?"svg":"img";return(0,h.useEffect)((()=>{l&&Z[l]&&(async()=>{try{const e=await fetch(`/assets/icons/${Z[l]}.svg`);if(e.ok){const l=await e.text();s(l)}else console.error(`Error fetching SVG: ${e.statusText}`)}catch(e){console.error("Error fetching SVG:",e)}})()}),[l]),b.jsx("figure",{className:`idc-card-figure-${o} mb-4 md:mb-6`,children:t?b.jsx("span",{dangerouslySetInnerHTML:{__html:t}}):e||b.jsx("div",{children:"No icon available"})})});M.displayName="Card.Figure";const O=Object.assign((({children:e,maxWidth:l,addFlex:t=!1})=>{const s=l?v[l]:"",o=t?"flex gap-4 md:block":"";return b.jsx("div",{className:`not-prose idc-card rounded-md ${s} ${o}`,children:e})}),{Figure:M,Header:L,Footer:S,Content:T,Quote:$,Cite:P}),I=({children:e,cols:l=3,layout:t="grid"})=>{const s="grid"===t?`grid ${w[l]}`:`ui-masonry ${j[l]}`;return b.jsx("div",{className:`ui-cardgroup idc-component ${s} gap-8 md:gap-10`,children:e})},V=({children:e})=>b.jsx("div",{className:"ui-prose-first-last",children:e});V.displayName="Columns.Content";const z=({children:e,maxWidth:l="5xl",cols:t=2})=>b.jsx("div",{className:`ui-column ui-no-max-width ${v[l]} mx-auto grid ${w[t]} gap-4 md:gap-10`,children:e});Object.assign(z,{Content:V}),z.displayName="Columns";const E=e=>{const l=e.currentTarget,t=l.querySelector(".idc-accordion-icon"),s=l.closest(".idc-accordion"),o=s?s.querySelector(".idc-accordion-content"):null,n=null!=o?o.hidden:null;n?(l.setAttribute("aria-expanded","true"),t&&(t.classList.remove("rotate-0"),t.classList.add("rotate-180"))):(l.setAttribute("aria-expanded","false"),t&&(t.classList.add("rotate-0"),t.classList.remove("rotate-180"))),o&&(o.hidden=!n)},U=({title:e,children:l})=>{const t=e&&"string"==typeof e?"idc-accordion-"+e.toLowerCase().replace(/ +/g,"-"):"";return b.jsxs("div",{className:"grid px-2 py-4 border-b idc-accordion border-idc-black-100 first:border-t",children:[b.jsx("dt",{className:"mt-0 mb-0 font-semibold md:mt-0",children:b.jsxs("div",{className:"flex items-center w-full idc-accordion-button","aria-expanded":"false","aria-controls":t,role:"button",onClick:E,children:[e,b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-4 h-4 ml-auto transition-transform rotate-0 fill-idc-black-300 idc-accordion-icon",children:b.jsx("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})})]})}),b.jsx("dd",{className:"p-0 mt-2 idc-accordion-content md:p-0 md:mt-4 md:mb-1.5 ui-prose-first-last",hidden:!0,id:t,children:l})]})};U.displayName="Description.Accordion";const F=({children:e})=>b.jsx("dl",{className:"idc-definition idc-component",children:e});Object.assign(F,{Accordion:U}),F.displayName="Definition";const _=({children:e,as:l="h2",title:t,date:s,datePrefix:o,size:n="lg",weight:i="semibold",isCenter:a,isItalic:r})=>{const c=l,d=s?new Date(s).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null,h=a?"idc-header--center":"",m=r?"italic":"";let x;switch(n){case"sm":x="pb-3.5";break;case"md":x="pb-4";break;case"lg":default:x="pb-5";break;case"xl":x="pb-6"}return b.jsxs("header",{className:`ui-prose-first-last idc-header idc-component ${h}`,children:[s&&b.jsxs("time",{className:"block mb-2 text-base italic md:text-lg text-idc-black-400 md:mb-3",children:[o&&`${o} `,d]}),b.jsx(c,{className:`not-prose text-idc-blue-800 ${f[n]} ${y[i]} ${m} ${x} last:pb-0`,children:t}),e]})},W=({children:e,title:l,date:t,datePrefix:s,headerType:o="h2",isCenter:n})=>{let i;switch(o){case"h1":i="xl";break;case"h2":i="lg";break;case"h3":i="md";break;default:i="sm"}const a=!!n;return b.jsx(_,{as:o,title:l,date:t,datePrefix:s,size:i,isCenter:a,children:e})};W.displayName="Hero.Content";const H=({children:e})=>b.jsx("div",{className:"not-prose",children:e});H.displayName="Hero.Media";const R=Object.assign((({children:e,cols:l=1})=>b.jsx("div",{className:`grid ${w[l]} gap-6`,children:e})),{Content:W,Media:H}),A=({headerTop:e,headerBottom:l,text:t})=>b.jsxs("div",{className:"not-prose idc-leadin idc-component grid lg:grid-cols-3 lg:[&>*:last-child]:col-span-2 gap-4 md:gap-10 items-center",children:[b.jsxs("div",{className:"md:border-r md:border-solid md:border-idc-black-100",children:[e&&b.jsx("h2",{className:"block text-base italic not-prose md:text-lg text-idc-black-500",children:e}),l&&b.jsx("h3",{className:"block text-2xl italic font-medium not-prose md:text-3xl text-idc-orange-600",children:l})]}),b.jsx("div",{children:t&&b.jsx("p",{className:"text-base md:text-lg",children:t})})]});A.displayName="LeadIn";const D=({children:e,maxWidth:l="5xl",bgType:t="white"})=>b.jsx("section",{className:`ui-section ui-section--${t} ${k[t]} w-screen ml-offset-center`,children:b.jsx("div",{className:`ui-max-w-child-${l} px-0 md:px-8 ui-prose-first-last`,children:e})}),J=(Object.assign((({children:e})=>{const[l,t]=(0,h.useState)(!0),[s,o]=(0,h.useState)(0),n=(0,h.useCallback)((()=>{const e=window.scrollY;t(!(e>s&&e>100)),o(e)}),[s]);return(0,h.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[n]),b.jsx("header",{className:"sticky top-0 z-50 w-full px-6 py-3 h-[62px] md:h-[90px] bg-white idc-header ui-max-w-child-7xl md:px-8 md:py-5 transition-opacity duration-500 "+(l?"opacity-100":"opacity-0 pointer-events-none"),children:b.jsx("div",{className:"flex justify-between gap-2",children:e})})}),{SiteLogo:()=>b.jsx("svg",{className:"idc-logo flex-none w-[111px] md:w-[155px] h-[36px] md:h-[50px] fill-idc-blue-500",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 155 50",children:b.jsx("path",{d:"M52.151 9.412h2.029v8.864H52.15V9.412Zm3.764 0h2.015l3.85 5.946h.025V9.412h1.898v8.864h-2.026l-3.84-5.934h-.022v5.934h-1.899V9.412Zm11.473 1.639h-2.763V9.413h7.556v1.639h-2.765v7.225h-2.03l.001-7.225.001-.001ZM73.1 9.413h6.898v1.639h-4.87v1.9h4.471v1.514h-4.472v2.171h4.974v1.64H73.1V9.412v.001Zm8.409 0h4.975c1.653 0 2.698 1.106 2.698 2.445 0 1.044-.438 1.825-1.46 2.222v.025c.996.25 1.281 1.18 1.346 2.073.038.559.024 1.603.386 2.098h-2.029c-.246-.558-.219-1.414-.322-2.121-.143-.932-.517-1.342-1.538-1.342h-2.027v3.463h-2.03V9.412v.001Zm2.03 4.009h2.22c.905 0 1.395-.371 1.395-1.266 0-.856-.49-1.229-1.395-1.229h-2.22v2.495Zm7.237-4.009h2.014l3.85 5.945h.026V9.412h1.898v8.864h-2.027L92.7 12.342h-.025v5.934h-1.9V9.412v.001Zm12.091 0h2.08l3.45 8.863h-2.106l-.697-1.974h-3.45l-.723 1.974h-2.053l3.5-8.864h-.001v.001Zm-.193 5.437h2.391l-1.163-3.252h-.026l-1.202 3.251v.001Zm7.506-3.8h-2.766V9.414h7.558v1.639h-2.764v7.225h-2.027V11.05h-.001Zm5.71-1.637h2.03v8.864h-2.03V9.413Zm7.885-.21c2.855 0 4.534 2.048 4.534 4.678 0 2.558-1.68 4.606-4.534 4.606-2.856 0-4.534-2.049-4.534-4.606 0-2.631 1.679-4.68 4.534-4.68v.002Zm0 7.645c1.821 0 2.505-1.488 2.505-2.966 0-1.55-.684-3.04-2.504-3.04-1.821 0-2.506 1.489-2.506 3.04 0 1.477.684 2.967 2.506 2.967h-.001Zm5.863-7.435h2.015l3.851 5.946h.025V9.413h1.899v8.864H135.4l-3.836-5.934h-.026v5.934h-1.9V9.413Zm12.092 0h2.08l3.449 8.864h-2.106l-.697-1.974h-3.45l-.721 1.974h-2.055l3.5-8.864Zm-.193 5.437h2.39l-1.163-3.252h-.026l-1.202 3.252h.002-.001Zm6.518-5.437h2.028v7.224h4.495v1.638h-6.523V9.413ZM52.151 20.45h3.98c2.39 0 4.186 1.44 4.186 4.38 0 2.57-1.37 4.482-4.186 4.482h-3.98v-8.864.002Zm2.029 7.223h1.808c1.175 0 2.299-.696 2.299-2.655 0-1.789-.645-2.93-2.662-2.93H54.18v5.584Zm11.601-7.434c2.854 0 4.535 2.049 4.535 4.678 0 2.557-1.68 4.605-4.535 4.605-2.856 0-4.536-2.05-4.536-4.604 0-2.631 1.681-4.68 4.535-4.68h.001v.001Zm-.001 7.645c1.82 0 2.505-1.49 2.505-2.966 0-1.551-.685-3.042-2.505-3.042-1.82 0-2.506 1.49-2.506 3.041 0 1.476.684 2.966 2.505 2.966v.001Zm11.974-4.456c-.128-.88-1.008-1.552-2.014-1.552-1.82 0-2.506 1.49-2.506 3.041 0 1.477.685 2.966 2.506 2.966 1.24 0 1.938-.818 2.093-1.985h1.963c-.207 2.21-1.796 3.624-4.055 3.624-2.856 0-4.535-2.05-4.535-4.604 0-2.632 1.68-4.68 4.535-4.68 2.026 0 3.732 1.142 3.977 3.189h-1.964v.001Zm11.128 2.533c0 2.396-1.472 3.562-3.94 3.562-2.479 0-3.926-1.155-3.926-3.562v-5.512h2.03v5.512c0 .967.257 1.922 1.896 1.922 1.447 0 1.912-.608 1.912-1.922v-5.512h2.03v5.512h-.002Zm1.715-5.512h2.857l2.156 6.094h.026l2.04-6.093h2.855v8.862h-1.9V23.03h-.025l-2.26 6.28h-1.564l-2.26-6.22h-.026v6.22h-1.898v-8.863.001Zm11.697 0h6.899v1.64h-4.871v1.9h4.47V25.5h-4.468v2.172h4.974v1.636h-7.003l-.001-8.86v.001Zm8.41 0h2.015l3.851 5.945h.026V20.45h1.897v8.862h-2.027l-3.838-5.932h-.025v5.932h-1.899v-8.863.001Zm11.473 1.64h-2.764V20.45h7.557v1.638h-2.765v7.224h-2.027v-7.225l-.001.001Zm7.197 4.282c0 1.18.956 1.638 2.041 1.638.711 0 1.797-.2 1.797-1.106 0-.955-1.383-1.116-2.74-1.465-1.369-.346-2.751-.855-2.751-2.518 0-1.813 1.782-2.682 3.45-2.682 1.923 0 3.693.807 3.693 2.855H132.9c-.064-1.067-.851-1.34-1.821-1.34-.646 0-1.395.262-1.395 1.005 0 .684.439.77 2.751 1.342.673.16 2.739.57 2.739 2.58 0 1.627-1.331 2.844-3.836 2.844-2.043 0-3.953-.968-3.927-3.154H129.374ZM58.752 34.15c-.258-1.253-1.305-1.887-2.584-1.887-2.195 0-3.126 1.738-3.126 3.588 0 2.022.93 3.71 3.14 3.71 1.614 0 2.544-1.092 2.66-2.558h1.228c-.232 2.212-1.666 3.55-3.99 3.55-2.87 0-4.264-2.035-4.264-4.616 0-2.57 1.525-4.667 4.366-4.667 1.925 0 3.514.993 3.798 2.88h-1.228Zm5.004-2.67h1.355l3.604 8.864h-1.357l-1.008-2.667h-3.9l-1.033 2.667H60.15l3.605-8.863v-.001Zm-.92 5.202h3.128l-1.538-4.134h-.025l-1.564 4.134Zm6.72-5.202h1.306l4.858 7.188h.026V31.48h1.163v8.864h-1.345l-4.817-7.113h-.027v7.113h-1.162l-.002-8.864Zm11.804 0h1.356l3.604 8.864h-1.354l-1.007-2.667h-3.901l-1.034 2.667h-1.267l3.605-8.863v-.001h-.002Zm-.918 5.202h3.126l-1.536-4.134h-.028l-1.563 4.134h.001Zm6.727-5.202h3.166c2.84 0 4.428 1.367 4.428 4.222 0 2.966-1.357 4.642-4.43 4.642h-3.165v-8.863l.001-.001Zm1.228 7.87h2.04c.84 0 3.1-.222 3.1-3.487 0-2.109-.813-3.389-3.074-3.389h-2.067v6.877h.001Zm9.945-7.87h1.356l3.604 8.864h-1.357l-1.009-2.667h-3.9l-1.033 2.667h-1.266l3.605-8.863v-.001Zm-.92 5.202h3.128l-1.538-4.134h-.025l-1.563 4.134h-.001ZM0 0v50h3.23V3.102h32.66v43.776H9.756c.852-13.965 8.064-26.79 19.67-35.151v7.066h3.23V6.207H19.558V9.31H27.4C14.62 18.557 6.867 32.893 6.46 48.389l-.04 1.592h32.697V0H0Z"})}),Navigation:({children:e})=>b.jsx("div",{className:"items-center flex-none hidden md:flex",children:b.jsx("ul",{className:"flex gap-3 text-[15px] text-black",children:e})}),Aside:()=>b.jsxs("div",{className:"flex items-center gap-3 md:gap-5",children:[b.jsx("button",{"aria-label":"Search",children:b.jsx("svg",{className:"fill-idc-black-300 hover:fill-idc-orange-500 w-[16px] h-[16px] md:w-[20px] md:h-[20px]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:b.jsx("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})}),b.jsx("button",{className:"idc-button idc-button--xs idc-button--dark-orange idc-button--solid","aria-label":"Switch to French",children:"FR"})]})}),Symbol.toStringTag,window.ReactJSXRuntime);(0,l.registerBlockType)(t.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,J.jsx)("path",{d:"M119.9 34.5L107.8 191.4c-.7 9.7-5.9 18.6-13.9 24c-27 18.3-47.3 46.2-55.6 79.6L32 320l144 0 0-96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96 144 0-6.2-25c-8.3-33.4-28.6-61.3-55.6-79.6c-8.1-5.5-13.2-14.3-13.9-24L264.1 34.5c-.1-.8-.1-1.6-.1-2.5L120 32c0 .8 0 1.6-.1 2.5zM176 352L32 352c-9.9 0-19.2-4.5-25.2-12.3S-1.4 321.8 1 312.2l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L85.5 64 88 32 64 32c-2.9 0-5.6-.8-7.9-2.1C51.2 27.1 48 21.9 48 16C48 7.2 55.2 0 64 0L88 0 296 0l24 0c8.8 0 16 7.2 16 16c0 5.9-3.2 11.1-8.1 13.9c-2.3 1.3-5 2.1-7.9 2.1l-24 0 2.5 32 9.6 124.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3l-144 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144z"})})},edit:function({attributes:e,setAttributes:l}){const[t,o]=(0,s.useState)([]),[h,m]=(0,s.useState)([]),[x,p]=(0,s.useState)(e.pageLink||""),[g,u]=(0,s.useState)(!0),[b,v]=(0,s.useState)(null),{maxWidth:w,addIntro:j,blockHeader:k,blockIntro:f,numberOfColumns:y,showImages:C,showDates:L,showExcerpts:S,numberOfPosts:T,moreButton:$,terms:P,taxName:Z}=e,M=(V=Z,(0,c.useSelect)((e=>e("core").getEntityRecords("taxonomy",V,{per_page:-1}))));var V;const z=M?(e=>{const l={};return e&&e.forEach((e=>{l[e.name]=e})),l})(M):{};return(0,s.useEffect)((()=>{let e=`/idc/v1/posts?posts_per_page=${T}`;P&&P.length>0&&(e+=`&post_categories[]=${P.map((e=>e.id)).join("&post_categories[]=")}`),n()({path:e}).then((e=>{o(e),u(!1)})).catch((e=>{u(!1),v(e)}))}),[T,P]),(0,s.useEffect)((()=>{n()({path:"/idc/v1/pages?posts_per_page=-1"}).then((e=>{m(e.map((e=>({value:e.link,label:e.title}))))}))}),[]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(a.InspectorControls,{children:[(0,J.jsxs)(r.PanelBody,{title:"Block Options",children:[(0,J.jsx)(r.RangeControl,{initialPosition:w,label:"Max Width",max:7,min:4,onChange:e=>l({maxWidth:e})}),(0,J.jsx)(r.RangeControl,{initialPosition:y,label:"Columns",max:4,min:2,onChange:e=>l({numberOfColumns:e})}),(0,J.jsx)(r.RangeControl,{initialPosition:T,label:"Number of Posts",max:24,min:1,onChange:e=>l({numberOfPosts:e})}),(0,J.jsx)(r.SelectControl,{label:"Load / View More",value:$,options:[{label:"None",value:"none"},{label:"Load More",value:"loadmore"},{label:"View More",value:"viewmore"}],onChange:e=>l({moreButton:e})}),"viewmore"===$&&(0,J.jsx)(r.ComboboxControl,{label:"View More Link",value:x,options:h,onChange:e=>{p(e),l({pageLink:e})},allowReset:!0}),(0,J.jsx)(r.QueryControls,{categorySuggestions:z,selectedCategories:P,onCategoryChange:e=>{if(((e,l)=>e.some((e=>"string"==typeof e&&!l[e])))(e,z))return;const t=((e,l)=>e.map((e=>"string"==typeof e?l[e]:e)))(e,z),s=t.map((({id:e,name:l,slug:t})=>({id:e,name:l,slug:t})));l({terms:s}),0===e.length&&l({terms:void 0})}})]}),(0,J.jsxs)(r.PanelBody,{title:"Display Options",children:[(0,J.jsx)(r.ToggleControl,{label:"Intro Content",checked:j,onChange:e=>l({addIntro:e})}),(0,J.jsx)(r.ToggleControl,{label:"Show Images",checked:C,onChange:e=>l({showImages:e})}),(0,J.jsx)(r.ToggleControl,{label:"Show Dates",checked:L,onChange:e=>l({showDates:e})}),(0,J.jsx)(r.ToggleControl,{label:"Show Excerpts",checked:S,onChange:e=>l({showExcerpts:e})})]})]}),(0,J.jsx)("div",{...(0,a.useBlockProps)({className:`idc-block idc-block-${w}xl idc-section--white`}),children:(0,J.jsx)(D,{maxWidth:`${w}xl`,children:!g&&!b&&t.length>=1&&(0,J.jsxs)(J.Fragment,{children:[j&&(0,J.jsx)(_,{as:"h2",datePrefix:"",isCenter:!0,isItalic:!0,size:"md",weight:"bold",title:(0,J.jsx)(a.PlainText,{placeholder:"Add a heading",className:"not-prose text-idc-blue-800 text-center text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold italic pb-4 last:pb-0",value:k,onChange:e=>l({blockHeader:e})}),children:(0,J.jsx)("p",{children:(0,J.jsx)(a.PlainText,{placeholder:"Add an optional short intro paragraph for this block",className:"text-center",value:f,onChange:e=>l({blockIntro:e})})})}),(0,J.jsx)(I,{cols:y,children:t.map(((e,l)=>{let t="https://picsum.photos/id/40/600/400",s="Randomly generated thumbnail";return e.image.id&&(t=e.image.thumb[0],s=e.image.alt),(0,J.jsxs)(O,{addFlex:!0,children:[C&&(0,J.jsx)(O.Figure,{children:(0,J.jsx)("img",{src:t,alt:s,className:"rounded-md",width:"400",height:"300"})}),(0,J.jsx)(O.Header,{as:j&&k?"h3":"h2",date:L&&(0,i.format)("F j, Y",e.date),title:e.title?e.title:"This post is missing a title"}),(0,J.jsx)(O.Content,{text:S&&d(e.excerpt,20),link:e.link,isExcerpt:!0})]},l)}))}),"none"!==$&&(0,J.jsx)(B,{isCenter:!0,children:(0,J.jsx)(N,{color:"dark-blue",label:"loadmore"===$?"Load More Articles":"Read More Articles",isOutline:!0})})]})})})]})}});const q=JSON.parse('{"UU":"idc-block/blue-panel"}');(0,l.registerBlockType)(q.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,J.jsx)("path",{d:"M192 64l0 176 0 32 0 176-96 0 0-176 0-32L96 64l96 0zm32 176l0-176 0-32-32 0L96 32 64 32l0 32 0 176L0 240l0 32 64 0 0 176 0 32 32 0 96 0 32 0 0-32 0-176 64 0 0 112 0 32 32 0 96 0 32 0 0-32 0-112 64 0 0-32-64 0 0-112 0-32-32 0-96 0-32 0 0 32 0 112-64 0zm96 0l0-112 96 0 0 112 0 32 0 112-96 0 0-112 0-32z"})})},edit:function({attributes:e,setAttributes:l}){const{maxWidth:t,bgType:s}=e;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(a.InspectorControls,{children:(0,J.jsxs)(r.PanelBody,{title:"Display Options",children:[(0,J.jsx)(r.RangeControl,{initialPosition:t,label:"Max Width",max:7,min:4,onChange:e=>l({maxWidth:e})}),(0,J.jsx)(r.SelectControl,{label:"Background Type",onChange:e=>l({bgType:e}),options:[{label:"White",value:"white"},{label:"Blue",value:"blue"},{label:"Gradient",value:"gradient"},{label:"Edge",value:"edge"}],value:s})]})}),(0,J.jsx)("div",{...(0,a.useBlockProps)({className:`idc-block idc-block-${t}xl idc-section--${s}`}),children:(0,J.jsx)(D,{maxWidth:`${t}xl`,bgType:"none"!==s?s:null,children:(0,J.jsx)("div",{className:"mx-auto overflow-hidden rounded-xl bg-idc-blue-50",children:(0,J.jsx)(a.InnerBlocks,{allowedBlocks:["idc-block/blue-panel-light","idc-block/blue-panel-dark"],template:[["idc-block/blue-panel-light"],["idc-block/blue-panel-dark"]],templateLock:!1})})})})]})},save:function(){return(0,J.jsx)(a.InnerBlocks.Content,{})}});const G=JSON.parse('{"UU":"idc-block/blue-panel-dark"}');(0,l.registerBlockType)(G.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,J.jsx)("path",{d:"M352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 384zM384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384z"})})},edit:function(){return(0,J.jsx)("div",{...(0,a.useBlockProps)({className:"prose md:prose-lg ui-prose-first-last px-7 py-6 md:px-16 md:py-12 bg-idc-blue-600 text-white"}),children:(0,J.jsx)(a.InnerBlocks,{allowedBlocks:["core/paragraph","gravityforms/form"],template:[["core/paragraph"]],templateLock:!1})})},save:function(){return(0,J.jsx)(a.InnerBlocks.Content,{})}});const Y=JSON.parse('{"UU":"idc-block/blue-panel-light"}');(0,l.registerBlockType)(Y.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,J.jsx)("path",{d:"M352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 384zM384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384z"})})},edit:function({attributes:e,setAttributes:l}){const{heading:t}=e;return(0,J.jsx)("div",{...(0,a.useBlockProps)({className:"prose md:prose-lg ui-prose-first-last px-7 py-6 md:px-16 md:py-12 bg-idc-blue-50"}),children:(0,J.jsx)(_,{as:"h2",isItalic:!0,size:"md",weight:"bold",title:(0,J.jsx)(a.PlainText,{placeholder:"Add a heading for this block",className:"not-prose text-idc-blue-800 text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold italic pb-4 last:pb-0",style:{border:"none",padding:"0",backgroundColor:"transparent",resize:"none"},onChange:e=>l({heading:e}),value:t,allowedFormats:[],disableLineBreaks:!0}),children:(0,J.jsx)(a.InnerBlocks,{allowedBlocks:["core/buttons","core/paragraph","core/quote"],template:[["core/paragraph"]],templateLock:!1})})})},save:function(){return(0,J.jsx)(a.InnerBlocks.Content,{})}});const Q=JSON.parse('{"UU":"idc-block/hero-banner"}');(0,l.registerBlockType)(Q.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,J.jsx)("path",{d:"M192 64l0 176 0 32 0 176-96 0 0-176 0-32L96 64l96 0zm32 176l0-176 0-32-32 0L96 32 64 32l0 32 0 176L0 240l0 32 64 0 0 176 0 32 32 0 96 0 32 0 0-32 0-176 64 0 0 112 0 32 32 0 96 0 32 0 0-32 0-112 64 0 0-32-64 0 0-112 0-32-32 0-96 0-32 0 0 32 0 112-64 0zm96 0l0-112 96 0 0 112 0 32 0 112-96 0 0-112 0-32z"})})},edit:function({attributes:e,setAttributes:l,clientId:t}){const{maxWidth:o,bgType:n,blockHeader:i}=e,d=(e=>(0,c.useSelect)((l=>{const{getBlockOrder:t,getBlockRootClientId:s}=l("core/block-editor"),o=s(e),n=t()[0];return o?n===o:n===e}),[e]))(t);return(0,s.useEffect)((()=>{l({isFirstBlock:d}),d&&wp.data.dispatch("core/editor").editPost({title:`${i}`})}),[d,l,i]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(a.InspectorControls,{children:(0,J.jsxs)(r.PanelBody,{title:"Display Options",children:[(0,J.jsx)(r.RangeControl,{initialPosition:o,label:"Max Width",max:7,min:5,onChange:e=>l({maxWidth:e})}),(0,J.jsx)(r.SelectControl,{label:"Background Type",onChange:e=>l({bgType:e}),options:[{label:"White",value:"white"},{label:"Blue",value:"blue"},{label:"Gradient",value:"gradient"},{label:"Edge",value:"edge"}],value:n})]})}),(0,J.jsx)("div",{...(0,a.useBlockProps)({className:`idc-block idc-block-${o}xl idc-section--${n}`}),children:(0,J.jsx)(D,{maxWidth:`${o}xl`,bgType:"none"!==n?n:null,children:(0,J.jsxs)(R,{bgType:"none",cols:2,children:[(0,J.jsx)(R.Content,{headerType:"h1",title:(0,J.jsx)(a.PlainText,{placeholder:"Add a heading for this block",className:"not-prose text-idc-blue-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem] font-semibold  pb-6 last:pb-0",style:{border:"none",padding:"0",margin:"0",backgroundColor:"transparent",resize:"none"},onChange:e=>l({blockHeader:e}),value:i}),children:(0,J.jsx)("div",{className:"prose md:prose-lg max-w-none ui-prose-first-last",children:(0,J.jsx)(a.InnerBlocks,{allowedBlocks:["core/buttons","core/paragraph","core/quote"],template:[["core/paragraph"]],templateLock:!1})})}),(0,J.jsx)(R.Media,{children:(0,J.jsx)("div",{className:"hero-media-temp"})})]})})})]})},save:function(){return(0,J.jsx)(a.InnerBlocks.Content,{})}});const K=JSON.parse('{"UU":"idc-block/lead-in"}');(0,l.registerBlockType)(K.UU,{icon:{src:(0,J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,J.jsx)("path",{d:"M119.9 34.5L107.8 191.4c-.7 9.7-5.9 18.6-13.9 24c-27 18.3-47.3 46.2-55.6 79.6L32 320l144 0 0-96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96 144 0-6.2-25c-8.3-33.4-28.6-61.3-55.6-79.6c-8.1-5.5-13.2-14.3-13.9-24L264.1 34.5c-.1-.8-.1-1.6-.1-2.5L120 32c0 .8 0 1.6-.1 2.5zM176 352L32 352c-9.9 0-19.2-4.5-25.2-12.3S-1.4 321.8 1 312.2l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L85.5 64 88 32 64 32c-2.9 0-5.6-.8-7.9-2.1C51.2 27.1 48 21.9 48 16C48 7.2 55.2 0 64 0L88 0 296 0l24 0c8.8 0 16 7.2 16 16c0 5.9-3.2 11.1-8.1 13.9c-2.3 1.3-5 2.1-7.9 2.1l-24 0 2.5 32 9.6 124.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3l-144 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144z"})})},edit:function({attributes:e,setAttributes:l}){const{maxWidth:t,bgType:s,topText:o,bottomText:n,asideText:i}=e;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(a.InspectorControls,{children:(0,J.jsxs)(r.PanelBody,{title:"Display Options",children:[(0,J.jsx)(r.RangeControl,{initialPosition:t,label:"Max Width",max:7,min:4,onChange:e=>l({maxWidth:e})}),(0,J.jsx)(r.SelectControl,{label:"Background Type",onChange:e=>l({bgType:e}),options:[{label:"White",value:"white"},{label:"Blue",value:"blue"},{label:"Gradient",value:"gradient"},{label:"Edge",value:"edge"}],value:s})]})}),(0,J.jsx)("div",{...(0,a.useBlockProps)({className:`idc-block idc-block-${t}xl idc-section--${s}`}),children:(0,J.jsx)(D,{maxWidth:`${t}xl`,bgType:"none"!==s?s:null,children:(0,J.jsx)(A,{headerTop:(0,J.jsx)(a.PlainText,{placeholder:"Small text intro",className:"block text-base italic not-prose md:text-lg text-idc-black-500",style:{border:"none",padding:"0",backgroundColor:"transparent",resize:"none"},onChange:e=>l({topText:e}),value:o}),headerBottom:(0,J.jsx)(a.PlainText,{placeholder:"Large text intro",className:"block text-2xl italic font-medium not-prose md:text-3xl text-idc-orange-600",style:{border:"none",padding:"0",backgroundColor:"transparent",resize:"none"},onChange:e=>l({bottomText:e}),value:n}),text:(0,J.jsx)(a.PlainText,{placeholder:"Add more description but try and keep this one to two lines if possible.",className:"text-base md:text-lg",style:{border:"none",padding:"0",backgroundColor:"transparent",resize:"none"},onChange:e=>l({asideText:e}),value:i})})})})]})}});const X=window.wp.hooks,ee=window.wp.domReady;var le=e.n(ee);le()((()=>{(0,l.unregisterBlockStyle)("core/button",["outline"]),(0,l.unregisterBlockStyle)("core/gallery",["default","rounded"]),(0,l.unregisterBlockStyle)("core/image",["default","rounded"]),(0,l.unregisterBlockStyle)("core/quote",["plain"]),(0,l.unregisterBlockStyle)("core/table",["regular","stripes"])})),(0,X.addFilter)("blocks.registerBlockType","cutheme/core-button-modifications",(function(e,l){return["core/buttons","core/button"].includes(l)&&(e.styles=e.styles.map((e=>"fill"===e.name?{...e,label:"Dark Blue"}:e))),e})),le()((()=>{["animoto","dailymotion","hulu","reddit","tumblr","vine","amazon-kindle","cloudup","crowdsignal","speaker","scribd"].forEach((e=>{(0,l.unregisterBlockVariation)("core/embed",e)}))}));const te=window.wp.richText;le()((()=>{["core/code","core/image","core/keyboard","core/language"].forEach((e=>{(0,te.unregisterFormatType)(e)}))}))})();