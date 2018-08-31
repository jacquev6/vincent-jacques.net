/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-hashchange !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,r,f;for(var c in i)if(i.hasOwnProperty(c)){if(e=[],n=i[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)r=e[a],f=r.split("."),1===f.length?Modernizr[f[0]]=s:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=s),u.push((s?"":"no-")+f.join("-"))}}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):c?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var u=[],f=n.documentElement,c="svg"===f.nodeName.toLowerCase(),l=function(){function e(e,n){var s;return e?(n&&"string"!=typeof n||(n=a(n||"div")),e="on"+e,s=e in n,!s&&o&&(n.setAttribute||(n=a("div")),n.setAttribute(e,""),s="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),s):!1}var o=!("onblur"in n.documentElement);return e}();r.hasEvent=l,Modernizr.addTest("hashchange",function(){return l("hashchange",e)===!1?!1:n.documentMode===t||n.documentMode>7}),s(),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);