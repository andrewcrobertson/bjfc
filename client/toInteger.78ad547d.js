import{c as r,k as t}from"./map.0e755dd5.js";var e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt;var s=function(s){if("number"==typeof s)return s;if(r(s))return NaN;if(t(s)){var u="function"==typeof s.valueOf?s.valueOf():s;s=t(u)?u+"":u}if("string"!=typeof s)return 0===s?s:+s;s=s.replace(e,"");var o=a.test(s);return o||i.test(s)?f(s.slice(2),o?2:8):n.test(s)?NaN:+s};var u=function(r){return r?Infinity===(r=s(r))||-Infinity===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0};var o=function(r){var t=u(r),e=t%1;return t==t?e?t-e:t:0};export{s as a,o as t};
