import{_ as n,a as t,b as e,c as r,i as o,s as c,d as a,S as s,e as f,f as i,m as u,g as l,t as h,h as d,j as m,k as U,l as v,n as p,o as g,p as $,q as y,r as x,u as G,v as B,w as N,x as R}from"./client.7f855958.js";import{S as M}from"./index.c91115e2.js";var w=[{code:"U18G",shortName:"U18G",name:"Under 18 Girls"},{code:"U17B-GREEN",shortName:"U17B (Green)",name:"Under 17 Boys (Green)"},{code:"U17B-GOLD",shortName:"U17B (Gold)",name:"Under 17 Boys (Gold)"},{code:"U16G",shortName:"U16G",name:"Under 16 Girls"},{code:"U15B",shortName:"U15B",name:"Under 15 Boys"},{code:"U14G",shortName:"U14G",name:"Under 14 Girls"},{code:"U13B",shortName:"U13B",name:"Under 13 Boys"},{code:"U12G",shortName:"U12G",name:"Under 12 Girls"},{code:"U11B",shortName:"U11B",name:"Under 11 Boys"},{code:"U10M",shortName:"U10M",name:"Under 10 Mixed"},{code:"U09M",shortName:"U9M",name:"Under 9 Mixed"},{code:"U08M",shortName:"U8M",name:"Under 8 Mixed"}];function D(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,c=t(n);if(r){var a=t(this).constructor;o=Reflect.construct(c,arguments,a)}else o=c.apply(this,arguments);return e(this,o)}}function E(n,t,e){var r=n.slice();return r[0]=t[e].code,r[1]=t[e].shortName,r[2]=t[e].name,r}function S(n){var t,e,r=n[1]+"";return{c:function(){t=U("a"),e=v(r),this.h()},l:function(n){t=p(n,"A",{class:!0,href:!0});var o=g(t);e=$(o,r),o.forEach(y),this.h()},h:function(){x(t,"class","flex flex-col px-1 bg-green-600 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-5"),x(t,"href","/teams/"+n[0])},m:function(n,r){G(n,t,r),B(t,e)},p:N,d:function(n){n&&y(t)}}}function b(n){for(var t,e,r=w,o=[],c=0;c<r.length;c+=1)o[c]=S(E(n,r,c));return{c:function(){t=U("div"),e=U("div");for(var n=0;n<o.length;n+=1)o[n].c();this.h()},l:function(n){t=p(n,"DIV",{class:!0});var r=g(t);e=p(r,"DIV",{class:!0});for(var c=g(e),a=0;a<o.length;a+=1)o[a].l(c);c.forEach(y),r.forEach(y),this.h()},h:function(){x(e,"class","flex flex-col w-4/5 space-y-2"),x(t,"class","flex flex-auto flex-col items-center h-full py-2")},m:function(n,r){G(n,t,r),B(t,e);for(var c=0;c<o.length;c+=1)o[c].m(e,null)},p:function(n,t){if(0&t){var c;for(r=w,c=0;c<r.length;c+=1){var a=E(n,r,c);o[c]?o[c].p(a,t):(o[c]=S(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},d:function(n){n&&y(t),R(o,n)}}}function j(n){var t,e;return t=new M({props:{$$slots:{default:[b]},$$scope:{ctx:n}}}),{c:function(){f(t.$$.fragment)},l:function(n){i(t.$$.fragment,n)},m:function(n,r){u(t,n,r),e=!0},p:function(n,e){var r=l(e,1)[0],o={};32&r&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i:function(n){e||(h(t.$$.fragment,n),e=!0)},o:function(n){d(t.$$.fragment,n),e=!1},d:function(n){m(t,n)}}}var I=function(t){n(f,s);var e=D(f);function f(n){var t;return r(this,f),t=e.call(this),o(a(t),n,null,j,c,{}),t}return f}();function P(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,c=t(n);if(r){var a=t(this).constructor;o=Reflect.construct(c,arguments,a)}else o=c.apply(this,arguments);return e(this,o)}}function V(n){var t,e;return t=new I({}),{c:function(){f(t.$$.fragment)},l:function(n){i(t.$$.fragment,n)},m:function(n,r){u(t,n,r),e=!0},p:N,i:function(n){e||(h(t.$$.fragment,n),e=!0)},o:function(n){d(t.$$.fragment,n),e=!1},d:function(n){m(t,n)}}}var k=function(t){n(f,s);var e=P(f);function f(n){var t;return r(this,f),t=e.call(this),o(a(t),n,null,V,c,{}),t}return f}();export default k;
