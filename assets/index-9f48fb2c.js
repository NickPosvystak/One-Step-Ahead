(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",r),c.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(t){for(var c=this,r=(c.document||c.ownerDocument).querySelectorAll(t),e=0;r[e]&&r[e]!==c;)++e;return Boolean(r[e])}),typeof o.closest!="function"&&(o.closest=function(t){for(var c=this;c&&c.nodeType===1;){if(c.matches(t))return c;c=c.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");o.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+n+'"]');l.classList.add("active"),t.classList.add("active")})}),c.forEach(function(r){r.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
