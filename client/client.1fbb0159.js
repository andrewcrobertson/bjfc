function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=l(e,n,r,a);t.p(o,c)}}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function b(){return g("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?$(e):m(e)}function S(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function j(t){return S(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e){t.value=null==e?"":e}function N(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}let O;function I(t){O=t}function T(){if(!O)throw new Error("Function called outside component initialization");return O}function k(t){T().$$.on_mount.push(t)}function R(t){T().$$.on_destroy.push(t)}function J(t,e){T().$$.context.set(t,e)}function L(t){return T().$$.context.get(t)}const B=[],U=[],q=[],M=[],F=Promise.resolve();let D=!1;function V(t){q.push(t)}function H(t){M.push(t)}let K=!1;const Y=new Set;function z(){if(!K){K=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];I(e),G(e.$$)}for(I(null),B.length=0;U.length;)U.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];Y.has(e)||(Y.add(e),e())}q.length=0}while(B.length);for(;M.length;)M.pop()();D=!1,K=!1,Y.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const W=new Set;let X;function Q(){X={r:0,c:[],p:X}}function Z(){X.r||o(X.c),X=X.p}function tt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function nt(t,e){et(t,1,1,(()=>{e.delete(t.key)}))}function rt(t,e,n,r,o,s,a,c,i,l,f,u){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const $=[],g=new Map,y=new Map;for(h=d;h--;){const t=u(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),g.set(c,$[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,_=new Set;function v(t){tt(t,1),t.m(c,f),a.set(t.key,t),f=t.first,d--}for(;p&&d;){const e=$[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(f=e.first,p--,d--):g.has(o)?!a.has(r)||b.has(r)?v(e):_.has(o)?p--:y.get(r)>y.get(o)?(_.add(r),v(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];g.has(e.key)||i(e,a)}for(;d;)v($[d-1]);return $}function ot(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function st(t){return"object"==typeof t&&null!==t?t:{}}function at(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function ct(t){t&&t.c()}function it(t,e){t&&t.l(e)}function lt(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),V((()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(V)}function ft(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(B.push(t),D||(D=!0,F.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,s,a,c,i,l=[-1]){const f=O;I(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&ut(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=x(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&tt(e.$$.fragment),lt(e,n.target,n.anchor),z()}I(f)}class dt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht=[];function mt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ht.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ht.push(n,e)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const $t={},gt=mt("");function yt(e){let n,r,o,s,a,c,i;return{c(){n=m("button"),r=$("svg"),o=$("line"),s=$("line"),a=$("line"),this.h()},l(t){n=E(t,"BUTTON",{class:!0});var e=x(n);r=E(e,"svg",{width:!0,height:!0,class:!0},1);var c=x(r);o=E(c,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(o).forEach(d),s=E(c,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(s).forEach(d),a=E(c,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(a).forEach(d),c.forEach(d),e.forEach(d),this.h()},h(){v(o,"id","top"),v(o,"x1","0"),v(o,"y1","2"),v(o,"x2","32"),v(o,"y2","2"),v(o,"class","svelte-1gn2oj1"),v(s,"id","middle"),v(s,"x1","0"),v(s,"y1","12"),v(s,"x2","24"),v(s,"y2","12"),v(s,"class","svelte-1gn2oj1"),v(a,"id","bottom"),v(a,"x1","0"),v(a,"y1","22"),v(a,"x2","32"),v(a,"y2","22"),v(a,"class","svelte-1gn2oj1"),v(r,"width","32"),v(r,"height","24"),v(r,"class","svelte-1gn2oj1"),v(n,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-1gn2oj1"),A(n,"open",e[0])},m(t,l){p(t,n,l),u(n,r),u(r,o),u(r,s),u(r,a),c||(i=_(n,"click",e[1]),c=!0)},p(t,[e]){1&e&&A(n,"open",t[0])},i:t,o:t,d(t){t&&d(n),c=!1,i()}}}function bt(t,e,n){let{open:r=!1}=e;return t.$$set=t=>{"open"in t&&n(0,r=t.open)},[r,()=>n(0,r=!r)]}class _t extends dt{constructor(t){super(),pt(this,t,bt,yt,a,{open:0})}}function vt(t){let e,n,r,o,s,a,c,i;function l(e){t[2].call(null,e)}let f={};return void 0!==t[0]&&(f.open=t[0]),r=new _t({props:f}),U.push((()=>at(r,"open",l))),{c(){e=m("header"),n=m("nav"),ct(r.$$.fragment),s=y(),a=m("div"),c=g(t[1]),this.h()},l(o){e=E(o,"HEADER",{class:!0});var i=x(e);n=E(i,"NAV",{class:!0});var l=x(n);it(r.$$.fragment,l),s=j(l),a=E(l,"DIV",{class:!0});var f=x(a);c=S(f,t[1]),f.forEach(d),l.forEach(d),i.forEach(d),this.h()},h(){v(a,"class","text-lg font-medium title-font px-3 py-1"),v(n,"class","flex items-center"),v(e,"class","flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2")},m(t,o){p(t,e,o),u(e,n),lt(r,n,null),u(n,s),u(n,a),u(a,c),i=!0},p(t,[e]){const n={};!o&&1&e&&(o=!0,n.open=t[0],H((()=>o=!1))),r.$set(n),(!i||2&e)&&w(c,t[1])},i(t){i||(tt(r.$$.fragment,t),i=!0)},o(t){et(r.$$.fragment,t),i=!1},d(t){t&&d(e),ft(r)}}}function xt(t,e,n){let{sidebar:r=!1}=e,{label:o="BJFC"}=e;return t.$$set=t=>{"sidebar"in t&&n(0,r=t.sidebar),"label"in t&&n(1,o=t.label)},[r,o,function(t){r=t,n(0,r)}]}class Et extends dt{constructor(t){super(),pt(this,t,xt,vt,a,{sidebar:0,label:1})}}const St=()=>"/birthdays",jt=t=>`/birthdays/${t}`,wt=()=>"/committee",Pt=t=>`/players/${t}`,Nt=()=>"/players/search",At=()=>"/teams",Ct=t=>`/teams/${t}/officials`,Ot=t=>`/teams/${t}/players/archived`,It=t=>`/teams/${t}/players`;function Tt(e){let n,r,s,a,c,i,l,f,h,$,b,w,P,N,C,O,I,T,k,R,J,L,B,U;return{c(){n=m("aside"),r=m("nav"),s=m("a"),a=g("Home"),i=y(),l=m("a"),f=g("Teams"),$=y(),b=m("a"),w=g("Committee"),N=y(),C=m("a"),O=g("Birthdays"),T=y(),k=m("a"),R=g("Search"),this.h()},l(t){n=E(t,"ASIDE",{class:!0});var e=x(n);r=E(e,"NAV",{class:!0});var o=x(r);s=E(o,"A",{class:!0,href:!0});var c=x(s);a=S(c,"Home"),c.forEach(d),i=j(o),l=E(o,"A",{class:!0,href:!0});var u=x(l);f=S(u,"Teams"),u.forEach(d),$=j(o),b=E(o,"A",{class:!0,href:!0});var p=x(b);w=S(p,"Committee"),p.forEach(d),N=j(o),C=E(o,"A",{class:!0,href:!0});var h=x(C);O=S(h,"Birthdays"),h.forEach(d),T=j(o),k=E(o,"A",{class:!0,href:!0});var m=x(k);R=S(m,"Search"),m.forEach(d),o.forEach(d),e.forEach(d),this.h()},h(){v(s,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),v(s,"href",c="/"),v(l,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),v(l,"href",h="/teams"),v(b,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),v(b,"href",P="/committee"),v(C,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),v(C,"href",I="/birthdays"),v(k,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),v(k,"href",J="/players/search"),v(r,"class","p-4 text-xl"),v(n,"class",L=e[1]+" absolute w-11/12 md:w-96 h-full bg-gray-200 border-r-2 shadow-lg svelte-12d18ho"),A(n,"open",e[0])},m(t,o){p(t,n,o),u(n,r),u(r,s),u(s,a),u(r,i),u(r,l),u(l,f),u(r,$),u(r,b),u(b,w),u(r,N),u(r,C),u(C,O),u(r,T),u(r,k),u(k,R),B||(U=[_(s,"click",e[2]),_(l,"click",e[3]),_(b,"click",e[4]),_(C,"click",e[5]),_(k,"click",e[6])],B=!0)},p(t,[e]){2&e&&L!==(L=t[1]+" absolute w-11/12 md:w-96 h-full bg-gray-200 border-r-2 shadow-lg svelte-12d18ho")&&v(n,"class",L),3&e&&A(n,"open",t[0])},i:t,o:t,d(t){t&&d(n),B=!1,o(U)}}}function kt(t,e,n){let{class:r=""}=e,{open:o=!1}=e;return t.$$set=t=>{"class"in t&&n(1,r=t.class),"open"in t&&n(0,o=t.open)},[o,r,()=>n(0,o=!1),()=>n(0,o=!1),()=>n(0,o=!1),()=>n(0,o=!1),()=>n(0,o=!1)]}class Rt extends dt{constructor(t){super(),pt(this,t,kt,Tt,a,{class:1,open:0})}}function Jt(t){let e,n,r,o,s,a,c,l,h,$,b,_,w,P,N=t[2].seasonYear+"";function A(e){t[5].call(null,e)}let C={class:"pt-10"};function O(e){t[6].call(null,e)}void 0!==t[0]&&(C.open=t[0]),n=new Rt({props:C}),U.push((()=>at(n,"open",A)));let I={label:t[1]};void 0!==t[0]&&(I.sidebar=t[0]),s=new Et({props:I}),U.push((()=>at(s,"sidebar",O)));const T=t[4].default,k=i(T,t,t[3],null);return{c(){e=m("div"),ct(n.$$.fragment),o=y(),ct(s.$$.fragment),c=y(),l=m("div"),k&&k.c(),h=y(),$=m("footer"),b=g("BJFC "),_=g(N),w=g(" Season"),this.h()},l(t){e=E(t,"DIV",{class:!0});var r=x(e);it(n.$$.fragment,r),o=j(r),it(s.$$.fragment,r),c=j(r),l=E(r,"DIV",{class:!0});var a=x(l);k&&k.l(a),a.forEach(d),h=j(r),$=E(r,"FOOTER",{class:!0});var i=x($);b=S(i,"BJFC "),_=S(i,N),w=S(i," Season"),i.forEach(d),r.forEach(d),this.h()},h(){v(l,"class","flex-1 overflow-y-auto p-5"),v($,"class","py-5 px-2 bg-gray-200"),v(e,"class","flex flex-col h-screen")},m(t,r){p(t,e,r),lt(n,e,null),u(e,o),lt(s,e,null),u(e,c),u(e,l),k&&k.m(l,null),u(e,h),u(e,$),u($,b),u($,_),u($,w),P=!0},p(t,[e]){const o={};!r&&1&e&&(r=!0,o.open=t[0],H((()=>r=!1))),n.$set(o);const c={};2&e&&(c.label=t[1]),!a&&1&e&&(a=!0,c.sidebar=t[0],H((()=>a=!1))),s.$set(c),k&&k.p&&8&e&&f(k,T,t,t[3],e,null,null)},i(t){P||(tt(n.$$.fragment,t),tt(s.$$.fragment,t),tt(k,t),P=!0)},o(t){et(n.$$.fragment,t),et(s.$$.fragment,t),et(k,t),P=!1},d(t){t&&d(e),ft(n),ft(s),k&&k.d(t)}}}function Lt(t,e,n){let r;c(t,gt,(t=>n(1,r=t)));let{$$slots:o={},$$scope:s}=e,a=!1;return t.$$set=t=>{"$$scope"in t&&n(3,s=t.$$scope)},[a,r,{seasonYear:2021},s,o,function(t){a=t,n(0,a)},function(t){a=t,n(0,a)}]}class Bt extends dt{constructor(t){super(),pt(this,t,Lt,Jt,a,{})}}var Ut=function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t},qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Mt(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var Ft="object"==typeof qt&&qt&&qt.Object===Object&&qt,Dt="object"==typeof self&&self&&self.Object===Object&&self,Vt=Ft||Dt||Function("return this")(),Ht=Vt.Symbol;var Kt=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Yt=Array.isArray,zt=Object.prototype,Gt=zt.hasOwnProperty,Wt=zt.toString,Xt=Ht?Ht.toStringTag:void 0;var Qt=function(t){var e=Gt.call(t,Xt),n=t[Xt];try{t[Xt]=void 0;var r=!0}catch(t){}var o=Wt.call(t);return r&&(e?t[Xt]=n:delete t[Xt]),o},Zt=Object.prototype.toString;var te=function(t){return Zt.call(t)},ee=Ht?Ht.toStringTag:void 0;var ne=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":ee&&ee in Object(t)?Qt(t):te(t)};var re=function(t){return null!=t&&"object"==typeof t};var oe=function(t){return"symbol"==typeof t||re(t)&&"[object Symbol]"==ne(t)},se=Ht?Ht.prototype:void 0,ae=se?se.toString:void 0;var ce=function t(e){if("string"==typeof e)return e;if(Yt(e))return Kt(e,t)+"";if(oe(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var ie=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},le=/^\s+|\s+$/g,fe=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,de=parseInt;var he=function(t){if("number"==typeof t)return t;if(oe(t))return NaN;if(ie(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ie(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(le,"");var n=ue.test(t);return n||pe.test(t)?de(t.slice(2),n?2:8):fe.test(t)?NaN:+t};var me=function(t){return t?Infinity===(t=he(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var $e=function(t){var e=me(t),n=e%1;return e==e?n?e-n:e:0};var ge=function(t){return null==t?"":ce(t)};var ye=function(t,e,n){t=ge(t),e=ce(e);var r=t.length,o=n=void 0===n?r:Ut($e(n),0,r);return(n-=e.length)>=0&&t.slice(n,o)==e};function be(t){let e,n;return e=new Bt({props:{$$slots:{default:[ve]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function _e(t){let e;const n=t[2].default,r=i(n,t,t[3],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&8&e&&f(r,n,t,t[3],e,null,null)},i(t){e||(tt(r,t),e=!0)},o(t){et(r,t),e=!1},d(t){r&&r.d(t)}}}function ve(t){let e;const n=t[2].default,r=i(n,t,t[3],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&8&e&&f(r,n,t,t[3],e,null,null)},i(t){e||(tt(r,t),e=!0)},o(t){et(r,t),e=!1},d(t){r&&r.d(t)}}}function xe(t){let e,n,r,o,s,a,c,i,l;const f=[_e,be],h=[];return a=function(t,e){return t[1]?0:1}(t),c=h[a]=f[a](t),{c(){e=m("meta"),n=m("meta"),r=m("meta"),o=m("meta"),s=y(),c.c(),i=b(),this.h()},l(t){const a=C('[data-svelte="svelte-1otneoc"]',document.head);e=E(a,"META",{name:!0,content:!0}),n=E(a,"META",{name:!0,content:!0}),r=E(a,"META",{name:!0,content:!0}),o=E(a,"META",{name:!0,content:!0}),a.forEach(d),s=j(t),c.l(t),i=b(),this.h()},h(){v(e,"name","author"),v(e,"content","Tykto"),v(n,"name","description"),v(n,"content","BJFC"),v(r,"name","keywords"),v(r,"content","BJFC"),v(o,"name","robots"),v(o,"content","index, follow"),document.title="BJFC"},m(t,c){u(document.head,e),u(document.head,n),u(document.head,r),u(document.head,o),p(t,s,c),h[a].m(t,c),p(t,i,c),l=!0},p(t,[e]){c.p(t,e)},i(t){l||(tt(c),l=!0)},o(t){et(c),l=!1},d(t){d(e),d(n),d(r),d(o),t&&d(s),h[a].d(t),t&&d(i)}}}function Ee(t,e,n){let r,{$$slots:o={},$$scope:s}=e;const{page:a}=vn();c(t,a,(t=>n(4,r=t)));const i=ye(r.path,"/contact");return t.$$set=t=>{"$$scope"in t&&n(3,s=t.$$scope)},[a,i,o,s]}class Se extends dt{constructor(t){super(),pt(this,t,Ee,xe,a,{})}}function je(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=g(r)},l(t){e=E(t,"PRE",{});var o=x(e);n=S(o,r),o.forEach(d)},m(t,r){p(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&d(e)}}}function we(e){let n,r,o,s,a,c,i,l,f,h=e[1].message+"";document.title=n=e[0];let $=e[2]&&e[1].stack&&je(e);return{c(){r=y(),o=m("h1"),s=g(e[0]),a=y(),c=m("p"),i=g(h),l=y(),$&&$.c(),f=b(),this.h()},l(t){C('[data-svelte="svelte-1moakz"]',document.head).forEach(d),r=j(t),o=E(t,"H1",{class:!0});var n=x(o);s=S(n,e[0]),n.forEach(d),a=j(t),c=E(t,"P",{class:!0});var u=x(c);i=S(u,h),u.forEach(d),l=j(t),$&&$.l(t),f=b(),this.h()},h(){v(o,"class","svelte-17w3omn"),v(c,"class","svelte-17w3omn")},m(t,e){p(t,r,e),p(t,o,e),u(o,s),p(t,a,e),p(t,c,e),u(c,i),p(t,l,e),$&&$.m(t,e),p(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(s,t[0]),2&e&&h!==(h=t[1].message+"")&&w(i,h),t[2]&&t[1].stack?$?$.p(t,e):($=je(t),$.c(),$.m(f.parentNode,f)):$&&($.d(1),$=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(a),t&&d(c),t&&d(l),$&&$.d(t),t&&d(f)}}}function Pe(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Ne extends dt{constructor(t){super(),pt(this,t,Pe,we,a,{status:0,error:1})}}function Ae(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&ct(n.$$.fragment),r=b()},l(t){n&&it(n.$$.fragment,t),r=b()},m(t,e){n&&lt(n,t,e),p(t,r,e),o=!0},p(t,e){const o=16&e?ot(s,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){Q();const t=n;et(t.$$.fragment,1,0,(()=>{ft(t,1)})),Z()}a?(n=new a(c()),ct(n.$$.fragment),tt(n.$$.fragment,1),lt(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&tt(n.$$.fragment,t),o=!0)},o(t){n&&et(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&ft(n,t)}}}function Ce(t){let e,n;return e=new Ne({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function Oe(t){let e,n,r,o;const s=[Ce,Ae],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=b()},l(t){n.l(t),r=b()},m(t,n){a[e].m(t,n),p(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(Q(),et(a[i],1,1,(()=>{a[i]=null})),Z(),n=a[e],n?n.p(t,o):(n=a[e]=s[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&d(r)}}}function Ie(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Oe]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new Se({props:s}),{c(){ct(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){lt(n,t,e),r=!0},p(t,[e]){const r=12&e?ot(o,[4&e&&{segment:t[2][0]},8&e&&st(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ft(n,t)}}}function Te(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var f;return f=l,T().$$.after_update.push(f),J($t,r),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class ke extends dt{constructor(t){super(),pt(this,t,Te,Ie,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Re=[/^\/index\.json$/,/^\/birthdays\.json$/,/^\/birthdays\/([^/]+?)\.json$/,/^\/committee\.json$/,/^\/anchors\.json$/,/^\/players\/search\.json$/,/^\/players\/([^/]+?)\.json$/,/^\/teams\.json$/,/^\/teams\/([^/]+?)\/officials\.json$/,/^\/teams\/([^/]+?)\/contact\.json$/,/^\/teams\/([^/]+?)\/players\.json$/,/^\/teams\/([^/]+?)\/players\/archived\.json$/],Je=[{js:()=>Promise.all([import("./index.184613b9.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.e4a043ce.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.3cb9e2d0.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.1a3dabd2.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.2aa13708.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.f28b31b3.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.ac41c3af.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.0d7cfcec.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.4cae6ee6.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.b218b869.js"),__inject_styles(["client-df5d18ee.css","index-17398b88.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.b47f04cf.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.faa714d5.js"),__inject_styles(["client-df5d18ee.css"])]).then((function(t){return t[0]}))}],Le=(Be=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/birthdays\/?$/,parts:[{i:1}]},{pattern:/^\/birthdays\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({month:Be(t[1])})}]},{pattern:/^\/committee\/?$/,parts:[{i:3}]},{pattern:/^\/anchors\/?$/,parts:[{i:4}]},{pattern:/^\/players\/search\/?$/,parts:[null,{i:5}]},{pattern:/^\/players\/([^/]+?)\/?$/,parts:[null,{i:6,params:t=>({code:Be(t[1])})}]},{pattern:/^\/teams\/?$/,parts:[{i:7}]},{pattern:/^\/teams\/([^/]+?)\/officials\/?$/,parts:[null,null,{i:8,params:t=>({code:Be(t[1])})}]},{pattern:/^\/teams\/([^/]+?)\/contact\/?$/,parts:[null,null,{i:9,params:t=>({code:Be(t[1])})}]},{pattern:/^\/teams\/([^/]+?)\/players\/?$/,parts:[null,null,{i:10,params:t=>({code:Be(t[1])})}]},{pattern:/^\/teams\/([^/]+?)\/players\/archived\/?$/,parts:[null,null,null,{i:11,params:t=>({code:Be(t[1])})}]}]);var Be;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ue(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{i(r.next(t))}catch(t){s(t)}}function c(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function qe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Me,Fe=1;const De="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ve={};let He,Ke;function Ye(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function ze(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(He))return null;let e=t.pathname.slice(He.length);if(""===e&&(e="/"),!Re.some((t=>t.test(e))))for(let n=0;n<Le.length;n+=1){const r=Le[n],o=r.pattern.exec(e);if(o){const n=Ye(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=qe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ze(o);if(s){Qe(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),De.pushState({id:Me},"",o.href)}}function We(){return{x:pageXOffset,y:pageYOffset}}function Xe(t){if(Ve[Me]=We(),t.state){const e=ze(new URL(location.href));e?Qe(e,t.state.id):location.href=location.href}else Fe=Fe+1,function(t){Me=t}(Fe),De.replaceState({id:Me},"",location.href)}function Qe(t,e,n,r){return Ue(this,void 0,void 0,(function*(){const o=!!e;if(o)Me=e;else{const t=We();Ve[Me]=t,Me=e=++Fe,Ve[Me]=n?t:{x:0,y:0}}if(yield Ke(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ve[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ve[Me]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ze(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let tn,en=null;function nn(t){const e=qe(t.target);e&&"prefetch"===e.rel&&function(t){const e=ze(new URL(t,Ze(document)));if(e)en&&t===en.href||(en={href:t,promise:_n(e)}),en.promise}(e.href)}function rn(t){clearTimeout(tn),tn=setTimeout((()=>{nn(t)}),20)}function on(t,e={noscroll:!1,replaceState:!1}){const n=ze(new URL(t,Ze(document)));return n?(De[e.replaceState?"replaceState":"pushState"]({id:Me},"",t),Qe(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const sn="undefined"!=typeof __SAPPER__&&__SAPPER__;let an,cn,ln,fn=!1,un=[],pn="{}";const dn={page:function(t){const e=mt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:mt(null),session:mt(sn&&sn.session)};let hn,mn,$n;function gn(t,e){const{error:n}=t;return Object.assign({error:n},e)}function yn(t){return Ue(this,void 0,void 0,(function*(){an&&dn.preloading.set(!0);const e=function(t){return en&&en.href===t.href?en.promise:_n(t)}(t),n=cn={},r=yield e,{redirect:o}=r;if(n===cn)if(o)yield on(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield bn(n,e,gn(e,t.page))}}))}function bn(t,e,n){return Ue(this,void 0,void 0,(function*(){dn.page.set(n),dn.preloading.set(!1),an?an.$set(e):(e.stores={page:{subscribe:dn.page.subscribe},preloading:{subscribe:dn.preloading.subscribe},session:dn.session},e.level0={props:yield ln},e.notify=dn.page.notify,an=new ke({target:$n,props:e,hydrate:!0})),un=t,pn=JSON.stringify(n.query),fn=!0,mn=!1}))}function _n(t){return Ue(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!ln){const t=()=>({});ln=sn.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},hn)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;c=yield Promise.all(e.parts.map(((e,c)=>Ue(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==pn)return!0;const o=un[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,l,o)&&(f=!0),s.segments[i]=r[c+1],!e)return{segment:u};const p=i++;if(!mn&&!f&&un[c]&&un[c].part===e.i)return un[c];f=!1;const{default:d,preload:h}=yield Je[e.i].js();let m;return m=fn||!sn.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},hn):{}:sn.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:u,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}dn.session.subscribe((t=>Ue(void 0,void 0,void 0,(function*(){if(hn=t,!fn)return;mn=!0;const e=ze(new URL(location.href)),n=cn={},{redirect:r,props:o,branch:s}=yield _n(e);n===cn&&(r?yield on(r.location,{replaceState:!0}):yield bn(s,o,gn(o,e.page)))}))));const vn=()=>L($t);var xn,En,Sn;xn={target:document.querySelector("#sapper")},En=xn.target,$n=En,Sn=sn.baseUrl,He=Sn,Ke=yn,"scrollRestoration"in De&&(De.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{De.scrollRestoration="auto"})),addEventListener("load",(()=>{De.scrollRestoration="manual"})),addEventListener("click",Ge),addEventListener("popstate",Xe),addEventListener("touchstart",nn),addEventListener("mousemove",rn),sn.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:a}=sn;ln||(ln=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:ln},level1:{props:{status:s,error:a},component:Ne},segments:o},i=Ye(n);bn([],c,{host:t,path:e,query:i,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;De.replaceState({id:Fe},"",e);const n=ze(new URL(location.href));if(n)return Qe(n,Fe,!0,t)}));export{P as $,k as A,ge as B,jt as C,h as D,Yt as E,oe as F,Kt as G,Pt as H,w as I,_ as J,Q as K,Z as L,ie as M,ne as N,Vt as O,Ht as P,re as Q,Mt as R,dt as S,Ft as T,$ as U,i as V,f as W,b as X,he as Y,$e as Z,ce as _,y as a,rt as a0,o as a1,nt as a2,J as a3,R as a4,mt as a5,L as a6,c as a7,It as a8,Ct as a9,Ot as aa,x as b,E as c,S as d,m as e,d as f,j as g,v as h,pt as i,At as j,wt as k,Nt as l,St as m,N as n,p as o,u as p,t as q,gt as r,a as s,g as t,ct as u,it as v,lt as w,tt as x,et as y,ft as z};

import __inject_styles from './inject_styles.5607aec6.js';