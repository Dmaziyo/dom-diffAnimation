(()=>{"use strict";var e={890:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".numbers {\r\n  display: flex;\r\n  column-gap: 20px;\r\n  flex-wrap: nowrap;\r\n}\r\n.number {\r\n  text-align: center;\r\n  width: 50px;\r\n  background-color: lightblue;\r\n  margin-top: 20px;\r\n}\r\n.inspected-number {\r\n  background-color: greenyellow;\r\n}\r\n.cur-number {\r\n  background-color: pink;\r\n}\r\n.to-be-removed {\r\n  transition: all 0.3s;\r\n  background-color: red;\r\n}\r\n\r\n.case-line > li {\r\n  margin: 8px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n.node-box {\r\n  padding: 16px 0;\r\n}\r\n\r\n.controller {\r\n  margin: 16px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n.custom-font {\r\n  font-size: 16px;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),u=r.n(l),d=r(589),f=r.n(d),p=r(890),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;let h=!1,v=!1,b=null,y=null,g=null,x=1;function w(e){v=e}function T(e){h=e}function L(e=0){let t=20,r=[],n=[],o=new Set;switch(b=document.getElementById("numbers-old"),y=document.getElementById("numbers-new"),e){case 0:for(let e=1;e<=t;e++)r.push(e);A(b,r),r.sort((()=>Math.random()>.5?1:-1)),A(y,r);break;case 1:for(let e=1;e<=t;e++)r.push(e);for(t=M(1,M(2,19));o.size!==t;)o.add(M(1,19));n=Array.from(o),A(b,r),n.sort(((e,t)=>Math.random()>.5?1:-1)),A(y,n);break;case 2:for(let e=1;e<=t;e++)r.push(e);for(t=M(1,M(2,19));o.size!==t;)o.add(M(1,30));n=Array.from(o),A(b,n),n.sort(((e,t)=>Math.random()>.5?1:-1)),A(y,r);break;case 3:t=M(1,M(2,19));for(let e=1;e<=t;e++)r.push(e);for(t=M(1,M(2,19));o.size!==t;)o.add(M(1,30));n=Array.from(o),A(b,n),n.sort(((e,t)=>Math.random()>.5?1:-1)),A(y,r)}}function A(e,t){e.innerHTML="";for(const r of t){let t=document.createElement("div");t.classList.add("number"),t.appendChild(document.createTextNode(r)),e.appendChild(t)}}let k=1e3;function E(e){return new Promise((t=>setTimeout(t,e)))}function M(e,t){return Math.floor(Math.random()*(t-e)+e)}async function C(e,t,r,n){const o=(e=Array.from(e)).indexOf(t);let a=e[0].clientWidth+20,i=e.indexOf(r);if(-1===o){if(v){if(r){for(let t=i;t<e.length;t++)e[t].setAttribute("style",`transform: translate(${a}px, 0px);\n                         background-color: palegoldenrod;\n                         transition: background-color 1500ms, transform 1500ms`);await E(1500);for(let t=i;t<e.length;t++)e[t].removeAttribute("style")}try{n.insertBefore(t,r),r&&await E(k)}catch(e){console.log("reset")}return}return}i=-1===i?e.length:i;let s=o<i?-1:1,c=-1===s?i:o;for(let t=-1===s?o+1:i;t<c;t++)e[t].setAttribute("style",`transform: translate(${a*s}px, 0px);\n                   background-color: palegoldenrod;\n                   transition: background-color 1500ms, transform 1500ms`);e[o].setAttribute("style",`transform: translate(${a*(-1===s?i-o-1:i-o)}px, 0px);\n                   transition: background-color 1500ms, transform 1500ms`),await E(1500),c=-1===s?i:o;for(let t=-1===s?o+1:i;t<c;t++)e[t].removeAttribute("style");try{n.insertBefore(t,r)}catch(e){console.log("already was removed from parent")}e[o].removeAttribute("style"),await E(k)}async function S(e){e.classList.add("to-be-removed"),await E(k),e.parentNode.removeChild(e),e.classList.remove("to-be-removed")}function I(e){let t=null;return function(...r){t&&(clearTimeout(t),t=null),t=setTimeout((()=>{e.apply(this,r)}),100)}}async function O(e,t,r){let n=0,o=new Map;for(let t=0;t<e.length;t++)o.set(e[t].innerText,e[t]);for(let a=0;a<t.length;a++){let i=!1;if(h)return w(!1),void T(!1);const s=t[a];s.classList.add("cur-number"),await E(k);for(let c=0;c<e.length;c++){const l=e[c];if(s.innerText===l.innerText){if(o.delete(s.innerText),i=!0,l.classList.add("inspected-number"),h)return w(!1),T(!1),l.classList.remove("inspected-number"),void s.classList.remove("cur-number");if(c<n){let n=Array.prototype.find.call(e,(e=>{if(e.innerText===t[a-1].innerText)return!0}));await C(e,l,n.nextSibling,r)}else n=c;break}}if(!i){const n=s.cloneNode(s);n.classList.add("inspected-number"),n.classList.remove("cur-number");try{let o=0===a?e[0]:Array.prototype.find.call(e,(e=>{if(e.innerText===t[a-1].innerText)return!0})).nextSibling;await C(e,n,o,r)}catch(e){console.log("reset")}}s.classList.remove("cur-number")}let a=Array.from(o,(([,e])=>e));for(let e of a)try{await S(e)}catch(e){return console.log("reset"),void w(!1)}w(!1)}new class{constructor(e=[]){this.routes=e,this.currentHash="",this.refresh=this.refresh.bind(this),window.addEventListener("load",this.refresh,!1),window.addEventListener("hashchange",this.refresh,!1)}getUrlPath(e){return e.indexOf("#")>=0?e.slice(e.indexOf("#")+1):"/case1"}refresh(e){let t="";e.newURL?(t=this.getUrlPath(e.newURL||""),this.currentHash=t):(window.location.hash="/case1",this.currentHash="/case1"),this.matchCase()}matchCase(){let e=this.routes.find((e=>e.path===this.currentHash));var t;t=e.diff,g=t,function(e){x=e}(e.type),document.getElementById("reset").click()}}([{path:"/case1",diff:async function(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];if(h)return w(!1),void T(!1);o.classList.add("cur-number"),await E(k);for(let t=0;t<e.length;t++){const a=e[t];if(o.innerText===a.innerText){if(a.classList.add("inspected-number"),h)return w(!1),T(!1),void a.classList.remove("inspected-number");const t=0===n?e[0]:Array.prototype.find.call(e,((e,t,r)=>{if(e.innerText===r[n-1].nextSibling.innerText)return!0}));await C(e,a,t,r);break}}o.classList.remove("cur-number")}w(!1)},type:0},{path:"/case2",diff:async function(e,t,r){let n=0;for(let o=0;o<t.length;o++){if(h)return w(!1),void T(!1);const a=t[o];a.classList.add("cur-number"),await E(k);for(let i=0;i<e.length;i++){const s=e[i];if(a.innerText===s.innerText){if(s.classList.add("inspected-number"),h)return w(!1),T(!1),s.classList.remove("inspected-number"),void a.classList.remove("cur-number");if(i<n){const n=Array.prototype.find.call(e,(e=>{if(e.innerText===t[o-1].innerText)return!0}));await C(e,s,n.nextSibling,r)}else n=i;break}}a.classList.remove("cur-number")}w(!1)},type:0},{path:"/case3",diff:async function(e,t,r){let n=0,o=new Map;for(let t=0;t<e.length;t++)o.set(e[t].innerText,e[t]);for(let a=0;a<t.length;a++){if(h)return w(!1),void T(!1);const i=t[a];i.classList.add("cur-number"),await E(k);for(let s=0;s<e.length;s++){const c=e[s];if(i.innerText===c.innerText){if(o.delete(i.innerText),c.classList.add("inspected-number"),h)return w(!1),T(!1),c.classList.remove("inspected-number"),void i.classList.remove("cur-number");if(s<n){const n=Array.prototype.find.call(e,(e=>{if(e.innerText===t[a-1].innerText)return!0}));await C(e,c,n.nextSibling,r)}else n=s;break}}i.classList.remove("cur-number")}let a=Array.from(o,(([,e])=>e));for(let e of a)try{await S(e)}catch(e){return console.log("reset"),void w(!1)}w(!1)},type:1},{path:"/case4",diff:O,type:2},{path:"/case5",diff:O,type:3}]);let B=document.getElementById("swap"),H=document.getElementById("reset"),N=document.getElementById("delay");const P=I((()=>{var e;v||(w(!0),e=N.selectedOptions[0].value,k=e,g(b.children,y.children,b))})),z=I((()=>{T(!!v),L(x)}));B.addEventListener("click",P),H.addEventListener("click",z),L(x)})()})();