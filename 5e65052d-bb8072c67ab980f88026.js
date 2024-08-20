"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9317],{33678:function(e,i,t){t.d(i,{Cv:function(){return Y},lq:function(){return S},mR:function(){return z}});var a=t(64467),n=t(80045),s=t(88763),o=t(71532),r=t(68424),d=t(767),l=t(89745),m=t(91101),c=t(53644),p=t(32485),u=t.n(p),g=t(49891),h=t.n(g);const b=["className","background","theme","heading","image","icon","buttons","assetsImg","variant","containerHeight","width","customLayout","primaryOutline","isPrimaryBtn","variantsTypePrimary","variantsTypeSecondary","animationVideo","videoUrl"];function v(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function y(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?v(Object(t),!0).forEach((function(i){(0,a.A)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}const x=e=>{var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,s.cloneElement)(e,{loading:"eager"}):e},f=function(e,i){void 0===i&&(i="");return"Learn more"===e&&""!==i?`${e} about ${i}`:`${e}`};var w={name:"2fzaxi",styles:"display:flex;flex-wrap:wrap;gap:var(--spectrum-global-dimension-size-200)"};const z=e=>{let{buttons:i,styles:t=["fill","outline"],variants:a=["accent","secondary"],heading:n="",className:o}=e;return i?(0,r.Y)("div",null,(0,r.Y)("div",{className:o,css:w},s.Children.map(i.props.children,((e,i)=>{let s=t[0],o=a[0];i>0&&(s=t[1],o=a[1]);const m=(0,l.tm)(e);return(0,r.Y)("div",{key:i},(0,r.Y)(d.A,{"aria-label":f(m.props.children,n),href:m.props.href,variant:o,style:s},(0,r.Y)("span",{class:"spectrum-Button-label"},m.props.children)))})))):null},Y=e=>{let{image:i,styles:t}=e;return i?(0,s.cloneElement)(i,{children:(0,l.t_)(i.props.children,x),css:(0,r.AH)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:0;",t," .gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{object-fit:cover;}","")}):null},H=e=>{let{texts:i,customLayout:t,isTextWhite:a=!0}=e;return Object.keys(i).filter((e=>e.startsWith("text"))).map((e=>(0,s.cloneElement)(i[e],{className:"spectrum-Body spectrum-Body--sizeL",css:(0,r.AH)("&.spectrum-Body--sizeL{margin-top:0!important;",!0===a&&"\n            color: #fff!important;\n          "," &:last-of-type{margin-bottom:0!important;}}@media screen and (max-width: ",l.Vh,"){padding:0 var(--spectrum-global-dimension-size-115);}","")})))};var N={name:"1vnctkn",styles:"margin-top:0;margin-bottom:var(--spectrum-global-dimension-size-200);&+p{margin-bottom:var(--spectrum-global-dimension-size-200);}"};const A=e=>{let{heading:i,variant:t,customLayout:a}=e;return i?(0,s.cloneElement)(i,{mdxType:"h1",originalType:"h1",className:"default"===t||a?a?"spectrum-Heading--sizeXL spectrum-Heading--serif":"spectrum-Heading--sizeXL":"spectrum-Heading--sizeXXL spectrum-Heading--serif",css:N}):null};var T={name:"12qvhf1",styles:"width:100%;display:flex;justify-content:center;margin:150px 0"},k={name:"zl1inp",styles:"display:flex;justify-content:center"},j={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},O={name:"m6iwhx",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-300)!important;.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{height:100%;object-fit:contain;}"},P={name:"1dtx8xj",styles:"display:flex;height:100%;justify-content:center"},L={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},V={name:"zl1inp",styles:"display:flex;justify-content:center"},E={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},I={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},B={name:"1p8rch3",styles:"margin-top:var(--spectrum-global-dimension-size-200)"},$={name:"yypzb5",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-200)"},C={name:"zl1inp",styles:"display:flex;justify-content:center"},X={name:"zl1inp",styles:"display:flex;justify-content:center"};const S=e=>{let{className:i,background:t,theme:a="dark",heading:d,image:p,icon:g,buttons:v,assetsImg:f,variant:w="default",containerHeight:N=1e3,width:S=l.fy,customLayout:_=!1,primaryOutline:D=!1,isPrimaryBtn:F=!1,variantsTypePrimary:W="accent",variantsTypeSecondary:q="secondary",animationVideo:U="",videoUrl:M}=e,Q=(0,n.A)(e,b);const{siteMetadata:R,location:G}=(0,s.useContext)(m.Ay);if((0,s.useEffect)((()=>{if(U){var e=h().loadAnimation({container:document.querySelector("#svgContainer"),renderer:"svg",loop:!1,autoplay:!0,animationData:U});e.addEventListener("enterFrame",(function(i){i.currentTime>e.totalFrames-25&&e.pause()}))}}),[]),!w||"default"===w){const{home:e,pages:n}=R,s=(0,l.mc)(G.pathname),m=(0,l._Y)(n),g=(0,l.bB)(s,m),h=(0,l.SH)(s,g);return(0,r.Y)("section",{className:u()(i,`spectrum--${a}`),css:(0,r.AH)("position:relative;height:var(--spectrum-global-dimension-size-3400);margin-bottom:var(--spectrum-global-dimension-size-400);background-color:",null!=t?t:"rgb( 29, 125, 238)",";width:100%;display:flex;@media screen and (max-width: ",l.fy,"){overflow:auto;}@media screen and (max-width: ",l.Vh,"){height:calc(100vh - var(--spectrum-global-dimension-size-1200));}","")},M&&p?(0,r.Y)("div",{css:X},(0,r.Y)(Y,{image:p}),(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;position:absolute;width:30%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"}))):p?(0,r.Y)(Y,{image:p,styles:"position: absolute;"}):M&&(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;width:90%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"})),(0,r.Y)("div",{css:(0,r.AH)("margin:auto;display:flex;position:relative;height:100%;max-width:",S,";flex-direction:row;width:100%;align-items:center;&>p{margin-top:0!important;}","")},(0,r.Y)("div",{css:(0,r.AH)("width:calc(5 * 100% / 12);position:absolute;display:flex;flex-direction:column;&>p{margin-top:var(--spectrum-global-dimension-size-225)!important;margin-bottom:0!important;}@media screen and (max-width: ",l.fy,"){width:auto;padding:0 var(--spectrum-global-dimension-size-400);}","")},!0!==(null==e?void 0:e.hidden)&&(null==e?void 0:e.title)&&(null==e?void 0:e.href)&&g&&(0,r.Y)(c.B,{pages:[l.uQ,e,y(y({},g),{},{href:(0,o.Fe)(g.href)}),h&&y(y({},h),{},{href:(0,o.Fe)(h.href)})]}),(0,r.Y)(A,{heading:d,variant:w}),(0,r.Y)(H,{texts:Q}))))}{const e="calc(var(--spectrum-global-dimension-size-6000) + var(--spectrum-global-dimension-size-1800))";var J,K,Z,ee;if("fullwidth"===w&&_)return(0,r.Y)("section",{className:u()(i,`spectrum--${a}`),css:(0,r.AH)("width:100%;background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";@media screen and (max-width: ",l.TN,"){overflow-y:hidden;}@media screen and (max-width: ",l.Vh,"){.spectrum-Heading--sizeXL{font-size:var(--spectrum-alias-heading-l-text-size);}}","")},M&&p?(0,r.Y)("div",{css:C},(0,r.Y)(Y,{image:p}),(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;position:absolute;width:30%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"}))):p?(0,r.Y)(Y,{image:p}):M&&(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;width:90%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"})),(0,r.Y)("div",{css:(0,r.AH)("height:100%;top:0;bottom:0;width:100%;box-sizing:border-box;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;text-align:center;h1{padding:var(--spectrum-global-dimension-size-500) var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-0)!important;}@media screen and (max-width: ",l.Vh,"){padding:0!important;}@media screen and (max-width: ",l.TN,"){padding:0 var(--spectrum-global-dimension-size-250);h1{padding:var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-0)!important;}}","")},d&&(0,r.Y)(A,{heading:d,variant:w,customLayout:_}),(0,r.Y)(H,{texts:Q}),v?(0,r.Y)(z,{buttons:v,styles:["fill","outline"],variants:[W,q],css:$}):(0,r.Y)("div",{css:B}),(0,r.Y)("div",{className:null==f||null===(J=f.props)||void 0===J?void 0:J.children})));if("video"===w&&U)return(0,r.Y)("section",{className:u()(i,`spectrum--${a}`),css:(0,r.AH)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;overflow:hidden;height:auto;@media screen and (max-width: ",l.TN,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}@media screen and (max-width: ",l.Vh,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}","")},(0,r.Y)("div",{css:(0,r.AH)("@media screen and (min-width: ",l.fy,"){position:relative;max-width:",l.fy," margin:auto;}","")},(0,r.Y)("div",{css:(0,r.AH)("@media screen and (max-width: ",l.TN,"){display:none;}","")},(0,r.Y)("div",{id:"svgContainer"})),(0,r.Y)("div",{css:(0,r.AH)("display:flex;height:100%;max-width:",S,";margin:auto;@media screen and (max-width: ",l.Vh,"){display:inline;}","")},(0,r.Y)("div",{css:(0,r.AH)("display:flex;flex-direction:column;justify-content:center!important;position:absolute;padding:0;top:0;text-align:left;width:30%;align-item:center;bottom:0;box-sizing:border-box;@media screen and (max-width: ",l.Vh,"){padding:0!important;width:100%!important;position:initial!important;}@media screen and (max-width: ",l.TN,"){padding:0 var(--spectrum-global-dimension-size-100);width:100%!important;top:20px!important;position:initial!important;h1{padding:0 var(--spectrum-global-dimension-size-200) 0 var(--spectrum-global-dimension-size-0)!important;font-size:var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));}}","")},d&&(0,r.Y)(A,{heading:d,variant:w,customLayout:_}),(0,r.Y)(H,{texts:Q}),(0,r.Y)(z,{buttons:v,styles:["outline"],variants:["staticWhite"],css:I})),(0,r.Y)("div",{css:(0,r.AH)("max-width:",S,";margin:auto;display:none;@media screen and (max-width: ",l.TN,"){display:block;}@media screen and (max-width: ",l.Vh,"){display:inline;}","")},(0,r.Y)("div",{className:null==f||null===(K=f.props)||void 0===K?void 0:K.children})))));if("halfwidth"===w&&_)return(0,r.Y)("section",{className:u()(i,`spectrum--${a}`),css:(0,r.AH)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;overflow:hidden;height:auto;@media screen and (max-width: ",l.TN,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}@media screen and (max-width: ",l.Vh,"){height:auto;padding:var(--spectrum-global-dimension-size-225);box-sizing:border-box;}","")},(0,r.Y)("div",{css:(0,r.AH)("@media screen and (min-width: ",l.fy,"){display:flex;justify-content:space-between;position:relative;max-width:",l.fy,";margin:auto;}","")},(0,r.Y)("div",{css:(0,r.AH)("display:flex;flex-direction:column;justify-content:center!important;padding:0;top:0;text-align:left;width:36%;align-item:center;bottom:0;box-sizing:border-box;@media screen and (max-width: ",l.Vh,"){padding:0!important;width:100%!important;position:initial!important;}@media screen and (max-width: ",l.TN,"){padding:0 var(--spectrum-global-dimension-size-100);width:100%!important;top:20px!important;position:initial!important;h1{padding:0 var(--spectrum-global-dimension-size-200) 0 var(--spectrum-global-dimension-size-0)!important;font-size:var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));}}","")},g&&(0,s.cloneElement)(g,{children:(0,l.t_)(g.props.children,x),css:(0,r.AH)("height:var(--spectrum-global-dimension-size-400);width:var(--spectrum-global-dimension-size-3600);margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-300)!important;@media screen and (max-width: ",l.Vh,"){width:var(--spectrum-global-dimension-size-3000)!important;}.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{height:100%;object-fit:contain;}","")}),d&&(0,r.Y)(A,{heading:d,variant:w,customLayout:_}),(0,r.Y)(H,{texts:Q}),(0,r.Y)(z,{buttons:v,css:E,variants:[W,q],style:["outine"]})),(0,r.Y)("div",null,(0,r.Y)("div",{className:null==f||null===(Z=f.props)||void 0===Z?void 0:Z.children}))));if("fullwidth"===w)return(0,r.Y)("section",{className:u()(i,`spectrum--${a}`),css:(0,r.AH)("position:relative;width:100%;height:",e,";background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";@media screen and (max-width: ",l.TN,"){overflow:auto;}@media screen and (max-width: ",l.Vh,"){height:100vh;.spectrum-Heading--sizeXXL{font-size:var(--spectrum-alias-heading-xl-text-size);}}","")},M&&p?(0,r.Y)("div",{css:V},(0,r.Y)(Y,{image:p}),(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;position:absolute;width:30%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"}))):p?(0,r.Y)(Y,{image:p}):M&&(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;width:100%;text-align:center;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"})),(0,r.Y)("div",{css:(0,r.AH)("height:100%;position:absolute;top:0;width:100%;box-sizing:border-box;padding:0 calc(var(--spectrum-global-dimension-size-3600) + var(--spectrum-global-dimension-size-125));display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;@media screen and (max-width: ",l.TN,"){padding:0 var(--spectrum-global-dimension-size-400);}","")},(0,r.Y)(A,{heading:d,variant:w}),(0,r.Y)(H,{texts:Q}),(0,r.Y)(z,{buttons:v,variants:["accent","secondary"],css:L}),(0,r.Y)("div",{className:null==f||null===(ee=f.props)||void 0===ee?void 0:ee.children})));if("halfwidth"===w)return(0,r.Y)("section",{className:u()(i,"spectrum--lightest"),css:(0,r.AH)("background:",null!=t?t:"var(--spectrum-global-color-gray-50)",";width:100%;height:",e,";overflow:hidden;@media screen and (max-width: ",l.TN,"){height:auto;padding:var(--spectrum-global-dimension-size-400);box-sizing:border-box;}","")},(0,r.Y)("div",{css:P},(0,r.Y)("div",{css:(0,r.AH)("display:flex;flex-direction:column;justify-content:center;width:calc(5 * 100% / 12);margin-left:var(--spectrum-global-dimension-size-800);margin-right:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",l.TN,"){width:100%;margin:0;}","")},g&&(0,s.cloneElement)(g,{children:(0,l.t_)(g.props.children,x),css:O}),(0,r.Y)(A,{heading:d,isVariant:!0}),(0,r.Y)(H,{texts:Q,isTextWhite:!1}),(0,r.Y)(z,{buttons:v,css:j})),(0,r.Y)("div",{css:(0,r.AH)("flex:1;@media screen and (max-width: ",l.TN,"){display:none;}","")},M&&p?(0,r.Y)("div",{css:k},(0,r.Y)(Y,{image:p}),(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;position:absolute;width:0%;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"}))):p?(0,r.Y)(Y,{image:p}):M&&(0,r.Y)("div",{css:T},(0,r.Y)("video",{loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:(0,r.AH)("display:inline;width:600px;height:100%;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);border-radius:25px;@media screen and (max-width: ",l.TN,"){display:block;width:100%;}","")},(0,r.Y)("source",{src:M,type:"video/mp4"}))))))}}}}]);
//# sourceMappingURL=5e65052d-bb8072c67ab980f88026.js.map