!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("lodash"),require("styled-components"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","lodash","styled-components","react-dom"],t):"object"==typeof exports?exports["react-teleportation"]=t(require("react"),require("lodash"),require("styled-components"),require("react-dom")):e["react-teleportation"]=t(e.react,e.lodash,e["styled-components"],e["react-dom"])}(this,function(e,t,n,o){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(3);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var d=n(2),u=o(d),l=n(6),c=o(l),s=n(4),f=function(e){return{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:e?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0.1)",zIndex:10}},p=function h(e){var t=this;r(this,h),this.i=(0,s.uniqueId)("teleport"),this.m=document.body.appendChild(document.createElement("m")),this.M=function(){return u["default"].createElement("x",{style:t.style,id:t.i,onClick:t._close},t.el)},this.init=function(e){t.el=e,t._render()},this.clear=function(){(0,s.defer)(c["default"].unmountComponentAtNode,t.m)},this._render=function(){c["default"].render(u["default"].createElement(t.M,null),t.m)},this._close=function(e){e.target.id===t.i&&t.clear()},this.style=f((0,s.get)(e,"clear",!1))};t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var r=n(2),i=o(r),a={div:{border:"1px solid lightgrey",width:500,height:300,background:"white",margin:"20vh auto",borderRadius:3,boxSizing:"border-box",padding:"20px",fontFamily:"Noto, Roboto, sans-serif"}},d=t.Modal=function(e){var t=e.children;return i["default"].createElement("div",{style:a.div},t)};d.propTypes={children:i["default"].PropTypes.node}},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var i=r(["\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 30vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n"],["\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 30vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n"]),a=r(["\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ",";\n"],["\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ",";\n"]),d=r(["\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ",";\n"],["\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ",";\n"]),u=r(["\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  &:hover {\n    background-color: #eee;\n  }\n"],["\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  &:hover {\n    background-color: #eee;\n  }\n"]),l=n(2),c=o(l),s=n(4),f=n(5),p=o(f),h="Noto, Roboto, sans-serif",g=p["default"].div(i),m=p["default"].h1(a,h),x=p["default"].p(d,h),b=p["default"].button(u),y=t.Alert=function(e){var t=e.title,n=e.description,o=e.right,r=e.left;return c["default"].createElement(g,null,c["default"].createElement(m,null,(0,s.capitalize)(t)),c["default"].createElement(x,null,(0,s.capitalize)(n)),c["default"].createElement("footer",{style:{padding:8}},c["default"].createElement(b,{onClick:r.action},r.title),c["default"].createElement(b,{onClick:o.action},o.title)))};y.propTypes={title:c["default"].PropTypes.string.isRequired,description:c["default"].PropTypes.string.isRequired,right:c["default"].PropTypes.shape({title:c["default"].PropTypes.string.isRequired,action:c["default"].PropTypes.func.isRequired}),left:c["default"].PropTypes.shape({title:c["default"].PropTypes.string.isRequired,action:c["default"].PropTypes.func.isRequired})}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o}])});