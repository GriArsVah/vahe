'use strict';
/* js code here */

window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator)
    try {
      const e = await navigator.serviceWorker.register("https://vahe.ga/projects/st47pet/sw.js");
      console.log("Service worker register success example", e);
    } catch (e) {
      console.log("Service worker register fail");
    }
});

(function () {
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()