if(!self.define){let n,o={};const r=(r,i)=>(r=new URL(r+".js",i).href,o[r]||new Promise((o=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=o,document.head.appendChild(n)}else n=r,importScripts(r),o()})).then((()=>{let n=o[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(i,l)=>{const e=n||("document"in self?document.currentScript.src:"")||location.href;if(o[e])return;let d={};const t=n=>r(n,e),s={module:{uri:e},exports:d,require:t};o[e]=Promise.all(i.map((n=>s[n]||t(n)))).then((n=>(l(...n),d)))}}define(["./workbox-2d118ab0"],(function(n){"use strict";n.setCacheNameDetails({prefix:"Clicker"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/adopt-frontend/animations/heart.json",revision:"5d5c13683a8f13a3b702385669095c16"},{url:"/adopt-frontend/animations/test.json",revision:"087cc564551751776ed08b288b7d77bf"},{url:"/adopt-frontend/css/app.e7d986a1.css",revision:null},{url:"/adopt-frontend/fonts/EditorSans-Semibold.144141c5.otf",revision:null},{url:"/adopt-frontend/fonts/SimplerPro-Bold.df0d49ef.otf",revision:null},{url:"/adopt-frontend/fonts/SimplerPro-Regular.516dddab.otf",revision:null},{url:"/adopt-frontend/img/1-bird.1d98687d.png",revision:null},{url:"/adopt-frontend/img/1-cat.27e6bbd9.png",revision:null},{url:"/adopt-frontend/img/1-dog.707da8a5.png",revision:null},{url:"/adopt-frontend/img/1-fish.211533a1.png",revision:null},{url:"/adopt-frontend/img/1-rabbit.eaa3bdcc.png",revision:null},{url:"/adopt-frontend/img/1.beb89232.svg",revision:null},{url:"/adopt-frontend/img/2.84a41f8c.svg",revision:null},{url:"/adopt-frontend/img/3.911d3563.svg",revision:null},{url:"/adopt-frontend/img/4.747b0eb1.svg",revision:null},{url:"/adopt-frontend/img/achivBg.591cb44f.svg",revision:null},{url:"/adopt-frontend/img/arrowDown.eada6028.svg",revision:null},{url:"/adopt-frontend/img/back.b656e032.svg",revision:null},{url:"/adopt-frontend/img/ball.afc26d55.svg",revision:null},{url:"/adopt-frontend/img/bell.22732b81.svg",revision:null},{url:"/adopt-frontend/img/bird.3dfabb26.png",revision:null},{url:"/adopt-frontend/img/bird.ae528605.svg",revision:null},{url:"/adopt-frontend/img/birdColored.85ad9264.png",revision:null},{url:"/adopt-frontend/img/bone.66ffba66.svg",revision:null},{url:"/adopt-frontend/img/cat.8c66e0f9.png",revision:null},{url:"/adopt-frontend/img/cat.9e0534f0.svg",revision:null},{url:"/adopt-frontend/img/catColored.3a593c1c.png",revision:null},{url:"/adopt-frontend/img/clean.251b441d.svg",revision:null},{url:"/adopt-frontend/img/clickerLogo.18b01fd1.svg",revision:null},{url:"/adopt-frontend/img/clock.9d9c9788.svg",revision:null},{url:"/adopt-frontend/img/dog.82aa267a.svg",revision:null},{url:"/adopt-frontend/img/dog.eb40f421.png",revision:null},{url:"/adopt-frontend/img/dogColored.51d2baf1.png",revision:null},{url:"/adopt-frontend/img/fish.acde20c8.svg",revision:null},{url:"/adopt-frontend/img/fish.b8a7fbe3.png",revision:null},{url:"/adopt-frontend/img/fishColored.ade0102e.png",revision:null},{url:"/adopt-frontend/img/food.8b5227c8.svg",revision:null},{url:"/adopt-frontend/img/hat.f76eecdf.svg",revision:null},{url:"/adopt-frontend/img/heart.688aa410.svg",revision:null},{url:"/adopt-frontend/img/heart.8789780d.svg",revision:null},{url:"/adopt-frontend/img/holoPow.4ba34ad3.svg",revision:null},{url:"/adopt-frontend/img/info.5aeff5cc.svg",revision:null},{url:"/adopt-frontend/img/lightBulb.2b920543.svg",revision:null},{url:"/adopt-frontend/img/lock.79875eaf.svg",revision:null},{url:"/adopt-frontend/img/logo.1107e5ac.svg",revision:null},{url:"/adopt-frontend/img/onbording1.e43959f1.svg",revision:null},{url:"/adopt-frontend/img/onbording2.f4329478.svg",revision:null},{url:"/adopt-frontend/img/onbording3.708a9404.svg",revision:null},{url:"/adopt-frontend/img/onbording4.c2347c2c.svg",revision:null},{url:"/adopt-frontend/img/pill.2b1e7224.svg",revision:null},{url:"/adopt-frontend/img/plus.df1face3.svg",revision:null},{url:"/adopt-frontend/img/pow.b285017b.svg",revision:null},{url:"/adopt-frontend/img/rabbit.bb223513.svg",revision:null},{url:"/adopt-frontend/img/rabbit.c6b71149.png",revision:null},{url:"/adopt-frontend/img/rabbitColored.ea5803db.png",revision:null},{url:"/adopt-frontend/img/ribbon.1ea8c9f3.svg",revision:null},{url:"/adopt-frontend/img/ribbonFull.1b2b9e90.svg",revision:null},{url:"/adopt-frontend/img/smallHeart.8e3e3db5.svg",revision:null},{url:"/adopt-frontend/img/smallV.940b9202.svg",revision:null},{url:"/adopt-frontend/img/vButton.a5f7fd29.svg",revision:null},{url:"/adopt-frontend/img/water.ca87d3e8.svg",revision:null},{url:"/adopt-frontend/index.html",revision:"9a47da9a0e57c8b2252d7efb6583f57e"},{url:"/adopt-frontend/js/app.fba7ff7d.js",revision:null},{url:"/adopt-frontend/js/chunk-vendors.dc65075b.js",revision:null},{url:"/adopt-frontend/manifest.json",revision:"940286ac54c41e005be5cbd781e9ca6f"},{url:"/adopt-frontend/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
