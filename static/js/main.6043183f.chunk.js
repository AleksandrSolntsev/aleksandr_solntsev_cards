(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={header:"Header_header__1sfse",logoImg:"Header_logoImg__lbPLR"}},27:function(e,t,n){e.exports=n.p+"static/media/pngwing.com.3990442b.png"},3:function(e,t,n){e.exports={ideasBlock:"MyIdeas_ideasBlock__1lYYM",navigateKeys:"MyIdeas_navigateKeys__10xd6",ideasBlockNavigate:"MyIdeas_ideasBlockNavigate__E6_O4",caruselBlock:"MyIdeas_caruselBlock__plDwq",idea:"MyIdeas_idea__33vCm",triangleLeft:"MyIdeas_triangleLeft__3VizQ",triangleRight:"MyIdeas_triangleRight__1xah1",storageButtons:"MyIdeas_storageButtons__2EtFK"}},30:function(e,t,n){e.exports=n(72)},38:function(e,t,n){},4:function(e,t,n){e.exports={CompletedChallengesBlock:"CompletedChallenges_CompletedChallengesBlock__1224U",CompletedChallengesTable:"CompletedChallenges_CompletedChallengesTable__wVfp_",table:"CompletedChallenges_table__1C9NS",tHead:"CompletedChallenges_tHead__1Cetp",tBody:"CompletedChallenges_tBody__2TXaW",titleTh:"CompletedChallenges_titleTh__2Lwq9"}},40:function(e,t,n){},6:function(e,t,n){e.exports={ideasBlock:"Ideas_ideasBlock__2OMzu",caruselBlock:"Ideas_caruselBlock__3F6aA",idea:"Ideas_idea__JQdDo",cardFooterr:"Ideas_cardFooterr__3CPd_"}},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=(n(38),n(29)),l=n(7),s=n(2),u=(n(40),n(8)),d=n.n(u),h=function(e){return r.a.createElement("div",{className:d.a.achievementsBlock},r.a.createElement("h2",null,"Achievements:"),r.a.createElement("div",{className:d.a.achievementsElements},Object.entries(e.ideasCounter).map(function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{key:n+1,className:d.a.achievementsElementsBody},r.a.createElement("div",{className:d.a.sphere},a),r.a.createElement("p",null,n.charAt(0).toUpperCase()+n.slice(1)))})))},m=n(4),f=n.n(m),p=n(10),y=n.n(p),v=function(e){return e.achievments.map(function(e,t){return r.a.createElement("tr",{key:e.key+t},r.a.createElement("th",{scope:"row"}),r.a.createElement("td",null,e.activity),r.a.createElement("td",null,e.type),r.a.createElement("td",null,y()(e.date,["DD.MM.YYYY HH:mm"]).local().startOf("seconds").fromNow()))})},g=function(e){return r.a.createElement("div",{className:f.a.CompletedChallengesBlock},r.a.createElement("h2",null,"Completed Challenges:"),r.a.createElement("div",{className:f.a.CompletedChallengesTable},r.a.createElement("table",{className:f.a.table},r.a.createElement("thead",null,r.a.createElement("tr",{className:f.a.tHead},r.a.createElement("td",null,"\xa0"),r.a.createElement("th",{className:f.a.titleTh,scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"When"))),r.a.createElement("tbody",{className:f.a.tBody},r.a.createElement(v,{achievments:e.achievments})))))},E=n(14),w=n.n(E),_=n(27),I=n.n(_),b=function(){return r.a.createElement("header",{className:w.a.header},r.a.createElement("img",{alt:"Lets Do IT!",src:"https://img.icons8.com/dusk/344/kawaii-coffee.png"}),r.a.createElement("h1",null,"Let's do it!",r.a.createElement("img",{className:w.a.logoImg,src:I.a,alt:"Lets Do IT!"})))},k=n(6),M=n.n(k),N=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(),m=Object(s.a)(h,2),f=m[0],p=m[1],y=function t(){fetch("https://www.boredapi.com/api/activity").then(function(e){return e.json()}).then(function(n){e.newMyIdea.length<40?(f&&f.key===n.key&&t(),e.newMyIdea.forEach(function(e){e.key===n.key&&t()}),d(!0),p(n)):alert("Ideas is over")},function(e){d(!0),c(e)})};return Object(a.useEffect)(function(){y()},[]),o?r.a.createElement("div",null,"Error: ",o.message):u?r.a.createElement("div",{className:M.a.idea,onDoubleClick:function(){e.getIdeas(f),y()}},r.a.createElement("p",{key:f.key},f.activity),r.a.createElement("div",{className:M.a.cardFooterr},r.a.createElement("hr",null),r.a.createElement("p",null,f.type.charAt(0).toUpperCase()+f.type.slice(1)))):r.a.createElement("div",null,"Loading...")},x=function(e){return r.a.createElement("div",{className:M.a.ideasBlock},r.a.createElement("h2",null,"Choose fresh ideas to do:"),r.a.createElement("div",{className:M.a.caruselBlock},r.a.createElement(N,{getIdeas:e.getIdeas,newMyIdea:e.newMyIdea}),r.a.createElement(N,{getIdeas:e.getIdeas,newMyIdea:e.newMyIdea}),r.a.createElement(N,{getIdeas:e.getIdeas,newMyIdea:e.newMyIdea}),r.a.createElement(N,{getIdeas:e.getIdeas,newMyIdea:e.newMyIdea})))},C=n(28),O=n(3),L=n.n(O),j=n(11),S=function(e,t){j({method:"post",url:"http://localhost:5000/postideas",data:[].concat(Object(l.a)(e),Object(l.a)(t))})},B=function(){return j({method:"get",url:"http://localhost:5000/getideas"}).then(function(e){return e.data.achivFilter})},T=function(){return j({method:"get",url:"http://localhost:5000/getideas"}).then(function(e){return e.data.ideasFilter})},A=function(e){return e.newMyIdea.map(function(t,n){return r.a.createElement("div",{key:t.key+n,className:L.a.idea,ref:e.slideEl,onClick:function(){e.setcurrentSlideIndex(n)},onDoubleClick:function(){e.doneMyIdea(t.key),(e.newMyIdea.length=e.currentSlideIndex+1)&&e.prevSlide()}},r.a.createElement("p",null,t.activity),e.currentSlideIndex!==n||r.a.createElement("div",{className:L.a.cardFooter},r.a.createElement("hr",null),r.a.createElement("p",null,t.type.charAt(0).toUpperCase()+t.type.slice(1))))})};function F(){F=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),c=new b(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return M()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function d(){}function h(){}function m(){}var f={};i(f,r,function(){return this});var p=Object.getPrototypeOf,y=p&&p(p(k([])));y&&y!==t&&n.call(y,r)&&(f=y);var v=m.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function c(){return new t(function(a,c){!function a(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(d).then(function(e){u.value=e,c(u)},function(e){return a("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=m,i(v,"constructor",m),i(m,"constructor",h),h.displayName=i(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new E(l(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},g(v),i(v,c,"Generator"),i(v,r,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=k,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var D=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useRef)(null),l=function(){c(o>0?o-1:e.newMyIdea.length-1)},u=0;i&&i.current&&i.current.offsetWidth&&(u=-i.current.offsetWidth*o-60*o);var d=function(){var t=Object(C.a)(F().mark(function t(){var n,a;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return n=t.sent,e.setMyIdea(n),t.next=6,B();case 6:a=t.sent,e.setAchievments(a);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:L.a.ideasBlock},r.a.createElement("h2",null,"Choose fresh ideas to do:"),r.a.createElement("div",{className:L.a.navigateKeys},!!e.newMyIdea.length&&r.a.createElement("div",{className:L.a.triangleLeft,onClick:function(){l()}}),r.a.createElement("div",{className:L.a.ideasBlockNavigate},r.a.createElement("div",{className:L.a.caruselBlock,style:{transform:"translateX(".concat(u,"px)")}},r.a.createElement(A,{newMyIdea:e.newMyIdea,slideEl:i,setcurrentSlideIndex:c,currentSlideIndex:o,doneMyIdea:e.doneMyIdea,prevSlide:l}))),!!e.newMyIdea.length&&r.a.createElement("div",{className:L.a.triangleRight,onClick:function(){o<e.newMyIdea.length-1?c(o+1):c(0)}})),r.a.createElement("p",null,e.newMyIdea.length?o+1:0,"/",e.newMyIdea.length),r.a.createElement("div",{className:L.a.storageButtons},r.a.createElement("button",{onClick:function(){S(e.newMyIdea,e.achievments),localStorage.clear()}},"SendData"),r.a.createElement("button",{onClick:d},"GetData")))};var Y=function(){var e=Object(a.useState)(localStorage.getItem("newMyIdea")?JSON.parse(localStorage.getItem("newMyIdea")):[]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(localStorage.getItem("achievments")?JSON.parse(localStorage.getItem("achievments")):[]),u=Object(s.a)(c,2),d=u[0],m=u[1];return Object(a.useEffect)(function(){localStorage.setItem("achievments",JSON.stringify(d)),localStorage.setItem("newMyIdea",JSON.stringify(n))},[d,n]),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(b,null),r.a.createElement(x,{getIdeas:function(e){o([].concat(Object(l.a)(n),[e]))},newMyIdea:n}),r.a.createElement(D,{newMyIdea:n,doneMyIdea:function(e){var t=y()().format("DD.MM.YYYY HH:mm"),a=n.find(function(t){return t.key===e});m([].concat(Object(l.a)(d),[Object(i.a)({},a,{date:t,status:1})])),o(n.filter(function(t){return t.key!==e}))},achievments:d,setAchievments:m,setMyIdea:o}),r.a.createElement(h,{newMyIdea:n,ideasCounter:function(){var e={};return d.map(function(t){return e[t.type]?e[t.type]=e[t.type]+1:e[t.type]=1,t}),e}()}),r.a.createElement(g,{achievments:d}))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(Y,null))},8:function(e,t,n){e.exports={achievementsBlock:"MyAchievements_achievementsBlock__328jW",achievementsElements:"MyAchievements_achievementsElements__2W12S",achievementsElementsBody:"MyAchievements_achievementsElementsBody__3olNR",sphere:"MyAchievements_sphere__2NQve"}}},[[30,2,1]]]);
//# sourceMappingURL=main.6043183f.chunk.js.map