var e,t,r,a,n,o,i,u,f,l,d,s,c,h,p,v,m,b,g,y={8707:(e,t,r)=>{var a={"./Module":()=>Promise.all([r.e(558),r.e(747),r.e(619),r.e(607),r.e(135),r.e(522),r.e(583)]).then((()=>()=>r(1583)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o})}},w={};function P(e){var t=w[e];if(void 0!==t)return t.exports;var r=w[e]={exports:{}};return y[e](r,r.exports,P),r.exports}P.m=y,P.c=w,P.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return P.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,P.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);P.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,P.d(n,o),n},P.d=(e,t)=>{for(var r in t)P.o(t,r)&&!P.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((t,r)=>(P.f[r](e,t),t)),[])),P.u=e=>e+"."+{135:"853a272da0c3f813",136:"34a6f800f2ea5922",141:"6d095f16721cd3a9",196:"00a5081bfa66ee71",316:"77c36f11130c6e9e",352:"955bd2a4d86639d0",405:"8cfedbc0ce6c563e",522:"af71abc786eea86a",558:"71aea88446b4d423",583:"906344b56bb934cc",591:"85201d7dd790308a",607:"e4a08ae4d7364677",609:"c9bfec1582383efa",619:"e6143d347b935656",747:"2e055f70547c2aff",784:"0c55864eb53cefd1",891:"2ecd181f714f0b21",925:"f0fa782a993dd456"}[e]+".js",P.miniCssF=e=>{},P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="auth:",P.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var i,u;if(void 0!==n)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",a+n),i.src=e),r[e]=[t];var s=(t,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{P.S={};var e={},t={};P.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];P.o(P.S,r)||(P.S[r]={});var o=P.S[r],i="auth",u=(e,t,r,a)=>{var n=o[e]=o[e]||{},u=n[t];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[t]={get:r,from:i,eager:!!a})},f=[];return"default"===r&&(u("@ldk/feature/auth","0.0.1",(()=>Promise.all([P.e(925),P.e(619),P.e(607),P.e(136)]).then((()=>()=>P(4136))))),u("@ldk/ui/toast","0.0.1",(()=>Promise.all([P.e(558),P.e(891),P.e(619),P.e(135),P.e(352)]).then((()=>()=>P(196))))),u("@tanstack/react-query","4.29.19",(()=>Promise.all([P.e(609),P.e(619)]).then((()=>()=>P(8609))))),u("react-dom","18.2.0",(()=>Promise.all([P.e(316),P.e(619)]).then((()=>()=>P(8316))))),u("react-i18next","13.0.2",(()=>Promise.all([P.e(141),P.e(619)]).then((()=>()=>P(1141))))),u("react-router-dom","6.11.2",(()=>Promise.all([P.e(591),P.e(619)]).then((()=>()=>P(6591))))),u("react","18.2.0",(()=>P.e(784).then((()=>()=>P(2784)))))),e[r]=f.length?Promise.all(f).then((()=>e[r]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},o=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var i=t[r],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(u=e[n]))[0]?"-":(a>0?".":"")+(a=2,u);return r}var o=[];for(n=1;n<e.length;n++){var u=e[n];o.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?o.pop()+" "+o.pop():i(u))}return f();function f(){return o.pop().replace(/^\((.+)\)$/,"$1")}},u=(e,t)=>{if(0 in e){t=n(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var o=0,i=1,f=!0;;i++,o++){var l,d,s=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(d=(typeof(l=t[o]))[0]))return!f||("u"==s?i>r&&!a:""==s!=a);if("u"==d){if(!f||"u"!=s)return!1}else if(f)if(s==d)if(i<=r){if(l!=e[i])return!1}else{if(a?l>e[i]:l<e[i])return!1;l!=e[i]&&(f=!1)}else if("s"!=s&&"n"!=s){if(a||i<=r)return!1;f=!1,i--}else{if(i<=r||d<s!=a)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,i--)}}var c=[],h=c.pop.bind(c);for(o=1;o<e.length;o++){var p=e[o];c.push(1==p?h()|h():2==p?h()&h():p?u(p,t):!h())}return!!h()},f=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||o(e,t)?t:e),0))&&r[t]},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},d=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(a)+")",s=(e,t,r,a)=>{var n=l(e,r);if(!u(a,n))throw new Error(d(e,r,n,a));return c(e[r][n])},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(t,r,a,n){var o=P.I(t);return o&&o.then?o.then(e.bind(e,t,P.S[t],r,a,n)):e(t,P.S[t],r,a,n)})(((e,t,r,a)=>t&&P.o(t,r)?c(f(t,r)):a())),v=h(((e,t,r,a,n)=>t&&P.o(t,r)?s(t,0,r,a):n())),m={},b={9619:()=>v("default","react",[4,18,2,0],(()=>P.e(784).then((()=>()=>P(2784))))),607:()=>v("default","react-router-dom",[4,6,11,2],(()=>P.e(591).then((()=>()=>P(6591))))),1135:()=>v("default","react-dom",[4,18,2,0],(()=>P.e(316).then((()=>()=>P(8316))))),2318:()=>v("default","@tanstack/react-query",[1,4,29,19],(()=>P.e(609).then((()=>()=>P(8609))))),4155:()=>v("default","react-i18next",[1,13,0,2],(()=>P.e(141).then((()=>()=>P(1141))))),6068:()=>p("default","@ldk/ui/toast",(()=>Promise.all([P.e(891),P.e(196)]).then((()=>()=>P(196))))),8911:()=>p("default","@ldk/feature/auth",(()=>Promise.all([P.e(925),P.e(405)]).then((()=>()=>P(4136)))))},g={135:[1135],522:[2318,4155,6068,8911],607:[607],619:[9619]},P.f.consumes=(e,t)=>{P.o(g,e)&&g[e].forEach((e=>{if(P.o(m,e))return t.push(m[e]);var r=t=>{m[e]=0,P.m[e]=r=>{delete P.c[e],r.exports=t()}},a=t=>{delete m[e],P.m[e]=r=>{throw delete P.c[e],t}};try{var n=b[e]();n.then?t.push(m[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={818:0};P.f.j=(t,r)=>{var a=P.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(135|607|619)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=P.p+P.u(t),i=new Error;P.l(o,(r=>{if(P.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,u]=r,f=0;if(o.some((t=>0!==e[t]))){for(a in i)P.o(i,a)&&(P.m[a]=i[a]);u&&u(P)}for(t&&t(r);f<o.length;f++)n=o[f],P.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkauth=self.webpackChunkauth||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),P.nc=void 0;var k=P(8707),j=k.get,O=k.init;export{j as get,O as init};