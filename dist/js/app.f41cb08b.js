(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function a(t){return s.p+"js/"+({list:"list",settings:"settings"}[t]||t)+"."+{list:"28b96365",settings:"46612eb2"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var r={"./alarm.mp3":"a362","./yay.mp3":"c7a5"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="1771"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(i["a"]);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("番茄鐘")]),n("b-navbar-toggle",{attrs:{target:"navbar-collapse"}}),n("b-collapse",{attrs:{id:"navbar-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:"/list"}},[t._v("清單")]),n("b-nav-item",{attrs:{to:"/settings"}},[t._v("設定")])],1)],1)],1)],1),n("keep-alive",[n("router-view")],1)],1)},a=[],s=n("2877"),c={},u=Object(s["a"])(c,o,a,!1,null,null,null),l=u.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",[t._v(t._s(t.currentText))]),n("h2",[t._v(t._s(t.timeText))]),1!==t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1===t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0?n("b-btn",{attrs:{variant:"primary"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e()],1)],1)],1)],1)},m=[],h=(n("99af"),{name:"Home",data:function(){return{timer:0}},computed:{status:function(){return this.$store.state.status},list:function(){return this.$store.state.list},current:function(){return this.$store.state.current},currentText:function(){var t=this.current;return 0===t.length&&(t=0===this.list.length?"沒有事項":"點擊開始"),t},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)}},methods:{start:function(){var t=this;2!==this.status&&this.list.length>0&&this.$store.commit("start"),this.current.length>0&&(this.$store.commit("changeStatus",1),this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.$store.commit("changeStatus",0),this.$store.commit("addFinish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.list.length>0?this.start():this.$swal({icon:"success",title:"結束"})},pause:function(){clearInterval(this.timer),this.$store.commit("changeStatus",2)}}}),v=h,b=Object(s["a"])(v,p,m,!1,null,null,null),g=b.exports;r["default"].use(d["a"]);var w=[{path:"/",name:"Home",component:g,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 設定"}}],y=new d["a"]({routes:w});y.afterEach((function(t,e){document.title=t.meta.title}));var k=y,_=(n("b0c0"),n("a434"),n("2f62")),O=n("0e44"),j=parseInt("1500"),x=parseInt("300");r["default"].use(_["a"]);var $=new _["a"].Store({state:{sound:"alarm.mp3",list:[],finished:[],current:"",timeleft:j,isBreak:!1,status:0},mutations:{selectSound:function(t,e){t.sound=e},addList:function(t,e){t.list.push({name:e,edit:!1,model:e})},editList:function(t,e){t.list[e].edit=!0},changeList:function(t,e){t.list[e].name=t.list[e].model,t.list[e].edit=!1},cancelList:function(t,e){t.list[e].model=t.list[e].name,t.list[e].edit=!1},delList:function(t,e){t.list.splice(e,1)},start:function(t){t.isBreak?t.current="休息一下":t.current=t.list.shift().name},changeStatus:function(t,e){t.status=e},countdown:function(t){t.timeleft--},addFinish:function(t){t.isBreak||t.finished.push(t.current),t.current="",t.list.length>0&&(t.isBreak=!t.isBreak),t.timeleft=t.isBreak?x:j},delFinish:function(t,e){t.finished.splice(e,1)}},getters:{list:function(t){return t.list}},actions:{},modules:{},plugins:[Object(O["a"])({key:"pomodoro"})]}),S=n("ecee"),T=n("ad3d"),E=n("c074"),L=n("5886");n("4413");S["c"].add(E["a"],E["c"],E["g"],E["f"],E["d"],E["b"],E["e"]),r["default"].component("font-awesome-icon",T["a"]),r["default"].use(L["a"]),r["default"].config.productionTip=!1,new r["default"]({router:k,store:$,render:function(t){return t(l)}}).$mount("#app")},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"}});
//# sourceMappingURL=app.f41cb08b.js.map