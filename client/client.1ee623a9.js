function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function y(){return $("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?m(e):h(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function w(t){return _(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n){t.classList[n?"add":"remove"](e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function R(t){N=t}function j(){if(!N)throw new Error("Function called outside component initialization");return N}function P(){const t=j();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const T=[],k=[],L=[],O=[],B=Promise.resolve();let J=!1;function I(t){L.push(t)}function U(t){O.push(t)}let q=!1;const F=new Set;function M(){if(!q){q=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];R(e),V(e.$$)}for(R(null),T.length=0;k.length;)k.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];F.has(e)||(F.add(e),e())}L.length=0}while(T.length);for(;O.length;)O.pop()();J=!1,q=!1,F.clear()}}function V(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const D=new Set;let K;function z(){K={r:0,c:[],p:K}}function H(){K.r||o(K.c),K=K.p}function Y(t,e){t&&t.i&&(D.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),K.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Q(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),I((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(I)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(T.push(t),J||(J=!0,B.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,c,a,i,l=[-1]){const u=N;R(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&rt(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=x(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),M()}R(u)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function at(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!ct.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const it={};function lt(e){let n,r,o;return{c(){n=m("svg"),r=m("text"),o=$("BJFC"),this.h()},l(t){n=E(t,"svg",{width:!0,height:!0},1);var e=x(n);r=E(e,"text",{x:!0,y:!0,class:!0},1);var s=x(r);o=_(s,"BJFC"),s.forEach(p),e.forEach(p),this.h()},h(){b(r,"x","0"),b(r,"y","20"),b(r,"class","svelte-1ycr1lm"),b(n,"width","auto"),b(n,"height","30")},m(t,e){f(t,n,e),u(n,r),u(r,o)},p:t,i:t,o:t,d(t){t&&p(n)}}}class ut extends st{constructor(t){super(),ot(this,t,null,lt,c,{})}}function ft(e){let n,r,o,s,c,a,i;return{c(){n=h("button"),r=m("svg"),o=m("line"),s=m("line"),c=m("line"),this.h()},l(t){n=E(t,"BUTTON",{class:!0});var e=x(n);r=E(e,"svg",{width:!0,height:!0,class:!0},1);var a=x(r);o=E(a,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(o).forEach(p),s=E(a,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(s).forEach(p),c=E(a,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),x(c).forEach(p),a.forEach(p),e.forEach(p),this.h()},h(){b(o,"id","top"),b(o,"x1","0"),b(o,"y1","2"),b(o,"x2","32"),b(o,"y2","2"),b(o,"class","svelte-1gn2oj1"),b(s,"id","middle"),b(s,"x1","0"),b(s,"y1","12"),b(s,"x2","24"),b(s,"y2","12"),b(s,"class","svelte-1gn2oj1"),b(c,"id","bottom"),b(c,"x1","0"),b(c,"y1","22"),b(c,"x2","32"),b(c,"y2","22"),b(c,"class","svelte-1gn2oj1"),b(r,"width","32"),b(r,"height","24"),b(r,"class","svelte-1gn2oj1"),b(n,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-1gn2oj1"),A(n,"open",e[0])},m(t,l){f(t,n,l),u(n,r),u(r,o),u(r,s),u(r,c),a||(i=v(n,"click",e[1]),a=!0)},p(t,[e]){1&e&&A(n,"open",t[0])},i:t,o:t,d(t){t&&p(n),a=!1,i()}}}function pt(t,e,n){let{open:r=!1}=e;return t.$$set=t=>{"open"in t&&n(0,r=t.open)},[r,()=>n(0,r=!r)]}class dt extends st{constructor(t){super(),ot(this,t,pt,ft,c,{open:0})}}function ht(t){let e,n,r,o,s,c,a;function i(e){t[1].call(null,e)}let l={};return void 0!==t[0]&&(l.open=t[0]),r=new dt({props:l}),k.push((()=>Q(r,"open",i))),c=new ut({}),{c(){e=h("header"),n=h("nav"),Z(r.$$.fragment),s=g(),Z(c.$$.fragment),this.h()},l(t){e=E(t,"HEADER",{class:!0});var o=x(e);n=E(o,"NAV",{class:!0});var a=x(n);tt(r.$$.fragment,a),s=w(a),tt(c.$$.fragment,a),a.forEach(p),o.forEach(p),this.h()},h(){b(n,"class","flex"),b(e,"class","flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2")},m(t,o){f(t,e,o),u(e,n),et(r,n,null),u(n,s),et(c,n,null),a=!0},p(t,[e]){const n={};!o&&1&e&&(o=!0,n.open=t[0],U((()=>o=!1))),r.$set(n)},i(t){a||(Y(r.$$.fragment,t),Y(c.$$.fragment,t),a=!0)},o(t){G(r.$$.fragment,t),G(c.$$.fragment,t),a=!1},d(t){t&&p(e),nt(r),nt(c)}}}function mt(t,e,n){let{sidebar:r=!1}=e;return t.$$set=t=>{"sidebar"in t&&n(0,r=t.sidebar)},[r,function(t){r=t,n(0,r)}]}class $t extends st{constructor(t){super(),ot(this,t,mt,ht,c,{sidebar:0})}}function gt(e){let n,r,o,s,c,a;return{c(){n=h("aside"),r=h("nav"),o=h("a"),s=$("Team List"),this.h()},l(t){n=E(t,"ASIDE",{class:!0});var e=x(n);r=E(e,"NAV",{class:!0});var c=x(r);o=E(c,"A",{class:!0,href:!0});var a=x(o);s=_(a,"Team List"),a.forEach(p),c.forEach(p),e.forEach(p),this.h()},h(){b(o,"class","block"),b(o,"href","/"),b(r,"class","p-12 text-xl"),b(n,"class","absolute w-4/5 h-full bg-gray-200 border-r-2 shadow-lg svelte-12d18ho"),A(n,"open",e[0])},m(t,i){f(t,n,i),u(n,r),u(r,o),u(o,s),c||(a=v(o,"click",e[1]),c=!0)},p(t,[e]){1&e&&A(n,"open",t[0])},i:t,o:t,d(t){t&&p(n),c=!1,a()}}}function yt(t,e,n){let{open:r=!1}=e;return t.$$set=t=>{"open"in t&&n(0,r=t.open)},[r,()=>n(0,r=!1)]}class vt extends st{constructor(t){super(),ot(this,t,yt,gt,c,{open:0})}}var bt=2021;function xt(t){let e,n,r,o,s,c,i,d,m,y,v,S,A,C,N=bt+"";function R(e){t[3].call(null,e)}let j={};function P(e){t[4].call(null,e)}void 0!==t[0]&&(j.open=t[0]),n=new vt({props:j}),k.push((()=>Q(n,"open",R)));let T={};void 0!==t[0]&&(T.sidebar=t[0]),s=new $t({props:T}),k.push((()=>Q(s,"sidebar",P)));const L=t[2].default,O=a(L,t,t[1],null);return{c(){e=h("div"),Z(n.$$.fragment),o=g(),Z(s.$$.fragment),i=g(),d=h("div"),O&&O.c(),m=g(),y=h("footer"),v=$("BJFC "),S=$(N),A=$(" Season"),this.h()},l(t){e=E(t,"DIV",{class:!0});var r=x(e);tt(n.$$.fragment,r),o=w(r),tt(s.$$.fragment,r),i=w(r),d=E(r,"DIV",{class:!0});var c=x(d);O&&O.l(c),c.forEach(p),m=w(r),y=E(r,"FOOTER",{class:!0});var a=x(y);v=_(a,"BJFC "),S=_(a,N),A=_(a," Season"),a.forEach(p),r.forEach(p),this.h()},h(){b(d,"class","flex-1 overflow-y-auto p-5"),b(y,"class","py-5 px-2 bg-gray-200"),b(e,"class","flex flex-col h-screen")},m(t,r){f(t,e,r),et(n,e,null),u(e,o),et(s,e,null),u(e,i),u(e,d),O&&O.m(d,null),u(e,m),u(e,y),u(y,v),u(y,S),u(y,A),C=!0},p(t,[e]){const o={};!r&&1&e&&(r=!0,o.open=t[0],U((()=>r=!1))),n.$set(o);const a={};!c&&1&e&&(c=!0,a.sidebar=t[0],U((()=>c=!1))),s.$set(a),O&&O.p&&2&e&&l(O,L,t,t[1],e,null,null)},i(t){C||(Y(n.$$.fragment,t),Y(s.$$.fragment,t),Y(O,t),C=!0)},o(t){G(n.$$.fragment,t),G(s.$$.fragment,t),G(O,t),C=!1},d(t){t&&p(e),nt(n),nt(s),O&&O.d(t)}}}function Et(t,e,n){let{$$slots:r={},$$scope:o}=e,s=!1;return t.$$set=t=>{"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r,function(t){s=t,n(0,s)},function(t){s=t,n(0,s)}]}class _t extends st{constructor(t){super(),ot(this,t,Et,xt,c,{})}}function wt(t){let e;const n=t[0].default,r=a(n,t,t[1],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&2&e&&l(r,n,t,t[1],e,null,null)},i(t){e||(Y(r,t),e=!0)},o(t){G(r,t),e=!1},d(t){r&&r.d(t)}}}function St(t){let e,n,r,o,s,c,a;return c=new _t({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){e=h("meta"),n=h("meta"),r=h("meta"),o=h("meta"),s=g(),Z(c.$$.fragment),this.h()},l(t){const a=C('[data-svelte="svelte-1otneoc"]',document.head);e=E(a,"META",{name:!0,content:!0}),n=E(a,"META",{name:!0,content:!0}),r=E(a,"META",{name:!0,content:!0}),o=E(a,"META",{name:!0,content:!0}),a.forEach(p),s=w(t),tt(c.$$.fragment,t),this.h()},h(){b(e,"name","author"),b(e,"content","Tykto"),b(n,"name","description"),b(n,"content","BJFC"),b(r,"name","keywords"),b(r,"content","BJFC"),b(o,"name","robots"),b(o,"content","index, follow"),document.title="BJFC"},m(t,i){u(document.head,e),u(document.head,n),u(document.head,r),u(document.head,o),f(t,s,i),et(c,t,i),a=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){a||(Y(c.$$.fragment,t),a=!0)},o(t){G(c.$$.fragment,t),a=!1},d(t){p(e),p(n),p(r),p(o),t&&p(s),nt(c,t)}}}function At(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(1,o=t.$$scope)},[r,o]}class Ct extends st{constructor(t){super(),ot(this,t,At,St,c,{})}}function Nt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=$(r)},l(t){e=E(t,"PRE",{});var o=x(e);n=_(o,r),o.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function Rt(e){let n,r,o,s,c,a,i,l,d,m=e[1].message+"";document.title=n=e[0];let v=e[2]&&e[1].stack&&Nt(e);return{c(){r=g(),o=h("h1"),s=$(e[0]),c=g(),a=h("p"),i=$(m),l=g(),v&&v.c(),d=y(),this.h()},l(t){C('[data-svelte="svelte-1moakz"]',document.head).forEach(p),r=w(t),o=E(t,"H1",{class:!0});var n=x(o);s=_(n,e[0]),n.forEach(p),c=w(t),a=E(t,"P",{class:!0});var u=x(a);i=_(u,m),u.forEach(p),l=w(t),v&&v.l(t),d=y(),this.h()},h(){b(o,"class","svelte-17w3omn"),b(a,"class","svelte-17w3omn")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,c,e),f(t,a,e),u(a,i),f(t,l,e),v&&v.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&m!==(m=t[1].message+"")&&S(i,m),t[2]&&t[1].stack?v?v.p(t,e):(v=Nt(t),v.c(),v.m(d.parentNode,d)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(c),t&&p(a),t&&p(l),v&&v.d(t),t&&p(d)}}}function jt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Pt extends st{constructor(t){super(),ot(this,t,jt,Rt,c,{status:0,error:1})}}function Tt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Z(n.$$.fragment),r=y()},l(t){n&&tt(n.$$.fragment,t),r=y()},m(t,e){n&&et(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?W(s,[X(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){z();const t=n;G(t.$$.fragment,1,0,(()=>{nt(t,1)})),H()}c?(n=new c(a()),Z(n.$$.fragment),Y(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&Y(n.$$.fragment,t),o=!0)},o(t){n&&G(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&nt(n,t)}}}function kt(t){let e,n;return e=new Pt({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Lt(t){let e,n,r,o;const s=[kt,Tt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(z(),G(c[i],1,1,(()=>{c[i]=null})),H(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){G(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function Ot(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Lt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new Ct({props:s}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?W(o,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function Bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,j().$$.after_update.push(u),f=it,p=r,j().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class Jt extends st{constructor(t){super(),ot(this,t,Bt,Ot,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const It=[],Ut=[{js:()=>Promise.all([import("./index.cebd1e63.js"),__inject_styles(["client-0545dbaf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.9e5cb6a7.js"),__inject_styles(["client-0545dbaf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.5374cb9c.js"),__inject_styles(["client-0545dbaf.css"])]).then((function(t){return t[0]}))}],qt=(Ft=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/members\/([^/]+?)\/?$/,parts:[null,{i:1,params:t=>({code:Ft(t[1])})}]},{pattern:/^\/teams\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({code:Ft(t[1])})}]}]);var Ft;
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
function Mt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function Vt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Dt,Kt=1;const zt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ht={};let Yt,Gt;function Wt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Yt))return null;let e=t.pathname.slice(Yt.length);if(""===e&&(e="/"),!It.some((t=>t.test(e))))for(let n=0;n<qt.length;n+=1){const r=qt[n],o=r.pattern.exec(e);if(o){const n=Wt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Vt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Xt(o);if(s){ee(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),zt.pushState({id:Dt},"",o.href)}}function Zt(){return{x:pageXOffset,y:pageYOffset}}function te(t){if(Ht[Dt]=Zt(),t.state){const e=Xt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else Kt=Kt+1,function(t){Dt=t}(Kt),zt.replaceState({id:Dt},"",location.href)}function ee(t,e,n,r){return Mt(this,void 0,void 0,(function*(){const o=!!e;if(o)Dt=e;else{const t=Zt();Ht[Dt]=t,Dt=e=++Kt,Ht[Dt]=n?t:{x:0,y:0}}if(yield Gt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ht[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ht[Dt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ne(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let re,oe=null;function se(t){const e=Vt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Xt(new URL(t,ne(document)));if(e)oe&&t===oe.href||(oe={href:t,promise:Ee(e)}),oe.promise}(e.href)}function ce(t){clearTimeout(re),re=setTimeout((()=>{se(t)}),20)}function ae(t,e={noscroll:!1,replaceState:!1}){const n=Xt(new URL(t,ne(document)));return n?(zt[e.replaceState?"replaceState":"pushState"]({id:Dt},"",t),ee(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const ie="undefined"!=typeof __SAPPER__&&__SAPPER__;let le,ue,fe,pe=!1,de=[],he="{}";const me={page:function(t){const e=at(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:at(null),session:at(ie&&ie.session)};let $e,ge,ye;function ve(t,e){const{error:n}=t;return Object.assign({error:n},e)}function be(t){return Mt(this,void 0,void 0,(function*(){le&&me.preloading.set(!0);const e=function(t){return oe&&oe.href===t.href?oe.promise:Ee(t)}(t),n=ue={},r=yield e,{redirect:o}=r;if(n===ue)if(o)yield ae(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield xe(n,e,ve(e,t.page))}}))}function xe(t,e,n){return Mt(this,void 0,void 0,(function*(){me.page.set(n),me.preloading.set(!1),le?le.$set(e):(e.stores={page:{subscribe:me.page.subscribe},preloading:{subscribe:me.preloading.subscribe},session:me.session},e.level0={props:yield fe},e.notify=me.page.notify,le=new Jt({target:ye,props:e,hydrate:!0})),de=t,he=JSON.stringify(n.query),pe=!0,ge=!1}))}function Ee(t){return Mt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!fe){const t=()=>({});fe=ie.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},$e)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>Mt(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==he)return!0;const o=de[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!ge&&!u&&de[a]&&de[a].part===e.i)return de[a];u=!1;const{default:d,preload:h}=yield Ut[e.i].js();let m;return m=pe||!ie.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},$e):{}:ie.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var _e,we,Se;me.session.subscribe((t=>Mt(void 0,void 0,void 0,(function*(){if($e=t,!pe)return;ge=!0;const e=Xt(new URL(location.href)),n=ue={},{redirect:r,props:o,branch:s}=yield Ee(e);n===ue&&(r?yield ae(r.location,{replaceState:!0}):yield xe(s,o,ve(o,e.page)))})))),_e={target:document.querySelector("#sapper")},we=_e.target,ye=we,Se=ie.baseUrl,Yt=Se,Gt=be,"scrollRestoration"in zt&&(zt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{zt.scrollRestoration="auto"})),addEventListener("load",(()=>{zt.scrollRestoration="manual"})),addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",se),addEventListener("mousemove",ce),ie.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=ie;fe||(fe=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:fe},level1:{props:{status:s,error:c},component:Pt},segments:o},i=Wt(n);xe([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;zt.replaceState({id:Kt},"",e);const n=Xt(new URL(location.href));if(n)return ee(n,Kt,!0,t)}));export{v as A,P as B,st as S,m as a,x as b,E as c,p as d,b as e,f,u as g,h,ot as i,g as j,_ as k,w as l,S as m,t as n,Z as o,tt as p,et as q,Y as r,c as s,$ as t,G as u,nt as v,z as w,H as x,d as y,y as z};

import __inject_styles from './inject_styles.5607aec6.js';