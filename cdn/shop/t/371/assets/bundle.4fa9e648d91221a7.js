"use strict";(globalThis.webpackChunkshopify_theme=globalThis.webpackChunkshopify_theme||[]).push([["7607"],{62061:function(e,l,a){a.d(l,{U:()=>t});var o=a(35689);let n=({year:e,month:l,day:a,hour:n,minute:t,timeZone:i})=>{let r=(0,o.zW)(new Date,i);if(isNaN(r.getTime()))return;let d=(0,o.Nm)(new Date(null!=e?e:r.getFullYear(),null!=l?l:r.getMonth(),null!=a?a:r.getDate(),null!=n?n:r.getHours(),null!=t?t:r.getMinutes()),i);if(!isNaN(d.getTime()))return d},t=()=>{var e,l;let a=(()=>{switch(window.Jbhifi.storeLocation){case"Australia":return"Australia/Melbourne";case"New Zealand":return"Pacific/Auckland"}})(),o=new Date().getDay(),t=(null!==(l=null===(e=window.Jbhifi.jbSalesLineHours)||void 0===e?void 0:e[o])&&void 0!==l?l:[]).map(e=>e.trim().padStart(4,"0")).map(e=>({hour:parseInt(e.slice(0,2),10),minute:parseInt(e.slice(2,4),10)})).map(({hour:e})=>n({hour:e,timeZone:a})).filter(e=>!!e).map(e=>Intl.DateTimeFormat("en-AU",{hour:"numeric",hourCycle:"h12"}).format(e).replace(" ",""));if(2===t.length)return`${t[0]}–${t[1]}`}},99065:function(e,l,a){a.d(l,{O:()=>w});var o=a(70879),n=a(27337),t=a(44194),i=a(10469),r={container:(0,i.c)({defaultClassName:"_1lw51uw0",variantClassNames:{variant:{default:"_1lw51uw1",narrow:"_1lw51uw2",inBlock:"_1lw51uw3"}},defaultVariants:{},compoundVariants:[]}),grid:(0,i.c)({defaultClassName:"_1lw51uw4",variantClassNames:{variant:{default:"_1lw51uw5",narrow:"_1lw51uw6",inBlock:"_1lw51uw7"}},defaultVariants:{},compoundVariants:[]}),headingImage:"_1lw51uwc",heading:(0,i.c)({defaultClassName:"_1lw51uwh",variantClassNames:{variant:{default:"_1lw51uwi",narrow:"_1lw51uwj",inBlock:"_1lw51uwk"}},defaultVariants:{},compoundVariants:[]}),headingBorder:"_1lw51uwl",headingContent:"_1lw51uwm",headingIntro:(0,i.c)({defaultClassName:"_1lw51uwd",variantClassNames:{variant:{default:"_1lw51uwe",narrow:"_1lw51uwf",inBlock:"_1lw51uwg"}},defaultVariants:{},compoundVariants:[]}),headingWrapper:(0,i.c)({defaultClassName:"_1lw51uwn",variantClassNames:{variant:{default:"_1lw51uwo",narrow:"_1lw51uwp",inBlock:"_1lw51uwq"}},defaultVariants:{},compoundVariants:[]}),headingBorderLabel:(0,i.c)({defaultClassName:"_1lw51uwr",variantClassNames:{variant:{default:"_1lw51uws",narrow:"_1lw51uwt",inBlock:"_1lw51uwu"}},defaultVariants:{},compoundVariants:[]}),subText:(0,i.c)({defaultClassName:"_1lw51uw8",variantClassNames:{variant:{default:"_1lw51uw9",narrow:"_1lw51uwa",inBlock:"_1lw51uwb"}},defaultVariants:{},compoundVariants:[]}),actionButton:"_1lw51uwv",actionWrapper:(0,i.c)({defaultClassName:"_1lw51uww",variantClassNames:{variant:{default:"_1lw51uwx",narrow:"_1lw51uwy",inBlock:"_1lw51uwz"}},defaultVariants:{},compoundVariants:[]}),icon:"_1lw51uw10",exclusions:"_1lw51uw11",margin:(0,i.c)({defaultClassName:"_1lw51uw12",variantClassNames:{margin:{top:"_1lw51uw13",bottom:"_1lw51uw14",left:"_1lw51uw15",right:"_1lw51uw16"}},defaultVariants:{},compoundVariants:[]})},d=a(5677),s=a(46657),u=a(16437),c=a(28521),v=a(34473),m=a(36634),p=a(7568),g=a(76704),f=a(11970),h=a(64336);let k=({icon:e,iconProps:l,text:a,link:i,onClickHandler:d,contentPalette:u,testId:c})=>{let{tracker:g}=(0,v.EF)(),f=(0,m.s0)();return t.createElement(p.Z,{type:"linkWithIcon",className:r.actionButton,style:{color:null==u?void 0:u.text},iconPosition:"left",onClick:()=>{g.trackClick({label:a,extraData:{moduleName:"Contact block"}}),i?f(i):d&&d()},icon:t.createElement("span",{className:r.icon},t.createElement(s.JO,(0,n._)((0,o._)({},l),{name:e}))),"data-testid":c},a)},w=({heading:e,subText:l,chatText:a,chatUrl:n,chatOnClick:i,shouldHideCallUs:s,callText:m,callUrl:p,callOnClick:w,contentPalette:b,variant:C="default",idComponent:_,salesLineHours:E,margin:B,shouldShowExclusionText:P=!0,testId:y})=>{var N,x;let I=(0,u.G)("lg","up"),H=_?`${_}-`:"",T=(0,g.y)(`${H}chat`),L=(0,g.y)(`${H}call`);return t.createElement(v.L8,{shouldInheritFromParentContexts:!0,group:e},t.createElement("div",{className:(0,h.AK)(r.container({variant:C}),r.margin({margin:B})),style:{backgroundColor:null==b?void 0:b.background},id:(0,g.y)(`${H}contact-block`),"data-testid":y},t.createElement("div",{className:r.grid({variant:C})},l?t.createElement(d.Z,{className:r.subText({variant:C}),style:{color:null==b?void 0:b.text}},l):null,e?t.createElement("div",{className:r.headingBorder,style:(null==b?void 0:b.heading)?{backgroundColor:b.heading,backgroundImage:"unset"}:void 0},t.createElement("div",{className:r.headingContent,style:(null==b?void 0:b.background)?{backgroundColor:b.background}:void 0},t.createElement("div",{className:r.headingWrapper({variant:C}),style:(null==b?void 0:b.heading)?{color:null==b?void 0:b.heading}:void 0},I?t.createElement(d.Z,{className:r.heading({variant:C})},"Ask for a JB Deal!"):t.createElement(t.Fragment,null,t.createElement(d.Z,{className:r.headingIntro({variant:C})},"Ask for a"),t.createElement(d.Z,{as:I&&"default"===C?"h2":"h3",className:r.heading({variant:C})},"JB Deal!")),t.createElement("p",{className:r.headingBorderLabel({variant:C}),style:(0,o._)({backgroundImage:"unset"},(null==b?void 0:b.heading)?{backgroundColor:b.heading}:{})},t.createElement(f.Z,{style:{color:null!==(x=null==b?void 0:b.background)&&void 0!==x?x:null===c.DG||void 0===c.DG?void 0:null===(N=c.DG.primary)||void 0===N?void 0:N.main}},"Instore | Online"))))):null,P?t.createElement("div",{className:r.exclusions},"Excludes JB Hi-Fi Marketplace Products"):null,t.createElement("div",{className:r.actionWrapper({variant:C})},t.createElement(k,{icon:"Chat",text:a,link:n,onClickHandler:i,contentPalette:b,testId:T}),!s&&m?t.createElement(k,{icon:"Phone",iconProps:{style:{marginRight:"-0.3em"}},text:m,link:p,onClickHandler:w,contentPalette:b,testId:L}):null,E?t.createElement("div",null,E):null))))}},5745:function(e,l,a){a.d(l,{B:()=>p});var o=a(51606),n=a(70879),t=a(27337),i=a(44194),r=a(28740),d=a(49418),s=a(4550),u=a(28521),c=a(61271);let v=({icon:e,label:l,url:a,shouldOpenInNewWindow:o=!1,id:t,hoverPalette:r})=>{var d,s;return i.createElement("a",(0,n._)({href:a,className:"_1n7vu7d4",style:(0,c.L)({"var(--_1n7vu7d1)":null!==(d=null==r?void 0:r.text)&&void 0!==d?d:u.DG.primary.dark,"var(--_1n7vu7d0)":null!==(s=null==r?void 0:r.background)&&void 0!==s?s:u.DG.primary.main}),id:t},o?{target:"_blank",rel:"noreferrer"}:{}),null!=e?e:null,i.createElement("span",{className:"_1n7vu7d3"},l))},m=({tiles:e})=>i.createElement("div",{className:"_1n7vu7d2"},e.map((e,l)=>i.createElement(v,(0,n._)({key:l},e))));class p{}(0,o._)(p,"toHeroBlockProps",(e,l={})=>{var a,o;let{fields:c}=null!=e?e:{},{launchTilesProps:v,heroBlockHeadingProps:p,heroBlockCta:g,showTags:f=!0}=l,h=(null==c?void 0:c.mobilePresentation)==="Slide";return{testId:l.testId,heading:p?i.createElement(d.w,p):null,breakToCarousel:h,launchTiles:v?i.createElement(m,v):null,footer:g,cards:null==c?void 0:null===(o=c.cards)||void 0===o?void 0:null===(a=o.map((e,l)=>{if(!(null==e?void 0:e.fields))return null;let a=r.n.toCardProps(e);return(0,t._)((0,n._)({},a),{width:h?{xs:"345px",md:"100%"}:a.width,showTag:f,maxContentLines:2,headingSize:"small",cover:a.isFixedHeight?a.cover:i.createElement(s.mG,(0,t._)((0,n._)({},r.n.toCardCoverImageProps(e)),{sizes:`(max-width: ${u.XP.md}px) ${h?"345px":"100vw"}, ${0===l?"700px":"350px"}`}))})}))||void 0===a?void 0:a.filter(Boolean)}})},84611:function(e,l,a){a.d(l,{b:()=>s});var o=a(51606),n=a(70879),t=a(27337),i=a(9465),r=a(91027),d=a(44194);class s{}(0,o._)(s,"toHeroBannerProps",(e,l)=>{var a,o,s,u,c,v,m,p,g,f,h,k;return{testId:l,href:null!==(h=null==e?void 0:null===(a=e.fields)||void 0===a?void 0:a.urllink)&&void 0!==h?h:"",image:(null==e?void 0:null===(s=e.fields)||void 0===s?void 0:null===(o=s.desktopLeaderboard)||void 0===o?void 0:o.fields)?d.createElement(i.b,(0,t._)((0,n._)({},r.H.toContentfulImageProps(null==e?void 0:null===(u=e.fields)||void 0===u?void 0:u.desktopLeaderboard)),{height:220,width:1124})):null,imageMobile:(null==e?void 0:null===(v=e.fields)||void 0===v?void 0:null===(c=v.mobileLeaderboard)||void 0===c?void 0:c.fields)?d.createElement(i.b,(0,t._)((0,n._)({},r.H.toContentfulImageProps(null==e?void 0:null===(m=e.fields)||void 0===m?void 0:m.mobileLeaderboard)),{height:400,width:343})):null,trackingData:{id:null!==(k=null==e?void 0:null===(p=e.fields)||void 0===p?void 0:p.name)&&void 0!==k?k:"",url:null==e?void 0:null===(g=e.fields)||void 0===g?void 0:g.urllink,position:0,type:"leaderboard",brand:null==e?void 0:null===(f=e.fields)||void 0===f?void 0:f.brand}}}),(0,o._)(s,"toCollectionLeaderboardBannerProps",(e,l)=>{var a,o,s,u,c,v,m,p,g,f,h,k,w,b;return{href:null!==(h=null==e?void 0:null===(o=e.entry)||void 0===o?void 0:null===(a=o.fields)||void 0===a?void 0:a.urllink)&&void 0!==h?h:"",desktopImage:d.createElement(i.b,(0,t._)((0,n._)({},r.H.toContentfulImageProps(null==e?void 0:null===(u=e.entry)||void 0===u?void 0:null===(s=u.fields)||void 0===s?void 0:s.desktopLeaderboard)),{isProgressive:!1})),mobileImage:d.createElement(i.b,(0,t._)((0,n._)({},r.H.toContentfulImageProps(null==e?void 0:null===(v=e.entry)||void 0===v?void 0:null===(c=v.fields)||void 0===c?void 0:c.mobileLeaderboard)),{isProgressive:!1})),trackingData:{name:null!==(k=null==e?void 0:null===(p=e.entry)||void 0===p?void 0:null===(m=p.fields)||void 0===m?void 0:m.name)&&void 0!==k?k:"",brand:null!==(w=null==e?void 0:null===(f=e.entry)||void 0===f?void 0:null===(g=f.fields)||void 0===g?void 0:g.brand)&&void 0!==w?w:"",category:null!==(b=null==e?void 0:e.category)&&void 0!==b?b:"",index:l}}})},49418:function(e,l,a){a.d(l,{w:()=>c,U:()=>i});var o=a(44194),n={container:"_1hd0ew40",heading:"_1hd0ew41",launchTiles:"_1hd0ew42",footer:"_1hd0ew43"},t=a(11080);let i=({heading:e,cards:l=[],launchTiles:a,footer:i,breakToCarousel:r=!1,testId:d})=>o.createElement("div",{className:n.container},e?o.createElement("div",{className:n.heading},e):null,o.createElement(t.g,{cards:l,variant:t.V.withPrimary,isCarousel:!!r&&{xs:!0,md:!1}}),a?o.createElement("div",{className:n.launchTiles},a):null,i?o.createElement("div",{className:n.footer,"data-testId":`${d}-footer`},i):null);var r=a(10469),d={container:(0,r.c)({defaultClassName:"_37aeb60",variantClassNames:{hasImage:{false:"_37aeb61"}},defaultVariants:{},compoundVariants:[]}),heading:(0,r.c)({defaultClassName:"_37aeb62",variantClassNames:{fontFamily:{dom_casual:"_37aeb63",roboto:"_37aeb64"},isIconStacked:{true:"_37aeb65",false:"_37aeb66"}},defaultVariants:{},compoundVariants:[]})},s=a(44281),u=a(6088);let c=({color:e,fontFamily:l="roboto",content:a,icon:n,image:t,isIconStacked:i=!1})=>{let r=(0,u.V)(i);return o.createElement("div",{className:d.container({hasImage:!!t}),style:{color:e}},t||null,a?o.createElement(v,{fontFamily:l,isIconStacked:r},n||null,a):null)},v=({children:e,fontFamily:l,isIconStacked:a})=>"dom_casual"===l?o.createElement(s.Z,{className:d.heading({fontFamily:l,isIconStacked:a}),as:"h2"},e):o.createElement("h2",{className:d.heading({fontFamily:l,isIconStacked:a})},e)},5477:function(e,l,a){a.d(l,{T:()=>h});var o=a(70879),n=a(44194),t=a(3765),i=a(10469),r={container:"_1lvqxxb0",imageContainer:"_1lvqxxb1",imageContainerRecipes:(0,i.c)({defaultClassName:"_1lvqxxb2",variantClassNames:{isFullBleedImage:{false:"_1lvqxxb3"}},defaultVariants:{},compoundVariants:[]}),title:"_1lvqxxb4"},d=a(34473),s=a(36634),u=a(64336);let c=({image:e,title:l,href:a,isFullBleedImage:o=!1,onClick:t})=>{let{tracker:i}=(0,d.EF)();return n.createElement(s.rU,{className:r.container,href:a,onClick:e=>{i.trackClick({label:l,extraData:{moduleName:"ThumbnailImage"}}),null==t||t(e)}},n.createElement("div",{className:(0,u.AK)(r.imageContainer,r.imageContainerRecipes({isFullBleedImage:o}))},null!=e?e:null),n.createElement("span",{className:r.title},null!=l?l:""))};var v={stackedThumbnailImage:(0,i.c)({defaultClassName:"_83d6pr0",variantClassNames:{isStacked:{true:"_83d6pr1",false:"_83d6pr2"}},defaultVariants:{},compoundVariants:[]})};let m=({thumbnails:e,isStacked:l=!1})=>n.createElement("div",{className:v.stackedThumbnailImage({isStacked:l})},e.map((e,l)=>n.createElement(c,(0,o._)({key:l},e))));var p=a(16437),g=a(6088),f=a(28521);let h=({thumbnails:e,isStacked:l={xs:!0,md:!1},carouselProps:a={}})=>{let i=(0,g.V)(l),r=e.reduce((e,l,a)=>(a%2==0?e.push([l]):e[e.length-1].push(l),e),[]),d=(0,p.G)("md","up");return n.createElement(t.l,(0,o._)({slidesPerView:"auto",showPagination:!1,showArrows:d,spaceBetween:0,slidesOffsetBefore:-8,slidesPerGroup:d?2:1,fullBleed:!d,hideGradients:!d,gradientColor:f.DG.secondary.main},a),r.map((e,l)=>n.createElement(m,{key:l,thumbnails:e,isStacked:i})))}},60929:function(e,l,a){a.d(l,{kJ:()=>g,ZP:()=>p,Eb:()=>f});var o=a(70879),n=a(27337),t=a(44194),i=a(51746),r=a(61284),d=a(51606),s=a(67891),u=a(35716),c=a(31983);class v{}(0,d._)(v,"toTakeoverBlockProps",(e,{isLoggedIn:l,productTrackingData:a}={})=>{var o,n,t,r,d,v,m,p,g,f;let h=(null==e?void 0:null===(n=e.fields)||void 0===n?void 0:null===(o=n.carousel.fields)||void 0===o?void 0:o.type)===i.cu.PromoCard?u.R.toListingBlockPromoCardCarouselProps(null==e?void 0:e.fields.carousel,{isLoggedIn:l}):(null===(t=e.fields)||void 0===t?void 0:t.carousel)?u.R.toListingBlockProductCarouselProps(null===(r=e.fields)||void 0===r?void 0:r.carousel,{productTrackingData:a}):void 0,k=c.z.toContentThemePalette(null==e?void 0:null===(m=e.fields)||void 0===m?void 0:null===(v=m.heroBanner)||void 0===v?void 0:null===(d=v.fields)||void 0===d?void 0:d.backgroundColour);return{backgroundColor:k.background,headingColor:k.heading,heroBanner:s.M.toHeroBannerProps(null==e?void 0:null===(p=e.fields)||void 0===p?void 0:p.heroBanner),heading:(null===(g=e.fields)||void 0===g?void 0:g.displayCarouselHeading)?null==h?void 0:h.heading:void 0,carousel:null!==(f=null==h?void 0:h.children)&&void 0!==f?f:null}});class m{}(0,d._)(m,"toHomepageProps",(e,l={})=>{var a,o,n,t,i;return{sections:null!==(i=null===(a=e.fields)||void 0===a?void 0:a.sections)&&void 0!==i?i:[],takeoverBlock:(null===(n=e.fields)||void 0===n?void 0:null===(o=n.saleTakeover)||void 0===o?void 0:o.fields)?v.toTakeoverBlockProps(null===(t=e.fields)||void 0===t?void 0:t.saleTakeover,l):void 0}});let p=(0,t.createContext)(null),g={descriptor:{page:"Homepage"},listPrefix:"Homepage - "},f=({children:e,disclaimers:l,useInitialData:a,salesLineHours:d})=>{var s,u;let c=a(),{entries:v,isLoading:f,error:h}=(0,r.U)({filter:{content_type:i.UZ.homepage,"sys.id":null!==(u=null==c?void 0:null===(s=c.sys)||void 0===s?void 0:s.id)&&void 0!==u?u:""},autoRefresh:window.Jbhifi.isContentPreview}),k=(null==v?void 0:v.length)?v[0]:null,w=(0,t.useMemo)(()=>m.toHomepageProps(k||c,{productTrackingData:g}),[c,k]);return t.createElement(p.Provider,{value:{data:(0,n._)((0,o._)({},w),{disclaimers:l,salesLineHours:d}),isLoading:f,error:h}},e)}},45134:function(e,l,a){a.d(l,{b:()=>Y});var o=a(70879),n=a(27337),t=a(44194),i=a(60929);let r=()=>{let e=(0,t.useContext)(i.ZP);if(null==e)throw Error("useHomepageProps must be used within a HomepagePropsProvider");return e};var d=a(57349),s=a(51606),u=a(31983),c=a(69111),v=a(5745),m=a(46657),p=a(9465),g=a(91027),f=a(49418),h=a(34473),k=a(28740),w=a(17270);class b{}(0,s._)(b,"toContentBlockProps",e=>{var l,a;let o=u.z.toContentThemeVariables(null==e?void 0:null===(l=e.fields)||void 0===l?void 0:l.theme);return{style:{backgroundColor:null==o?void 0:null===(a=o.palette)||void 0===a?void 0:a.background}}}),(0,s._)(b,"toTabsBlockProps",(e,{testId:l}={})=>{var a,o,n,i,r,d,s,v,f,h,k,w;let b=u.z.toContentThemeVariables(null==e?void 0:null===(a=e.fields)||void 0===a?void 0:a.theme);return{testId:l,heading:(null==e?void 0:null===(n=e.fields)||void 0===n?void 0:null===(o=n.headingLogo)||void 0===o?void 0:o.fields)?t.createElement(p.b,g.H.toContentfulImageProps(null==e?void 0:null===(i=e.fields)||void 0===i?void 0:i.headingLogo)):t.createElement(t.Fragment,null,(null==b?void 0:b.icon)?t.createElement(m.JO,{name:b.icon}):null,t.createElement(c.B,{heading:null==e?void 0:null===(r=e.fields)||void 0===r?void 0:r.heading})),subHeading:null==e?void 0:null===(d=e.fields)||void 0===d?void 0:d.subText,palette:null!==(k=null==b?void 0:b.palette)&&void 0!==k?k:{},linkProps:(null==e?void 0:null===(v=e.fields)||void 0===v?void 0:null===(s=v.button)||void 0===s?void 0:s.fields)?{label:e.fields.button.fields.label,href:e.fields.button.fields.url,shouldOpenInNewWindow:e.fields.button.fields.shouldOpenInNewWindow}:void 0,tabs:null!==(w=null==e?void 0:null===(h=e.fields)||void 0===h?void 0:null===(f=h.heroBlocks)||void 0===f?void 0:f.map(a=>{var o,n,i;return{label:null!==(i=null==a?void 0:null===(o=a.fields)||void 0===o?void 0:o.heading)&&void 0!==i?i:"",contents:t.createElement(C,{entry:a,heroCta:null==e?void 0:null===(n=e.fields)||void 0===n?void 0:n.miniBanner,testId:l})}}))&&void 0!==w?w:[]}});let C=({entry:e,heroCta:l,testId:a})=>{var i;let{tracker:r}=(0,h.EF)(),d=l?k.n.toCardProps(l):null,s=v.B.toHeroBlockProps(e,{heroBlockCta:d?t.createElement(w.V,d):void 0,testId:a});return s.cards=null===(i=s.cards)||void 0===i?void 0:i.map(e=>(0,n._)((0,o._)({},e),{onClick:(...l)=>{var a,o;r.trackClick({label:e.heading,extraData:{contentCategory:null===(a=e.tagProps)||void 0===a?void 0:a.label,moduleName:"Content card"}}),null===(o=e.onClick)||void 0===o||o.call(e,...l)}})),t.createElement(f.U,s)};var _=a(87349);class E{}(0,s._)(E,"toContactBlockProps",(e,l)=>{var a,n,t,i,r,d,s,c,v,m,p,g,f,h,k,w,b;return(0,o._)({heading:null!==(p=null===(a=e.fields)||void 0===a?void 0:a.heading)&&void 0!==p?p:"",subText:null===(n=e.fields)||void 0===n?void 0:n.subText,shouldHideCallUs:null!==(g=null===(t=e.fields)||void 0===t?void 0:t.hideCallUs)&&void 0!==g&&g,callText:null!==(f=null===(i=e.fields)||void 0===i?void 0:i.callText)&&void 0!==f?f:"",callUrl:null!==(h=null===(r=e.fields)||void 0===r?void 0:r.callUrl)&&void 0!==h?h:"",chatText:null!==(k=null===(d=e.fields)||void 0===d?void 0:d.chatText)&&void 0!==k?k:"",chatUrl:null!==(w=null===(s=e.fields)||void 0===s?void 0:s.chatUrl)&&void 0!==w?w:"",margin:null!==(b=null===(c=e.fields)||void 0===c?void 0:c.margin)&&void 0!==b?b:"bottom",salesLineHours:null==l?void 0:l.salesLineHours,testId:null==l?void 0:l.testId},(null===(m=e.fields)||void 0===m?void 0:null===(v=m.themeColourAndIcon)||void 0===v?void 0:v.fields)?{contentPalette:u.z.toContentThemeVariables(e.fields.themeColourAndIcon).palette}:{})});var B=a(35716),P=a(99065),y=a(4339),N=a(53162),x=a(25797),I=a(36318),H=a(99727),T=a(84611),L=a(84064),V=a(45963);let D=(e,l={})=>{var a,n,t;let i=null==e?void 0:null===(t=e.sys)||void 0===t?void 0:null===(n=t.contentType)||void 0===n?void 0:null===(a=n.sys)||void 0===a?void 0:a.id,r=i?(0,o._)({},U,l)[i]:void 0;return"function"==typeof r?r(e):r},U={listingBlock:{Component:d.H,transformer:_.x.toListingBlockProps},contactBlock:{Component:P.O,transformer:E.toContactBlockProps},articleBlock:{Component:y.m,transformer:b.toTabsBlockProps},carousel:B.R.toContentEntryProps,promoCard:{Component:N.J,transformer:x.A.toPromoCardProps},productBlock:{Component:y.m,transformer:I.t.toTabsBlockProps},leaderboardBanner:{Component:H.y,transformer:T.b.toHeroBannerProps},pageListing:{Component:L.t,transformer:V.$.toContentfulPagesListProps}},A=({entry:e,overrides:l})=>{let{Component:a,props:o}=(0,t.useMemo)(()=>{var a;let{Component:o,transformer:n}=null!==(a=D(e,l))&&void 0!==a?a:{Component:null,transformer:null};return{Component:o,props:null==n?void 0:n(e)}},[e,l]);return a&&o?t.createElement(a,o):null},F=e=>({listingBlock:_.x.toContentBlockProps,articleBlock:b.toContentBlockProps,productBlock:I.t.toContentBlockProps,carousel:B.R.toContentBlockProps,promoCard:l=>x.A.toContentBlockProps(l,{isLoggedIn:null==e?void 0:e.isLoggedIn}),contactBlock:{paddingY:0,paddingBottom:1,backgroundColor:"secondary.main"},leaderboardBanner:{backgroundColor:"secondary.main",paddingY:7.5}});var G=a(71837),J={container:"uzwo9b0"},M=a(96701),S=a(12178),Z=a(81447),$=a(67891),O=a(82607),W=a(81319),z=a(28521);let R=({heading:e,backgroundColor:l=z.DG.primary.main,headingColor:a=z.DG.primary.dark,heroBanner:i,carousel:r})=>t.createElement("div",{className:"_14s7bxl0"},t.createElement("div",{className:"_14s7bxl1",style:{background:l}}),t.createElement(G.b,{maxWidth:"large"},t.createElement(H.y,(0,n._)((0,o._)({},i),{isContained:!1})),t.createElement("div",{className:"_14s7bxl2"},t.createElement(d.H,{heading:e,palette:{heading:a}},r))));var q=a(94201);let Y=()=>{let{data:e,isLoading:l,error:a}=r(),{contentfulThemeApiClient:i}=(0,S.L)(),{banners:d,error:s,isLoading:u}=(0,M.Hx)({queryOptions:{handle:"homepage"},contentfulThemeApiClient:i}),c=d.filter(({entry:e})=>{var l,a,o,n,t;return(null==e?void 0:null===(l=e.fields)||void 0===l?void 0:l.dynamicImageUrls)?(null==e?void 0:null===(a=e.fields)||void 0===a?void 0:a.desktopHeroBannerUrl)&&(null==e?void 0:null===(o=e.fields)||void 0===o?void 0:o.mobileHeroBannerUrl):(null==e?void 0:null===(n=e.fields)||void 0===n?void 0:n.desktopHeroBanner)&&(null==e?void 0:null===(t=e.fields)||void 0===t?void 0:t.mobileHeroBanner)}).slice(0,8);if(a)return console.log(a),null;if(!e&&l)return t.createElement("div",null,"Loading...");if(!e)return null;let{takeoverBlock:v,heroBannerCarouselProps:m,sections:p=[],disclaimers:g}=e;return t.createElement(h.L8,{category:"Homepage",context:"homepage"},t.createElement("div",{className:J.container},!l&&v?t.createElement(R,v):u||(null==c?void 0:c.length)&&!s?t.createElement(Z.W,(0,n._)((0,o._)({},null!=m?m:{},$.M.toHeroBannerCarouselProps(c)),{isLoading:u,variant:"homepage"})):null,p.map((e,l)=>t.createElement(W.S,{key:l,errorMessageProps:{variant:"contentBlock"}},t.createElement(K,{entry:e}))),g?t.createElement(G.b,(0,n._)((0,o._)({},j),{backgroundColor:"secondary.main"}),t.createElement(O.e,{disclaimers:g})):null))},j={paddingX:{mobile:4,tablet:8},paddingY:{mobile:7.5,tablet:15}},K=({entry:e})=>{let{isLoggedIn:l}=(0,q.jt)(),{data:a}=r(),n=(0,t.useMemo)(()=>{var a,o,n,t;let i=F({isLoggedIn:l})[null!==(t=null==e?void 0:null===(n=e.sys)||void 0===n?void 0:null===(o=n.contentType)||void 0===o?void 0:null===(a=o.sys)||void 0===a?void 0:a.id)&&void 0!==t?t:""];return"function"==typeof i?i(e):i},[e]);return t.createElement(G.b,(0,o._)({},j,null!=n?n:{}),t.createElement(A,{entry:e,overrides:{leaderboardBanner:{Component:H.y,transformer:e=>T.b.toHeroBannerProps(e,"homepage-leaderboard-banner")},articleBlock:{Component:y.m,transformer:e=>b.toTabsBlockProps(e,{testId:"homepage-article-block"})},listingBlock:{Component:d.H,transformer:e=>_.x.toListingBlockProps(e,{testId:"homepage-listing-block"})},carousel:e=>B.R.toContentEntryProps(e,{productTrackingData:i.kJ,isLoggedIn:l,testId:"homepage-carousel-block"}),productBlock:{Component:y.m,transformer:e=>I.t.toTabsBlockProps(e,{productTrackingData:i.kJ,testId:"homepage-product-block"})},promoCard:{Component:N.J,transformer:e=>x.A.toPromoCardProps(e,{isLoggedIn:l})},contactBlock:{Component:P.O,transformer:e=>E.toContactBlockProps(e,{salesLineHours:null==a?void 0:a.salesLineHours,testId:"homepage-contact-block"})}}}))}}}]);
//# sourceMappingURL=bundle.4fa9e648d91221a7.js.map