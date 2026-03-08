
async function initFirebaseStatus() {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.bottom = "10px";
  el.style.right = "10px";
  el.style.padding = "8px 12px";
  el.style.background = "#111";
  el.style.color = "#fff";
  el.style.fontSize = "12px";
  el.style.borderRadius = "6px";
  el.style.zIndex = "9999";
  el.innerText = "Firebase: comprobando...";
  document.body.appendChild(el);

  try {
    const res = await fetch("./firebaseConfig.json");
    const cfg = await res.json();

    if (!cfg.apiKey || cfg.apiKey === "PON_AQUI_APIKEY") {
      el.innerText = "Firebase NO configurado";
      return;
    }

    el.innerText = "Firebase conectado (config detectada)";
  } catch(e) {
    el.innerText = "Firebase error";
  }
}

window.addEventListener("load", initFirebaseStatus);
