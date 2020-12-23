import{S as e,i as t,s,h as a,z as r,j as n,k as l,l as o,A as c,o as $,n as f,p as m,v as i,B as p,w as d,C as u,D as g,E as h,c as y,I as x,J as b,t as w,m as v,H as j,K as A,f as I,d as E,y as N,F as C}from"./client.40ef246f.js";import{d as B}from"./players.89d6b8bd.js";import{d as R}from"./teams.2ca8a807.js";import{m as G}from"./map.0e755dd5.js";import{f as M}from"./index.48b38ad4.js";import{A as O,b as D}from"./theme.d43d054b.js";import{f as T}from"./find.49fd2149.js";import"./_baseFindIndex.6ee7d5bf.js";import"./toInteger.78ad547d.js";import{b as V,S as k}from"./index.b76f839c.js";import{B as S}from"./index.d397b646.js";import{b as W,T as F,a as P,c as z,d as H}from"./index.510c1845.js";const J=e=>({footyWebNumber:e.footyWebNumber,status:e.status,statusInfo:V(e),initials:e.initials,lastName:e.lastName,firstName:e.firstName,dateOfBirth:W(e.dateOfBirth),gender:e.gender}),K=e=>(e,t)=>{const s=M(B,(({teamCode:t})=>t===e.params.code));return{state:((e,t)=>{const s=M(t,(e=>"Insured"===e.status||"Registered"===e.status)),a=M(t,(e=>"Recent"===e.status));return{code:e.code,ageGroupCode:e.ageGroupCode,name:e.name,teamGender:e.teamGender,playersActive:G(s,J),playersRecent:G(a,J)}})(T(R,(({code:t})=>t===e.params.code)),s)}};function _(e){let t,s,y,x,b,w,v,j,A;return s=new O({props:{colour:e[6],initials:e[2],text:e[3]}}),b=new k({props:{class:"self-end",iconClass:"text-"+e[6]+"-500",status:e[4],text:e[1].statusInfo}}),v=new S({props:{class:"self-end",iconClass:"text-"+e[6]+"-500",label:e[1].dateOfBirth}}),{c(){t=a("a"),r(s.$$.fragment),y=n(),x=a("span"),r(b.$$.fragment),w=n(),r(v.$$.fragment),this.h()},l(e){t=l(e,"A",{class:!0,href:!0});var a=o(t);c(s.$$.fragment,a),y=$(a),x=l(a,"SPAN",{class:!0});var r=o(x);c(b.$$.fragment,r),w=$(r),c(v.$$.fragment,r),r.forEach(f),a.forEach(f),this.h()},h(){m(x,"class","flex flex-col text-sm space-y-1"),m(t,"class",j=e[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),m(t,"href",e[5])},m(e,a){i(e,t,a),p(s,t,null),d(t,y),d(t,x),p(b,x,null),d(x,w),p(v,x,null),A=!0},p(e,[s]){const a={};2&s&&(a.text=e[1].statusInfo),b.$set(a);const r={};2&s&&(r.label=e[1].dateOfBirth),v.$set(r),(!A||1&s&&j!==(j=e[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&m(t,"class",j)},i(e){A||(u(s.$$.fragment,e),u(b.$$.fragment,e),u(v.$$.fragment,e),A=!0)},o(e){g(s.$$.fragment,e),g(b.$$.fragment,e),g(v.$$.fragment,e),A=!1},d(e){e&&f(t),h(s),h(b),h(v)}}}function q(e,t,s){var a;let{class:r=""}=t,{player:n}=t;const l=n.initials,o=`${n.lastName}, ${n.firstName}`,c=n.status,$=y(n.footyWebNumber),f=null!==(a=D[n.gender])&&void 0!==a?a:"gray";return e.$$set=e=>{"class"in e&&s(0,r=e.class),"player"in e&&s(1,n=e.player)},[r,n,l,o,c,$,f]}class L extends e{constructor(e){super(),t(this,e,q,_,s,{class:0,player:1})}}function Q(e,t,s){const a=e.slice();return a[3]=t[s],a[5]=s,a}function U(e){let t,s;return{c(){t=a("p"),s=w(e[2]),this.h()},l(a){t=l(a,"P",{class:!0});var r=o(t);s=v(r,e[2]),r.forEach(f),this.h()},h(){m(t,"class","p-4")},m(e,a){i(e,t,a),d(t,s)},p(e,t){4&t&&j(s,e[2])},d(e){e&&f(t)}}}function X(e){let t,s;return t=new L({props:{class:"w-full "+(0===e[5]?"border-t":"")+" border-r border-b border-l border-gray-300",player:e[3]}}),{c(){r(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,s){const a={};2&s&&(a.player=e[3]),t.$set(a)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Y(e){let t,s,r,n=e[1],c=[];for(let t=0;t<n.length;t+=1)c[t]=X(Q(e,n,t));const $=e=>g(c[e],1,1,(()=>{c[e]=null}));let p=null;return n.length||(p=U(e)),{c(){t=a("div");for(let e=0;e<c.length;e+=1)c[e].c();p&&p.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=o(t);for(let e=0;e<c.length;e+=1)c[e].l(s);p&&p.l(s),s.forEach(f),this.h()},h(){m(t,"class",s=e[0]+" flex flex-wrap")},m(e,s){i(e,t,s);for(let e=0;e<c.length;e+=1)c[e].m(t,null);p&&p.m(t,null),r=!0},p(e,[a]){if(6&a){let s;for(n=e[1],s=0;s<n.length;s+=1){const r=Q(e,n,s);c[s]?(c[s].p(r,a),u(c[s],1)):(c[s]=X(r),c[s].c(),u(c[s],1),c[s].m(t,null))}for(x(),s=n.length;s<c.length;s+=1)$(s);b(),!n.length&&p?p.p(e,a):n.length?p&&(p.d(1),p=null):(p=U(e),p.c(),p.m(t,null))}(!r||1&a&&s!==(s=e[0]+" flex flex-wrap"))&&m(t,"class",s)},i(e){if(!r){for(let e=0;e<n.length;e+=1)u(c[e]);r=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)g(c[e]);r=!1},d(e){e&&f(t),A(c,e),p&&p.d()}}}function Z(e,t,s){let{class:a=""}=t,{players:r=[]}=t,{emptyMessage:n=""}=t;return e.$$set=e=>{"class"in e&&s(0,a=e.class),"players"in e&&s(1,r=e.players),"emptyMessage"in e&&s(2,n=e.emptyMessage)},[a,r,n]}class ee extends e{constructor(e){super(),t(this,e,Z,Y,s,{class:0,players:1,emptyMessage:2})}}function te(e){let t;return{c(){t=w("Active")},l(e){t=v(e,"Active")},m(e,s){i(e,t,s)},d(e){e&&f(t)}}}function se(e){let t;return{c(){t=w("Recent")},l(e){t=v(e,"Recent")},m(e,s){i(e,t,s)},d(e){e&&f(t)}}}function ae(e){let t,s,a,l;return t=new H({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[te]},$$scope:{ctx:e}}}),a=new H({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[se]},$$scope:{ctx:e}}}),{c(){r(t.$$.fragment),s=n(),r(a.$$.fragment)},l(e){c(t.$$.fragment,e),s=$(e),c(a.$$.fragment,e)},m(e,r){p(t,e,r),i(e,s,r),p(a,e,r),l=!0},p(e,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r);const n={};64&s&&(n.$$scope={dirty:s,ctx:e}),a.$set(n)},i(e){l||(u(t.$$.fragment,e),u(a.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),g(a.$$.fragment,e),l=!1},d(e){h(t,e),e&&f(s),h(a,e)}}}function re(e){let t,s;return t=new ee({props:{class:"mt-2",players:e[0].playersActive,emptyMessage:"There are no active players"}}),{c(){r(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.players=e[0].playersActive),t.$set(a)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ne(e){let t,s;return t=new ee({props:{class:"mt-2",players:e[0].playersRecent,emptyMessage:"There are no recent players"}}),{c(){r(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.players=e[0].playersRecent),t.$set(a)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function le(e){let t,s,a,l,o,m;return t=new P({props:{$$slots:{default:[ae]},$$scope:{ctx:e}}}),a=new z({props:{$$slots:{default:[re]},$$scope:{ctx:e}}}),o=new z({props:{$$slots:{default:[ne]},$$scope:{ctx:e}}}),{c(){r(t.$$.fragment),s=n(),r(a.$$.fragment),l=n(),r(o.$$.fragment)},l(e){c(t.$$.fragment,e),s=$(e),c(a.$$.fragment,e),l=$(e),c(o.$$.fragment,e)},m(e,r){p(t,e,r),i(e,s,r),p(a,e,r),i(e,l,r),p(o,e,r),m=!0},p(e,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r);const n={};65&s&&(n.$$scope={dirty:s,ctx:e}),a.$set(n);const l={};65&s&&(l.$$scope={dirty:s,ctx:e}),o.$set(l)},i(e){m||(u(t.$$.fragment,e),u(a.$$.fragment,e),u(o.$$.fragment,e),m=!0)},o(e){g(t.$$.fragment,e),g(a.$$.fragment,e),g(o.$$.fragment,e),m=!1},d(e){h(t,e),e&&f(s),h(a,e),e&&f(l),h(o,e)}}}function oe(e){let t,s,y,x,b,j,A,I,E,N,C,B,R;return y=new O({props:{colour:e[3],initials:e[1],text:e[2]}}),B=new F({props:{class:"w-full",$$slots:{default:[le]},$$scope:{ctx:e}}}),{c(){t=a("div"),s=a("div"),r(y.$$.fragment),x=n(),b=a("div"),j=a("a"),A=w("Archived"),I=n(),E=a("a"),N=w("Officials"),C=n(),r(B.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0});var a=o(t);s=l(a,"DIV",{class:!0});var r=o(s);c(y.$$.fragment,r),x=$(r),b=l(r,"DIV",{class:!0});var n=o(b);j=l(n,"A",{class:!0,href:!0});var m=o(j);A=v(m,"Archived"),m.forEach(f),I=$(n),E=l(n,"A",{class:!0,href:!0});var i=o(E);N=v(i,"Officials"),i.forEach(f),n.forEach(f),r.forEach(f),C=$(a),c(B.$$.fragment,a),a.forEach(f),this.h()},h(){m(j,"class","border border-gray-300 px-3 py-1"),m(j,"href",e[4]),m(E,"class","border border-gray-300 px-3 py-1"),m(E,"href",e[5]),m(b,"class","flex justify-end space-x-2 items-center text-sm"),m(s,"class","flex flex-col sm:flex-row sm:justify-between pb-5"),m(t,"class","container mx-auto xl:py-10")},m(e,a){i(e,t,a),d(t,s),p(y,s,null),d(s,x),d(s,b),d(b,j),d(j,A),d(b,I),d(b,E),d(E,N),d(t,C),p(B,t,null),R=!0},p(e,[t]){const s={};65&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s)},i(e){R||(u(y.$$.fragment,e),u(B.$$.fragment,e),R=!0)},o(e){g(y.$$.fragment,e),g(B.$$.fragment,e),R=!1},d(e){e&&f(t),h(y),h(B)}}}function ce(e,t,s){let{state:a}=t;const r=a.ageGroupCode,n=a.name,l=D[a.teamGender],o=I(a.code),c=E(a.code);return N.set("Team"),e.$$set=e=>{"state"in e&&s(0,a=e.state)},[a,r,n,l,o,c]}class $e extends e{constructor(e){super(),t(this,e,ce,oe,s,{state:0})}}function fe(e){let t,s;return t=new $e({props:{state:e[0]}}),{c(){r(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,a){p(t,e,a),s=!0},p(e,[s]){const a={};1&s&&(a.state=e[0]),t.$set(a)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function me(e,t){return K()(e,t)}function ie(e,t,s){let{state:a=null}=t;return C((()=>window.scrollTo(0,0))),e.$$set=e=>{"state"in e&&s(0,a=e.state)},[a]}export default class extends e{constructor(e){super(),t(this,e,ie,fe,s,{state:0})}}export{me as preload};