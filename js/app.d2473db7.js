(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({About:"About",PrivacyCookies:"PrivacyCookies",TermsofUse:"TermsofUse",ThisWebsite:"ThisWebsite"}[t]||t)+"."+{About:"a4fb5b6e",PrivacyCookies:"16dec5b9",TermsofUse:"c5c93029",ThisWebsite:"e09148a6"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={About:1,ThisWebsite:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({About:"About",PrivacyCookies:"PrivacyCookies",TermsofUse:"TermsofUse",ThisWebsite:"ThisWebsite"}[t]||t)+"."+{About:"3715e4a6",PrivacyCookies:"31d6cfe0",TermsofUse:"31d6cfe0",ThisWebsite:"c22534a4"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bodybuilding-app/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("19b3"),o=n.n(r);o.a},"0a55":function(t,e,n){"use strict";var r=n("4ce3"),o=n.n(r);o.a},"19b3":function(t,e,n){},"2f54":function(t,e,n){"use strict";var r=n("e193"),o=n.n(r);o.a},3123:function(t,e,n){},"4a92":function(t,e,n){},"4ce3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("4de4"),n("4160"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("2fa7"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{style:{background:t.$vuetify.theme.themes[t.getTheme?"dark":"light"].background}},[n("navbar-app"),n("v-content",{directives:[{name:"touch",rawName:"v-touch",value:{right:function(){return t.setDrawer(!0)}},expression:"{right: () => setDrawer(true)}"}]},[n("v-container",{attrs:{fluid:""}},[n("popups-app"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1),n("footer-app")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("navigation-drawer-app"),n("navigation-bar-app")],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navigation-bar"}},[n("v-app-bar",{staticClass:"background lighten-1",attrs:{app:"",flat:""}},[n("v-app-bar-nav-icon",{attrs:{left:""},on:{click:function(e){return e.stopPropagation(),t.setDrawer(!t.getDrawer)}}}),n("v-toolbar-title",[n("v-btn",{staticClass:"text-uppercase",attrs:{to:"/",text:"","exact-active-class":"home-title",large:""}},[n("span",{staticClass:"font-weight-bold secondary--text"},[t._v("sport")]),n("span",{staticClass:"font-weight-thin"},[t._v("companion")])])],1),n("v-spacer"),n("transition",{attrs:{name:"slide-x",mode:"out-in",appear:""}},["/"==t.$route.fullPath?n("v-btn",{key:t.getHomeComponentName,staticClass:"secondary--text",attrs:{outlined:""},on:{click:function(e){return t.setHomeComponentName(t.buttonSwitchComponent.component)}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.buttonSwitchComponent.icon))]),n("span",[t._v(t._s(t.buttonSwitchComponent.name))])],1):t._e()],1)],1)],1)},u=[],p=n("2f62"),d=n("94ed");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={data:function(){return{svgPath:{mdiTimer:d["k"],mdiSettings:d["i"]}}},methods:m({},Object(p["b"])({setHomeComponentName:"navbar/homeComponentName",setDrawer:"navbar/drawer"})),computed:m({},Object(p["c"])({getHomeComponentName:"navbar/homeComponentName",getDrawer:"navbar/drawer"}),{buttonSwitchComponent:function(){switch(this.getHomeComponentName){case"time-app":return{name:"config",icon:this.svgPath.mdiSettings,component:"config-app"};case"config-app":return{name:"time",icon:this.svgPath.mdiTimer,component:"time-app"};default:return"error"}}})},v=g,h=(n("2f54"),n("2877")),b=n("6544"),w=n.n(b),O=n("40dc"),y=n("5bc1"),S=n("8336"),C=n("132d"),j=n("2fa4"),P=n("2a7f"),D=Object(h["a"])(v,l,u,!1,null,"40ed1060",null),T=D.exports;w()(D,{VAppBar:O["a"],VAppBarNavIcon:y["a"],VBtn:S["a"],VIcon:C["a"],VSpacer:j["a"],VToolbarTitle:P["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navigation-drawer"}},[n("v-navigation-drawer",{staticClass:"background",attrs:{app:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("settings-app"),n("v-divider",{staticClass:"background lighten-2 mt-2 mb-3"})]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[n("v-list-item-group",[n("v-list-item",{attrs:{to:{name:"home"},exact:""}},[n("v-list-item-icon",[n("v-icon",{staticClass:"text--text",attrs:{left:""}},[t._v(t._s(t.svgPath.mdiHome))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize title primary--text font-weight-bold"},[t._v("home")])],1)],1),n("v-list-item",{attrs:{to:{name:"about"}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"text--text",attrs:{left:""}},[t._v(t._s(t.svgPath.mdiInformationOutline)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize title primary--text font-weight-bold"},[t._v("about")])],1)],1)],1)],1)],1)],1)},_=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settings-app"}},[n("v-container",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mb-2",attrs:{cols:"12",align:"center"}},[n("v-btn",{attrs:{depressed:"",small:""},on:{click:function(e){return t.setTheme(!t.getTheme)}}},[n("v-icon",{staticClass:"text--text",attrs:{left:"",small:""}},[t._v(t._s(t.svgPath.mdiBrightness6))]),n("span",[t._v(t._s(t.getTheme?"dark":"light"))])],1)],1),n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-btn",{attrs:{depressed:"",small:""},on:{click:t.setNotification}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(t._s(t.allowNotification?t.svgPath.mdiBell:t.svgPath.mdiBellOff))]),n("span",[t._v(t._s(t.allowNotification?"Notification On":"Notification Off"))])],1)],1)],1)],1)],1)},I=[];function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E={data:function(){return{svgPath:{mdiBrightness6:d["c"],mdiBell:d["a"],mdiBellOff:d["b"]},allowNotification:!1}},mounted:function(){"granted"===Notification.permission&&(this.allowNotification=!0)},methods:N({},Object(p["b"])({setTheme:"navbar/theme",setDialog:"popups/dialog"}),{setNotification:function(){var t=this;this.allowNotification&&this.setDialog(!0),Notification.requestPermission().then((function(e){switch(e){case"granted":t.allowNotification=!0;break;default:t.allowNotification=!1;break}}))}}),computed:N({},Object(p["c"])({getTheme:"navbar/theme"}))},R=E,B=n("62ad"),A=n("a523"),$=n("0fd9"),W=Object(h["a"])(R,x,I,!1,null,null,null),z=W.exports;function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}w()(W,{VBtn:S["a"],VCol:B["a"],VContainer:A["a"],VIcon:C["a"],VRow:$["a"]});var U={components:{"settings-app":z},data:function(){return{svgPath:{mdiHome:d["d"],mdiInformationOutline:d["e"]}}},methods:M({},Object(p["b"])({setDrawer:"navbar/drawer"})),computed:M({},Object(p["c"])({getDrawer:"navbar/drawer"}),{drawer:{get:function(){return this.getDrawer},set:function(t){t||this.setDrawer(t)}}})},H=U,J=n("ce7e"),F=n("8860"),q=n("da13"),G=n("5d23"),K=n("1baa"),Q=n("34c3"),X=n("f774"),Y=Object(h["a"])(H,k,_,!1,null,null,null),Z=Y.exports;w()(Y,{VDivider:J["a"],VIcon:C["a"],VList:F["a"],VListItem:q["a"],VListItemContent:G["a"],VListItemGroup:K["a"],VListItemIcon:Q["a"],VListItemTitle:G["b"],VNavigationDrawer:X["a"]});var tt={components:{"navigation-bar-app":T,"navigation-drawer-app":Z}},et=tt,nt=Object(h["a"])(et,s,c,!1,null,null,null),rt=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("v-footer",{attrs:{inset:"",app:""}},[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"6",align:"center"}},[n("v-btn",{staticClass:"font-weight-light",attrs:{text:"","x-small":"",to:{name:"privacy-cookies"}}},[t._v("privacy & cookies")])],1),n("v-col",{attrs:{cols:"6",align:"center"}},[n("v-btn",{staticClass:"font-weight-light",attrs:{text:"","x-small":"",to:{name:"terms-of-use"}}},[t._v("terms of use")])],1)],1)],1)],1)],1)},at=[],it=n("553a"),st={},ct=Object(h["a"])(st,ot,at,!1,null,null,null),lt=ct.exports;w()(ct,{VBtn:S["a"],VCol:B["a"],VContainer:A["a"],VFooter:it["a"],VRow:$["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popups"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("disable notification")]),n("v-card-text",[t._v("to disable notifications, you must go to the browser settings and then to the site permissions and finally Notifications. Then reload the page!")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{depressed:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1),n("v-snackbar",{attrs:{right:"",timeout:0,color:"secondary"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("span",[t._v("new content available")]),n("v-btn",{staticClass:"background text--text",attrs:{small:"",depressed:""},on:{click:function(e){t.snackbar=!1,t.emitSkipWaiting()}}},[t._v("refresh")])],1)],1)},pt=[];function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var mt={data:function(){return{svgPath:{mdiRefresh:d["h"]}}},mounted:function(){var t=this;window.addEventListener("updateSW",(function(){t.snackbar=!0}))},methods:ft({},Object(p["b"])({setDialog:"popups/dialog",setSnackbar:"popups/snackbar"}),{emitSkipWaiting:function(){var t=new Event("refreshSW");window.dispatchEvent(t)}}),computed:ft({},Object(p["c"])({getDialog:"popups/dialog",getSnackbar:"popups/snackbar"}),{dialog:{get:function(){return this.getDialog},set:function(t){this.setDialog(t)}},snackbar:{get:function(){return this.getSnackbar},set:function(t){this.setSnackbar(t)}}})},gt=mt,vt=n("b0af"),ht=n("99d9"),bt=n("169a"),wt=n("2db4"),Ot=Object(h["a"])(gt,ut,pt,!1,null,null,null),yt=Ot.exports;function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}w()(Ot,{VBtn:S["a"],VCard:vt["a"],VCardActions:ht["a"],VCardText:ht["b"],VCardTitle:ht["c"],VDialog:bt["a"],VSnackbar:wt["a"],VSpacer:j["a"]});var jt={components:{"navbar-app":rt,"footer-app":lt,"popups-app":yt},methods:Ct({},Object(p["b"])({setDrawer:"navbar/drawer"})),computed:Ct({},Object(p["c"])({getTheme:"navbar/theme"}))},Pt=jt,Dt=(n("034f"),n("7496")),Tt=n("a75b"),kt=Object(h["a"])(Pt,a,i,!1,null,null,null),_t=kt.exports;w()(kt,{VApp:Dt["a"],VContainer:A["a"],VContent:Tt["a"]});var xt=n("ead5"),It=n.n(xt),Vt=n("9483");Object(Vt["a"])("".concat("/bodybuilding-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("New content is available; please refresh.");var e=new Event("updateSW");window.dispatchEvent(e),window.addEventListener("refreshSW",(function(){console.log("update SW"),t.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var Nt=n("8c4f"),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("transition",{attrs:{name:"slide-up",mode:"out-in",appear:""}},[n("keep-alive",[n(t.getHomeComponentName,{tag:"components"})],1)],1)],1)},Rt=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"time"}},[n("v-container",[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6",lg:"4"}},[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-capitalize font-weight-light secondary--text"},[t._v("stopwatch")])]),n("v-col",{staticClass:"pt-0",attrs:{cols:"12",align:"center"}},[n("stopwatch-app")],1)],1),n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6",lg:"4"}},[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-capitalize font-weight-light secondary--text"},[t._v("countdown")])]),n("v-col",{staticClass:"pt-0",attrs:{cols:"12",align:"center"}},[n("countdown-app")],1)],1)],1)],1)],1)},At=[],$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"background",attrs:{elevation:"0",id:"stopwatch"}},[n("v-card-title",{staticClass:"pb-0"},[n("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",align:"center"}},[n("span",{staticClass:"display-1 font-weight-light"},[t._v(" "+t._s(t.getTime))])])],1)],1),n("v-card-actions",{staticClass:"pt-0"},[n("v-row",[void 0==t.getInterval?n("v-col",{attrs:{cols:"6",md:"4","offset-md":"2",align:"center"}},[n("v-btn",{staticClass:"primary",attrs:{text:""},on:{click:function(e){return t.start()}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.svgPath.mdiPlay))]),n("span",[t._v("start")])],1)],1):n("v-col",{attrs:{cols:"6",md:"4","offset-md":"2",align:"center"}},[n("v-btn",{staticClass:"primary",attrs:{text:""},on:{click:function(e){return t.stop()}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.svgPath.mdiPause))]),n("span",[t._v("stop")])],1)],1),n("v-col",{attrs:{cols:"6",md:"4",align:"center"}},[n("v-btn",{staticClass:"primary",attrs:{text:""},on:{click:function(e){return t.reset()}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.svgPath.mdiStop))]),n("span",[t._v("reset")])],1)],1)],1)],1)],1)},Wt=[];n("d81d"),n("fb6a"),n("a9e3"),n("ac1f");function zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zt(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Mt={data:function(){return{svgPath:{mdiPlay:d["g"],mdiPause:d["f"],mdiStop:d["j"]}}},mounted:function(){this.getRunning?this.start():this.setTimeSaved(0)},methods:Lt({},Object(p["b"])({setTime:"stopwatch/time",setTimeBegan:"stopwatch/timeBegan",setTimeStopped:"stopwatch/timeStopped",setTimeSaved:"stopwatch/timeSaved",setStopTime:"stopwatch/stopTime",setInterval:"stopwatch/intervalID",setRunning:"stopwatch/running"}),{start:function(){if(console.log("start"),this.setRunning(!0),null===this.getTimeBegan){this.setTimeBegan(new Date);var t=/(\d{2})?:?(\d{2})?:?(\d{2}).(\d{2})$/gm,e=t.exec(this.getTime),n=e.map((function(t){return void 0==t&&(t=0),new Number(t)}));this.setTimeSaved(this.getTimeSaved+36e5*n[1]+6e4*n[2]+1e3*n[3]+n[4])}null!==this.getTimeStopped&&this.setStopTime(this.getStopTime+(new Date-this.getTimeStopped)),this.setInterval(setInterval(this.clock,100))},stop:function(){console.log("stop"),this.setInterval(clearInterval(this.getInterval)),this.setTimeStopped(new Date),this.setRunning(!1)},reset:function(){console.log("reset"),this.setInterval(clearInterval(this.getInterval)),this.setTime("00.00"),this.setTimeBegan(null),this.setTimeStopped(null),this.setTimeSaved(0),this.setStopTime(0),this.setRunning(!1)},clock:function(){console.log("clock");var t=new Date(Date.parse(new Date)+(new Date).getUTCMilliseconds()+this.getTimeSaved),e=new Date(t-this.getTimeBegan-this.getStopTime),n=e.getUTCHours(),r=e.getUTCMinutes(),o=e.getUTCSeconds(),a=e.getUTCMilliseconds(),i=(0==this.zeroPrefix(n,2)?"":this.zeroPrefix(n,2)+":")+(0==this.zeroPrefix(r,2)?"":this.zeroPrefix(r,2)+":")+this.zeroPrefix(o,2)+"."+this.zeroPrefix(a,3).slice(0,2);this.setTime(i)},zeroPrefix:function(t,e){for(var n="",r=0;r<e;r++)n+="0";return(n+t).slice(-e)}}),computed:Lt({},Object(p["c"])({getTime:"stopwatch/time",getTimeBegan:"stopwatch/timeBegan",getTimeStopped:"stopwatch/timeStopped",getTimeSaved:"stopwatch/timeSaved",getStopTime:"stopwatch/stopTime",getInterval:"stopwatch/intervalID",getRunning:"stopwatch/running"}))},Ut=Mt,Ht=Object(h["a"])(Ut,$t,Wt,!1,null,null,null),Jt=Ht.exports;w()(Ht,{VBtn:S["a"],VCard:vt["a"],VCardActions:ht["a"],VCardTitle:ht["c"],VCol:B["a"],VIcon:C["a"],VRow:$["a"]});var Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"background",attrs:{elevation:"0",id:"countdown"}},[n("v-card-title",[n("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",align:"center"}},[n("span",{staticClass:"display-1 font-weight-light"},[t._v(t._s(t.getCountdown))])])],1)],1),n("v-card-actions",[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",align:"center"}},[n("v-btn",{staticClass:"primary text-center display-1 font-weight-bold",attrs:{fab:"",width:"150",height:"150",elevation:"0"},on:{click:t.decreaseSeriesStart}},[n("transition",{attrs:{name:"number",mode:"out-in"}},[n("span",{key:t.getSeriesRemaining},[t._v(t._s(t.getSeriesRemaining))])])],1)],1),n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-btn",{attrs:{outlined:""},on:{click:function(e){t.reset(),t.setSeriesRemaining(t.getSeries)}}},[n("span",{staticClass:"font-weight-normal"},[t._v("reset")]),n("span",{staticClass:"font-weight-light"},[t._v(t._s("0"==t.getSeries?"":"-"+t.getSeries)+" ")])])],1)],1)],1)],1)},qt=[];function Gt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Gt(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Qt={data:function(){return{}},mounted:function(){var t=this,e=Date.parse(new Date)-Date.parse(this.getEnd);this.getRunning&&e<0?(console.log("running and time not over"),this.start(new Date(this.getEnd))):this.getRunning&&e>=0&&(console.log("running but time is over"),this.setCountdown(this.getTime),this.setRunning(!1)),window.addEventListener("blur",(function(){"granted"===Notification.permission&&t.getRunning&&(console.log("blur and granted, sending event for sw"),navigator.serviceWorker.ready.then((function(e){e.active.postMessage({data:t.getEnd,type:"EMIT_NOTIFICATION"})})))})),window.addEventListener("focus",(function(){"granted"===Notification.permission&&(console.log("focus and granted, sending event for sw"),navigator.serviceWorker.ready.then((function(t){t.active.postMessage({type:"STOP_NOTIFICATION"})})))}))},methods:Kt({},Object(p["b"])({setCountdown:"countdown/countdown",setIntervalID:"countdown/intervalID",setNow:"countdown/now",setEnd:"countdown/end",setRunning:"countdown/running",setSeriesRemaining:"countdown/series"}),{decreaseSeriesStart:function(){"0"==this.getSeriesRemaining||this.getRunning?console.log("return"):(/^(0{2}:)?0{2}:0{2}$/gm.test(this.getCountdown)||(console.log("start"),this.start()),this.setSeriesRemaining(String(this.getSeriesRemaining-1)))},start:function(t){if(console.log("start",t),void 0==t){var e=new Date,n=/(\d{2}):(\d{2}):(\d{2})$/gm,r=n.exec(this.getTime),o=r.map((function(t){return void 0==t&&(t=0),new Number(t)}));e.setHours(e.getHours()+o[1]),e.setMinutes(e.getMinutes()+o[2]),e.setSeconds(e.getSeconds()+o[3]),this.setEnd(e)}else console.log("value is a date"),this.setEnd(t);this.setRunning(!0),this.setIntervalID(setInterval(this.countdown,200))},reset:function(){console.log("reset"),void 0!=this.getIntervalID&&this.setIntervalID(clearInterval(this.getIntervalID)),this.setRunning(!1),this.setCountdown(this.getTime),this.setEnd(null),this.setNow(null)},countdown:function(){if(console.log("countdown"),this.getRunning){this.setNow(new Date);var t=new Date(this.getEnd-this.getNow),e=t.getUTCHours(),n=t.getUTCMinutes(),r=t.getUTCSeconds(),o=this.zeroPrefix(e,2)+":"+this.zeroPrefix(n,2)+":"+this.zeroPrefix(r,2);Date.parse(t)<0?this.reset():this.setCountdown(o)}else this.reset()},zeroPrefix:function(t,e){for(var n="",r=0;r<e;r++)n+="0";return(n+t).slice(-e)}}),computed:Kt({},Object(p["c"])({getCountdown:"countdown/countdown",getIntervalID:"countdown/intervalID",getNow:"countdown/now",getEnd:"countdown/end",getRunning:"countdown/running",getSeriesRemaining:"countdown/series",getTime:"timeSeries/time",getSeries:"timeSeries/series"}))},Xt=Qt,Yt=(n("0a55"),Object(h["a"])(Xt,Ft,qt,!1,null,null,null)),Zt=Yt.exports;w()(Yt,{VBtn:S["a"],VCard:vt["a"],VCardActions:ht["a"],VCardTitle:ht["c"],VCol:B["a"],VRow:$["a"]});var te={components:{"stopwatch-app":Jt,"countdown-app":Zt}},ee=te,ne=Object(h["a"])(ee,Bt,At,!1,null,null,null),re=ne.exports;w()(ne,{VCol:B["a"],VContainer:A["a"],VRow:$["a"]});var oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"config"}},[n("v-container",[n("v-row",{attrs:{"no-guetters":""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6",lg:"4",align:"center","offset-md":"3","offset-lg":"4"}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("h2",{staticClass:"text-capitalize font-weight-light secondary--text"},[t._v("setup series & time")])]),n("v-col",{attrs:{cols:"12",align:"center"}},[n("time-series-app")],1)],1)],1)],1)],1)},ae=[],ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"background",attrs:{elevation:"0",id:"time-series"}},[n("v-card-text",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-form",{ref:"form"},[n("v-text-field",{ref:"series",staticClass:"mb-2",attrs:{clearable:"",type:"number",rules:t.seriesRules,disabled:t.getApply,required:""},on:{input:function(e){return t.invalidValue(t.series)}},model:{value:t.series,callback:function(e){t.series=e},expression:"series"}}),n("v-time-picker",{attrs:{"use-seconds":"",format:"24hr",scrollable:"",color:"primary",disabled:t.getApply,"allowed-seconds":t.allowedStep},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"primary",attrs:{depressed:""},on:{click:function(e){return t.applyConfig()}}},[t._v(t._s(t.getApply?"edit":"apply"))])],1)],1)},se=[];function ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function le(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ce(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ue={data:function(){return{time:"00:00:00",series:"",seriesRules:[function(t){return!!t||"Required"}],allowedStep:function(t){return t%5===0}}},mounted:function(){this.time=this.getTime,this.series=this.getSeries},methods:le({},Object(p["b"])({setConfig:"timeSeries/config",setCountdown:"countdown/countdown",setRunningCountdown:"countdown/running",setSeriesCountdown:"countdown/series"}),{applyConfig:function(){if(this.$refs.form.validate())if(this.getApply){var t={time:this.time,series:this.series,apply:!1};this.setConfig(t)}else{var e={time:this.time,series:this.series,apply:!0};this.setConfig(e),this.setRunningCountdown(!1),this.setCountdown(this.time),this.setSeriesCountdown(this.series)}else{var n={time:"00:00:00",series:0,apply:!1};this.setConfig(n)}},invalidValue:function(t){t<1&&(this.series="",this.$refs.series.lazyValue=this.series)}}),computed:le({},Object(p["c"])({getTime:"timeSeries/time",getSeries:"timeSeries/series",getApply:"timeSeries/apply"}))},pe=ue,de=(n("f87d"),n("4bd4")),fe=n("8654"),me=n("c964"),ge=Object(h["a"])(pe,ie,se,!1,null,null,null),ve=ge.exports;w()(ge,{VBtn:S["a"],VCard:vt["a"],VCardActions:ht["a"],VCardText:ht["b"],VCol:B["a"],VForm:de["a"],VRow:$["a"],VSpacer:j["a"],VTextField:fe["a"],VTimePicker:me["b"]});var he={components:{"time-series-app":ve}},be=he,we=Object(h["a"])(be,oe,ae,!1,null,null,null),Oe=we.exports;function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Se(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ye(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}w()(we,{VCol:B["a"],VContainer:A["a"],VRow:$["a"]});var Ce={components:{"time-app":re,"config-app":Oe},methods:Se({},Object(p["b"])({setStopwatchInterval:"stopwatch/intervalID",setCountdownInterval:"countdown/intervalID"})),computed:Se({},Object(p["c"])({getHomeComponentName:"navbar/homeComponentName",getStopwatchInterval:"stopwatch/intervalID",getCountdownInterval:"countdown/intervalID"})),beforeRouteLeave:function(t,e,n){console.log("leave home"),this.setStopwatchInterval(clearInterval(this.getStopwatchInterval)),n(),this.setCountdownInterval(clearInterval(this.getCountdownInterval)),n()}},je=Ce,Pe=(n("cccb"),Object(h["a"])(je,Et,Rt,!1,null,null,null)),De=Pe.exports;o["a"].use(Nt["a"]);var Te=[{path:"/",name:"home",component:De},{path:"/about",name:"about",component:function(){return n.e("About").then(n.bind(null,"f820"))},children:[{path:"privacy-cookies",name:"privacy-cookies",component:function(){return n.e("PrivacyCookies").then(n.bind(null,"ffe9"))}},{path:"terms-of-use",name:"terms-of-use",component:function(){return n.e("TermsofUse").then(n.bind(null,"7fc0"))}},{path:"this-website",name:"this-website",component:function(){return n.e("ThisWebsite").then(n.bind(null,"6f1f"))}}]}],ke=new Nt["a"]({mode:"history",base:"/bodybuilding-app/",routes:Te}),_e=ke;o["a"].use(p["a"]);var xe={namespaced:!0,state:{time:"00.00",timeBegan:null,timeStopped:null,timeSaved:0,stopTime:0,intervalID:void 0,running:void 0},mutations:{time:function(t,e){t.time=e,o["a"].localStorage.set("time",e),o["a"].localStorage.set("timeSaved",JSON.stringify(Date.parse(new Date)+(new Date).getMilliseconds()))},timeBegan:function(t,e){t.timeBegan=e},timeStopped:function(t,e){t.timeStopped=e},timeSaved:function(t,e){t.timeSaved=e},stopTime:function(t,e){t.stopTime=e},intervalID:function(t,e){t.intervalID=e},running:function(t,e){t.running=e,o["a"].localStorage.set("stopwatchRunning",e)}},actions:{time:function(t,e){var n=t.commit;n("time",e)},timeBegan:function(t,e){var n=t.commit;n("timeBegan",e)},timeStopped:function(t,e){var n=t.commit;n("timeStopped",e)},timeSaved:function(t,e){var n=t.commit;n("timeSaved",e)},stopTime:function(t,e){var n=t.commit;n("stopTime",e)},intervalID:function(t,e){var n=t.commit;n("intervalID",e)},running:function(t,e){var n=t.commit;n("running",e)}},getters:{time:function(t){return t.time},timeBegan:function(t){return t.timeBegan},timeStopped:function(t){return t.timeStopped},timeSaved:function(t){return t.timeSaved},stopTime:function(t){return t.stopTime},intervalID:function(t){return t.intervalID},running:function(t){return t.running}}};o["a"].use(p["a"]);var Ie={namespaced:!0,state:{countdown:"00:00:00",intervalID:void 0,now:null,end:null,running:void 0,series:0},mutations:{countdown:function(t,e){t.countdown=e,o["a"].localStorage.set("countdown",e)},intervalID:function(t,e){t.intervalID=e},now:function(t,e){t.now=e},end:function(t,e){t.end=e,o["a"].localStorage.set("endCountdown",e)},running:function(t,e){t.running=e,o["a"].localStorage.set("countdownRunning",e)},series:function(t,e){t.series=e,o["a"].localStorage.set("seriesRemaining",e)}},actions:{countdown:function(t,e){var n=t.commit;n("countdown",e)},intervalID:function(t,e){var n=t.commit;n("intervalID",e)},now:function(t,e){var n=t.commit;n("now",e)},end:function(t,e){var n=t.commit;n("end",e)},running:function(t,e){var n=t.commit;n("running",e)},series:function(t,e){var n=t.commit;n("series",e)}},getters:{countdown:function(t){var e=/(\d{2}):(\d{2}):(\d{2})$/gm,n=e.exec(t.countdown);return"00"==n[1]?n[2]+":"+n[3]:t.countdown},intervalID:function(t){return t.intervalID},now:function(t){return t.now},end:function(t){return t.end},running:function(t){return t.running},series:function(t){return t.series}}};o["a"].use(p["a"]);var Ve={namespaced:!0,state:{series:"0",time:"00:00:00",apply:!1},mutations:{time:function(t,e){t.time=e},series:function(t,e){t.series=e},apply:function(t,e){t.apply=e}},actions:{config:function(t,e){var n=t.commit;n("time",e.time),n("series",e.series),n("apply",e.apply),o["a"].localStorage.set("config",JSON.stringify(e))}},getters:{time:function(t){return t.time},series:function(t){return t.series},apply:function(t){return t.apply}}},Ne=n("f309"),Ee=n("fcf4"),Re=n("c3f0");o["a"].use(Ne["a"],{directives:{Touch:Re["a"]}});var Be=new Ne["a"]({theme:{themes:{light:{primary:Ee["a"].blue.darken3,secondary:Ee["a"].purple,accent:Ee["a"].deepPurple.base,error:Ee["a"].red.base,warning:Ee["a"].amber.base,info:Ee["a"].cyan.base,success:Ee["a"].green.base,background:"#ffffff",text:"#000000"},dark:{primary:Ee["a"].blue.darken3,secondary:Ee["a"].purple,accent:Ee["a"].deepPurple.base,error:Ee["a"].red.base,warning:Ee["a"].amber.base,info:Ee["a"].cyan.base,success:Ee["a"].green.base,background:"#000000",text:"#ffffff"}}},icons:{iconfont:"mdiSvg"}});o["a"].use(p["a"]);var Ae={namespaced:!0,state:{homeComponentName:"time-app",drawer:!1,theme:!1},mutations:{homeComponentName:function(t,e){t.homeComponentName=e},drawer:function(t,e){t.drawer=e},theme:function(t,e){t.theme=e}},actions:{homeComponentName:function(t,e){var n=t.commit;n("homeComponentName",e)},drawer:function(t,e){var n=t.commit;n("drawer",e)},theme:function(t,e){var n=t.commit;Be.framework.theme.dark=e,o["a"].localStorage.set("theme",JSON.stringify(e)),n("theme",e)}},getters:{homeComponentName:function(t){return t.homeComponentName},drawer:function(t){return t.drawer},theme:function(t){return t.theme}}};o["a"].use(p["a"]);var $e={namespaced:!0,state:{dialog:!1,snackbar:!1},mutations:{dialog:function(t,e){t.dialog=e},snackbar:function(t,e){t.snackbar=e}},actions:{dialog:function(t,e){var n=t.commit;n("dialog",e)},snackbar:function(t,e){var n=t.commit;n("snackbar",e)}},getters:{dialog:function(t){return t.dialog},snackbar:function(t){return t.snackbar}}};o["a"].use(p["a"]);var We=new p["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{stopwatch:xe,countdown:Ie,timeSeries:Ve,navbar:Ae,popups:$e}});function ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ze(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ze(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}o["a"].config.productionTip=!1,o["a"].use(It.a),new o["a"]({router:_e,store:We,vuetify:Be,created:function(){var t=o["a"].localStorage.get("timeSaved","0");this.setTimeSaved(Date.parse(new Date)+(new Date).getMilliseconds()-JSON.parse(t));var e=o["a"].localStorage.get("theme",!1);this.setTheme(JSON.parse(e));var n=o["a"].localStorage.get("config",'{"time": "00:00:00", "series": "0", "apply": false}');this.setConfig(JSON.parse(n));var r=o["a"].localStorage.get("time","00.00");this.setTime(r);var a=o["a"].localStorage.get("stopwatchRunning",!1);this.setStopwatchRunning(JSON.parse(a));var i=o["a"].localStorage.get("countdown","00:00:00");this.setCountdown(i);var s=o["a"].localStorage.get("countdownRunning",!1);this.setCountdownRunning(JSON.parse(s));var c=o["a"].localStorage.get("endCountdown",null);this.setEndCountdown(c);var l=o["a"].localStorage.get("seriesRemaining",0);this.setSeriesCountdown(l)},methods:Le({},Object(p["b"])({setTheme:"navbar/theme",setConfig:"timeSeries/config",setTime:"stopwatch/time",setStopwatchRunning:"stopwatch/running",setTimeSaved:"stopwatch/timeSaved",setCountdown:"countdown/countdown",setCountdownRunning:"countdown/running",setEndCountdown:"countdown/end",setSeriesCountdown:"countdown/series"})),render:function(t){return t(_t)}}).$mount("#app")},cccb:function(t,e,n){"use strict";var r=n("3123"),o=n.n(r);o.a},e193:function(t,e,n){},f87d:function(t,e,n){"use strict";var r=n("4a92"),o=n.n(r);o.a}});