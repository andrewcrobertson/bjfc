import{_ as t,a as n,b as r,c as e,i as a,s,d as i,S as o,f as c,A as u,g as f,h as l,j as v,B as h,m as p,l as m,n as d,v as y,C as $,w as g,D as x,E as b,F as w,G as R,M as j,W as T,t as E,k as N,X as D,O as P,P as I,Y as S,Q as k,Z as W,y as A,$ as M,z as C,H as O}from"./client.6ca74208.js";import{d as F,a as L,i as V,f as B,c as _,b as z,n as G,h as H,j as Q,m as U,o as X,l as Y,_ as Z,t as q}from"./trimEnd.4584433f.js";import{l as J,a as K,b as tt,n as nt,k as rt,o as et,A as at,h as st}from"./theme.c6b93ca3.js";import{S as it}from"./index.f0cdea38.js";import"./index.9dc9987a.js";import{P as ot}from"./index.69a57a6b.js";var ct=function(){return F.Date.now()},ut=/^\s+|\s+$/g,ft=/^[-+]0x[0-9a-f]+$/i,lt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,ht=parseInt;var pt=function(t){if("number"==typeof t)return t;if(L(t))return NaN;if(J(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=J(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ut,"");var r=lt.test(t);return r||vt.test(t)?ht(t.slice(2),r?2:8):ft.test(t)?NaN:+t},mt=Math.max,dt=Math.min;var yt=function(t,n,r){var e,a,s,i,o,c,u=0,f=!1,l=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var r=e,s=a;return e=a=void 0,u=n,i=t.apply(s,r)}function p(t){return u=t,o=setTimeout(d,n),f?h(t):i}function m(t){var r=t-c;return void 0===c||r>=n||r<0||l&&t-u>=s}function d(){var t=ct();if(m(t))return y(t);o=setTimeout(d,function(t){var r=n-(t-c);return l?dt(r,s-(t-u)):r}(t))}function y(t){return o=void 0,v&&e?h(t):(e=a=void 0,i)}function $(){var t=ct(),r=m(t);if(e=arguments,a=this,c=t,r){if(void 0===o)return p(c);if(l)return clearTimeout(o),o=setTimeout(d,n),h(c)}return void 0===o&&(o=setTimeout(d,n)),i}return n=pt(n)||0,J(r)&&(f=!!r.leading,s=(l="maxWait"in r)?mt(pt(r.maxWait)||0,n):s,v="trailing"in r?!!r.trailing:v),$.cancel=function(){void 0!==o&&clearTimeout(o),u=0,e=c=a=o=void 0},$.flush=function(){return void 0===o?i:y(ct())},$};var $t=function(t,n){var r=[];return K(t,(function(t,e,a){n(t,e,a)&&r.push(t)})),r};var gt=function(t,n){return(V(t)?nt:$t)(t,tt(n))};var xt=function(t){return"string"==typeof t||!V(t)&&B(t)&&"[object String]"==_(t)};var bt=function(t){return t?Infinity===(t=pt(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var wt=function(t){var n=bt(t),r=n%1;return n==n?r?n-r:n:0};var Rt=function(t,n){return z(n,(function(n){return t[n]}))};var jt=function(t){return null==t?[]:Rt(t,rt(t))},Tt=Math.max;var Et=function(t,n,r,e){t=et(t)?t:jt(t),r=r&&!e?wt(r):0;var a=t.length;return r<0&&(r=Tt(a+r,0)),xt(t)?r<=a&&t.indexOf(n,r)>-1:!!a&&G(t,n,r)>-1};var Nt=function(t){return H(t).toLowerCase()};var Dt=function(t,n){for(var r=-1,e=t.length;++r<e&&G(n,t[r],0)>-1;);return r},Pt=/^\s+|\s+$/g;var It=function(t,n,r){if((t=H(t))&&(r||void 0===n))return t.replace(Pt,"");if(!t||!(n=Q(n)))return t;var e=U(t),a=U(n),s=Dt(e,a),i=X(e,a)+1;return Y(e,s,i).join("")};function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var i=n(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return r(this,a)}}function kt(t){var n,r,e,a,s,i,o,j,T;return r=new at({props:{colour:t[6],initials:t[2],text:t[3]}}),s=new it({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",status:t[4],text:t[1].statusInfo}}),o=new ot({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",text:t[1].guardians}}),{c:function(){n=c("a"),u(r.$$.fragment),e=f(),a=c("span"),u(s.$$.fragment),i=f(),u(o.$$.fragment),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0});var c=v(n);h(r.$$.fragment,c),e=p(c),a=l(c,"SPAN",{class:!0});var u=v(a);h(s.$$.fragment,u),i=p(u),h(o.$$.fragment,u),u.forEach(m),c.forEach(m),this.h()},h:function(){d(a,"class","flex flex-col text-sm space-y-1"),d(n,"class",j=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),d(n,"href",t[5])},m:function(t,c){y(t,n,c),$(r,n,null),g(n,e),g(n,a),$(s,a,null),g(a,i),$(o,a,null),T=!0},p:function(t,r){var e=x(r,1)[0],a={};2&e&&(a.text=t[1].statusInfo),s.$set(a);var i={};2&e&&(i.text=t[1].guardians),o.$set(i),(!T||1&e&&j!==(j=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&d(n,"class",j)},i:function(t){T||(b(r.$$.fragment,t),b(s.$$.fragment,t),b(o.$$.fragment,t),T=!0)},o:function(t){w(r.$$.fragment,t),w(s.$$.fragment,t),w(o.$$.fragment,t),T=!1},d:function(t){t&&m(n),R(r),R(s),R(o)}}}function Wt(t,n,r){var e,a=n.class,s=void 0===a?"":a,i=n.player,o=i.initials,c="".concat(i.lastName,", ").concat(i.firstName),u=i.status,f=j(i.footyWebNumber),l=null!==(e=st[i.gender])&&void 0!==e?e:"gray";return t.$$set=function(t){"class"in t&&r(0,s=t.class),"player"in t&&r(1,i=t.player)},[s,i,o,c,u,f,l]}var At=function(n){t(c,o);var r=St(c);function c(t){var n;return e(this,c),n=r.call(this),a(i(n),t,Wt,kt,s,{class:0,player:1}),n}return c}();function Mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var i=n(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return r(this,a)}}function Ct(t,n,r){var e=t.slice();return e[6]=n[r],e[8]=r,e}function Ot(t){var n,r;return{c:function(){n=c("p"),r=E("No players match your current search"),this.h()},l:function(t){n=l(t,"P",{class:!0});var e=v(n);r=N(e,"No players match your current search"),e.forEach(m),this.h()},h:function(){d(n,"class","text-sm p-4")},m:function(t,e){y(t,n,e),g(n,r)},d:function(t){t&&m(n)}}}function Ft(t,n){var r,e,a;return e=new At({props:{class:"w-full "+(0===n[8]?"border-t":"")+" border-r border-b border-l border-gray-300",player:n[6]}}),{key:t,first:null,c:function(){r=T(),u(e.$$.fragment),this.h()},l:function(t){r=T(),h(e.$$.fragment,t),this.h()},h:function(){this.first=r},m:function(t,n){y(t,r,n),$(e,t,n),a=!0},p:function(t,n){var r={};2&n&&(r.class="w-full "+(0===t[8]?"border-t":"")+" border-r border-b border-l border-gray-300"),2&n&&(r.player=t[6]),e.$set(r)},i:function(t){a||(b(e.$$.fragment,t),a=!0)},o:function(t){w(e.$$.fragment,t),a=!1},d:function(t){t&&m(r),R(e,t)}}}function Lt(t){for(var n,r,e,a,s,i,o,u,h,$,R,j=[],T=new Map,A=t[1],C=function(t){return t[6].footyWebNumber},O=0;O<A.length;O+=1){var F=Ct(t,A,O),L=C(F);T.set(L,j[O]=Ft(L,F))}var V=null;return A.length||(V=Ot()),{c:function(){n=c("div"),r=c("div"),e=c("label"),a=E("Find Players"),s=f(),i=c("input"),o=f(),u=c("div");for(var t=0;t<j.length;t+=1)j[t].c();V&&V.c(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var c=v(n);r=l(c,"DIV",{class:!0});var f=v(r);e=l(f,"LABEL",{class:!0,for:!0});var h=v(e);a=N(h,"Find Players"),h.forEach(m),s=p(f),i=l(f,"INPUT",{class:!0,type:!0,name:!0,id:!0}),f.forEach(m),o=p(c),u=l(c,"DIV",{class:!0});for(var d=v(u),y=0;y<j.length;y+=1)j[y].l(d);V&&V.l(d),d.forEach(m),c.forEach(m),this.h()},h:function(){d(e,"class","text-lg text-grey-darkest"),d(e,"for","searchTerm"),d(i,"class","border text-grey-darkest py-2 px-3"),d(i,"type","text"),d(i,"name","searchTerm"),d(i,"id","searchTerm"),d(r,"class","flex flex-col mb-4"),d(u,"class","flex flex-wrap"),d(n,"class","container mx-auto xl:py-10")},m:function(c,f){y(c,n,f),g(n,r),g(r,e),g(e,a),g(r,s),g(r,i),D(i,t[0]),g(n,o),g(n,u);for(var l=0;l<j.length;l+=1)j[l].m(u,null);V&&V.m(u,null),h=!0,$||(R=[P(i,"input",t[4]),P(i,"input",t[2])],$=!0)},p:function(t,n){var r=x(n,1)[0];if(1&r&&i.value!==t[0]&&D(i,t[0]),2&r){var e=t[1];I(),j=S(j,r,C,1,t,e,T,u,M,Ft,null,Ct),k(),e.length?V&&(V.d(1),V=null):V||((V=Ot()).c(),V.m(u,null))}},i:function(t){if(!h){for(var n=0;n<A.length;n+=1)b(j[n]);h=!0}},o:function(t){for(var n=0;n<j.length;n+=1)w(j[n]);h=!1},d:function(t){t&&m(n);for(var r=0;r<j.length;r+=1)j[r].d();V&&V.d(),$=!1,W(R)}}}function Vt(t,n,r){var e=n.state,a="",s=[],i=yt((function(){return r(1,(t=Nt(It(a)),s=t.length<2?[]:gt(e.players,(function(n){var r=n.searchTerms;return Et(r,t)}))));var t}),250,{maxWait:1e3});return A.set("Search"),t.$$set=function(t){"state"in t&&r(3,e=t.state)},[a,s,i,e,function(){a=this.value,r(0,a)}]}var Bt=function(n){t(c,o);var r=Mt(c);function c(t){var n;return e(this,c),n=r.call(this),a(i(n),t,Vt,Lt,s,{state:3}),n}return c}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var i=n(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return r(this,a)}}function zt(t){var n,r;return n=new Bt({props:{state:t[0]}}),{c:function(){u(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,e){$(n,t,e),r=!0},p:function(t,r){var e={};1&x(r,1)[0]&&(e.state=t[0]),n.$set(e)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){w(n.$$.fragment,t),r=!1},d:function(t){R(n,t)}}}function Gt(t,n){return Ht.apply(this,arguments)}function Ht(){return(Ht=Z(C.mark((function t(n,r){var e,a;return C.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("".concat(q(n.path,"/")).concat("/"===n.path?"index":"",".json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",{state:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Qt(t,n,r){var e=n.state,a=void 0===e?null:e;return O((function(){return window.scrollTo(0,0)})),t.$$set=function(t){"state"in t&&r(0,a=t.state)},[a]}var Ut=function(n){t(c,o);var r=_t(c);function c(t){var n;return e(this,c),n=r.call(this),a(i(n),t,Qt,zt,s,{state:0}),n}return c}();export default Ut;export{Gt as preload};
