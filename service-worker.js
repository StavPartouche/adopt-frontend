if(!self.define){let n,o={};const e=(e,r)=>(e=new URL(e+".js",r).href,o[e]||new Promise((o=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=o,document.head.appendChild(n)}else n=e,importScripts(e),o()})).then((()=>{let n=o[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(r,i)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(o[l])return;let t={};const d=n=>e(n,l),s={module:{uri:l},exports:t,require:d};o[l]=Promise.all(r.map((n=>s[n]||d(n)))).then((n=>(i(...n),t)))}}define(["./workbox-2d118ab0"],(function(n){"use strict";n.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/adopt-frontend/animations/heart.json",revision:"5d5c13683a8f13a3b702385669095c16"},{url:"/adopt-frontend/animations/test.json",revision:"087cc564551751776ed08b288b7d77bf"},{url:"/adopt-frontend/css/app.998baab9.css",revision:null},{url:"/adopt-frontend/fonts/EditorSans-Semibold.144141c5.otf",revision:null},{url:"/adopt-frontend/fonts/SimplerPro-Bold.df0d49ef.otf",revision:null},{url:"/adopt-frontend/fonts/SimplerPro-Regular.516dddab.otf",revision:null},{url:"/adopt-frontend/img/achievDog.46e754ac.svg",revision:null},{url:"/adopt-frontend/img/arrowDown.4bc8ddf4.svg",revision:null},{url:"/adopt-frontend/img/back.bec5cf3b.svg",revision:null},{url:"/adopt-frontend/img/bell.9416889f.svg",revision:null},{url:"/adopt-frontend/img/bird.f4b2d0ec.svg",revision:null},{url:"/adopt-frontend/img/bone.4267f5f0.svg",revision:null},{url:"/adopt-frontend/img/cat.34813fdb.svg",revision:null},{url:"/adopt-frontend/img/clock.7b9bcb5e.svg",revision:null},{url:"/adopt-frontend/img/dogHome.42b2df09.svg",revision:null},{url:"/adopt-frontend/img/fish.913a9a70.svg",revision:null},{url:"/adopt-frontend/img/hat.25050222.svg",revision:null},{url:"/adopt-frontend/img/heart.c703054e.svg",revision:null},{url:"/adopt-frontend/img/info.1a32c6aa.svg",revision:null},{url:"/adopt-frontend/img/lightBulb.ab88fc22.svg",revision:null},{url:"/adopt-frontend/img/lock.60728513.svg",revision:null},{url:"/adopt-frontend/img/logo.75dafb20.svg",revision:null},{url:"/adopt-frontend/img/plus.40a497ba.svg",revision:null},{url:"/adopt-frontend/img/pow.fe4a6e66.svg",revision:null},{url:"/adopt-frontend/img/rabbit.0cac8e5a.svg",revision:null},{url:"/adopt-frontend/img/ribbon.eff32766.svg",revision:null},{url:"/adopt-frontend/img/ribbonFull.bc7bd9e1.svg",revision:null},{url:"/adopt-frontend/img/smallHeart.a9305300.svg",revision:null},{url:"/adopt-frontend/img/vButton.d810e914.svg",revision:null},{url:"/adopt-frontend/index.html",revision:"1382517e561dc8aab549728fe6f870a6"},{url:"/adopt-frontend/js/app.07ecb407.js",revision:null},{url:"/adopt-frontend/js/chunk-vendors.724c4be6.js",revision:null},{url:"/adopt-frontend/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/adopt-frontend/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
