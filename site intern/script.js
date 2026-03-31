// ===== DRAG FENÊTRE =====
const win = document.getElementById("mainWindow");

if (win) {
    const titleBar = win.querySelector(".title-bar");

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            win.style.left = (e.clientX - offsetX) + "px";
            win.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}


// ===== OUVRIR FENÊTRE =====
function openWindow(type) {
    const win = document.getElementById("mainWindow");
    const content = document.getElementById("window-content");
    const title = document.getElementById("window-title");

    win.style.display = "block";

// ===== CHARGER LE CODE DEPUIS UN .TXT =====
if (type === "code2") {
    title.textContent = "explication.txt";
    content.innerHTML = "<pre id='codeDisplay'>Chargement du fichier...</pre>";

    // Remplace 'ton_fichier.txt' par le nom exact de ton fichier
    fetch('ton_fichier.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("codeDisplay").innerText = data;
        })
        .catch(err => {
            document.getElementById("codeDisplay").innerText = "Erreur de chargement : " + err;
        });
}
if (type === "code") {
    title.textContent = "NainJaune.txt";
    content.innerHTML = "<pre id='codeDisplay'>Chargement du fichier...</pre>";

    // Remplace 'ton_fichier.txt' par le nom exact de ton fichier
    fetch('ton_fichier.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("codeDisplay").innerText = data;
        })
        .catch(err => {
            document.getElementById("codeDisplay").innerText = "Erreur de chargement : " + err;
        });
}
    // ===== IMAGE =====
    if (type === "img1") {
        title.textContent = "Plateau";

        content.innerHTML = `
            <img src="images/plateau.png" style="max-width:100%;">
        `;
    }
    if (type === "img2") {
        title.textContent = "mise";

        content.innerHTML = `
            <img src="images/mise.png" style="max-width:100%;">
        `;
    }    
    if (type === "img3") {
        title.textContent = "bienvenu";

        content.innerHTML = `
            <img src="images/bienvenu.png" style="max-width:100%;">
        `;
    }    
    if (type === "img4") {
        title.textContent = "jeton";

        content.innerHTML = `
            <img src="images/jeton.png" style="max-width:100%;">
        `;
    }    
    // ===== MUSIQUE =====
    if (type === "music1") {
        title.textContent = "Musique";

        content.innerHTML = `
            <audio controls>
                <source src="music/song1.mp3" type="audio/mpeg">
            </audio>
        `;
    }
    if (type === "music2") {
        title.textContent = "Musique_2";

        content.innerHTML = `
            <audio controls>
                <source src="music/song2.mp3" type="audio/mpeg">
            </audio>
        `;
    }
}


// ===== FERMER =====
function closeWindow() {
    document.getElementById("mainWindow").style.display = "none";
}