import{S as s,i as e,s as t,r as n,f as a,g as r,h as o,j as l,k as c,l as i,n as h,o as u,p as f,e as $,u as p,v as d,w as g,x as m,c as x,y as v,a as y,z as b,m as E,A as w,t as j,b as A,d as B,B as T,C as k}from"./client.58a03dc5.js";function C(s){let e,t,$;return{c(){e=n("svg"),t=n("text"),$=a("BJFC"),this.h()},l(s){e=r(s,"svg",{width:!0,height:!0},1);var n=o(e);t=r(n,"text",{x:!0,y:!0,class:!0},1);var a=o(t);$=l(a,"BJFC"),a.forEach(c),n.forEach(c),this.h()},h(){i(t,"x","0"),i(t,"y","20"),i(t,"class","svelte-1ycr1lm"),i(e,"width","auto"),i(e,"height","30")},m(s,n){h(s,e,n),u(e,t),u(t,$)},p:f,i:f,o:f,d(s){s&&c(e)}}}class N extends s{constructor(s){super(),e(this,s,null,C,t,{})}}function S(s){let e,t,a,l,g,m,x;return{c(){e=$("button"),t=n("svg"),a=n("line"),l=n("line"),g=n("line"),this.h()},l(s){e=r(s,"BUTTON",{class:!0});var n=o(e);t=r(n,"svg",{width:!0,height:!0,class:!0},1);var i=o(t);a=r(i,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),o(a).forEach(c),l=r(i,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),o(l).forEach(c),g=r(i,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0},1),o(g).forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){i(a,"id","top"),i(a,"x1","0"),i(a,"y1","2"),i(a,"x2","32"),i(a,"y2","2"),i(a,"class","svelte-1gn2oj1"),i(l,"id","middle"),i(l,"x1","0"),i(l,"y1","12"),i(l,"x2","24"),i(l,"y2","12"),i(l,"class","svelte-1gn2oj1"),i(g,"id","bottom"),i(g,"x1","0"),i(g,"y1","22"),i(g,"x2","32"),i(g,"y2","22"),i(g,"class","svelte-1gn2oj1"),i(t,"width","32"),i(t,"height","24"),i(t,"class","svelte-1gn2oj1"),i(e,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-1gn2oj1"),p(e,"open",s[0])},m(n,r){h(n,e,r),u(e,t),u(t,a),u(t,l),u(t,g),m||(x=d(e,"click",s[1]),m=!0)},p(s,[t]){1&t&&p(e,"open",s[0])},i:f,o:f,d(s){s&&c(e),m=!1,x()}}}function D(s,e,t){let{open:n=!1}=e;return s.$$set=s=>{"open"in s&&t(0,n=s.open)},[n,()=>t(0,n=!n)]}class F extends s{constructor(s){super(),e(this,s,D,S,t,{open:0})}}function J(s){let e,t,n,a,l,f,p;function d(e){s[1].call(null,e)}let T={};return void 0!==s[0]&&(T.open=s[0]),n=new F({props:T}),g.push((()=>m(n,"open",d))),f=new N({}),{c(){e=$("header"),t=$("nav"),x(n.$$.fragment),l=v(),x(f.$$.fragment),this.h()},l(s){e=r(s,"HEADER",{class:!0});var a=o(e);t=r(a,"NAV",{class:!0});var i=o(t);y(n.$$.fragment,i),l=b(i),y(f.$$.fragment,i),i.forEach(c),a.forEach(c),this.h()},h(){i(t,"class","flex"),i(e,"class","flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2")},m(s,a){h(s,e,a),u(e,t),E(n,t,null),u(t,l),E(f,t,null),p=!0},p(s,[e]){const t={};!a&&1&e&&(a=!0,t.open=s[0],w((()=>a=!1))),n.$set(t)},i(s){p||(j(n.$$.fragment,s),j(f.$$.fragment,s),p=!0)},o(s){A(n.$$.fragment,s),A(f.$$.fragment,s),p=!1},d(s){s&&c(e),B(n),B(f)}}}function L(s,e,t){let{sidebar:n=!1}=e;return s.$$set=s=>{"sidebar"in s&&t(0,n=s.sidebar)},[n,function(s){n=s,t(0,n)}]}class V extends s{constructor(s){super(),e(this,s,L,J,t,{sidebar:0})}}function z(s){let e,t,n,d;return{c(){e=$("aside"),t=$("nav"),n=$("a"),d=a("Team List"),this.h()},l(s){e=r(s,"ASIDE",{class:!0});var a=o(e);t=r(a,"NAV",{class:!0});var i=o(t);n=r(i,"A",{class:!0,href:!0});var h=o(n);d=l(h,"Team List"),h.forEach(c),i.forEach(c),a.forEach(c),this.h()},h(){i(n,"class","block"),i(n,"href","/"),i(t,"class","p-12 text-xl"),i(e,"class","absolute w-full h-full bg-gray-200 border-r-2 shadow-lg svelte-12d18ho"),p(e,"open",s[0])},m(s,a){h(s,e,a),u(e,t),u(t,n),u(n,d)},p(s,[t]){1&t&&p(e,"open",s[0])},i:f,o:f,d(s){s&&c(e)}}}function H(s,e,t){let{open:n=!1}=e;return s.$$set=s=>{"open"in s&&t(0,n=s.open)},[n]}class I extends s{constructor(s){super(),e(this,s,H,z,t,{open:0})}}function O(s){let e,t,n,a,r,o,l;function i(e){s[3].call(null,e)}let u={};function f(e){s[4].call(null,e)}void 0!==s[0]&&(u.open=s[0]),e=new I({props:u}),g.push((()=>m(e,"open",i)));let $={};void 0!==s[0]&&($.sidebar=s[0]),a=new V({props:$}),g.push((()=>m(a,"sidebar",f)));const p=s[2].default,d=T(p,s,s[1],null);return{c(){x(e.$$.fragment),n=v(),x(a.$$.fragment),o=v(),d&&d.c()},l(s){y(e.$$.fragment,s),n=b(s),y(a.$$.fragment,s),o=b(s),d&&d.l(s)},m(s,t){E(e,s,t),h(s,n,t),E(a,s,t),h(s,o,t),d&&d.m(s,t),l=!0},p(s,[n]){const o={};!t&&1&n&&(t=!0,o.open=s[0],w((()=>t=!1))),e.$set(o);const l={};!r&&1&n&&(r=!0,l.sidebar=s[0],w((()=>r=!1))),a.$set(l),d&&d.p&&2&n&&k(d,p,s,s[1],n,null,null)},i(s){l||(j(e.$$.fragment,s),j(a.$$.fragment,s),j(d,s),l=!0)},o(s){A(e.$$.fragment,s),A(a.$$.fragment,s),A(d,s),l=!1},d(s){B(e,s),s&&c(n),B(a,s),s&&c(o),d&&d.d(s)}}}function R(s,e,t){let{$$slots:n={},$$scope:a}=e,r=!1;return s.$$set=s=>{"$$scope"in s&&t(1,a=s.$$scope)},[r,a,n,function(s){r=s,t(0,r)},function(s){r=s,t(0,r)}]}class U extends s{constructor(s){super(),e(this,s,R,O,t,{})}}export{U as S};
