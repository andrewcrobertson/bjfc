import{S as t,i as s,s as e,h as r,t as a,c as o,b as n,l,d as c,e as u,f as i,g as m,n as f,A as d,m as $,o as p,p as g,q as h,u as x,v as b,w as y,x as v,r as w}from"./client.78cfb823.js";import{p as E,u as j}from"./theme.690bca52.js";import{E as P}from"./index.834165d6.js";import{E as D,P as I}from"./index.89f55fdf.js";function V(t){let s,e,d;return{c(){s=r("div"),e=a(" "),this.h()},l(t){s=o(t,"DIV",{class:!0});var r=n(s);e=l(r," "),r.forEach(c),this.h()},h(){u(s,"class",d=t[0]+" cursor-default text-sm border border-gray-300 border-dotted py-3")},m(t,r){i(t,s,r),m(s,e)},p(t,[e]){1&e&&d!==(d=t[0]+" cursor-default text-sm border border-gray-300 border-dotted py-3")&&u(s,"class",d)},i:f,o:f,d(t){t&&c(s)}}}function q(t,s,e){let{class:r=""}=s;return t.$$set=t=>{"class"in t&&e(0,r=t.class)},[r]}class A extends t{constructor(t){super(),s(this,t,q,V,e,{class:0})}}function C(t){let s,e;return s=new A({props:{class:"mb-2"}}),{c(){x(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){y(s,t,r),e=!0},p:f,i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){v(s,t)}}}function N(t){let s,e;return s=new D({props:{class:"mb-2",email:t[1],colour:t[2]}}),{c(){x(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){y(s,t,r),e=!0},p(t,e){const r={};2&e&&(r.email=t[1]),4&e&&(r.colour=t[2]),s.$set(r)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){v(s,t)}}}function S(t){let s,e;return s=new I({props:{class:"mb-2",phone:t[1],colour:t[2]}}),{c(){x(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){y(s,t,r),e=!0},p(t,e){const r={};2&e&&(r.phone=t[1]),4&e&&(r.colour=t[2]),s.$set(r)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){v(s,t)}}}function k(t){let s,e,r,a;const o=[S,N,C],n=[];function l(t,s){return"Phone"===t[0]?0:"Email"===t[0]?1:2}return s=l(t),e=n[s]=o[s](t),{c(){e.c(),r=d()},l(t){e.l(t),r=d()},m(t,e){n[s].m(t,e),i(t,r,e),a=!0},p(t,[a]){let c=s;s=l(t),s===c?n[s].p(t,a):($(),p(n[c],1,1,(()=>{n[c]=null})),g(),e=n[s],e?e.p(t,a):(e=n[s]=o[s](t),e.c()),h(e,1),e.m(r.parentNode,r))},i(t){a||(h(e),a=!0)},o(t){p(e),a=!1},d(t){n[s].d(t),t&&c(r)}}}function z(t,s,e){let{type:r=null}=s,{value:a=null}=s,{colour:o="gray"}=s;return t.$$set=t=>{"type"in t&&e(0,r=t.type),"value"in t&&e(1,a=t.value),"colour"in t&&e(2,o=t.colour)},[r,a,o]}class B extends t{constructor(t){super(),s(this,t,z,k,e,{type:0,value:1,colour:2})}}function F(t){let s,e,f,d,$;return e=new P({props:{class:"inline w-5 h-5 mr-2 text-"+t[2]+"-500"}}),{c(){s=r("div"),x(e.$$.fragment),f=a(t[1]),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=n(s);b(e.$$.fragment,a),f=l(a,t[1]),a.forEach(c),this.h()},h(){u(s,"class",d=t[0]+" cursor-default inline-flex items-center text-sm border border-gray-300 border-dotted px-3 py-3")},m(t,r){i(t,s,r),y(e,s,null),m(s,f),$=!0},p(t,[r]){const a={};4&r&&(a.class="inline w-5 h-5 mr-2 text-"+t[2]+"-500"),e.$set(a),(!$||2&r)&&w(f,t[1]),(!$||1&r&&d!==(d=t[0]+" cursor-default inline-flex items-center text-sm border border-gray-300 border-dotted px-3 py-3"))&&u(s,"class",d)},i(t){$||(h(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){t&&c(s),v(e)}}}function G(t,s,e){let{class:r=""}=s,{text:a=""}=s,{colour:o=E[j]}=s;return t.$$set=t=>{"class"in t&&e(0,r=t.class),"text"in t&&e(1,a=t.text),"colour"in t&&e(2,o=t.colour)},[r,a,o]}class H extends t{constructor(t){super(),s(this,t,G,F,e,{class:0,text:1,colour:2})}}export{B as C,A as E,H as P};
