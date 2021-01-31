import{Y as t,a6 as n,W as r,N as e,$ as a,X as s,P as o,a7 as c,I as i,J as u,_ as f,a as l,b as h,c as v,i as p,s as m,d,S as y,f as $,A as g,g as x,h as b,j as w,B as R,m as j,l as T,n as E,v as D,C as P,w as N,D as S,E as I,F as k,G as W,Q as A,a5 as C,t as M,k as V,a8 as F,T as L,U as B,a9 as U,V as _,aa as z,y as G,ab as H,z as J,H as O}from"./client.336f3954.js";import{d as Q,c as X,e as Y,b as q,_ as K,t as Z}from"./trimEnd.ed27b6af.js";import{a as tt,b as nt,h as rt,k as et,l as at,A as st}from"./index.b6fa924a.js";import{b as ot}from"./theme.408c48a4.js";import{S as ct}from"./index.b62fa73a.js";import"./index.93d44f56.js";import{P as it}from"./index.e2872ba0.js";var ut=function(){return t.Date.now()},ft=Math.max,lt=Math.min;var ht=function(t,e,a){var s,o,c,i,u,f,l=0,h=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var r=s,e=o;return s=o=void 0,l=n,i=t.apply(e,r)}function d(t){return l=t,u=setTimeout($,e),h?m(t):i}function y(t){var n=t-f;return void 0===f||n>=e||n<0||v&&t-l>=c}function $(){var t=ut();if(y(t))return g(t);u=setTimeout($,function(t){var n=e-(t-f);return v?lt(n,c-(t-l)):n}(t))}function g(t){return u=void 0,p&&s?m(t):(s=o=void 0,i)}function x(){var t=ut(),n=y(t);if(s=arguments,o=this,f=t,n){if(void 0===u)return d(f);if(v)return clearTimeout(u),u=setTimeout($,e),m(f)}return void 0===u&&(u=setTimeout($,e)),i}return e=n(e)||0,r(a)&&(h=!!a.leading,c=(v="maxWait"in a)?ft(n(a.maxWait)||0,e):c,p="trailing"in a?!!a.trailing:p),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,s=f=o=u=void 0},x.flush=function(){return void 0===u?i:g(ut())},x};var vt=function(t,n){var r=[];return tt(t,(function(t,e,a){n(t,e,a)&&r.push(t)})),r};var pt=function(t,n){return(e(t)?rt:vt)(t,nt(n))};var mt=function(t){return"string"==typeof t||!e(t)&&a(t)&&"[object String]"==s(t)};var dt=function(t,n){return o(n,(function(n){return t[n]}))};var yt=function(t){return null==t?[]:dt(t,et(t))},$t=Math.max;var gt=function(t,n,r,e){t=at(t)?t:yt(t),r=r&&!e?c(r):0;var a=t.length;return r<0&&(r=$t(a+r,0)),mt(t)?r<=a&&t.indexOf(n,r)>-1:!!a&&Q(t,n,r)>-1};var xt=function(t){return i(t).toLowerCase()};var bt=function(t,n){for(var r=-1,e=t.length;++r<e&&Q(n,t[r],0)>-1;);return r},wt=/^\s+|\s+$/g;var Rt=function(t,n,r){if((t=i(t))&&(r||void 0===n))return t.replace(wt,"");if(!t||!(n=u(n)))return t;var e=X(t),a=X(n),s=bt(e,a),o=Y(e,a)+1;return q(e,s,o).join("")};function jt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=l(t);if(n){var a=l(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return h(this,r)}}function Tt(t){var n,r,e,a,s,o,c,i,u;return r=new st({props:{colour:t[6],initials:t[2],text:t[3]}}),s=new ct({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",status:t[4],text:t[1].statusInfo}}),c=new it({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",text:t[1].guardians}}),{c:function(){n=$("a"),g(r.$$.fragment),e=x(),a=$("span"),g(s.$$.fragment),o=x(),g(c.$$.fragment),this.h()},l:function(t){n=b(t,"A",{class:!0,href:!0});var i=w(n);R(r.$$.fragment,i),e=j(i),a=b(i,"SPAN",{class:!0});var u=w(a);R(s.$$.fragment,u),o=j(u),R(c.$$.fragment,u),u.forEach(T),i.forEach(T),this.h()},h:function(){E(a,"class","flex flex-col text-sm space-y-1"),E(n,"class",i=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),E(n,"href",t[5])},m:function(t,i){D(t,n,i),P(r,n,null),N(n,e),N(n,a),P(s,a,null),N(a,o),P(c,a,null),u=!0},p:function(t,r){var e=S(r,1)[0],a={};2&e&&(a.text=t[1].statusInfo),s.$set(a);var o={};2&e&&(o.text=t[1].guardians),c.$set(o),(!u||1&e&&i!==(i=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&E(n,"class",i)},i:function(t){u||(I(r.$$.fragment,t),I(s.$$.fragment,t),I(c.$$.fragment,t),u=!0)},o:function(t){k(r.$$.fragment,t),k(s.$$.fragment,t),k(c.$$.fragment,t),u=!1},d:function(t){t&&T(n),W(r),W(s),W(c)}}}function Et(t,n,r){var e,a=n.class,s=void 0===a?"":a,o=n.player,c=o.initials,i="".concat(o.lastName,", ").concat(o.firstName),u=o.status,f=A(o.footyWebNumber),l=null!==(e=ot[o.gender])&&void 0!==e?e:"gray";return t.$$set=function(t){"class"in t&&r(0,s=t.class),"player"in t&&r(1,o=t.player)},[s,o,c,i,u,f,l]}var Dt=function(t){f(r,y);var n=jt(r);function r(t){var e;return v(this,r),e=n.call(this),p(d(e),t,Et,Tt,m,{class:0,player:1}),e}return r}();function Pt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=l(t);if(n){var a=l(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return h(this,r)}}function Nt(t,n,r){var e=t.slice();return e[6]=n[r],e[8]=r,e}function St(t){var n,r;return{c:function(){n=$("p"),r=M("No players match your current search"),this.h()},l:function(t){n=b(t,"P",{class:!0});var e=w(n);r=V(e,"No players match your current search"),e.forEach(T),this.h()},h:function(){E(n,"class","text-sm p-4")},m:function(t,e){D(t,n,e),N(n,r)},d:function(t){t&&T(n)}}}function It(t,n){var r,e,a;return e=new Dt({props:{class:"w-full "+(0===n[8]?"border-t":"")+" border-r border-b border-l border-gray-300",player:n[6]}}),{key:t,first:null,c:function(){r=C(),g(e.$$.fragment),this.h()},l:function(t){r=C(),R(e.$$.fragment,t),this.h()},h:function(){this.first=r},m:function(t,n){D(t,r,n),P(e,t,n),a=!0},p:function(t,n){var r={};2&n&&(r.class="w-full "+(0===t[8]?"border-t":"")+" border-r border-b border-l border-gray-300"),2&n&&(r.player=t[6]),e.$set(r)},i:function(t){a||(I(e.$$.fragment,t),a=!0)},o:function(t){k(e.$$.fragment,t),a=!1},d:function(t){t&&T(r),W(e,t)}}}function kt(t){for(var n,r,e,a,s,o,c,i,u,f,l,h=[],v=new Map,p=t[1],m=function(t){return t[6].footyWebNumber},d=0;d<p.length;d+=1){var y=Nt(t,p,d),g=m(y);v.set(g,h[d]=It(g,y))}var R=null;return p.length||(R=St()),{c:function(){n=$("div"),r=$("div"),e=$("label"),a=M("Find Players"),s=x(),o=$("input"),c=x(),i=$("div");for(var t=0;t<h.length;t+=1)h[t].c();R&&R.c(),this.h()},l:function(t){n=b(t,"DIV",{class:!0});var u=w(n);r=b(u,"DIV",{class:!0});var f=w(r);e=b(f,"LABEL",{class:!0,for:!0});var l=w(e);a=V(l,"Find Players"),l.forEach(T),s=j(f),o=b(f,"INPUT",{class:!0,type:!0,name:!0,id:!0}),f.forEach(T),c=j(u),i=b(u,"DIV",{class:!0});for(var v=w(i),p=0;p<h.length;p+=1)h[p].l(v);R&&R.l(v),v.forEach(T),u.forEach(T),this.h()},h:function(){E(e,"class","text-lg text-grey-darkest"),E(e,"for","searchTerm"),E(o,"class","border text-grey-darkest py-2 px-3"),E(o,"type","text"),E(o,"name","searchTerm"),E(o,"id","searchTerm"),E(r,"class","flex flex-col mb-4"),E(i,"class","flex flex-wrap"),E(n,"class","container mx-auto xl:py-10")},m:function(v,p){D(v,n,p),N(n,r),N(r,e),N(e,a),N(r,s),N(r,o),F(o,t[0]),N(n,c),N(n,i);for(var m=0;m<h.length;m+=1)h[m].m(i,null);R&&R.m(i,null),u=!0,f||(l=[L(o,"input",t[4]),L(o,"input",t[2])],f=!0)},p:function(t,n){var r=S(n,1)[0];if(1&r&&o.value!==t[0]&&F(o,t[0]),2&r){var e=t[1];B(),h=U(h,r,m,1,t,e,v,i,H,It,null,Nt),_(),e.length?R&&(R.d(1),R=null):R||((R=St()).c(),R.m(i,null))}},i:function(t){if(!u){for(var n=0;n<p.length;n+=1)I(h[n]);u=!0}},o:function(t){for(var n=0;n<h.length;n+=1)k(h[n]);u=!1},d:function(t){t&&T(n);for(var r=0;r<h.length;r+=1)h[r].d();R&&R.d(),f=!1,z(l)}}}function Wt(t,n,r){var e=n.state,a="",s=[],o=ht((function(){return r(1,(t=xt(Rt(a)),s=t.length<2?[]:pt(e.players,(function(n){var r=n.searchTerms;return gt(r,t)}))));var t}),250,{maxWait:1e3});return G.set("Search"),t.$$set=function(t){"state"in t&&r(3,e=t.state)},[a,s,o,e,function(){a=this.value,r(0,a)}]}var At=function(t){f(r,y);var n=Pt(r);function r(t){var e;return v(this,r),e=n.call(this),p(d(e),t,Wt,kt,m,{state:3}),e}return r}();function Ct(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=l(t);if(n){var a=l(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return h(this,r)}}function Mt(t){var n,r;return n=new At({props:{state:t[0]}}),{c:function(){g(n.$$.fragment)},l:function(t){R(n.$$.fragment,t)},m:function(t,e){P(n,t,e),r=!0},p:function(t,r){var e={};1&S(r,1)[0]&&(e.state=t[0]),n.$set(e)},i:function(t){r||(I(n.$$.fragment,t),r=!0)},o:function(t){k(n.$$.fragment,t),r=!1},d:function(t){W(n,t)}}}function Vt(t,n){return Ft.apply(this,arguments)}function Ft(){return(Ft=K(J.mark((function t(n,r){var e,a;return J.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("".concat(Z(n.path,"/")).concat("/"===n.path?"index":"",".json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",{state:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Lt(t,n,r){var e=n.state,a=void 0===e?null:e;return O((function(){return window.scrollTo(0,0)})),t.$$set=function(t){"state"in t&&r(0,a=t.state)},[a]}var Bt=function(t){f(r,y);var n=Ct(r);function r(t){var e;return v(this,r),e=n.call(this),p(d(e),t,Lt,Mt,m,{state:0}),e}return r}();export default Bt;export{Vt as preload};
