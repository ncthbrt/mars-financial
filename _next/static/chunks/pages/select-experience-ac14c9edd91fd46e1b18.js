_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("a3WO");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return i}))},KAKA:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={apiUri:"https://api-test.stitch.money/graphql",identityServerUri:"https://secure-test.stitch.money",clientId:"c3222b65-da9e-4531-93bd-47b47e0f0f9f",testClientId:"test-95105efc-b6f5-42c5-8396-8da6187c97d3",redirectUri:"http://localhost:3000/return"}},NUxi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/select-experience",function(){return n("rtIj")}])},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("BsWD");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},fO3t:function(e,t,n){"use strict";function r(e){sessionStorage.setItem("stitchNonce",e)}function i(e){sessionStorage.setItem("stitchVerifier",e)}function o(){return sessionStorage.getItem("stitchVerifier")}function a(e){f("stitchToken",e)}function u(){return l("stitchToken")}function c(e){console.log("setting client Id to",e),f("clientId",e)}function s(){return l("clientId")}function f(e,t){sessionStorage.setItem(e,t)}function l(e){return sessionStorage.getItem(e)}n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return s}))},ljMU:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("wx14"),i=n("q1tI"),o=n.n(i).a.createElement;function a(e){return o("a",Object(r.a)({href:e.href,className:"button is-large is-primary"},e),e.children)}},rtIj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));var r=n("q1tI"),i=n.n(r),o=n("ODXe"),a=n("o0o1"),u=n.n(a),c=n("HaE+"),s=n("tCoF"),f=n("fO3t"),l=n("KAKA"),d=["accountholders","balances","transactions","accounts","offline_access","openid"];function p(){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.clientId,e.next=3,b(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.testClientId,e.next=3,b(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(u.a.mark((function e(t){var n,r,i,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,r=Object(o.a)(n,3),i=r[0],a=r[1],c=r[2],Object(f.e)(c),Object(f.f)(a),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(u.a.mark((function e(t){var n,r,i,a,c,f,p,h,y,v;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(s.a)(),r=Object(s.a)(),e.next=4,Object(s.b)();case 4:return i=e.sent,a=Object(o.a)(i,2),c=a[0],f=a[1],p=l.a.redirectUri,h=l.a.identityServerUri,y={client_id:t,code_challenge:f,code_challenge_method:"S256",redirect_uri:p,scope:d.join(" "),response_type:"code",nonce:r,state:n},v=Object(s.c)(y),e.abrupt("return",["".concat(h,"/connect/authorize?").concat(v),c,r]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=Object.prototype.hasOwnProperty;function j(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}var _=new WeakMap,x=0;var I=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):_.has(e[n])?r=_.get(e[n]):(r=x,_.set(e[n],x++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var S="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),E={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(j()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)}},errorRetryInterval:1e3*(S?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(S?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(O.call(t,r)&&++i&&!O.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}};function k(){return"undefined"===typeof navigator.onLine||navigator.onLine}var C=Object(r.createContext)({});C.displayName="SWRConfigContext";var A=C,T=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},R=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},N="undefined"===typeof window,V=N?null:window.requestIdleCallback||function(e){return setTimeout(e,1)},U=N?r.useEffect:r.useLayoutEffect,D={},K={},W={},P={},M={},L={},z={};if(!N&&window.addEventListener){var H=function(e){if(j()&&k())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return H(W)}),!1),window.addEventListener("focus",(function(){return H(W)}),!1),window.addEventListener("online",(function(){return H(P)}),!1)}var F=function(e,t){void 0===t&&(t=!0);var n=I.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var a=M[r];if(r&&a){for(var u=I.get(r),c=I.get(i),s=I.get(o),f=[],l=0;l<a.length;++l)f.push(a[l](t,u,c,s,l>0));return Promise.all(f).then((function(){return I.get(r)}))}return Promise.resolve(I.get(r))},X=function(e,t,n,r){var i=M[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},q=function(e,t,n){return void 0===n&&(n=!0),T(void 0,void 0,void 0,(function(){var r,i,o,a,u,c,s,f,l,d,p,h;return R(this,(function(y){switch(y.label){case 0:if(r=I.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,F(e,n)];if(L[i]=Date.now()-1,z[i]=0,a=L[i],u=K[i],!t||"function"!==typeof t)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t(I.get(i))];case 2:return c=y.sent(),[3,4];case 3:return f=y.sent(),s=f,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];y.label=6;case 6:return y.trys.push([6,8,,9]),[4,t];case 7:return c=y.sent(),[3,9];case 8:return l=y.sent(),s=l,[3,9];case 9:return[3,11];case 10:c=t,y.label=11;case 11:if(a!==L[i]||u!==K[i]){if(s)throw s;return[2,c]}if("undefined"!==typeof c&&I.set(i,c),I.set(o,s),z[i]=Date.now()-1,d=M[i]){for(p=[],h=0;h<d.length;++h)p.push(d[h](!!n,c,s,void 0,h>0));return[2,Promise.all(p).then((function(){if(s)throw s;return I.get(i)}))]}if(s)throw s;return[2,c]}}))}))};A.Provider;var B=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,o,a={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],a=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(a=t[1]);var u=I.serializeKey(i),c=u[0],s=u[1],f=u[2],l=u[3];a=Object.assign({},E,Object(r.useContext)(A),a);var d=Object(r.useRef)(a);U((function(){d.current=a})),"undefined"===typeof o&&(o=a.fetcher);var p=function(){var e=I.get(c);return"undefined"===typeof e?a.initialData:e},h=p(),y=I.get(f),v=!!I.get(l),b=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),g=Object(r.useRef)({data:h,error:y,isValidating:v});Object(r.useDebugValue)(g.current.data);var m=Object(r.useState)(null)[1],w=Object(r.useCallback)((function(e){var t=!1;for(var n in e)g.current[n]!==e[n]&&(g.current[n]=e[n],b.current[n]&&(t=!0));if(t||a.suspense){if(O.current)return;m({})}}),[]),O=Object(r.useRef)(!1),_=Object(r.useRef)(c),x=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];O.current||(t=d.current)[e].apply(t,n)}}),S=Object(r.useCallback)((function(e,t){return q(_.current,e,t)}),[]),C=function(e,t){t&&(e[c]?e[c].push(t):e[c]=[t])},N=function(e,t){if(e[c]){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},H=Object(r.useCallback)((function(t){return void 0===t&&(t={}),T(e,void 0,void 0,(function(){var e,n,r,i,u,d,p;return R(this,(function(h){switch(h.label){case 0:if(!c||!o)return[2,!1];if(O.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof D[c]&&t.dedupe,h.label=1;case 1:return h.trys.push([1,6,,7]),w({isValidating:!0}),I.set(l,!0),n||X(c,void 0,void 0,!0),r=void 0,i=void 0,n?(i=K[c],[4,D[c]]):[3,3];case 2:return r=h.sent(),[3,5];case 3:return a.loadingTimeout&&!I.get(c)&&setTimeout((function(){e&&x.current.emit("onLoadingSlow",c,a)}),a.loadingTimeout),D[c]=null!==s?o.apply(void 0,s):o(c),K[c]=i=Date.now(),[4,D[c]];case 4:r=h.sent(),setTimeout((function(){delete D[c],delete K[c]}),a.dedupingInterval),x.current.emit("onSuccess",r,c,a),h.label=5;case 5:return K[c]>i||L[c]&&(i<=L[c]||i<=z[c]||0===z[c])?(w({isValidating:!1}),[2,!1]):(I.set(c,r),I.set(f,void 0),I.set(l,!1),u={isValidating:!1},"undefined"!==typeof g.current.error&&(u.error=void 0),a.compare(g.current.data,r)||(u.data=r),w(u),n||X(c,r,void 0,!1),[3,7]);case 6:return d=h.sent(),delete D[c],delete K[c],I.set(f,d),g.current.error!==d&&(w({isValidating:!1,error:d}),n||X(c,void 0,d,!1)),x.current.emit("onError",d,c,a),a.shouldRetryOnError&&(p=(t.retryCount||0)+1,x.current.emit("onErrorRetry",d,c,a,H,Object.assign({dedupe:!0},t,{retryCount:p}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[c]);U((function(){if(c){O.current=!1;var e=g.current.data,t=p();_.current!==c&&(_.current=c),a.compare(e,t)||w({data:t});var n=function(){return H({dedupe:!0})};(a.revalidateOnMount||!a.initialData&&void 0===a.revalidateOnMount)&&("undefined"!==typeof t?V(n):n());var r=!1,i=function(){!r&&d.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),d.current.focusThrottleInterval))},o=function(){d.current.revalidateOnReconnect&&n()},u=function(e,t,r,i,o){void 0===e&&(e=!0),void 0===o&&(o=!0);var u={},c=!1;return"undefined"===typeof t||a.compare(g.current.data,t)||(u.data=t,c=!0),g.current.error!==r&&(u.error=r,c=!0),"undefined"!==typeof i&&g.current.isValidating!==i&&(u.isValidating=i,c=!0),c&&w(u),!!e&&(o?n():H())};return C(W,i),C(P,o),C(M,u),function(){w=function(){return null},O.current=!0,N(W,i),N(P,o),N(M,u)}}}),[c,H]),U((function(){var t=null,n=function(){return T(e,void 0,void 0,(function(){return R(this,(function(e){switch(e.label){case 0:return g.current.error||!d.current.refreshWhenHidden&&!j()||!d.current.refreshWhenOffline&&!k()?[3,2]:[4,H({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&!g.current.error&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[a.refreshInterval,a.refreshWhenHidden,a.refreshWhenOffline,H]);var F=Object(r.useMemo)((function(){var e={revalidate:H,mutate:S};return Object.defineProperties(e,{error:{get:function(){return b.current.error=!0,_.current===c?g.current.error:y},enumerable:!0},data:{get:function(){return b.current.data=!0,_.current===c?g.current.data:h},enumerable:!0},isValidating:{get:function(){return b.current.isValidating=!0,g.current.isValidating},enumerable:!0}}),e}),[H]);if(a.suspense){var B=I.get(c),J=I.get(f);if("undefined"===typeof B&&(B=h),"undefined"===typeof J&&(J=y),"undefined"===typeof B&&"undefined"===typeof J){if(D[c]||H(),D[c]&&"function"===typeof D[c].then)throw D[c];B=D[c]}if("undefined"===typeof B&&J)throw J;return{error:J,data:B,revalidate:H,mutate:S,isValidating:g.current.isValidating}}return F};var J=B,G=n("ljMU"),$=n("wx14"),Q=i.a.createElement;function Y(e){return Q("a",Object($.a)({href:e.href,className:"button is-large is-info"},e),e.children)}var Z=i.a.createElement;function ee(){var e=J("stitchUrl",p),t=J("stitchTestClientUrl",y);return Z("section",{className:"section"},Z("div",{className:"container"},Z("div",{className:"content"},Z("a",{href:"/",className:"delete is-pulled-right"}),Z("br",null),Z("h3",{className:"title is-4 has-text-centered"},"Select your preferred method to apply for you fake dome-loan.")),Z("div",{className:"buttons is-centered"},Z(G.a,{href:t.data,onClick:function(){return Object(f.d)(l.a.testClientId)}},"Apply with demo info"),Z(Y,{href:e.data,onClick:function(){return Object(f.d)(l.a.clientId)}},"Apply with my info"))),Z("div",{className:"container"},Z("div",{className:"content"},Z("p",null,"100% safe and you will not debit any real money when you apply for your fake dome-loan on Mars.")),Z("div",{className:"content is-small"},Z("p",null,"Once you select your preferred experience you will go through a demo experience to apply for a FAKE \u201cDome-Loan\u201d for a Dome Home on Mars. Once complete you will see a results page of whether you were FAKE successful/unsuccessful and how Stitch was able to determine this."))))}},tCoF:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return v}));var r=n("o0o1"),i=n.n(r),o=n("ODXe"),a=n("HaE+"),u=n("a3WO");var c=n("BsWD");function s(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var t=String.fromCharCode.apply(String,s(e));return window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,e.abrupt("return",new Uint8Array(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=crypto.getRandomValues(new Uint8Array(32)),n=f(t),e.next=4,l(n).then(f);case 4:return r=e.sent,e.abrupt("return",[n,r]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return f(crypto.getRandomValues(new Uint8Array(32)))}function v(e){return Object.entries(e).map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&")}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["NUxi",0,1,2]]]);