import{O as t,Y as e,M as r,E as a,Q as s,N as n,G as o,Z as l,B as i,_ as c,S as f,i as u,s as m,e as h,u as p,a as d,c as $,b as g,v,g as x,f as y,h as b,o as w,w as j,p as T,x as E,y as N,z as I,H as P,X as A,t as M,d as S,$ as W,J as k,K as D,a0 as L,L as C,a1 as V,r as B,a2 as F,A as O}from"./client.b61fbb49.js";import{c as z,b as G,d as H,a as J,t as K}from"./trimEnd.964240f7.js";import{a as Q,b as U,j as X,k as Y,l as Z,A as _,h as q}from"./theme.1302b6c6.js";import"./join.22ae3f0e.js";import{S as R}from"./index.befcd4c4.js";import"./index.fed45c8c.js";import{P as tt}from"./index.53a1f36c.js";var et=function(){return t.Date.now()},rt=Math.max,at=Math.min;var st=function(t,a,s){var n,o,l,i,c,f,u=0,m=!1,h=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var r=n,a=o;return n=o=void 0,u=e,i=t.apply(a,r)}function $(t){return u=t,c=setTimeout(v,a),m?d(t):i}function g(t){var e=t-f;return void 0===f||e>=a||e<0||h&&t-u>=l}function v(){var t=et();if(g(t))return x(t);c=setTimeout(v,function(t){var e=a-(t-f);return h?at(e,l-(t-u)):e}(t))}function x(t){return c=void 0,p&&n?d(t):(n=o=void 0,i)}function y(){var t=et(),e=g(t);if(n=arguments,o=this,f=t,e){if(void 0===c)return $(f);if(h)return clearTimeout(c),c=setTimeout(v,a),d(f)}return void 0===c&&(c=setTimeout(v,a)),i}return a=e(a)||0,r(s)&&(m=!!s.leading,l=(h="maxWait"in s)?rt(e(s.maxWait)||0,a):l,p="trailing"in s?!!s.trailing:p),y.cancel=function(){void 0!==c&&clearTimeout(c),u=0,n=f=o=c=void 0},y.flush=function(){return void 0===c?i:x(et())},y};var nt=function(t,e){var r=[];return Q(t,(function(t,a,s){e(t,a,s)&&r.push(t)})),r};var ot=function(t,e){return(a(t)?X:nt)(t,U(e))};var lt=function(t){return"string"==typeof t||!a(t)&&s(t)&&"[object String]"==n(t)};var it=function(t,e){return o(e,(function(e){return t[e]}))};var ct=function(t){return null==t?[]:it(t,Y(t))},ft=Math.max;var ut=function(t,e,r,a){t=Z(t)?t:ct(t),r=r&&!a?l(r):0;var s=t.length;return r<0&&(r=ft(s+r,0)),lt(t)?r<=s&&t.indexOf(e,r)>-1:!!s&&z(t,e,r)>-1};var mt=function(t){return i(t).toLowerCase()};var ht=function(t,e){for(var r=-1,a=t.length;++r<a&&z(e,t[r],0)>-1;);return r},pt=/^\s+|\s+$/g;var dt=function(t,e,r){if((t=i(t))&&(r||void 0===e))return t.replace(pt,"");if(!t||!(e=c(e)))return t;var a=G(t),s=G(e),n=ht(a,s),o=H(a,s)+1;return J(a,n,o).join("")};function $t(t){let e,r,a,s,n,o,l,i,c;return r=new _({props:{colour:t[6],initials:t[2],text:t[3]}}),n=new R({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",status:t[4],text:t[1].statusInfo}}),l=new tt({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",text:t[1].guardians}}),{c(){e=h("a"),p(r.$$.fragment),a=d(),s=h("span"),p(n.$$.fragment),o=d(),p(l.$$.fragment),this.h()},l(t){e=$(t,"A",{class:!0,href:!0});var i=g(e);v(r.$$.fragment,i),a=x(i),s=$(i,"SPAN",{class:!0});var c=g(s);v(n.$$.fragment,c),o=x(c),v(l.$$.fragment,c),c.forEach(y),i.forEach(y),this.h()},h(){b(s,"class","flex flex-col text-sm space-y-1"),b(e,"class",i=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),b(e,"href",t[5])},m(t,i){w(t,e,i),j(r,e,null),T(e,a),T(e,s),j(n,s,null),T(s,o),j(l,s,null),c=!0},p(t,[r]){const a={};2&r&&(a.text=t[1].statusInfo),n.$set(a);const s={};2&r&&(s.text=t[1].guardians),l.$set(s),(!c||1&r&&i!==(i=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&b(e,"class",i)},i(t){c||(E(r.$$.fragment,t),E(n.$$.fragment,t),E(l.$$.fragment,t),c=!0)},o(t){N(r.$$.fragment,t),N(n.$$.fragment,t),N(l.$$.fragment,t),c=!1},d(t){t&&y(e),I(r),I(n),I(l)}}}function gt(t,e,r){var a;let{class:s=""}=e,{player:n}=e;const o=n.initials,l=`${n.lastName}, ${n.firstName}`,i=n.status,c=P(n.footyWebNumber),f=null!==(a=q[n.gender])&&void 0!==a?a:"gray";return t.$$set=t=>{"class"in t&&r(0,s=t.class),"player"in t&&r(1,n=t.player)},[s,n,o,l,i,c,f]}class vt extends f{constructor(t){super(),u(this,t,gt,$t,m,{class:0,player:1})}}function xt(t,e,r){const a=t.slice();return a[6]=e[r],a[8]=r,a}function yt(t){let e,r;return{c(){e=h("p"),r=M("No players match your current search"),this.h()},l(t){e=$(t,"P",{class:!0});var a=g(e);r=S(a,"No players match your current search"),a.forEach(y),this.h()},h(){b(e,"class","text-sm p-4")},m(t,a){w(t,e,a),T(e,r)},d(t){t&&y(e)}}}function bt(t,e){let r,a,s;return a=new vt({props:{class:"w-full "+(0===e[8]?"border-t":"")+" border-r border-b border-l border-gray-300",player:e[6]}}),{key:t,first:null,c(){r=A(),p(a.$$.fragment),this.h()},l(t){r=A(),v(a.$$.fragment,t),this.h()},h(){this.first=r},m(t,e){w(t,r,e),j(a,t,e),s=!0},p(t,e){const r={};2&e&&(r.class="w-full "+(0===t[8]?"border-t":"")+" border-r border-b border-l border-gray-300"),2&e&&(r.player=t[6]),a.$set(r)},i(t){s||(E(a.$$.fragment,t),s=!0)},o(t){N(a.$$.fragment,t),s=!1},d(t){t&&y(r),I(a,t)}}}function wt(t){let e,r,a,s,n,o,l,i,c,f,u,m=[],p=new Map,v=t[1];const j=t=>t[6].footyWebNumber;for(let e=0;e<v.length;e+=1){let r=xt(t,v,e),a=j(r);p.set(a,m[e]=bt(a,r))}let I=null;return v.length||(I=yt()),{c(){e=h("div"),r=h("div"),a=h("label"),s=M("Find Players"),n=d(),o=h("input"),l=d(),i=h("div");for(let t=0;t<m.length;t+=1)m[t].c();I&&I.c(),this.h()},l(t){e=$(t,"DIV",{class:!0});var c=g(e);r=$(c,"DIV",{class:!0});var f=g(r);a=$(f,"LABEL",{class:!0,for:!0});var u=g(a);s=S(u,"Find Players"),u.forEach(y),n=x(f),o=$(f,"INPUT",{class:!0,type:!0,name:!0,id:!0}),f.forEach(y),l=x(c),i=$(c,"DIV",{class:!0});var h=g(i);for(let t=0;t<m.length;t+=1)m[t].l(h);I&&I.l(h),h.forEach(y),c.forEach(y),this.h()},h(){b(a,"class","text-lg text-grey-darkest"),b(a,"for","searchTerm"),b(o,"class","border text-grey-darkest py-2 px-3"),b(o,"type","text"),b(o,"name","searchTerm"),b(o,"id","searchTerm"),b(r,"class","flex flex-col mb-4"),b(i,"class","flex flex-wrap"),b(e,"class","container mx-auto xl:py-10")},m(h,p){w(h,e,p),T(e,r),T(r,a),T(a,s),T(r,n),T(r,o),W(o,t[0]),T(e,l),T(e,i);for(let t=0;t<m.length;t+=1)m[t].m(i,null);I&&I.m(i,null),c=!0,f||(u=[k(o,"input",t[4]),k(o,"input",t[2])],f=!0)},p(t,[e]){if(1&e&&o.value!==t[0]&&W(o,t[0]),2&e){const r=t[1];D(),m=L(m,e,j,1,t,r,p,i,F,bt,null,xt),C(),r.length?I&&(I.d(1),I=null):I||(I=yt(),I.c(),I.m(i,null))}},i(t){if(!c){for(let t=0;t<v.length;t+=1)E(m[t]);c=!0}},o(t){for(let t=0;t<m.length;t+=1)N(m[t]);c=!1},d(t){t&&y(e);for(let t=0;t<m.length;t+=1)m[t].d();I&&I.d(),f=!1,V(u)}}}function jt(t,e,r){let{state:a}=e,s="",n=[];const o=st((()=>{return r(1,(t=mt(dt(s)),n=t.length<2?[]:ot(a.players,(({searchTerms:e})=>ut(e,t)))));var t}),250,{maxWait:1e3});return B.set("Search"),t.$$set=t=>{"state"in t&&r(3,a=t.state)},[s,n,o,a,function(){s=this.value,r(0,s)}]}class Tt extends f{constructor(t){super(),u(this,t,jt,wt,m,{state:3})}}function Et(t){let e,r;return e=new Tt({props:{state:t[0]}}),{c(){p(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){j(e,t,a),r=!0},p(t,[r]){const a={};1&r&&(a.state=t[0]),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}async function Nt(t,e){const r=await this.fetch(`${K(t.path,"/")}${"/"===t.path?"index":""}.json`);return{state:await r.json()}}function It(t,e,r){let{state:a=null}=e;return O((()=>window.scrollTo(0,0))),t.$$set=t=>{"state"in t&&r(0,a=t.state)},[a]}export default class extends f{constructor(t){super(),u(this,t,It,Et,m,{state:0})}}export{Nt as preload};
