_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement;function i(){return a("nav",{id:"navbar",className:"navbar transparent is-spaced is-center"},a("div",{className:"column"},a("div",{className:"level-item is-center"},a("div",{className:"col"},a("img",{className:"is-center",src:"images/mars-logo.svg",width:"250px",alt:""})))))}var u=n("brST"),c=o.a.createElement,s="Mars Financial";function f(e){var t=e.children;return c(o.a.Fragment,null,c(u.a,null),c(i,null),t)}},"6R4B":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/return",function(){return n("70vD")}])},"70vD":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("q1tI"),u=n.n(i),c=n("nOHt"),s=(n("ODXe"),n("tCoF")),f=n("fO3t"),l=n("UdIf");function d(e,t){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(o.a.mark((function e(t,n){var r,a,i,u,c,d,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.a.redirectUri,a=l.a.identityServerUri,null!==(i=Object(f.a)())){e.next=4;break}throw new Error("ClientId was not found in storage. It needs to be set before the authorization redirect. This allows us to determine whether the real or test client was used.");case 4:return console.log("using client id:",i),u={grant_type:"authorization_code",client_id:i,code:t,redirect_uri:r,code_verifier:n},c=Object(s.c)(u),e.next=9,fetch("".concat(a,"/connect/token"),{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c});case 9:return d=e.sent,e.next=12,d.json();case 12:if(p=e.sent,console.log("Token: ",p),!("error"in p)){e.next=16;break}throw new Error("Oh no! Failed to fetch token!"+p.error);case 16:return Object(f.g)(p.access_token),e.abrupt("return",p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n("5M6V"),v=u.a.createElement;function y(){var e=Object(c.useRouter)(),t=e.query.code,n=null;return n=Object(f.b)(),Object(i.useEffect)((function(){function r(){return(r=Object(a.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n){e.next=7;break}return e.next=3,d("".concat(t),n);case 3:if(!("error"in(r=e.sent))){e.next=6;break}throw new Error("Failed to fetch token."+r.error);case 6:Object(f.g)(r.access_token);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then((function(t){Object(f.c)()&&e.push("/report").then((function(e){}),(function(e){}))}),(function(){}))}),[e,t,n]),v(h.a,null,v("progress",{className:"progress is-large is-info",max:"100"},"60%"))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},UdIf:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={apiUri:"https://api-test.stitch.money/graphql",identityServerUri:"https://secure-test.stitch.money",clientId:"c3222b65-da9e-4531-93bd-47b47e0f0f9f",testClientId:"test-95105efc-b6f5-42c5-8396-8da6187c97d3",redirectUri:"http://localhost:3000/return"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},brST:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("8Kt/"),o=n.n(r),a=n("q1tI"),i=n.n(a),u=n("5M6V"),c=i.a.createElement;function s(){return c(o.a,null,c("title",null,u.b),c("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),c("link",{rel:"alternate icon",href:"/favicon.ico"}),c("meta",{name:"description",content:"Providing the financial services you'll need for your new Martian life!"}),c("meta",{name:"og:title",content:u.b}))}},fO3t:function(e,t,n){"use strict";function r(e){sessionStorage.setItem("stitchNonce",e)}function o(e){sessionStorage.setItem("stitchVerifier",e)}function a(){return sessionStorage.getItem("stitchVerifier")}function i(e){f("stitchToken",e)}function u(){return l("stitchToken")}function c(e){f("clientId",e)}function s(){return l("clientId")}function f(e,t){sessionStorage.setItem(e,t)}function l(e){return sessionStorage.getItem(e)}n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return s}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},tCoF:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return y}));var r=n("o0o1"),o=n.n(r),a=n("ODXe"),i=n("HaE+"),u=n("a3WO");var c=n("BsWD");function s(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var t=String.fromCharCode.apply(String,s(e));return window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,e.abrupt("return",new Uint8Array(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=crypto.getRandomValues(new Uint8Array(32)),n=f(t),e.next=4,l(n).then(f);case 4:return r=e.sent,e.abrupt("return",[n,r]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return f(crypto.getRandomValues(new Uint8Array(32)))}function y(e){return Object.entries(e).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&")}}},[["6R4B",0,1,2]]]);