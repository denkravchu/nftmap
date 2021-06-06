!function(t){var e={};function o(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){var o=!0;window.addEventListener("load",(function(){document.querySelectorAll("[data-tab]").forEach((function(t){t.addEventListener("click",(function(){if("def"===this.getAttribute("data-state")){var t=document.querySelector(".active-tab"),e=document.querySelector(this.getAttribute("data-tab")),o=document.querySelector("header");document.querySelector('[data-tab][data-state="active"]').setAttribute("data-state","def"),this.setAttribute("data-state","active"),function(t,e){e.style.display="block",t.style.display="block",setTimeout((function(){e.classList.add("active-tab"),t.classList.remove("active-tab"),setTimeout((function(){e.style.display="",t.style.display=""}),300)}),30)}(t,e),document.querySelector(".active[data-mobile-tab]").classList.remove("active"),document.querySelector('[data-tab-name="'.concat(this.getAttribute("data-tab-name"),'"][data-mobile-tab]')).classList.add("active");var a=document.querySelector("#"+this.getAttribute("data-line-target"));switch(this.getAttribute("data-position")){case"left":o.classList.remove("background-blur"),a.style.left=0;break;case"right":o.classList.add("background-blur"),a.style.left="50%"}}}))}));var t=[];t[0]=document.querySelector(".sun .planet"),t[1]=document.querySelector(".neptune .planet"),t[2]=document.querySelector(".jupiter .planet"),t[3]=document.querySelector(".earth .planet"),t[4]=document.querySelector(".mercury .planet"),t[5]=document.querySelector(".venus .planet"),t[6]=document.querySelector(".mars .planet"),t[7]=document.querySelector(".saturn .planet"),t[8]=document.querySelector(".uranus .planet"),t[9]=document.querySelector(".moon .planet");var e=document.querySelector(".orbits-canvas");!function(t,o){t.forEach((function(t,a){t.addEventListener("mouseenter",(function(){e.classList.add(o[a])})),t.addEventListener("mouseleave",(function(){e.classList.remove(o[a])}))}))}(t,["active-sun","active-planet-1","active-planet-2","active-planet-3","active-planet-4","active-planet-5","active-planet-6","active-planet-7","active-planet-8","active-planet-9"]);var a,n,c=document.querySelectorAll(".zoom-out [data-move]"),r=!0;function s(){document.querySelector(".solar-system");var t=document.querySelector(".root"),e=this.getAttribute("data-name"),r=document.querySelector("header .logo");o=!1,t.setAttribute("data-prev-planet",e),t.classList.add("zoom-in"),t.classList.add("planet-active-"+e),t.classList.add("zooming"),setTimeout((function(){t.classList.remove("zooming"),t.classList.add("carousel")}),600),t.classList.remove("zoom-out"),r.setAttribute("data-name",e),l(e),c.forEach((function(t){return t.removeEventListener("click",s)})),(a=document.querySelectorAll(".zoom-in [data-move-out]")).forEach((function(t){return t.addEventListener("click",i)})),(n=document.querySelectorAll(".zoom-in .planet[data-move]")).forEach((function(t){return t.addEventListener("click",u)}))}function i(){var t=document.querySelector(".root"),e=this.getAttribute("data-name")||this.parentNode.getAttribute("data-name");o=!0,t.setAttribute("data-prev-planet",""),t.classList.add("zoom-out"),t.classList.remove("planet-active-"+e),t.classList.remove("zoom-in"),t.classList.add("zooming"),setTimeout((function(){t.classList.remove("zooming"),t.classList.remove("carousel")}),0),d(e),a.forEach((function(t){return t.removeEventListener("click",i)})),n.forEach((function(t){return t.removeEventListener("click",u)})),(c=document.querySelectorAll(".zoom-out [data-move]")).forEach((function(t){return t.addEventListener("click",s)}))}function u(){document.querySelector(".solar-system");var t=document.querySelector(".root"),e=this.getAttribute("data-name"),o=t.getAttribute("data-prev-planet"),a=document.querySelector("header .logo");r&&(r=!1,d(o),l(e),a.setAttribute("data-name",e),t.classList.remove("planet-active-"+o),t.classList.add("planet-active-"+e),t.classList.add("planets-opacity"),t.classList.add("scrolling"),setTimeout((function(){t.classList.remove("planets-opacity")}),700),setTimeout((function(){t.classList.remove("scrolling"),r=!0}),1300),t.setAttribute("data-prev-planet",e))}function l(t){var e=document.querySelector("#"+t+"Info .nft-skeleton");e&&(4===e.readyState?e.paused&&e.play():e.load())}function d(t){var e=document.querySelector("#"+t+"Info .nft-skeleton");e&&setTimeout((function(){e.pause(),e.currentTime=0}),500)}c.forEach((function(t){return t.addEventListener("click",s)})),document.querySelector(".sun video").load(),console.log("sun is loading");var m=Array.from(document.querySelectorAll("video")).map((function(t){return{element:t,state:"needLoading"}}));console.log(m),m.forEach((function(t){"needLoading"===t.state&&t.element.addEventListener("canplaythrough",(function e(){console.log(t.element,"is playing"),t.element.play(),t.element.removeEventListener("canplaythrough",e),t.state="loaded",console.log("changedState",m)}))}));var p=document.querySelector(".planets-canvas .moon"),f=performance.now(),v=0;requestAnimationFrame((function t(e){e-f>=10&&o&&(v+=.35,p.style.cssText="\n      transform: rotate(".concat(v,"deg) translateX(5em) rotate(").concat(-1*v,"deg);\n      transition: transform .15s linear;\n    "),f=performance.now()),o||setTimeout((function(){p.style.cssText="\n        transform: rotate(".concat(v,"deg) translateX(0em) rotate(").concat(-1*v,"deg);\n      ")}),600),requestAnimationFrame(t)}));var y=document.querySelector(".custom-switch input[data-switch-content]");y&&y.addEventListener("click",(function(){var t=document.querySelectorAll(this.getAttribute("data-switch-content"));this.checked?t.forEach((function(t){t.classList.add("switch-checked")})):t.forEach((function(t){t.classList.remove("switch-checked")}))}));var b=document.querySelectorAll("[data-open-popup]"),h=document.querySelector(".popup-background"),L=document.querySelectorAll("[data-close-popup]");b&&b.forEach((function(t){return t.addEventListener("click",(function(){var e=document.querySelector("#"+t.getAttribute("data-open-popup")),o=document.querySelectorAll("header .btn.mobile-only");e.style.display="block",h.style.display="block",setTimeout((function(){e.classList.add("show"),h.classList.add("show"),o.forEach((function(e){e.classList.remove("show"),e.setAttribute("data-active","second"),e.getAttribute("data-close-popup")===t.getAttribute("data-open-popup")&&(e.classList.add("show"),e.setAttribute("data-active",!0))}))}),10)}))})),L&&L.forEach((function(t){return t.addEventListener("click",(function(){var e=document.querySelector("#"+t.getAttribute("data-close-popup")),o=t.getAttribute("data-delete-bg");"false"!==o&&h.classList.remove("show"),setTimeout((function(){e.style.display="","false"!==o&&(h.style.display="")}),300);var a=document.querySelectorAll("header .btn.mobile-only"),n=document.querySelector('[data-close-popup="'.concat(this.getAttribute("data-close-popup"),'"]'));e.classList.remove("show"),n.setAttribute("data-active",!1),n.classList.remove("show"),setTimeout((function(){a.forEach((function(t){"second"===t.getAttribute("data-active")&&(t.classList.add("show"),t.setAttribute("data-active",!0))}))}),200)}))}));var S=document.querySelectorAll("[data-open-transaction-popup]");function g(){var t=document.querySelector("#"+this.getAttribute("data-open-transaction-popup")),e=document.querySelector("#transactionLoaderPopup");e.style.display="block",h.style.display="block",setTimeout((function(){e.classList.add("show"),h.classList.add("show"),setTimeout((function(){e.classList.remove("show"),t.style.display="block",setTimeout((function(){e.style.display="",t.classList.add("show")}),10)}),4e3)}),10)}S&&S.forEach((function(t){t.addEventListener("click",g)})),document.querySelectorAll("[data-buy]").forEach((function(t){t.addEventListener("click",(function(){var e=document.querySelector(t.getAttribute("data-buy"));e.classList.add("sold"),e.style.animation="sold .4s ease-out",setTimeout((function(){e.style.animation=""}),400)}))}))}))}]);