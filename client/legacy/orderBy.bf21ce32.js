import{c as r,d as n,i as t,e as u,f as e,g as i,b as a,h as o}from"./map.6f3acd1c.js";var f=function(r,n){var t=r.length;for(r.sort(n);t--;)r[t]=r[t].value;return r};var c=function(n,t){if(n!==t){var u=void 0!==n,e=null===n,i=n==n,a=r(n),o=void 0!==t,f=null===t,c=t==t,l=r(t);if(!f&&!l&&!a&&n>t||a&&o&&c&&!f&&!l||e&&o&&c||!u&&c||!i)return 1;if(!e&&!a&&!l&&n<t||l&&u&&i&&!e&&!a||f&&u&&i||!o&&i||!c)return-1}return 0};var l=function(r,n,t){for(var u=-1,e=r.criteria,i=n.criteria,a=e.length,o=t.length;++u<a;){var f=c(e[u],i[u]);if(f)return u>=o?f:f*("desc"==t[u]?-1:1)}return r.index-n.index};var v=function(r,c,v){c=c.length?n(c,(function(r){return t(r)?function(n){return u(n,1===r.length?r[0]:r)}:r})):[e];var s=-1;c=n(c,i(a));var d=o(r,(function(r,t,u){return{criteria:n(c,(function(n){return n(r)})),index:++s,value:r}}));return f(d,(function(r,n){return l(r,n,v)}))};var s=function(r,n,u,e){return null==r?[]:(t(n)||(n=null==n?[]:[n]),t(u=e?void 0:u)||(u=null==u?[]:[u]),v(r,n,u))};export{s as o};