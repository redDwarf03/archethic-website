(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{3443:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&s.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=s.length;t<n;t++){let n=s[t];if(i(n,e))return s.splice(t,1),!1}return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-s.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return g},default:function(){return b}});let r=n(1024),o=n(8533),i=r._(n(4887)),a=o._(n(2265)),s=n(3305),l=n(3443),u=n(4913),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:s="afterInteractive",onError:u,stylesheets:m}=e,h=n||t;if(h&&d.has(h))return;if(c.has(t)){d.add(h),c.get(t).then(r,u);return}let g=()=>{o&&o(),d.add(h)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",g()):a?(y.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",g()):t&&(y.src=t,c.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=l.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===s&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",s),m&&p(m),document.body.appendChild(y)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:c,stylesheets:f,...p}=e,{updateScripts:h,scripts:g,getIsSsr:y,appDir:b,nonce:v}=(0,a.useContext)(s.HeadManagerContext),_=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;_.current||(o&&e&&d.has(e)&&o(),_.current=!0)},[o,t,n]);let S=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!S.current&&("afterInteractive"===l?m(e):"lazyOnload"===l&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))})),S.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(h?(g[l]=(g[l]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:c,...p}]),h(g)):y&&y()?d.add(t||n):y&&!y()&&m(e)),b){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===l&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5755:function(e){e.exports={style:{fontFamily:"'__PPTelegraf_80a800', '__PPTelegraf_Fallback_80a800'"},className:"__className_80a800"}},1396:function(e,t,n){e.exports=n(4724)},3955:function(e,t,n){var r=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t)=>o(e,"name",{value:t,configurable:!0}),c=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===n||o(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},d=(e,t,n)=>(n=null!=e?r(s(e)):{},c(!t&&e&&e.__esModule?n:o(n,"default",{value:e,enumerable:!0}),e)),f={};((e,t)=>{for(var n in t)o(e,n,{get:t[n],enumerable:!0})})(f,{default:()=>y}),e.exports=c(o({},"__esModule",{value:!0}),f);var p=d(n(4275)),m=d(n(2265)),h=d(n(4918)),g=u(({color:e,height:t,showSpinner:n,crawl:r,crawlSpeed:o,initialPosition:i,easing:a,speed:s,shadow:l})=>{let c=e??"#29d",d=l||void 0===l?l?`box-shadow:${l}`:`box-shadow:0 0 10px ${c},0 0 5px ${c}`:"",f=m.createElement("style",null,`#nprogress{pointer-events:none}#nprogress .bar{background:${c};position:fixed;z-index:1031;top:0;left:0;width:100%;height:${t??3}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${d};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${c};border-left-color:${c};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`);return m.useEffect(()=>{function e(e,t){let n=new URL(e),r=new URL(t);if(n.hostname===r.hostname&&n.pathname===r.pathname&&n.search===r.search){let e=n.hash,t=r.hash;return e!==t&&n.href.replace(e,"")===r.href.replace(t,"")}return!1}h.configure({showSpinner:n??!0,trickle:r??!0,trickleSpeed:o??200,minimum:i??.08,easing:a??"ease",speed:s??200}),u(e,"isAnchorOfCurrentUrl");var t=document.querySelectorAll("html");function l(e){for(;e&&"a"!==e.tagName.toLowerCase();)e=e.parentElement;return e}function c(n){try{let o=n.target,i=l(o);if(i){var r;let n,o=window.location.href,a=i.href,s="_blank"===i.target,l=e(o,a);a===o||l||s?(h.start(),h.done(),[].forEach.call(t,function(e){e.classList.remove("nprogress-busy")})):(h.start(),n=(r=window.history).pushState,r.pushState=function(){return h.done(),[].forEach.call(t,function(e){e.classList.remove("nprogress-busy")}),n.apply(r,arguments)})}}catch{h.start(),h.done()}}return u(l,"findClosestAnchor"),u(c,"handleClick"),document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[]),f},"NextTopLoader"),y=g;g.propTypes={color:p.string,height:p.number,showSpinner:p.bool,crawl:p.bool,crawlSpeed:p.number,initialPosition:p.number,easing:p.string,speed:p.number,shadow:p.oneOfType([p.string,p.bool])}},4918:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=i(e,o.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(o.barSelector),u=o.speed,c=o.easing;return n.offsetWidth,a(function(t){var i,a;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),s(l,(i=e,(a="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+i)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+i)*100+"%,0)"}:{"margin-left":(-1+i)*100+"%"}).transition="all "+u+"ms "+c,a)),1===e?(s(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){s(n,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},u)},u)):setTimeout(t,u)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*i(Math.random()*t,.1,.95)),t=i(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,i,a=t.querySelector(o.barSelector),l=e?"-100":(-1+(r.status||0))*100,c=document.querySelector(o.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),!o.showSpinner&&(i=t.querySelector(o.spinnerSelector))&&f(i),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},r.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),s=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var i;r=t[i=(i=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[i]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+i)in n)return r;return t}(i)),n.style[r]=o}return function(e,t){var r,o,i=arguments;if(2==i.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,i[1],i[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function u(e,t){var n=d(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?r.call(t,n,t,e):r)&&(e.exports=o)},3018:function(e,t,n){"use strict";var r=n(1289);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},4275:function(e,t,n){e.exports=n(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);