var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,i,u,l,f,d,s,c,p,b,h,v,y,g,m={561:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(271),t.e(456),t.e(279)]).then((()=>()=>t(279))),"./extension":()=>Promise.all([t.e(271),t.e(456),t.e(279)]).then((()=>()=>t(279))),"./style":()=>t.e(534).then((()=>()=>t(534)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},j={};function w(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,exports:{}};return m[e].call(t.exports,t,t.exports,w),t.exports}w.m=m,w.c=j,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{271:"5436b53b1aea51fcf64e",279:"1fd9c937052d86ddfa2c",456:"c033907d17b01dd9bd2b",534:"d3cfa287fd8ca724dcd6",666:"8aa07bec2d524f2eeeb6",801:"233a4be81250b001d06f",954:"615d57dcec1f8e78ce3d"}[e]+".js?v="+{271:"5436b53b1aea51fcf64e",279:"1fd9c937052d86ddfa2c",456:"c033907d17b01dd9bd2b",534:"d3cfa287fd8ca724dcd6",666:"8aa07bec2d524f2eeeb6",801:"233a4be81250b001d06f",954:"615d57dcec1f8e78ce3d"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="jupyterlab-tour:",w.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="jupyterlab-tour",u=(e,r,t,a)=>{var n=o[e]=o[e]||{},u=n[r];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[r]={get:t,from:i,eager:!!a})},l=[];switch(t){case"default":u("jupyterlab-tour","3.1.2",(()=>Promise.all([w.e(271),w.e(456),w.e(279)]).then((()=>()=>w(279))))),u("jupyterlab_toastify","4.1.3",(()=>Promise.all([w.e(666),w.e(271)]).then((()=>()=>w(666))))),u("react-joyride","2.3.0",(()=>Promise.all([w.e(954),w.e(271),w.e(456)]).then((()=>()=>w(954)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,u=1,l=!0;;u++,i++){var f,d,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!l||("u"==s?u>a&&!n:""==s!=n);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(u<=a){if(f!=e[u])return!1}else{if(n?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(n||u<=a)return!1;l=!1,u--}else{if(u<=a||d<s!=n)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var b=e[i];c.push(1==b?p()|p():2==b?p()&p():b?o(b,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",f=(e,r,t,a)=>{var n=u(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,n,a)),s(e[t][n])},d=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},s=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,a,n){var o=w.I(r);return o&&o.then?o.then(e.bind(e,r,w.S[r],t,a,n)):e(r,w.S[r],t,a,n)})(((e,r,t,a)=>(i(e,t),f(r,0,t,a)))),b=c(((e,r,t,a,n)=>r&&w.o(r,t)?f(r,0,t,a):n())),h=c(((e,r,t,a,n)=>{var o=r&&w.o(r,t)&&d(r,t,a);return o?s(o):n()})),v={},y={271:()=>p("default","react",[1,17,0,1]),456:()=>p("default","react-dom",[1,17,0,1]),2:()=>p("default","@jupyterlab/mainmenu",[1,3,0,9]),44:()=>p("default","@jupyterlab/notebook",[1,3,0,11]),138:()=>p("default","@jupyterlab/apputils",[1,3,0,9]),168:()=>p("default","@lumino/signaling",[1,1,4,3]),254:()=>p("default","@jupyterlab/statedb",[1,3,0,6]),378:()=>h("default","react-joyride",[1,2,3,0],(()=>w.e(954).then((()=>()=>w(954))))),477:()=>b("default","jupyterlab_toastify",[1,4,1,2],(()=>w.e(666).then((()=>()=>w(666))))),503:()=>p("default","@jupyterlab/translation",[1,3,0,9]),797:()=>p("default","@lumino/coreutils",[1,1,5,3]),904:()=>p("default","@jupyterlab/settingregistry",[1,3,0,6])},g={271:[271],279:[2,44,138,168,254,378,477,503,797,904],456:[456]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},a=r=>{delete v[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var n=y[e]();n.then?r.push(v[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={439:0};w.f.j=(r,t)=>{var a=w.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(271|456)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=w.p+w.u(r),i=new Error;w.l(o,(t=>{if(w.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,u]=t,l=0;for(a in i)w.o(i,a)&&(w.m[a]=i[a]);for(u&&u(w),r&&r(t);l<o.length;l++)n=o[l],w.o(e,n)&&e[n]&&e[n][0](),e[o[l]]=0},t=self.webpackChunkjupyterlab_tour=self.webpackChunkjupyterlab_tour||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=w(561);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyterlab-tour"]=S})();