import{g as t,a as n,b as r,c as e,d as a,e as o,f as s,_ as c,h as u,i as f,j as i,k as l,s as h,l as p,S as v,n as m,t as d,p as g,q as y,r as $,u as R,w as b,A as j,B as w,C as x,H as D,U as E,E as k,F as L,G as S,I as A,J as I,K as P,L as U}from"./client.1c10ea2e.js";import{d as q}from"./players.89d6b8bd.js";import{d as B}from"./teams.2ca8a807.js";import{m as C}from"./map.7c409eae.js";function F(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=u(t);if(n){var a=u(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return f(this,r)}}function G(t,n,r){var e=t.slice();return e[2]=n[r],e}function H(t){var n,r,e,a=t[2]+"";return{c:function(){n=m("li"),r=m("a"),e=d(a),this.h()},l:function(t){n=g(t,"LI",{});var o=y(n);r=g(o,"A",{href:!0});var s=y(r);e=$(s,a),s.forEach(R),o.forEach(R),this.h()},h:function(){b(r,"href",t[2])},m:function(t,a){j(t,n,a),w(n,r),w(r,e)},p:x,d:function(t){t&&R(n)}}}function J(t){for(var n,r=t[0],e=[],a=0;a<r.length;a+=1)e[a]=H(G(t,r,a));return{c:function(){n=m("ul");for(var t=0;t<e.length;t+=1)e[t].c()},l:function(t){n=g(t,"UL",{});for(var r=y(n),a=0;a<e.length;a+=1)e[a].l(r);r.forEach(R)},m:function(t,r){j(t,n,r);for(var a=0;a<e.length;a+=1)e[a].m(n,null)},p:function(t,a){var o=D(a,1)[0];if(1&o){var s;for(r=t[0],s=0;s<r.length;s+=1){var c=G(t,r,s);e[s]?e[s].p(c,o):(e[s]=H(c),e[s].c(),e[s].m(n,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},i:x,o:x,d:function(t){t&&R(n),E(e,t)}}}function K(t,n,r){var e=n.state,a=void 0===e?null:e,o=a.links;return t.$$set=function(t){"state"in t&&r(1,a=t.state)},[o,a]}var N=function(t){c(r,v);var n=F(r);function r(t){var e;return i(this,r),e=n.call(this),l(p(e),t,K,J,h,{state:1}),e}return r}();function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=u(t);if(n){var a=u(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return f(this,r)}}function W(t){var n,r;return n=new N({props:{state:t[0]}}),{c:function(){k(n.$$.fragment)},l:function(t){L(n.$$.fragment,t)},m:function(t,e){S(n,t,e),r=!0},p:function(t,r){var e={};1&D(r,1)[0]&&(e.state=t[0]),n.$set(e)},i:function(t){r||(A(n.$$.fragment,t),r=!0)},o:function(t){I(n.$$.fragment,t),r=!1},d:function(t){P(n,t)}}}function _(c,u){return((c,u)=>{const f=[];return f.push(t()),f.push(n()),f.push(r()),f.push(...C(q,(({footyWebNumber:t})=>e(t)))),f.push(...C(B,(({code:t})=>a(t)))),f.push(...C(B,(({code:t})=>o(t)))),f.push(...C(B,(({code:t})=>s(t)))),f.sort(),{state:{links:f}}})()}function z(t,n,r){var e=n.state,a=void 0===e?null:e;return U((function(){return window.scrollTo(0,0)})),t.$$set=function(t){"state"in t&&r(0,a=t.state)},[a]}var M=function(t){c(r,v);var n=T(r);function r(t){var e;return i(this,r),e=n.call(this),l(p(e),t,z,W,h,{state:0}),e}return r}();export default M;export{_ as preload};
