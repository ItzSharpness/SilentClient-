console.log("Script chargé")// Création de l'interface principale avec thème bleu/noir
const clientUI = document.createElement("div");
clientUI.style.position = "fixed";
clientUI.style.top = "10px";
clientUI.style.left = "50%";
clientUI.style.transform = "translateX(-50%)";
clientUI.style.width = "250px";
clientUI.style.background = "rgba(0, 0, 30, 0.9)"; // Thème bleu/noir
clientUI.style.color = "white";
clientUI.style.padding = "15px";
clientUI.style.borderRadius = "10px";
clientUI.style.display = "none"; // Masqué par défaut
document.body.appendChild(clientUI);

// Ajout du titre "Silent Client"
const title = document.createElement("h2");
title.innerText = "Silent Client";
title.style.textAlign = "center";
title.style.fontFamily = "Arial, sans-serif";
title.style.color = "#1E90FF"; // Bleu
clientUI.appendChild(title);

// Ajout du compteur FPS
const fpsCounter = document.createElement("div");
fpsCounter.innerText = "FPS: 0";
fpsCounter.style.textAlign = "center";
clientUI.appendChild(fpsCounter);

// Ajout du compteur CPS
let cps = 0;
const cpsCounter = document.createElement("div");
cpsCounter.innerText = "CPS: 0";
cpsCounter.style.textAlign = "center";
clientUI.appendChild(cpsCounter);

// Bouton de fermeture de l'UI
const closeButton = document.createElement("button");
closeButton.innerText = "Fermer";
closeButton.style.width = "100%";
closeButton.style.marginTop = "10px";
closeButton.style.backgroundColor = "#FF6347"; // Rouge pour le bouton
closeButton.style.borderRadius = "5px";
closeButton.style.color = "white";
closeButton.onclick = () => {
    clientUI.style.display = "none";
};
clientUI.appendChild(closeButton);

// Ajout de la promotion YouTube
const ytPromo = document.createElement("div");
ytPromo.innerText = "YT channel : ItzSharpness";
ytPromo.style.textAlign = "center";
ytPromo.style.marginTop = "10px";
ytPromo.style.color = "#FF6347"; // Rouge pour la promotion
clientUI.appendChild(ytPromo);

// **Bouton ⚙️ centré en haut**
const settingsButton = document.createElement("button");
settingsButton.innerText = "⚙️";
settingsButton.style.position = "fixed";
settingsButton.style.top = "10px"; // Placé en haut
settingsButton.style.left = "50%"; // Centré horizontalement
settingsButton.style.transform = "translateX(-50%)";
settingsButton.style.fontSize = "20px";
settingsButton.style.backgroundColor = "#1E90FF"; // Bleu pour le bouton
settingsButton.style.borderRadius = "5px";
settingsButton.style.color = "white";
settingsButton.onclick = () => {
    clientUI.style.display = clientUI.style.display === "none" ? "block" : "none";
};
document.body.appendChild(settingsButton);

// Pointeur en forme de croix
const crosshair = document.createElement("div");
crosshair.style.position = "fixed";
crosshair.style.top = "50%";
crosshair.style.left = "50%";
crosshair.style.width = "20px";
crosshair.style.height = "20px";
crosshair.style.background = "red";
crosshair.style.transform = "translate(-50%, -50%)";
document.body.appendChild(crosshair);

// Animation du pointeur au clic
document.addEventListener("mousedown", () => {
    crosshair.style.width = "10px";
    crosshair.style.height = "10px";
    cps++;
    cpsCounter.innerText = `CPS: ${cps}`;
    setTimeout(() => {
        crosshair.style.width = "20px";
        crosshair.style.height = "20px";
    }, 200);
});

// Réinitialisation du CPS chaque seconde
setInterval(() => {
    cps = 0;
    cpsCounter.innerText = "CPS: 0";
}, 1000);

// Calcul des FPS
let lastLoop = performance.now();
let fps = 0;
setInterval(() => {
    const now = performance.now();
    fps = Math.round(1000 / (now - lastLoop));
    lastLoop = now;
    fpsCounter.innerText = `FPS: ${fps}`;
}, 1000);
  
