import{S as t,i as e,s as r,h as a,y as s,j as n,k as l,l as o,z as i,o as f,n as u,p as c,u as m,A as h,v as d,B as p,C as g,D as v,c as $,M as x,t as y,m as N,N as b,O as w,H as j,P as T,I as E,Q as I,x as P,R as S,E as W}from"./client.b21e60ed.js";import{d as k}from"./players.89d6b8bd.js";import{v as A,i as C,w as D,x as M,t as B,y as L,z as R,A as V,B as z,m as F,C as O,k as U,d as _,u as G,l as H,s as Q}from"./map.0e755dd5.js";import{f as q,S as J}from"./index.a8102564.js";import{j as K,_ as X,a as Y,A as Z,b as tt}from"./theme.ec4eb294.js";import{P as et}from"./index.5b9cd83f.js";import{_ as rt,a as at,t as st}from"./toInteger.46e31d49.js";import{g as nt}from"./getStatusInfo.a01edf56.js";import{c as lt,i as ot}from"./isString.a90ec20d.js";var it=A?A.isConcatSpreadable:void 0;var ft=function(t){return C(t)||D(t)||!!(it&&t&&t[it])};var ut=function t(e,r,a,s,n){var l=-1,o=e.length;for(a||(a=ft),n||(n=[]);++l<o;){var i=e[l];r>0&&a(i)?r>1?t(i,r-1,a,s,n):M(n,i):s||(n[n.length]=i)}return n};var ct=function(t){return(null==t?0:t.length)?ut(t,1):[]};var mt=function(){var t=arguments,e=B(t[0]);return t.length<3?e:e.replace(t[1],t[2])};var ht=function(t){return B(t).toLowerCase()};var dt=function(t){return t!=t};var pt=function(t,e,r){for(var a=r-1,s=t.length;++a<s;)if(t[a]===e)return a;return-1};var gt=function(t,e,r){return e==e?pt(t,e,r):rt(t,dt,r)};var vt=function(t,e){return!!(null==t?0:t.length)&&gt(t,e,0)>-1};var $t=function(t,e,r){for(var a=-1,s=null==t?0:t.length;++a<s;)if(r(e,t[a]))return!0;return!1};var xt=function(){},yt=L&&1/R(new L([,-0]))[1]==1/0?function(t){return new L(t)}:xt;var Nt=function(t,e,r){var a=-1,s=vt,n=t.length,l=!0,o=[],i=o;if(r)l=!1,s=$t;else if(n>=200){var f=e?null:yt(t);if(f)return R(f);l=!1,s=z,i=new V}else i=e?[]:o;t:for(;++a<n;){var u=t[a],c=e?e(u):u;if(u=r||0!==u?u:0,l&&c==c){for(var m=i.length;m--;)if(i[m]===c)continue t;e&&i.push(c),o.push(u)}else s(i,c,r)||(i!==o&&i.push(c),o.push(u))}return o};var bt=function(t){return t&&t.length?Nt(t):[]};const wt=t=>{if(0===t.length)return"Unknown";const e=t[0];if(1===t.length)return`${e.firstName} ${e.lastName}`;if(t.length>=2){const r=t[1];return e.lastName===r.lastName?e.firstName===r.firstName?`${e.firstName} ${e.lastName}`:`${e.firstName} & ${r.firstName} ${r.lastName}`:`${e.firstName} ${e.lastName} & ${r.firstName} ${r.lastName}`}},jt=t=>{const e=q(t.contacts,(({type:t})=>"Guardian"===t)),r=F(e,(({name:t,gender:e})=>({firstName:t.first,lastName:t.last,gender:e}))),a=[t.firstName,t.lastName],s=ct(F(r,(({firstName:t,lastName:e})=>[t,e]))),n=K(bt(F(lt([...a,...s]),(t=>ht(mt(t,/\s/g,""))))).sort()," ");return{footyWebNumber:t.footyWebNumber,status:t.status,statusInfo:nt(t),initials:t.initials,lastName:t.lastName,firstName:t.firstName,gender:t.gender,guardians:wt(r),searchTerms:n}};var Tt=function(){return O.Date.now()},Et=Math.max,It=Math.min;var Pt=function(t,e,r){var a,s,n,l,o,i,f=0,u=!1,c=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var r=a,n=s;return a=s=void 0,f=e,l=t.apply(n,r)}function d(t){return f=t,o=setTimeout(g,e),u?h(t):l}function p(t){var r=t-i;return void 0===i||r>=e||r<0||c&&t-f>=n}function g(){var t=Tt();if(p(t))return v(t);o=setTimeout(g,function(t){var r=e-(t-i);return c?It(r,n-(t-f)):r}(t))}function v(t){return o=void 0,m&&a?h(t):(a=s=void 0,l)}function $(){var t=Tt(),r=p(t);if(a=arguments,s=this,i=t,r){if(void 0===o)return d(i);if(c)return clearTimeout(o),o=setTimeout(g,e),h(i)}return void 0===o&&(o=setTimeout(g,e)),l}return e=at(e)||0,U(r)&&(u=!!r.leading,n=(c="maxWait"in r)?Et(at(r.maxWait)||0,e):n,m="trailing"in r?!!r.trailing:m),$.cancel=function(){void 0!==o&&clearTimeout(o),f=0,a=i=s=o=void 0},$.flush=function(){return void 0===o?l:v(Tt())},$};var St=function(t,e){return _(e,(function(e){return t[e]}))};var Wt=function(t){return null==t?[]:St(t,G(t))},kt=Math.max;var At=function(t,e,r,a){t=H(t)?t:Wt(t),r=r&&!a?st(r):0;var s=t.length;return r<0&&(r=kt(s+r,0)),ot(t)?r<=s&&t.indexOf(e,r)>-1:!!s&&gt(t,e,r)>-1};var Ct=function(t,e){for(var r=t.length;r--&&gt(e,t[r],0)>-1;);return r};var Dt=function(t,e){for(var r=-1,a=t.length;++r<a&&gt(e,t[r],0)>-1;);return r},Mt=/^\s+|\s+$/g;var Bt=function(t,e,r){if((t=B(t))&&(r||void 0===e))return t.replace(Mt,"");if(!t||!(e=Q(e)))return t;var a=X(t),s=X(e),n=Dt(a,s),l=Ct(a,s)+1;return Y(a,n,l).join("")};function Lt(t){let e,r,$,x,y,N,b,w,j;return r=new Z({props:{colour:t[6],initials:t[2],text:t[3]}}),y=new J({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",status:t[4],text:t[1].statusInfo}}),b=new et({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",text:t[1].guardians}}),{c(){e=a("a"),s(r.$$.fragment),$=n(),x=a("span"),s(y.$$.fragment),N=n(),s(b.$$.fragment),this.h()},l(t){e=l(t,"A",{class:!0,href:!0});var a=o(e);i(r.$$.fragment,a),$=f(a),x=l(a,"SPAN",{class:!0});var s=o(x);i(y.$$.fragment,s),N=f(s),i(b.$$.fragment,s),s.forEach(u),a.forEach(u),this.h()},h(){c(x,"class","flex flex-col text-sm space-y-1"),c(e,"class",w=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),c(e,"href",t[5])},m(t,a){m(t,e,a),h(r,e,null),d(e,$),d(e,x),h(y,x,null),d(x,N),h(b,x,null),j=!0},p(t,[r]){const a={};2&r&&(a.text=t[1].statusInfo),y.$set(a);const s={};2&r&&(s.text=t[1].guardians),b.$set(s),(!j||1&r&&w!==(w=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&c(e,"class",w)},i(t){j||(p(r.$$.fragment,t),p(y.$$.fragment,t),p(b.$$.fragment,t),j=!0)},o(t){g(r.$$.fragment,t),g(y.$$.fragment,t),g(b.$$.fragment,t),j=!1},d(t){t&&u(e),v(r),v(y),v(b)}}}function Rt(t,e,r){var a;let{class:s=""}=e,{player:n}=e;const l=n.initials,o=`${n.lastName}, ${n.firstName}`,i=n.status,f=$(n.footyWebNumber),u=null!==(a=tt[n.gender])&&void 0!==a?a:"gray";return t.$$set=t=>{"class"in t&&r(0,s=t.class),"player"in t&&r(1,n=t.player)},[s,n,l,o,i,f,u]}class Vt extends t{constructor(t){super(),e(this,t,Rt,Lt,r,{class:0,player:1})}}function zt(t,e,r){const a=t.slice();return a[6]=e[r],a[8]=r,a}function Ft(t){let e,r;return{c(){e=a("p"),r=y("No players match your current search"),this.h()},l(t){e=l(t,"P",{class:!0});var a=o(e);r=N(a,"No players match your current search"),a.forEach(u),this.h()},h(){c(e,"class","text-sm p-4")},m(t,a){m(t,e,a),d(e,r)},d(t){t&&u(e)}}}function Ot(t,e){let r,a,n;return a=new Vt({props:{class:"w-full "+(0===e[8]?"border-t":"")+" border-r border-b border-l border-gray-300",player:e[6]}}),{key:t,first:null,c(){r=x(),s(a.$$.fragment),this.h()},l(t){r=x(),i(a.$$.fragment,t),this.h()},h(){this.first=r},m(t,e){m(t,r,e),h(a,t,e),n=!0},p(t,e){const r={};2&e&&(r.class="w-full "+(0===t[8]?"border-t":"")+" border-r border-b border-l border-gray-300"),2&e&&(r.player=t[6]),a.$set(r)},i(t){n||(p(a.$$.fragment,t),n=!0)},o(t){g(a.$$.fragment,t),n=!1},d(t){t&&u(r),v(a,t)}}}function Ut(t){let e,r,s,i,h,v,$,x,P,W,k,A=[],C=new Map,D=t[1];const M=t=>t[6].footyWebNumber;for(let e=0;e<D.length;e+=1){let r=zt(t,D,e),a=M(r);C.set(a,A[e]=Ot(a,r))}let B=null;return D.length||(B=Ft()),{c(){e=a("div"),r=a("div"),s=a("label"),i=y("Find Players"),h=n(),v=a("input"),$=n(),x=a("div");for(let t=0;t<A.length;t+=1)A[t].c();B&&B.c(),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=o(e);r=l(a,"DIV",{class:!0});var n=o(r);s=l(n,"LABEL",{class:!0,for:!0});var c=o(s);i=N(c,"Find Players"),c.forEach(u),h=f(n),v=l(n,"INPUT",{class:!0,type:!0,name:!0,id:!0}),n.forEach(u),$=f(a),x=l(a,"DIV",{class:!0});var m=o(x);for(let t=0;t<A.length;t+=1)A[t].l(m);B&&B.l(m),m.forEach(u),a.forEach(u),this.h()},h(){c(s,"class","text-lg text-grey-darkest"),c(s,"for","searchTerm"),c(v,"class","border text-grey-darkest py-2 px-3"),c(v,"type","text"),c(v,"name","searchTerm"),c(v,"id","searchTerm"),c(r,"class","flex flex-col mb-4"),c(x,"class","flex flex-wrap"),c(e,"class","container mx-auto xl:py-10")},m(a,n){m(a,e,n),d(e,r),d(r,s),d(s,i),d(r,h),d(r,v),b(v,t[0]),d(e,$),d(e,x);for(let t=0;t<A.length;t+=1)A[t].m(x,null);B&&B.m(x,null),P=!0,W||(k=[w(v,"input",t[4]),w(v,"input",t[2])],W=!0)},p(t,[e]){if(1&e&&v.value!==t[0]&&b(v,t[0]),2&e){const r=t[1];j(),A=T(A,e,M,1,t,r,C,x,S,Ot,null,zt),E(),r.length?B&&(B.d(1),B=null):B||(B=Ft(),B.c(),B.m(x,null))}},i(t){if(!P){for(let t=0;t<D.length;t+=1)p(A[t]);P=!0}},o(t){for(let t=0;t<A.length;t+=1)g(A[t]);P=!1},d(t){t&&u(e);for(let t=0;t<A.length;t+=1)A[t].d();B&&B.d(),W=!1,I(k)}}}function _t(t,e,r){let{state:a}=e,s="",n=[];const l=Pt((()=>{return r(1,(t=ht(Bt(s)),n=t.length<2?[]:q(a.players,(({searchTerms:e})=>At(e,t)))));var t}),250,{maxWait:1e3});return P.set("Search"),t.$$set=t=>{"state"in t&&r(3,a=t.state)},[s,n,l,a,function(){s=this.value,r(0,s)}]}class Gt extends t{constructor(t){super(),e(this,t,_t,Ut,r,{state:3})}}function Ht(t){let e,r;return e=new Gt({props:{state:t[0]}}),{c(){s(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,a){h(e,t,a),r=!0},p(t,[r]){const a={};1&r&&(a.state=t[0]),e.$set(a)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function Qt(t,e){return{state:{players:F(q(k,(({status:t})=>"Insured"===t||"Registered"===t||"Recent"===t)),jt)}}}function qt(t,e,r){let{state:a=null}=e;return W((()=>window.scrollTo(0,0))),t.$$set=t=>{"state"in t&&r(0,a=t.state)},[a]}export default class extends t{constructor(t){super(),e(this,t,qt,Ht,r,{state:0})}}export{Qt as preload};
