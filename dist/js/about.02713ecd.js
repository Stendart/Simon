(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"568f":function(t,e,r){"use strict";r("c457")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},"71d5":function(t,e,r){"use strict";r("91ab")},"7c8b":function(t,e,r){t.exports=r.p+"media/3.c1c96b44.mp3"},"7d36":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"game__field"},t._l(t.squaresConfig,(function(e,n){return r("GameSquare",{key:e.color,attrs:{color:e.color,rotation:e.rotate,sound:e.sound,squareNumber:n+1,eventClickNumber:t.eventClickNumber,soundDelay:t.soundDelay,isCantActive:t.isLose||!t.isPlayerAnswer},on:{playerClick:t.playerClick}})})),1),r("div",{staticClass:"game__round"},[r("p",[t._v("Номер раунда: "+t._s(t.roundNum))]),r("button",{staticClass:"game__start_btn",on:{click:t.gamePlay}},[t._v("Start")])])])},o=[],i=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"square ",class:{"square-active":t.eventClick(),"no-hover":t.isCantActive},style:{backgroundColor:t.color,transform:"rotate("+t.rotation+"deg)"},attrs:{"aria-disabled":!0},on:{click:t.clickHandler}},[r("audio",{ref:"audio",attrs:{src:t.soundUrl}})])}),a=[],s=(r("a9e3"),{name:"GameSquare",props:{color:String,sound:String,rotation:{type:Number,default:0},isCantActive:Boolean,squareNumber:Number,eventClickNumber:Number,soundDelay:Number},data:function(){return{}},methods:{clickHandler:function(){this.isCantActive||(this.stopClick(),this.soundPlay(),setTimeout(this.stopClick,this.soundDelay),this.$emit("playerClick",this.squareNumber))},soundPlay:function(){this.$refs.audio.play()},stopClick:function(){this.$refs.audio.load()},eventClick:function(){if(this.eventClickNumber===this.squareNumber)return this.soundPlay(),setTimeout(this.stopClick,this.soundDelay),!0}},computed:{soundUrl:function(){return r("9342")("./"+this.sound+".mp3")}}}),c=s,u=(r("71d5"),r("2877")),l=Object(u["a"])(c,i,a,!1,null,"c15b9848",null),f=l.exports,h={name:"Game",data:function(){return{numRound:1,roundDelay:1500,arrClicks:[4,3,3],playerAnswerIndex:0,isPlayerAnswer:!1,isLose:!1,roundNum:1,eventClickNumber:0,squaresConfig:[{color:"#FF5643",rotate:0,sound:"1"},{color:"#1e90ff",rotate:90,sound:"2"},{color:"#FEEF33",rotate:270,sound:"3"},{color:"#BEDE15",rotate:180,sound:"4"}]}},methods:{generateClick:function(){var t=3*Math.random()+1,e=Math.round(t);this.arrClicks.push(e)},setShineSquare:function(t){this.eventClickNumber=t},clearShineSquare:function(){this.eventClickNumber=0},gameRound:function(){var t=this;if(!this.isLose){this.generateClick();var e=this.getNextSquare(),r=function r(){var n=e.next();n.done?(console.log("Проверка"),t.isPlayerAnswer=!0):(setTimeout(t.clearShineSquare,t.soundDelay),setTimeout(r,t.roundDelay),t.setShineSquare(n.value))};setTimeout(r,this.roundDelay)}},gamePlay:function(){this.isLose=!1,this.gameRound()},playerClick:function(t){if(this.isPlayerAnswer)if(this.playerAnswerIndex<this.arrClicks.length-1){var e=this.arrClicks[this.playerAnswerIndex]===t;e||(console.log("You lose"),alert("You lose"),this.isLose=!0),this.playerAnswerIndex++}else this.playerAnswerIndex===this.arrClicks.length-1&&(this.isPlayerAnswer=!1,this.playerAnswerIndex=0,this.roundNum++,this.gameRound())},getNextSquare:regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<this.arrClicks.length)){t.next=7;break}return t.next=4,this.arrClicks[e];case 4:e++,t.next=1;break;case 7:case"end":return t.stop()}}),t,this)}))},computed:{soundDelay:function(){return this.roundDelay-100}},created:function(){this.roundDelay=this.$store.getters.getDelay,console.log("this.roundDelay",this.roundDelay)},components:{GameSquare:f}},p=h,d=(r("568f"),Object(u["a"])(p,n,o,!1,null,null,null));e["default"]=d.exports},"8b91":function(t,e,r){t.exports=r.p+"media/1.99e50f7d.mp3"},"91ab":function(t,e,r){},9342:function(t,e,r){var n={"./1.mp3":"8b91","./2.mp3":"a536","./3.mp3":"7c8b","./4.mp3":"cb7a"};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="9342"},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=C(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(I([])));x&&x!==r&&n.call(x,i)&&(w=x);var k=g.prototype=m.prototype=Object.create(w);function N(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function C(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return O()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=k.constructor=g,g.constructor=v,v.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},N(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(k),c(k,s,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a536:function(t,e,r){t.exports=r.p+"media/2.d2c4a2c4.mp3"},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("6eeb"),s=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),h=r("7c73"),p=r("241c").f,d=r("06cf").f,y=r("9bf2").f,m=r("58a8").trim,v="Number",g=o[v],w=g.prototype,b=c(h(w))==v,x=function(t){var e,r,n,o,i,a,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(i=u.slice(2),a=i.length,s=0;s<a;s++)if(c=i.charCodeAt(s),c<48||c>o)return NaN;return parseInt(i,n)}return+u};if(i(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(b?f((function(){w.valueOf.call(r)})):c(r)!=v)?u(new g(x(e)),r,N):x(e)},E=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;E.length>C;C++)s(g,k=E[C])&&!s(N,k)&&y(N,k,d(g,k));N.prototype=w,w.constructor=N,a(o,v,N)}},c457:function(t,e,r){},cb7a:function(t,e,r){t.exports=r.p+"media/4.36d5a722.mp3"}}]);
//# sourceMappingURL=about.02713ecd.js.map