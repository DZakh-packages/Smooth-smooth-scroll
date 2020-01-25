"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}!function(){'use strict';function a(){function b(a,b){this.scrollLeft=a,this.scrollTop=b}function g(a){if(null===a||"object"!=_typeof(a)||void 0===a.behavior||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==_typeof(a)&&"smooth"===a.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+a.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(a,b){return"Y"===b?a.clientHeight+e<a.scrollHeight:"X"===b?a.clientWidth+e<a.scrollWidth:void 0}function j(a,b){var c=d.getComputedStyle(a,null)["overflow"+b];return"auto"===c||"scroll"===c}function k(a){var b,f,g,h,j=(u()-a.startTime)/o;h=j=1<j?1:j,b=.5*(1-Math.cos(Math.PI*h)),f=a.startX+(a.x-a.startX)*b,g=a.startY+(a.y-a.startY)*b,a.method.call(a.scrollable,f,g),f===a.x&&g===a.y||d.requestAnimationFrame(k.bind(d,a))}function a(g,i,e){var j,l,n,o,r=u();g===m.body?(j=d,l=d.scrollX||d.pageXOffset,n=d.scrollY||d.pageYOffset,o=q.scroll):(j=g,l=g.scrollLeft,n=g.scrollTop,o=b),k({scrollable:j,method:o,startTime:r,startX:l,startY:n,x:i,y:e})}var d=window,m=document;if(!("scrollBehavior"in m.documentElement.style&&!0!==d.__forceSmoothScrollPolyfill__)){var h,n=d.HTMLElement||d.Element,o=468,q={scroll:d.scroll||d.scrollTo,scrollBy:d.scrollBy,elementScroll:n.prototype.scroll||b,scrollIntoView:n.prototype.scrollIntoView},u=d.performance&&d.performance.now?d.performance.now.bind(d.performance):Date.now,e=(h=d.navigator.userAgent,new RegExp("MSIE |Trident/|Edge/").test(h)?1:0);d.scroll=d.scrollTo=function(){void 0!==arguments[0]&&(!0===g(arguments[0])?q.scroll.call(d,void 0===arguments[0].left?"object"==_typeof(arguments[0])?d.scrollX||d.pageXOffset:arguments[0]:arguments[0].left,void 0===arguments[0].top?void 0===arguments[1]?d.scrollY||d.pageYOffset:arguments[1]:arguments[0].top):a.call(d,m.body,void 0===arguments[0].left?d.scrollX||d.pageXOffset:~~arguments[0].left,void 0===arguments[0].top?d.scrollY||d.pageYOffset:~~arguments[0].top))},d.scrollBy=function(){void 0!==arguments[0]&&(g(arguments[0])?q.scrollBy.call(d,void 0===arguments[0].left?"object"==_typeof(arguments[0])?0:arguments[0]:arguments[0].left,void 0===arguments[0].top?void 0===arguments[1]?0:arguments[1]:arguments[0].top):a.call(d,m.body,~~arguments[0].left+(d.scrollX||d.pageXOffset),~~arguments[0].top+(d.scrollY||d.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==g(arguments[0])){var b=arguments[0].left,c=arguments[0].top;a.call(this,this,void 0===b?this.scrollLeft:~~b,void 0===c?this.scrollTop:~~c)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");q.elementScroll.call(this,void 0===arguments[0].left?"object"==_typeof(arguments[0])?this.scrollLeft:~~arguments[0]:~~arguments[0].left,void 0===arguments[0].top?void 0===arguments[1]?this.scrollTop:~~arguments[1]:~~arguments[0].top)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0===g(arguments[0])?q.elementScroll.call(this,void 0===arguments[0].left?~~arguments[0]+this.scrollLeft:~~arguments[0].left+this.scrollLeft,void 0===arguments[0].top?~~arguments[1]+this.scrollTop:~~arguments[0].top+this.scrollTop):this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}))},n.prototype.scrollIntoView=function(){if(!0!==g(arguments[0])){var b=function(a){for(;a!==m.body&&!1===(c=f(b=a,"Y")&&j(b,"Y"),d=f(b,"X")&&j(b,"X"),c||d);)a=a.parentNode||a.host;var b,c,d;return a}(this),c=b.getBoundingClientRect(),e=this.getBoundingClientRect();b===m.body?d.scrollBy({left:e.left,top:e.top,behavior:"smooth"}):(a.call(this,b,b.scrollLeft+e.left-c.left,b.scrollTop+e.top-c.top),"fixed"!==d.getComputedStyle(b).position&&d.scrollBy({left:c.left,top:c.top,behavior:"smooth"}))}else q.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports={polyfill:a}:a()}(),function(a){a&&a.prototype&&null==a.prototype.lastElementChild&&Object.defineProperty(a.prototype,"lastElementChild",{get:function get(){for(var a,b=this.childNodes,c=b.length-1;a=b[c--];)if(1===a.nodeType)return a;return null}})}(window.Node||window.Element),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var b=this;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null});