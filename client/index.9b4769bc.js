import{S as e,i as t,s,e as r,u as a,a as n,c as l,b as o,v as c,g as $,f,h as i,o as p,w as m,p as u,x as g,y as d,z as h,D as x,G as y,H as b,t as w,d as v,E as j,C as E,W as T,X as C,r as A,A as D}from"./client.af3d767e.js";import{t as I}from"./trimEnd.7fea8202.js";import"./index.a9cc7c64.js";import{A as M,h as B}from"./theme.2c990a3b.js";import{B as H,d as O,p as N}from"./index.635d83a5.js";import{S as V}from"./index.02339a54.js";import"./index.948b8d1e.js";import{T as G,a as S,b as k,c as P}from"./index.0858aed3.js";function W(e){let t,s,x,y,b,w,v,j,E;return s=new M({props:{colour:e[6],initials:e[2],text:e[3]}}),b=new V({props:{class:"self-end",iconClass:"text-"+e[6]+"-500",status:e[4],text:e[1].statusInfo}}),v=new H({props:{class:"self-end",iconClass:"text-"+e[6]+"-500",label:e[1].dateOfBirth+" (age: "+e[7]+")"}}),{c(){t=r("a"),a(s.$$.fragment),x=n(),y=r("span"),a(b.$$.fragment),w=n(),a(v.$$.fragment),this.h()},l(e){t=l(e,"A",{class:!0,href:!0});var r=o(t);c(s.$$.fragment,r),x=$(r),y=l(r,"SPAN",{class:!0});var a=o(y);c(b.$$.fragment,a),w=$(a),c(v.$$.fragment,a),a.forEach(f),r.forEach(f),this.h()},h(){i(y,"class","flex flex-col text-sm space-y-1"),i(t,"class",j=e[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),i(t,"href",e[5])},m(e,r){p(e,t,r),m(s,t,null),u(t,x),u(t,y),m(b,y,null),u(y,w),m(v,y,null),E=!0},p(e,[s]){const r={};2&s&&(r.text=e[1].statusInfo),b.$set(r);const a={};2&s&&(a.label=e[1].dateOfBirth+" (age: "+e[7]+")"),v.$set(a),(!E||1&s&&j!==(j=e[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&i(t,"class",j)},i(e){E||(g(s.$$.fragment,e),g(b.$$.fragment,e),g(v.$$.fragment,e),E=!0)},o(e){d(s.$$.fragment,e),d(b.$$.fragment,e),d(v.$$.fragment,e),E=!1},d(e){e&&f(t),h(s),h(b),h(v)}}}function z(e,t,s){var r;let{class:a=""}=t,{player:n}=t;const l=n.initials,o=`${n.lastName}, ${n.firstName}`,c=n.status,$=x(n.footyWebNumber),f=null!==(r=B[n.gender])&&void 0!==r?r:"gray",i=O(new Date,N(n.dateOfBirth));return e.$$set=e=>{"class"in e&&s(0,a=e.class),"player"in e&&s(1,n=e.player)},[a,n,l,o,c,$,f,i]}class X extends e{constructor(e){super(),t(this,e,z,W,s,{class:0,player:1})}}function q(e,t,s){const r=e.slice();return r[3]=t[s],r[5]=s,r}function F(e){let t,s;return{c(){t=r("p"),s=w(e[2]),this.h()},l(r){t=l(r,"P",{class:!0});var a=o(t);s=v(a,e[2]),a.forEach(f),this.h()},h(){i(t,"class","p-4")},m(e,r){p(e,t,r),u(t,s)},p(e,t){4&t&&j(s,e[2])},d(e){e&&f(t)}}}function J(e){let t,s;return t=new X({props:{class:"w-full "+(0===e[5]?"border-t":"")+" border-r border-b border-l border-gray-300",player:e[3]}}),{c(){a(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){m(t,e,r),s=!0},p(e,s){const r={};2&s&&(r.player=e[3]),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function K(e){let t,s,a,n=e[1],c=[];for(let t=0;t<n.length;t+=1)c[t]=J(q(e,n,t));const $=e=>d(c[e],1,1,(()=>{c[e]=null}));let m=null;return n.length||(m=F(e)),{c(){t=r("div");for(let e=0;e<c.length;e+=1)c[e].c();m&&m.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=o(t);for(let e=0;e<c.length;e+=1)c[e].l(s);m&&m.l(s),s.forEach(f),this.h()},h(){i(t,"class",s=e[0]+" flex flex-wrap")},m(e,s){p(e,t,s);for(let e=0;e<c.length;e+=1)c[e].m(t,null);m&&m.m(t,null),a=!0},p(e,[r]){if(6&r){let s;for(n=e[1],s=0;s<n.length;s+=1){const a=q(e,n,s);c[s]?(c[s].p(a,r),g(c[s],1)):(c[s]=J(a),c[s].c(),g(c[s],1),c[s].m(t,null))}for(y(),s=n.length;s<c.length;s+=1)$(s);b(),!n.length&&m?m.p(e,r):n.length?m&&(m.d(1),m=null):(m=F(e),m.c(),m.m(t,null))}(!a||1&r&&s!==(s=e[0]+" flex flex-wrap"))&&i(t,"class",s)},i(e){if(!a){for(let e=0;e<n.length;e+=1)g(c[e]);a=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)d(c[e]);a=!1},d(e){e&&f(t),E(c,e),m&&m.d()}}}function L(e,t,s){let{class:r=""}=t,{players:a=[]}=t,{emptyMessage:n=""}=t;return e.$$set=e=>{"class"in e&&s(0,r=e.class),"players"in e&&s(1,a=e.players),"emptyMessage"in e&&s(2,n=e.emptyMessage)},[r,a,n]}class Q extends e{constructor(e){super(),t(this,e,L,K,s,{class:0,players:1,emptyMessage:2})}}function R(e){let t;return{c(){t=w("Transferred")},l(e){t=v(e,"Transferred")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function U(e){let t;return{c(){t=w("Historical")},l(e){t=v(e,"Historical")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function Y(e){let t,s,r,l;return t=new P({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[R]},$$scope:{ctx:e}}}),r=new P({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[U]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),s=n(),a(r.$$.fragment)},l(e){c(t.$$.fragment,e),s=$(e),c(r.$$.fragment,e)},m(e,a){m(t,e,a),p(e,s,a),m(r,e,a),l=!0},p(e,s){const a={};64&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const n={};64&s&&(n.$$scope={dirty:s,ctx:e}),r.$set(n)},i(e){l||(g(t.$$.fragment,e),g(r.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),d(r.$$.fragment,e),l=!1},d(e){h(t,e),e&&f(s),h(r,e)}}}function Z(e){let t,s;return t=new Q({props:{class:"mt-2",players:e[0].playersTransferred,emptyMessage:"There are no active players"}}),{c(){a(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){m(t,e,r),s=!0},p(e,s){const r={};1&s&&(r.players=e[0].playersTransferred),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function _(e){let t,s;return t=new Q({props:{class:"mt-2",players:e[0].playersHistorical,emptyMessage:"There are no recent players"}}),{c(){a(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){m(t,e,r),s=!0},p(e,s){const r={};1&s&&(r.players=e[0].playersHistorical),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ee(e){let t,s,r,l,o,i;return t=new S({props:{$$slots:{default:[Y]},$$scope:{ctx:e}}}),r=new k({props:{$$slots:{default:[Z]},$$scope:{ctx:e}}}),o=new k({props:{$$slots:{default:[_]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),s=n(),a(r.$$.fragment),l=n(),a(o.$$.fragment)},l(e){c(t.$$.fragment,e),s=$(e),c(r.$$.fragment,e),l=$(e),c(o.$$.fragment,e)},m(e,a){m(t,e,a),p(e,s,a),m(r,e,a),p(e,l,a),m(o,e,a),i=!0},p(e,s){const a={};64&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const n={};65&s&&(n.$$scope={dirty:s,ctx:e}),r.$set(n);const l={};65&s&&(l.$$scope={dirty:s,ctx:e}),o.$set(l)},i(e){i||(g(t.$$.fragment,e),g(r.$$.fragment,e),g(o.$$.fragment,e),i=!0)},o(e){d(t.$$.fragment,e),d(r.$$.fragment,e),d(o.$$.fragment,e),i=!1},d(e){h(t,e),e&&f(s),h(r,e),e&&f(l),h(o,e)}}}function te(e){let t,s,x,y,b,j,E,T,C,A,D,I,B;return x=new M({props:{colour:e[3],initials:e[1],text:e[2]}}),I=new G({props:{class:"w-full",$$slots:{default:[ee]},$$scope:{ctx:e}}}),{c(){t=r("div"),s=r("div"),a(x.$$.fragment),y=n(),b=r("div"),j=r("a"),E=w("Current"),T=n(),C=r("a"),A=w("Officials"),D=n(),a(I.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0});var r=o(t);s=l(r,"DIV",{class:!0});var a=o(s);c(x.$$.fragment,a),y=$(a),b=l(a,"DIV",{class:!0});var n=o(b);j=l(n,"A",{class:!0,href:!0});var i=o(j);E=v(i,"Current"),i.forEach(f),T=$(n),C=l(n,"A",{class:!0,href:!0});var p=o(C);A=v(p,"Officials"),p.forEach(f),n.forEach(f),a.forEach(f),D=$(r),c(I.$$.fragment,r),r.forEach(f),this.h()},h(){i(j,"class","border border-gray-300 px-3 py-1"),i(j,"href",e[4]),i(C,"class","border border-gray-300 px-3 py-1"),i(C,"href",e[5]),i(b,"class","flex justify-end space-x-2 items-center text-sm"),i(s,"class","flex flex-col sm:flex-row sm:justify-between pb-5"),i(t,"class","container mx-auto xl:py-10")},m(e,r){p(e,t,r),u(t,s),m(x,s,null),u(s,y),u(s,b),u(b,j),u(j,E),u(b,T),u(b,C),u(C,A),u(t,D),m(I,t,null),B=!0},p(e,[t]){const s={};65&t&&(s.$$scope={dirty:t,ctx:e}),I.$set(s)},i(e){B||(g(x.$$.fragment,e),g(I.$$.fragment,e),B=!0)},o(e){d(x.$$.fragment,e),d(I.$$.fragment,e),B=!1},d(e){e&&f(t),h(x),h(I)}}}function se(e,t,s){let{state:r}=t;const a=r.ageGroupCode,n=r.name,l=B[r.teamGender],o=T(r.code),c=C(r.code);return A.set("Team"),e.$$set=e=>{"state"in e&&s(0,r=e.state)},[r,a,n,l,o,c]}class re extends e{constructor(e){super(),t(this,e,se,te,s,{state:0})}}function ae(e){let t,s;return t=new re({props:{state:e[0]}}),{c(){a(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,r){m(t,e,r),s=!0},p(e,[s]){const r={};1&s&&(r.state=e[0]),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}async function ne(e,t){const s=await this.fetch(`${I(e.path,"/")}${"/"===e.path?"index":""}.json`);return{state:await s.json()}}function le(e,t,s){let{state:r=null}=t;return D((()=>window.scrollTo(0,0))),e.$$set=e=>{"state"in e&&s(0,r=e.state)},[r]}export default class extends e{constructor(e){super(),t(this,e,le,ae,s,{state:0})}}export{ne as preload};
