import{T as m}from"./index-780ad2c9.js";var i={exports:{}};(function(a,l){function s(){var e=document.querySelector("[data-toggle-theme]");(function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.classList.add(e.getAttribute("data-act-class"))}))})(),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(t=>{t.addEventListener("click",function(){var o=t.getAttribute("data-toggle-theme");if(o){var c=o.split(",");document.documentElement.getAttribute("data-theme")==c[0]?c.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",c[1]),localStorage.setItem("theme",c[1])):(document.documentElement.setAttribute("data-theme",c[0]),localStorage.setItem("theme",c[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(d=>{d.classList.toggle(this.getAttribute("data-act-class"))})})})}function r(){(function(e=localStorage.getItem("theme")){if(e!=null&&e!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",e);var t=document.querySelector("[data-set-theme='"+e.toString()+"']");t&&([...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class")))}else{var t=document.querySelector("[data-set-theme='']");t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(e=>{e.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(t=>{t.classList.remove(t.getAttribute("data-act-class"))}),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))})})}function n(){(function(e=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",e);var t=document.querySelector("select[data-choose-theme] [value='"+e.toString()+"']");t&&[...document.querySelectorAll("select[data-choose-theme] [value='"+e.toString()+"']")].forEach(o=>{o.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(e=>{e.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(t=>{t.selected=!0})})})}function u(e=!0){e===!0?document.addEventListener("DOMContentLoaded",function(t){s(),n(),r()}):(s(),n(),r())}a.exports={themeChange:u}})(i);const g=()=>{const a=m("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},f={subscribe(a){return g().page.subscribe(a)}};export{f as p,i as t};
