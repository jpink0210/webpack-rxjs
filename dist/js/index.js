!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([698,1]),n()}({459:function(e,t,n){var r=n(460);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(462)(r,o);r.locals&&(e.exports=r.locals)},460:function(e,t,n){(e.exports=n(461)(!1)).push([e.i,'* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na, h1, h2, h3, h4, h5, h6, span, p, a, input, button, div, span {\n  font-family: "Microsoft JhengHei" ,"sans-serif";\n  text-decoration: none; }\n\nimg {\n  display: block; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  -webkit-overflow-scrolling: touch; }\n\na {\n  cursor: pointer; }\n\n#app {\n  width: 100%;\n  height: 100%; }\n\nh1 {\n  text-align: center; }\n\nheader {\n  width: 800px;\n  margin: 20px auto; }\n  header nav {\n    text-align: center;\n    padding-top: 30px; }\n  header nav ul a {\n    margin: 0 10px;\n    text-decoration: none;\n    color: black; }\n    header nav ul a:hover {\n      color: #ff9100; }\n\n.drag {\n  position: absolute;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background-color: tomato;\n  cursor: all-scroll; }\n  .drag .dragImg {\n    width: 200px;\n    height: 200px;\n    background-size: contain; }\n\n.balls img {\n  position: absolute;\n  border-radius: 50%;\n  border: 3px white solid;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.balls div {\n  position: absolute;\n  top: 0;\n  left: 0; }\n',""])},698:function(e,t,n){"use strict";n.r(t);n(248),n(450);var r=n(5),o=n.n(r),a=n(166),i=n.n(a),c=n(92),l=n(121),u=n(702),f=(n(459),n(197)),s=n(701),p=n(703),b=n(704),m=n(131);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,h(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("drag")[this.props.dragId],n=document.body,r=m.Observable.fromEvent(t,"mousedown"),o=m.Observable.fromEvent(n,"mouseup"),a=m.Observable.fromEvent(n,"mousemove"),i=function(e,t,n){return Math.min(Math.max(e,n),t)};r.map(function(n){return e.props.addZIndex(),t.style.zIndex=e.props.imgZIndex,a.takeUntil(o)}).concatAll().withLatestFrom(r,function(e,t){return{x:i(e.clientX-t.offsetX,window.innerWidth,0),y:i(e.clientY-t.offsetY,window.innerHeight,0)}}).subscribe(function(e){t.style.left=e.x+"px",t.style.top=e.y+"px"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"drag",style:{left:this.props.data.left+"px",top:this.props.data.top+"px"}},o.a.createElement("div",{className:"dragImg",style:{backgroundImage:"url(".concat(this.props.data.img,")")}}))}}])&&d(n.prototype,r),a&&d(n,a),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,j(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Hi, this is DragList Page(點拉拖曳)"),this.props.DragList.list.map(function(t,n){return o.a.createElement(w,{key:"drag"+n,addZIndex:e.props.addZIndex,imgZIndex:e.props.DragList.imgZIndex,data:t,dragId:n})}))}}])&&x(n.prototype,r),a&&x(n,a),t}(),S=Object(l.b)(function(e){return{DragList:e.DragList}},function(e){return{addZIndex:function(){e({type:"ADD_ZINDEX"})}}})(P),k=n(241);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,C(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=document.getElementsByTagName("img"),t=k.Observable.fromEvent(document,"mousemove").map(function(e){return{x:e.clientX,y:e.clientY}});Array.from(e).forEach(function(e,n){t.delay(600*(Math.pow(.65,n)+Math.cos(n/4))/2).subscribe(function(t){e.style.transform="translate3d("+t.x+"px, "+t.y+"px, 0)"})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"balls"},o.a.createElement("h1",null,"hi, this is Balls Page"),o.a.createElement("div",null,o.a.createElement("img",{width:"50px",src:"/src/images/dog.png",alt:""}),o.a.createElement("img",{width:"50px",src:"/src/images/whale.png",alt:""}),o.a.createElement("img",{width:"50px",src:"/src/images/eagle.png",alt:""}),o.a.createElement("img",{width:"50px",src:"/src/images/giraffe.png",alt:""}),o.a.createElement("img",{width:"50px",src:"/src/images/kangaroo.png",alt:""}),o.a.createElement("img",{width:"50px",src:"/src/images/cat.png",alt:""})))}}])&&D(n.prototype,r),a&&D(n,a),t}(),M=Object(l.b)(function(e){return{balls:e.Balls}})(Z);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var H=f.a.button.withConfig({displayName:"App__Button",componentId:"sc-1865uo-0"})(["position:absolute;bottom:0;"]),R=f.a.h1.withConfig({displayName:"App__H1",componentId:"sc-1865uo-1"})(["font-size:50px;color:cadetblue;"]),J=function(e){function t(){var e,n,r,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];return r=this,n=!(o=(e=B(t)).call.apply(e,[this].concat(u)))||"object"!==L(o)&&"function"!=typeof o?X(r):o,a=X(X(n)),c=function(){console.log("this is A")},(i="handleA")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement(R,null,"Webpack Demo"),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement(s.a,{to:"/"},"首頁"),o.a.createElement(s.a,{to:"/balls"},"拖曳跟隨")))),o.a.createElement(p.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:S}),o.a.createElement(b.a,{path:"/balls",component:M})),o.a.createElement(H,{onClick:this.handleA},"open"))}}])&&N(n.prototype,a),i&&N(n,i),t}();function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){U(e,t,n[t])})}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W={list:[{name:"dog",img:"/assets/images/dog.png",left:155,top:313},{name:"cat",img:"/assets/images/cat.png",left:300,top:370},{name:"whale",img:"/assets/images/whale.png",left:417,top:239},{name:"eagle",img:"/assets/images/eagle.png",left:592,top:490},{name:"giraffe",img:"/assets/images/giraffe.png",left:871,top:381},{name:"kangaroo",img:"/assets/images/kangaroo.png",left:1045,top:258},{name:"fox",img:"/assets/images/fox.png",left:723,top:323}],imgZIndex:5},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_ZINDEX":return Y({},e,{imgZIndex:e.imgZIndex+1});default:return Y({},e)}};function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){G(e,t,n[t])})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e,t){switch(t.type){case"UPDATE_BALLS":default:return q({},e)}},Q=Object(c.c)({DragList:F,Balls:K}),V=n(245);var $=Object(c.d)(Q,{},Object(c.a)(V.a));i.a.render(o.a.createElement(l.a,{store:$},o.a.createElement(u.a,null,o.a.createElement(J,null))),document.getElementById("app"))}});