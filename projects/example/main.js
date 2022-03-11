window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator)
    try {
      const e = await navigator.serviceWorker.register("https://vahe.ga/projects/example/sw.js");
      console.log("Service worker register success example", e);
    } catch (e) {
      console.log("Service worker register fail");
    }
});
